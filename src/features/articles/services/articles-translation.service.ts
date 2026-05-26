import { Prisma } from "@/generated/prisma/client";
import type { LanguageCode } from "@/features/languages/config/languages";
import {
  collectArticleEntries,
  collectBlockEntries,
  getTranslatableBlockSignature,
  getTranslationStatusAfterSync,
  mergeTranslatedBlocks,
  type TranslationResponse,
} from "../model/article-translation-workflow";
import { normalizeArticleBlocks } from "../model/article-blocks";
import {
  getArticleById,
  getArticleByTranslationGroupAndLocale,
  upsertArticleTranslation,
} from "./articles.services";

const OPENAI_RESPONSES_URL = "https://openrouter.ai/api/v1/chat/completions";

function requireOpenAiApiKey() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing. Add it to your environment before translating articles.");
  }
  return apiKey;
}

function getTranslationModel() {
  return process.env.OPENAI_TRANSLATION_MODEL || "meta-llama/llama-3.3-70b-instruct:free";
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || `article-${Date.now()}`;
}

function getResponseText(payload: Record<string, unknown>) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text;
  }

  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    if (!item || typeof item !== "object") continue;
    const content = Array.isArray((item as { content?: unknown[] }).content)
      ? (item as { content: unknown[] }).content
      : [];

    for (const contentItem of content) {
      if (!contentItem || typeof contentItem !== "object") continue;
      const maybeText = contentItem as {
        type?: string;
        text?: string;
        refusal?: string;
      };

      if (maybeText.type === "refusal") {
        throw new Error(maybeText.refusal || "The model refused the translation request.");
      }

      if (maybeText.type === "output_text" && typeof maybeText.text === "string") {
        return maybeText.text;
      }
    }
  }

  throw new Error("OpenAI response did not include translatable text output.");
}

async function translateEntriesWithGpt(params: {
  sourceLocale: string;
  sourceSlug: string;
  targetLocale: LanguageCode;
  entries: Array<{
    key: string;
    text: string;
    context: string;
  }>;
}) {
  const apiKey = requireOpenAiApiKey();

  const estimatedSize = JSON.stringify(params.entries).length / 1024;

  console.log("========== TRANSLATION REQUEST ==========");
  console.log("Entries count:", params.entries.length);
  console.log("Payload size:", `${estimatedSize.toFixed(2)} KB`);
  console.log(
    "Estimated chars:",
    params.entries.reduce((acc, entry) => acc + entry.text.length, 0),
  );
  console.log("=========================================");

  let response: Response | null = null;

  for (let attempt = 0; attempt < 4; attempt++) {
    response = await fetch(OPENAI_RESPONSES_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "ISOLELE CMS",
      },
      body: JSON.stringify({
        model: getTranslationModel(),
        reasoning: { effort: "low" },
        messages: [
          {
            role: "developer",
            content:
              "You are a professional editorial translator. Translate English article content into the requested target language. Preserve paragraph breaks, tone, and factual meaning. Do not invent new content. Keep URLs, identifiers, and proper nouns unchanged unless they have a standard localized form. Return only valid JSON matching the schema.",
          },
          {
            role: "user",
            content: JSON.stringify({
              sourceLocale: params.sourceLocale,
              targetLocale: params.targetLocale,
              sourceSlug: params.sourceSlug,
              entries: params.entries,
              instructions: [
                "Translate every entry.text value into the target locale.",
                "Keep the same key values unchanged.",
                "Return a localized slug in lowercase kebab-case suitable for a public URL.",
                "The slug must not include a leading slash.",
              ],
            }),
          },
        ],
        response_format: {
          
            type: "json_object",
            name: "article_translation_payload",
            schema: {
              type: "object",
              properties: {
                slug: {
                  type: "string",
                },
                translations: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      key: { type: "string" },
                      text: { type: "string" },
                    },
                    required: ["key", "text"],
                    additionalProperties: false,
                  },
                },
              },
              required: ["slug", "translations"],
              additionalProperties: false,
            },
            strict: true,
          },
        },
      ),
    });

    if (response.ok) {
      break;
    }

    const errorText = await response.text();

    console.error(
      `Translation attempt ${attempt + 1} failed:`,
      response.status,
      errorText,
    );

    if (response.status !== 429 && response.status < 500) {
      throw new Error(errorText);
    }

    const delay = 2000 * (attempt + 1);

    console.log(`Retrying in ${delay}ms...`);

    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  if (!response) {
    throw new Error("Translation failed after multiple retries.");
  }

  if (!response.ok) {
    throw new Error(`OpenAI translation failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as Record<string, unknown>;
  const text = getResponseText(payload);
  return JSON.parse(text) as TranslationResponse;
}

export async function translateArticle(articleId: string, targetLocale: LanguageCode) {
  const sourceArticle = await getArticleById(articleId);
  if (!sourceArticle) {
    throw new Error("Source article was not found.");
  }

  const existingTranslation = await getArticleByTranslationGroupAndLocale(
    sourceArticle.translationGroupId,
    targetLocale,
  );

  const sourceBlocks = normalizeArticleBlocks(sourceArticle.blocksJson);
  const existingBlocks = existingTranslation
    ? normalizeArticleBlocks(existingTranslation.blocksJson)
    : [];
  const existingByKey = new Map(existingBlocks.map((block) => [block.translationKey, block]));

  const changedBlockKeys = new Set<string>();
  const staleManualBlocks: string[] = [];

  sourceBlocks.forEach((block) => {
    const sourceFingerprint = getTranslatableBlockSignature(block);
    const currentTranslationBlock = existingByKey.get(block.translationKey);

    if (!currentTranslationBlock) {
      changedBlockKeys.add(block.translationKey);
      return;
    }

    if ((currentTranslationBlock.sourceFingerprint ?? null) !== sourceFingerprint) {
      if (currentTranslationBlock.manuallyEdited) {
        staleManualBlocks.push(block.translationKey);
      } else {
        changedBlockKeys.add(block.translationKey);
      }
    }
  });

  const shouldRetranslateArticleMeta =
    !existingTranslation ||
    existingTranslation.translatedFromVersion !== sourceArticle.sourceVersion ||
    existingTranslation.translationStatus === "NEEDS_REVIEW";

  const entries = [
    ...(shouldRetranslateArticleMeta ? collectArticleEntries(sourceArticle) : []),
    ...collectBlockEntries(sourceBlocks, changedBlockKeys),
  ];

  if (!existingTranslation && entries.length === 0) {
    throw new Error("There is no translatable content in this article yet.");
  }

  const translatedPayload =
    entries.length > 0
      ? await translateEntriesWithGpt({
          sourceLocale: sourceArticle.locale,
          sourceSlug: sourceArticle.slug,
          targetLocale,
          entries,
        })
      : ({
          slug: existingTranslation?.slug ?? sourceArticle.slug,
          translations: [],
        } satisfies TranslationResponse);

  const translatedMap = new Map(
    translatedPayload.translations.map((entry) => [entry.key, entry.text]),
  );

  const translatedBlocks = mergeTranslatedBlocks({
    sourceBlocks,
    existingTranslationBlocks: existingBlocks,
    translatedMap,
  });

  const nextSlug = slugify(
    translatedPayload.slug ||
      translatedMap.get("article:title") ||
      existingTranslation?.slug ||
      sourceArticle.slug,
  );

  const hasPendingManualReview = staleManualBlocks.length > 0;
  const isNewTranslation = !existingTranslation;

  return upsertArticleTranslation({
    existingTranslationId: existingTranslation?.id,
    translationGroupId: sourceArticle.translationGroupId,
    locale: targetLocale,
    slug: nextSlug,
    title:
      translatedMap.get("article:title") ??
      existingTranslation?.title ??
      sourceArticle.title,
    excerpt:
      translatedMap.get("article:excerpt") ??
      existingTranslation?.excerpt ??
      sourceArticle.excerpt,
    coverImage: sourceArticle.coverImage,
    seoTitle:
      translatedMap.get("article:seoTitle") ??
      existingTranslation?.seoTitle ??
      sourceArticle.seoTitle,
    seoDescription:
      translatedMap.get("article:seoDescription") ??
      existingTranslation?.seoDescription ??
      sourceArticle.seoDescription,
    blocksJson: translatedBlocks as Prisma.InputJsonValue,
    sourceVersion: sourceArticle.sourceVersion,
    translatedFromVersion: hasPendingManualReview
      ? existingTranslation?.translatedFromVersion ?? sourceArticle.sourceVersion
      : sourceArticle.sourceVersion,
    translationStatus: getTranslationStatusAfterSync({
      isNewTranslation,
      hasPendingManualReview,
    }),
  });
}
