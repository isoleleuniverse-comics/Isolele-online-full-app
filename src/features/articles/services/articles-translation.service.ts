import { Prisma } from "@/generated/prisma/client";
import type { SupportedLocale } from "@/shared/i18n/locales";
import {
  normalizeArticleBlocks,
  type ArticleBlock,
} from "../model/article-blocks";
import {
  getArticleById,
  getArticleByTranslationGroupAndLocale,
  upsertArticleTranslation,
} from "./articles.services";

type TranslationEntry = {
  key: string;
  text: string;
  context: string;
};

type TranslationResponse = {
  slug: string;
  translations: Array<{
    key: string;
    text: string;
  }>;
};

const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const SOURCE_LOCALE: SupportedLocale = "en";

function requireOpenAiApiKey() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing. Add it to your environment before translating articles.");
  }
  return apiKey;
}

function getTranslationModel() {
  return process.env.OPENAI_TRANSLATION_MODEL || "gpt-5";
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

function collectBlockEntries(blocks: ArticleBlock[]) {
  const entries: TranslationEntry[] = [];

  blocks.forEach((block) => {
    if (block.type === "heading" || block.type === "paragraph" || block.type === "quote") {
      if (block.text.trim()) {
        entries.push({
          key: `block:${block.id}:text`,
          text: block.text,
          context: `${block.type} text`,
        });
      }
    }

    if (block.type === "image") {
      if (block.alt?.trim()) {
        entries.push({
          key: `block:${block.id}:alt`,
          text: block.alt,
          context: "image alt text",
        });
      }

      if (block.caption?.trim()) {
        entries.push({
          key: `block:${block.id}:caption`,
          text: block.caption,
          context: "image caption",
        });
      }
    }

    if (block.type === "cta") {
      if (block.title.trim()) {
        entries.push({
          key: `block:${block.id}:title`,
          text: block.title,
          context: "call to action title",
        });
      }

      if (block.description?.trim()) {
        entries.push({
          key: `block:${block.id}:description`,
          text: block.description,
          context: "call to action description",
        });
      }

      if (block.buttonLabel.trim()) {
        entries.push({
          key: `block:${block.id}:buttonLabel`,
          text: block.buttonLabel,
          context: "call to action button label",
        });
      }
    }

    if (block.type === "video" && block.title?.trim()) {
      entries.push({
        key: `block:${block.id}:title`,
        text: block.title,
        context: "video title",
      });
    }
  });

  return entries;
}

function collectArticleEntries(article: {
  title: string;
  excerpt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
}) {
  const entries: TranslationEntry[] = [
    {
      key: "article:title",
      text: article.title,
      context: "article title",
    },
  ];

  if (article.excerpt?.trim()) {
    entries.push({
      key: "article:excerpt",
      text: article.excerpt,
      context: "article excerpt",
    });
  }

  if (article.seoTitle?.trim()) {
    entries.push({
      key: "article:seoTitle",
      text: article.seoTitle,
      context: "SEO title",
    });
  }

  if (article.seoDescription?.trim()) {
    entries.push({
      key: "article:seoDescription",
      text: article.seoDescription,
      context: "SEO description",
    });
  }

  return entries;
}

function applyTranslatedText(block: ArticleBlock, translated: Map<string, string>): ArticleBlock {
  if (block.type === "heading" || block.type === "paragraph" || block.type === "quote") {
    return {
      ...block,
      text: translated.get(`block:${block.id}:text`) ?? block.text,
    };
  }

  if (block.type === "image") {
    return {
      ...block,
      alt: translated.get(`block:${block.id}:alt`) ?? block.alt,
      caption: translated.get(`block:${block.id}:caption`) ?? block.caption,
    };
  }

  if (block.type === "cta") {
    return {
      ...block,
      title: translated.get(`block:${block.id}:title`) ?? block.title,
      description: translated.get(`block:${block.id}:description`) ?? block.description,
      buttonLabel: translated.get(`block:${block.id}:buttonLabel`) ?? block.buttonLabel,
    };
  }

  if (block.type === "video") {
    return {
      ...block,
      title: translated.get(`block:${block.id}:title`) ?? block.title,
    };
  }

  return block;
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
  sourceSlug: string;
  targetLocale: SupportedLocale;
  entries: TranslationEntry[];
}) {
  const apiKey = requireOpenAiApiKey();
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: getTranslationModel(),
      reasoning: { effort: "low" },
      input: [
        {
          role: "developer",
          content:
            "You are a professional editorial translator. Translate English article content into the requested target language. Preserve paragraph breaks, tone, and factual meaning. Do not invent new content. Keep URLs, identifiers, and proper nouns unchanged unless they have a standard localized form. Return only valid JSON matching the schema.",
        },
        {
          role: "user",
          content: JSON.stringify({
            sourceLocale: SOURCE_LOCALE,
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
      text: {
        format: {
          type: "json_schema",
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
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI translation failed with status ${response.status}.`);
  }

  const payload = await response.json() as Record<string, unknown>;
  const text = getResponseText(payload);
  return JSON.parse(text) as TranslationResponse;
}

export async function translateArticleFromEnglish(
  articleId: string,
  targetLocale: SupportedLocale,
) {
  if (targetLocale === SOURCE_LOCALE) {
    throw new Error("Target locale must be different from the English source locale.");
  }

  const sourceArticle = await getArticleById(articleId);
  if (!sourceArticle) {
    throw new Error("Source article was not found.");
  }

  if (sourceArticle.locale !== SOURCE_LOCALE) {
    throw new Error("Only English source articles can be translated in this first version.");
  }

  const blocks = normalizeArticleBlocks(sourceArticle.blocksJson);
  const entries = [
    ...collectArticleEntries(sourceArticle),
    ...collectBlockEntries(blocks),
  ];

  if (entries.length === 0) {
    throw new Error("There is no translatable content in this article yet.");
  }

  const translatedPayload = await translateEntriesWithGpt({
    sourceSlug: sourceArticle.slug,
    targetLocale,
    entries,
  });

  const translatedMap = new Map(
    translatedPayload.translations.map((entry) => [entry.key, entry.text]),
  );

  const translatedBlocks = blocks.map((block) =>
    applyTranslatedText(block, translatedMap),
  );

  const existingTranslation = await getArticleByTranslationGroupAndLocale(
    sourceArticle.translationGroupId,
    targetLocale,
  );

  const nextSlug = slugify(translatedPayload.slug || translatedMap.get("article:title") || sourceArticle.slug);

  return upsertArticleTranslation({
    existingTranslationId: existingTranslation?.id,
    translationGroupId: sourceArticle.translationGroupId,
    locale: targetLocale,
    slug: nextSlug,
    title: translatedMap.get("article:title") ?? sourceArticle.title,
    excerpt: translatedMap.get("article:excerpt") ?? sourceArticle.excerpt,
    coverImage: sourceArticle.coverImage,
    seoTitle: translatedMap.get("article:seoTitle") ?? sourceArticle.seoTitle,
    seoDescription:
      translatedMap.get("article:seoDescription") ?? sourceArticle.seoDescription,
    blocksJson: translatedBlocks as Prisma.InputJsonValue,
  });
}
