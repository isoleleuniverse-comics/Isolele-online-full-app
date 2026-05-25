import {
  getDefaultLanguage,
  getEnabledLanguages,
  type LanguageCode,
} from "../../languages/config/languages.ts";
import type { ArticleBlock } from "./article-blocks.ts";
import { createArticleBlock, normalizeArticleBlocks } from "./article-blocks.ts";

export type TranslationStatusValue =
  | "draft"
  | "translated"
  | "reviewing"
  | "up_to_date"
  | "needs_update";

export type TranslationStatusRecord =
  | "DRAFT"
  | "TRANSLATED"
  | "REVIEWING"
  | "UP_TO_DATE"
  | "NEEDS_UPDATE";

export type TranslationEntry = {
  key: string;
  text: string;
  context: string;
};

export type TranslationResponse = {
  slug: string;
  translations: Array<{
    key: string;
    text: string;
  }>;
};

export type TranslationArticleLike = {
  locale: string;
  title: string;
  excerpt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  blocksJson: unknown;
  sourceVersion: number;
  translatedFromVersion: number | null;
  translationStatus: TranslationStatusRecord;
};

export type TranslationPlan = {
  entries: TranslationEntry[];
  blocks: ArticleBlock[];
  staleManualBlocks: string[];
  hasStructuralChanges: boolean;
};

export type BlockTranslationPlan = {
  changedKeys: Set<string>;
  staleManualBlocks: string[];
  hasStructuralChanges: boolean;
};

export type TranslationLocaleSummary = {
  locale: LanguageCode;
  articleId: string | null;
  status: TranslationStatusRecord | "MISSING";
  isMissing: boolean;
  isSource: boolean;
};

export const SOURCE_LOCALE: LanguageCode = getDefaultLanguage().code;

function getBlockKey(block: Pick<ArticleBlock, "id" | "translationKey">) {
  return block.translationKey ?? `legacy-${block.id}`;
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).sort(([a], [b]) =>
      a.localeCompare(b),
    );
    return `{${entries
      .map(([key, item]) => `${JSON.stringify(key)}:${stableStringify(item)}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function cloneBlockForTranslation(sourceBlock: ArticleBlock, existingBlock?: ArticleBlock): ArticleBlock {
  const sourceKey = getBlockKey(sourceBlock);
  if (existingBlock) {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  const created = createArticleBlock(sourceBlock.type);
  return {
    ...sourceBlock,
    id: created.id,
    translationKey: sourceKey,
    manuallyEdited: undefined,
    sourceFingerprint: undefined,
  };
}

function preserveExistingTranslatedText(sourceBlock: ArticleBlock, existingBlock: ArticleBlock): ArticleBlock {
  if (sourceBlock.type === "heading" && existingBlock.type === "heading") {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      text: existingBlock.text,
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  if (sourceBlock.type === "paragraph" && existingBlock.type === "paragraph") {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      text: existingBlock.text,
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  if (sourceBlock.type === "quote" && existingBlock.type === "quote") {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      text: existingBlock.text,
      author: existingBlock.author,
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  if (sourceBlock.type === "image" && existingBlock.type === "image") {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      alt: existingBlock.alt,
      caption: existingBlock.caption,
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  if (sourceBlock.type === "video" && existingBlock.type === "video") {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      title: existingBlock.title,
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  if (sourceBlock.type === "cta" && existingBlock.type === "cta") {
    return {
      ...sourceBlock,
      id: existingBlock.id,
      translationKey: getBlockKey(existingBlock),
      title: existingBlock.title,
      description: existingBlock.description,
      buttonLabel: existingBlock.buttonLabel,
      manuallyEdited: existingBlock.manuallyEdited,
      sourceFingerprint: existingBlock.sourceFingerprint,
    };
  }

  return cloneBlockForTranslation(sourceBlock, existingBlock);
}

function hasTranslatedEntryForBlock(translated: Map<string, string>, blockKey: string) {
  const prefix = `block:${blockKey}:`;
  for (const key of translated.keys()) {
    if (key.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}

export function getTranslationStatusLabel(status: TranslationStatusRecord): TranslationStatusValue {
  if (status === "DRAFT") return "draft";
  if (status === "TRANSLATED") return "translated";
  if (status === "REVIEWING") return "reviewing";
  if (status === "UP_TO_DATE") return "up_to_date";
  return "needs_update";
}

export function getTranslationStatusAfterSync(params: {
  isNewTranslation: boolean;
  hasPendingManualReview: boolean;
}): TranslationStatusRecord {
  if (params.isNewTranslation) return "TRANSLATED";
  if (params.hasPendingManualReview) return "REVIEWING";
  return "UP_TO_DATE";
}

export function getTranslationStatusAfterManualEdit(params: {
  articleLocale: string;
  sourceLocale: string;
  currentStatus: TranslationStatusRecord;
}) {
  if (params.articleLocale === params.sourceLocale) {
    return params.currentStatus;
  }
  return "REVIEWING" satisfies TranslationStatusRecord;
}

export function getTranslationStatusAfterSourceUpdate(params: {
  articleLocale: string;
  sourceLocale: string;
}) {
  if (params.articleLocale === params.sourceLocale) {
    return "UP_TO_DATE" satisfies TranslationStatusRecord;
  }
  return "NEEDS_UPDATE" satisfies TranslationStatusRecord;
}

export function getTranslatableBlockSignature(block: ArticleBlock): string | null {
  if (block.type === "heading") {
    return stableStringify({ type: block.type, text: block.text });
  }
  if (block.type === "paragraph") {
    return stableStringify({ type: block.type, text: block.text });
  }
  if (block.type === "quote") {
    return stableStringify({ type: block.type, text: block.text });
  }
  if (block.type === "image") {
    return stableStringify({ type: block.type, alt: block.alt ?? "", caption: block.caption ?? "" });
  }
  if (block.type === "video") {
    return stableStringify({ type: block.type, title: block.title ?? "" });
  }
  if (block.type === "cta") {
    return stableStringify({
      type: block.type,
      title: block.title,
      description: block.description ?? "",
      buttonLabel: block.buttonLabel,
    });
  }
  return null;
}

export function collectBlockEntries(blocks: ArticleBlock[], changedKeys?: Set<string>) {
  const entries: TranslationEntry[] = [];

  blocks.forEach((block) => {
    if (changedKeys && !changedKeys.has(getBlockKey(block))) {
      return;
    }

    if (block.type === "heading" || block.type === "paragraph" || block.type === "quote") {
      if (block.text.trim()) {
        entries.push({
          key: `block:${getBlockKey(block)}:text`,
          text: block.text,
          context: `${block.type} text`,
        });
      }
    }

    if (block.type === "image") {
      if (block.alt?.trim()) {
        entries.push({
          key: `block:${getBlockKey(block)}:alt`,
          text: block.alt,
          context: "image alt text",
        });
      }

      if (block.caption?.trim()) {
        entries.push({
          key: `block:${getBlockKey(block)}:caption`,
          text: block.caption,
          context: "image caption",
        });
      }
    }

    if (block.type === "cta") {
      if (block.title.trim()) {
        entries.push({
          key: `block:${getBlockKey(block)}:title`,
          text: block.title,
          context: "call to action title",
        });
      }

      if (block.description?.trim()) {
        entries.push({
          key: `block:${getBlockKey(block)}:description`,
          text: block.description,
          context: "call to action description",
        });
      }

      if (block.buttonLabel.trim()) {
        entries.push({
          key: `block:${getBlockKey(block)}:buttonLabel`,
          text: block.buttonLabel,
          context: "call to action button label",
        });
      }
    }

    if (block.type === "video" && block.title?.trim()) {
      entries.push({
        key: `block:${getBlockKey(block)}:title`,
        text: block.title,
        context: "video title",
      });
    }
  });

  return entries;
}

export function collectArticleEntries(article: {
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

export function applyTranslatedText(block: ArticleBlock, translated: Map<string, string>): ArticleBlock {
  if (block.type === "heading" || block.type === "paragraph" || block.type === "quote") {
    return {
      ...block,
      text: translated.get(`block:${getBlockKey(block)}:text`) ?? block.text,
    };
  }

  if (block.type === "image") {
    return {
      ...block,
      alt: translated.get(`block:${getBlockKey(block)}:alt`) ?? block.alt,
      caption: translated.get(`block:${getBlockKey(block)}:caption`) ?? block.caption,
    };
  }

  if (block.type === "cta") {
    return {
      ...block,
      title: translated.get(`block:${getBlockKey(block)}:title`) ?? block.title,
      description: translated.get(`block:${getBlockKey(block)}:description`) ?? block.description,
      buttonLabel: translated.get(`block:${getBlockKey(block)}:buttonLabel`) ?? block.buttonLabel,
    };
  }

  if (block.type === "video") {
    return {
      ...block,
      title: translated.get(`block:${getBlockKey(block)}:title`) ?? block.title,
    };
  }

  return block;
}

export function buildTranslationPlan(params: {
  sourceBlocks: ArticleBlock[];
  existingTranslationBlocks?: ArticleBlock[];
}): BlockTranslationPlan {
  const existingBlocksByKey = new Map(
    (params.existingTranslationBlocks ?? []).map((block) => [getBlockKey(block), block]),
  );
  const changedKeys = new Set<string>();
  const staleManualBlocks: string[] = [];
  let hasStructuralChanges = false;

  params.sourceBlocks.forEach((sourceBlock) => {
    const existingBlock = existingBlocksByKey.get(getBlockKey(sourceBlock));
    const nextSignature = getTranslatableBlockSignature(sourceBlock);

    if (!existingBlock) {
      changedKeys.add(getBlockKey(sourceBlock));
      hasStructuralChanges = true;
      return;
    }

    const existingSignature = existingBlock.sourceFingerprint ?? null;
    if (nextSignature !== existingSignature) {
      if (existingBlock.manuallyEdited) {
        staleManualBlocks.push(getBlockKey(sourceBlock));
      } else {
        changedKeys.add(getBlockKey(sourceBlock));
      }
    }
  });

  (params.existingTranslationBlocks ?? []).forEach((block) => {
    const stillExists = params.sourceBlocks.some((sourceBlock) => getBlockKey(sourceBlock) === getBlockKey(block));
    if (!stillExists) {
      hasStructuralChanges = true;
    }
  });

  return {
    changedKeys,
    staleManualBlocks,
    hasStructuralChanges,
  };
}

export function mergeTranslatedBlocks(params: {
  sourceBlocks: ArticleBlock[];
  existingTranslationBlocks?: ArticleBlock[];
  translatedMap: Map<string, string>;
}) {
  const existingBlocksByKey = new Map(
    (params.existingTranslationBlocks ?? []).map((block) => [getBlockKey(block), block]),
  );
  const mergedKeys = new Set<string>();

  const blocks: ArticleBlock[] = params.sourceBlocks.map((sourceBlock) => {
    const sourceKey = getBlockKey(sourceBlock);
    const existingBlock = existingBlocksByKey.get(sourceKey);
    mergedKeys.add(sourceKey);

    const baseBlock = existingBlock
      ? preserveExistingTranslatedText(sourceBlock, existingBlock)
      : cloneBlockForTranslation(sourceBlock, existingBlock);
    const translatedBlock = existingBlock?.manuallyEdited
      ? existingBlock
      : hasTranslatedEntryForBlock(params.translatedMap, sourceKey)
        ? applyTranslatedText(baseBlock, params.translatedMap)
        : baseBlock;

    return {
      ...translatedBlock,
      translationKey: sourceKey,
      sourceFingerprint: getTranslatableBlockSignature(sourceBlock) ?? undefined,
    };
  });

  (params.existingTranslationBlocks ?? []).forEach((block) => {
    const blockKey = getBlockKey(block);
    if (!mergedKeys.has(blockKey) && (block.manuallyEdited || block.type === "unsupported")) {
      blocks.push(block);
    }
  });

  return blocks;
}

export function prepareTranslationPlan(params: {
  sourceArticle: TranslationArticleLike;
  existingTranslation?: TranslationArticleLike | null;
}): TranslationPlan {
  const sourceBlocks = normalizeArticleBlocks(params.sourceArticle.blocksJson);
  const existingBlocks = params.existingTranslation
    ? normalizeArticleBlocks(params.existingTranslation.blocksJson)
    : undefined;
  const { changedKeys, staleManualBlocks, hasStructuralChanges } = buildTranslationPlan({
    sourceBlocks,
    existingTranslationBlocks: existingBlocks,
  });

  const entries = [
    ...collectArticleEntries(params.sourceArticle),
    ...collectBlockEntries(sourceBlocks, changedKeys),
  ];

  return {
    entries,
    blocks: sourceBlocks,
    staleManualBlocks,
    hasStructuralChanges,
  };
}

export function buildTranslationLocaleSummaries(params: {
  locales?: readonly LanguageCode[];
  sourceLocale: string;
  translations: Array<{ id: string; locale: string; translationStatus: TranslationStatusRecord }>;
}) {
  const locales = params.locales ?? getEnabledLanguages().map((language) => language.code);
  return locales.map((locale) => {
    const translation = params.translations.find((item) => item.locale === locale) ?? null;
    return {
      locale,
      articleId: translation?.id ?? null,
      status: translation?.translationStatus ?? "MISSING",
      isMissing: !translation,
      isSource: locale === params.sourceLocale,
    } satisfies TranslationLocaleSummary;
  });
}

export function resolveTranslationByLocale<T extends { translationGroupId: string; locale: string }>(params: {
  translationGroupId: string;
  targetLocale: LanguageCode;
  articles: T[];
}) {
  return (
    params.articles.find(
      (article) =>
        article.translationGroupId === params.translationGroupId &&
        article.locale === params.targetLocale,
    ) ?? null
  );
}
