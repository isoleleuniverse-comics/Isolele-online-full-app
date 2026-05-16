export type ArticleBlockType =
  | "heading"
  | "text"
  | "image"
  | "quote"
  | "video"
  | "divider"
  | "cta";

export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
};

export type HeadingBlock = ArticleBlockBase & {
  type: "heading";
  text: string;
};

export type TextBlock = ArticleBlockBase & {
  type: "text";
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
  source?: string;
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

export type ArticleBlock =
  | HeadingBlock
  | TextBlock
  | ImageBlock
  | QuoteBlock
  | VideoBlock
  | DividerBlock
  | CtaBlock;

const ARTICLE_BLOCK_TYPES: ArticleBlockType[] = [
  "heading",
  "text",
  "image",
  "quote",
  "video",
  "divider",
  "cta",
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

export function normalizeArticleBlocks(value: unknown): ArticleBlock[] {
  if (!Array.isArray(value)) return [];
  const blocks: ArticleBlock[] = [];

  value.forEach((raw, index) => {
    if (!isRecord(raw) || !isArticleBlockType(raw.type)) return;
    const id = optionalString(raw.id) || `${raw.type}-${index}`;

    if (raw.type === "heading") {
      blocks.push({ id, type: "heading", text: optionalString(raw.text) });
      return;
    }
    if (raw.type === "text") {
      blocks.push({ id, type: "text", text: optionalString(raw.text) });
      return;
    }
    if (raw.type === "image") {
      blocks.push({
        id,
        type: "image",
        url: optionalString(raw.url),
        alt: optionalString(raw.alt),
        caption: optionalString(raw.caption),
      });
      return;
    }
    if (raw.type === "quote") {
      blocks.push({ id, type: "quote", text: optionalString(raw.text), source: optionalString(raw.source) });
      return;
    }
    if (raw.type === "video") {
      blocks.push({ id, type: "video", url: optionalString(raw.url), title: optionalString(raw.title) });
      return;
    }
    if (raw.type === "cta") {
      blocks.push({
        id,
        type: "cta",
        title: optionalString(raw.title),
        description: optionalString(raw.description),
        buttonLabel: optionalString(raw.buttonLabel),
        href: optionalString(raw.href),
      });
      return;
    }

    blocks.push({ id, type: "divider" });
  });

  return blocks;
}

export function createArticleBlock(type: ArticleBlockType): ArticleBlock {
  const id = globalThis.crypto?.randomUUID?.() ?? `${type}-${Date.now()}`;

  if (type === "heading") return { id, type, text: "" };
  if (type === "text") return { id, type, text: "" };
  if (type === "image") return { id, type, url: "", alt: "", caption: "" };
  if (type === "quote") return { id, type, text: "", source: "" };
  if (type === "video") return { id, type, url: "", title: "" };
  if (type === "cta") {
    return { id, type, title: "", description: "", buttonLabel: "Read more", href: "/" };
  }

  return { id, type };
}

export function getArticlePlainText(blocks: ArticleBlock[]) {
  return blocks
    .map((block) => {
      if (block.type === "heading" || block.type === "text" || block.type === "quote") {
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
