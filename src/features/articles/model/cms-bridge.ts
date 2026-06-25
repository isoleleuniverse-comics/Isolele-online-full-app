import { list } from "@vercel/blob";
import { getStaticArticleBySlug, getStaticPublishedArticles } from "./articles.data";
import type { ArticleBlock } from "./article-blocks";
import type { SupportedLocale } from "@/shared/i18n/locales";

let cachedBlobBaseUrl: string | null = null;

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function parseGalleryImages(block: any) {
  const data = asRecord(block.data);

  if (Array.isArray(block.items)) return block.items;
  if (Array.isArray(block.images)) return block.images;

  try {
    const parsed = JSON.parse(asString(data.images));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function getBlobBaseUrl(): Promise<string | null> {
  if (cachedBlobBaseUrl) return cachedBlobBaseUrl;

  try {
    const { blobs } = await list({ limit: 1 , token: process.env.BLOB_READ_WRITE_TOKEN});
    const firstUrl = blobs[0]?.url;

    if (firstUrl) {
      const url = new URL(firstUrl);
      cachedBlobBaseUrl = `${url.protocol}//${url.hostname}`;
      return cachedBlobBaseUrl;
    }
  } catch {
    console.warn("Could not resolve the Vercel Blob base URL.");
  }

  return null;
}

export function mapCmsBlocksToPublic(cmsBlocks: unknown): ArticleBlock[] {
  if (!Array.isArray(cmsBlocks)) return [];

  return cmsBlocks
    .map((raw, index): ArticleBlock | null => {
      const block = asRecord(raw);
      const data = asRecord(block.data);
      const type = asString(block.type);
      const id = asString(block.id) || `${type || "block"}-${index}`;

      switch (type) {
        case "heading":
          return {
            id,
            type: "heading",
            text: asString(data.content) || asString(block.content) || asString(block.text),
          };

        case "paragraph":
        case "text":
          return {
            id,
            type: "text",
            text: asString(data.content) || asString(block.content) || asString(block.text),
          };

        case "image":
          return {
            id,
            type: "image",
            url: asString(data.src) || asString(data.url) || asString(block.url),
            alt: asString(data.alt) || asString(block.alt),
            caption: asString(data.caption) || asString(block.caption),
          };

        case "quote":
          return {
            id,
            type: "quote",
            text: asString(data.content) || asString(block.quote) || asString(block.text),
            source: asString(data.attribution) || asString(block.attribution) || asString(block.source),
          };

        case "divider":
          return { id, type: "divider" };

        case "callout":
          return {
            id,
            type: "callout",
            title: asString(data.title) || asString(block.title) || asString(block.label) || "A retenir",
            text: asString(data.content) || asString(block.content),
          };

        case "cta":
          return {
            id,
            type: "cta",
            title: asString(data.title) || asString(block.title),
            description: asString(data.description) || asString(block.description) || asString(data.content),
            buttonLabel: asString(data.buttonLabel) || asString(block.buttonLabel),
            href: asString(data.href) || asString(block.href),
          };

        case "gallery":
          return {
            id,
            type: "gallery",
            caption: asString(data.caption) || asString(block.caption) || asString(block.label),
            images: parseGalleryImages(block).map((image: any, imageIndex: number) => ({
              id: asString(image.id) || `${id}-image-${imageIndex}`,
              url: asString(image.src) || asString(image.url),
              alt: asString(image.alt),
            })),
          };

        case "video":
          return {
            id,
            type: "video",
            url: asString(data.url) || asString(block.url),
            title: asString(data.title) || asString(block.title),
          };

        case "hero":
          return index === 0
            ? null
            : {
                id,
                type: "heading",
                text: asString(data.title) || asString(data.content) || asString(block.title),
              };

        default:
          return null;
      }
    })
    .filter((block): block is ArticleBlock => block !== null);
}

export async function fetchPublishedArticles(locale: SupportedLocale): Promise<any[]> {
  const blobUrl = await getBlobBaseUrl();

  if (!blobUrl) {
    return getStaticPublishedArticles(locale);
  }

  try {
    const response = await fetch(`${blobUrl}/pub/${locale}/articles.json`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) throw new Error("Article index not found");
    const dynamicArticles = await response.json();

    if (!Array.isArray(dynamicArticles) || dynamicArticles.length === 0) {
      return getStaticPublishedArticles(locale);
    }

    return dynamicArticles.map((article: any) => ({
      ...article,
      id: article.id || article.slug,
      published: true,
      updatedAt: new Date(article.date || article.publishedAt || article.updatedAt || Date.now()),
    }));
  } catch (error) {
    console.warn("Falling back to static local articles.", error);
    return getStaticPublishedArticles(locale);
  }
}

export async function fetchArticleBySlug(
  slug: string,
  locale: SupportedLocale
): Promise<{
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  updatedAt: Date;
  blocks: unknown[];
} | null> {
  const blobUrl = await getBlobBaseUrl();

  if (!blobUrl) {
    const local = getStaticArticleBySlug(slug, locale);
    if (!local) return null;
    return {
      id: local.id,
      slug: local.slug,
      title: local.title,
      excerpt: local.excerpt,
      coverImage: local.coverImage,
      updatedAt: local.updatedAt,
      blocks: local.blocksJson,
    };
  }

  try {
    const response = await fetch(`${blobUrl}/pub/${locale}/articles/${slug}.json`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error("Article not found on Vercel Blob");
    const data = await response.json();

    return {
      id: data.id || data.slug,
      slug: data.slug || slug,
      title: data.title,
      excerpt: data.excerpt || null,
      coverImage: data.coverImage || null,
      updatedAt: new Date(data.updatedAt || data.publishedAt || Date.now()),
      blocks: Array.isArray(data.blocks) ? data.blocks : [],
    };
  } catch (error) {
    console.warn(`Dynamic article [${slug}] not found, loading static fallback.`, error);
    const local = getStaticArticleBySlug(slug, locale);
    if (!local) return null;
    return {
      id: local.id,
      slug: local.slug,
      title: local.title,
      excerpt: local.excerpt,
      coverImage: local.coverImage,
      updatedAt: local.updatedAt,
      blocks: local.blocksJson,
    };
  }
}
