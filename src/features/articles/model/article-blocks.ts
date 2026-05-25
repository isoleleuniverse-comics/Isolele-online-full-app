export type ArticleBlockType =
  | "heading"
  | "paragraph"
  | "image"
  | "quote"
  | "video"
  | "divider"
  | "cta"
  | "unsupported";

export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
  translationKey?: string;
  manuallyEdited?: boolean;
  sourceFingerprint?: string;
};

export type HeadingBlock = ArticleBlockBase & {
  type: "heading";
  text: string;
  level?: 1 | 2 | 3;
};

export type ParagraphBlock = ArticleBlockBase & {
  type: "paragraph";
  text: string;
};

export type ImageBlock = ArticleBlockBase & {
  type: "image";
  url: string;
  alt?: string;
  caption?: string;
};

export type QuoteBlock = ArticleBlockBase & {
  type: "quote";
  text: string;
  author?: string;
};

export type VideoBlock = ArticleBlockBase & {
  type: "video";
  url: string;
  title?: string;
};

export type DividerBlock = ArticleBlockBase & {
  type: "divider";
};

export type CtaBlock = ArticleBlockBase & {
  type: "cta";
  title: string;
  description?: string;
  buttonLabel: string;
  href: string;
};

export type UnsupportedBlock = ArticleBlockBase & {
  type: "unsupported";
  originalType: string;
  raw: Record<string, unknown>;
};

export type ArticleBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | QuoteBlock
  | VideoBlock
  | DividerBlock
  | CtaBlock
  | UnsupportedBlock;

const ARTICLE_BLOCK_TYPES: ArticleBlockType[] = [
  "heading",
  "paragraph",
  "image",
  "quote",
  "video",
  "divider",
  "cta",
  "unsupported",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isArticleBlockType(value: unknown): value is ArticleBlockType {
  return typeof value === "string" && ARTICLE_BLOCK_TYPES.includes(value as ArticleBlockType);
}

function optionalString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function optionalBoolean(value: unknown) {
  return typeof value === "boolean" ? value : undefined;
}

function optionalHeadingLevel(value: unknown): 1 | 2 | 3 | undefined {
  return value === 1 || value === 2 || value === 3 ? value : undefined;
}

type NormalizeResult = {
  blocks: ArticleBlock[];
  warnings: string[];
};

function createBlockToken(type: string) {
  return globalThis.crypto?.randomUUID?.() ?? `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createBlockId(type: ArticleBlockType) {
  return createBlockToken(type);
}

function createBlockTranslationKey(type: ArticleBlockType) {
  return `tk-${createBlockToken(type)}`;
}

function getLegacyTranslationKey(raw: Record<string, unknown>, fallbackId: string) {
  const rawTranslationKey = optionalString(raw.translationKey);
  if (rawTranslationKey) return rawTranslationKey;
  const rawId = optionalString(raw.id) || fallbackId;
  return `legacy-${rawId}`;
}

export function normalizeArticleBlocksDetailed(value: unknown): NormalizeResult {
  if (!Array.isArray(value)) {
    return {
      blocks: [],
      warnings: ["blocksJson must be an array"],
    };
  }

  const blocks: ArticleBlock[] = [];
  const warnings: string[] = [];

  value.forEach((raw, index) => {
    if (!isRecord(raw)) {
      warnings.push(`Block ${index + 1} is not an object and was ignored.`);
      return;
    }

    const normalizedType = raw.type === "text" ? "paragraph" : raw.type;
    const fallbackId = `block-${index}`;
    const id = optionalString(raw.id) || fallbackId;
    const translationKey = getLegacyTranslationKey(raw, fallbackId);
    const manuallyEdited = optionalBoolean(raw.manuallyEdited);
    const sourceFingerprint = optionalString(raw.sourceFingerprint) || undefined;

    if (normalizedType === "unsupported") {
      blocks.push({
        id,
        type: "unsupported",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        originalType: optionalString(raw.originalType) || "unsupported",
        raw,
      });
      warnings.push(`Block ${index + 1} uses an unsupported type and was preserved as read-only.`);
      return;
    }

    if (!isArticleBlockType(normalizedType)) {
      blocks.push({
        id,
        type: "unsupported",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        originalType: optionalString(raw.type) || "unknown",
        raw,
      });
      warnings.push(`Block ${index + 1} uses an unsupported type and was preserved as read-only.`);
      return;
    }

    if (normalizedType === "heading") {
      blocks.push({
        id,
        type: "heading",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        text: optionalString(raw.text ?? raw.content),
        level: optionalHeadingLevel(raw.level),
      });
      return;
    }
    if (normalizedType === "paragraph") {
      blocks.push({
        id,
        type: "paragraph",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        text: optionalString(raw.text ?? raw.content),
      });
      return;
    }
    if (normalizedType === "image") {
      blocks.push({
        id,
        type: "image",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        url: optionalString(raw.url),
        alt: optionalString(raw.alt),
        caption: optionalString(raw.caption),
      });
      return;
    }
    if (normalizedType === "quote") {
      blocks.push({
        id,
        type: "quote",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        text: optionalString(raw.text ?? raw.content),
        author: optionalString(raw.author ?? raw.source),
      });
      return;
    }
    if (normalizedType === "video") {
      blocks.push({
        id,
        type: "video",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        url: optionalString(raw.url),
        title: optionalString(raw.title),
      });
      return;
    }
    if (normalizedType === "cta") {
      blocks.push({
        id,
        type: "cta",
        translationKey,
        manuallyEdited,
        sourceFingerprint,
        title: optionalString(raw.title),
        description: optionalString(raw.description),
        buttonLabel: optionalString(raw.buttonLabel),
        href: optionalString(raw.href),
      });
      return;
    }

    blocks.push({
      id,
      type: "divider",
      translationKey,
      manuallyEdited,
      sourceFingerprint,
    });
  });

  return { blocks, warnings };
}

export function normalizeArticleBlocks(value: unknown): ArticleBlock[] {
  return normalizeArticleBlocksDetailed(value).blocks;
}

export function sanitizeArticleBlocks(value: unknown): NormalizeResult {
  const result = normalizeArticleBlocksDetailed(value);
  return {
    blocks: result.blocks.map((block, index) => {
      if (block.type === "unsupported") {
        return {
          id: block.id || `unsupported-${index}`,
          type: "unsupported",
          translationKey: block.translationKey || `legacy-unsupported-${index}`,
          manuallyEdited: block.manuallyEdited,
          sourceFingerprint: block.sourceFingerprint,
          originalType: block.originalType,
          raw: block.raw,
        };
      }

      return block;
    }),
    warnings: result.warnings,
  };
}

export function createArticleBlock(type: ArticleBlockType): ArticleBlock {
  const id = createBlockId(type);
  const translationKey = createBlockTranslationKey(type);

  if (type === "heading") return { id, type, translationKey, text: "", level: 2 };
  if (type === "paragraph") return { id, type, translationKey, text: "" };
  if (type === "image") return { id, type, translationKey, url: "", alt: "", caption: "" };
  if (type === "quote") return { id, type, translationKey, text: "", author: "" };
  if (type === "video") return { id, type, translationKey, url: "", title: "" };
  if (type === "cta") {
    return { id, type, translationKey, title: "", description: "", buttonLabel: "Read more", href: "/" };
  }
  if (type === "unsupported") {
    return { id, type, translationKey, originalType: "unknown", raw: {} };
  }

  return { id, type, translationKey };
}

export function duplicateArticleBlock(block: ArticleBlock): ArticleBlock {
  return {
    ...block,
    id: createBlockId(block.type),
    translationKey: createBlockTranslationKey(block.type),
    manuallyEdited: undefined,
    sourceFingerprint: undefined,
  };
}

export function getArticlePlainText(blocks: ArticleBlock[]) {
  return blocks
    .map((block) => {
      if (block.type === "heading" || block.type === "paragraph" || block.type === "quote") {
        return block.text;
      }
      if (block.type === "image") return [block.alt, block.caption].filter(Boolean).join(" ");
      if (block.type === "video") return block.title ?? "";
      if (block.type === "cta") {
        return [block.title, block.description, block.buttonLabel].filter(Boolean).join(" ");
      }
      return "";
    })
    .join(" ");
}

export function getReadingTimeMinutes(blocks: ArticleBlock[]) {
  const words = getArticlePlainText(blocks).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
