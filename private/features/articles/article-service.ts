import { prisma } from "@private/lib/prisma";
import { createUniqueSlug, slugify } from "@private/lib/slug";
import type { ArticleBlock } from "@/features/articles/model/article-blocks";

export async function listArticles() {
  return prisma.article.findMany({
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      published: true,
      updatedAt: true,
      createdAt: true,
    },
  });
}

export async function listPublishedArticles() {
  return prisma.article.findMany({
    where: { published: true },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      updatedAt: true,
    },
  });
}

export async function createDraftArticle() {
  const title = "Untitled article";
  const slug = await createUniqueSlug(title);

  return prisma.article.create({
    data: {
      title,
      slug,
      blocksJson: [],
      published: false,
    },
  });
}

export async function getArticleById(id: string) {
  return prisma.article.findUnique({
    where: { id },
    include: { assets: { orderBy: { createdAt: "desc" } } },
  });
}

export async function getPublishedArticleBySlug(slug: string) {
  return prisma.article.findFirst({
    where: { slug, published: true },
  });
}

export async function updateArticle(id: string, input: {
  title?: string;
  slug?: string;
  excerpt?: string | null;
  coverImage?: string | null;
  blocksJson?: ArticleBlock[];
  published?: boolean;
}) {
  const data: Record<string, unknown> = {};

  if (input.title !== undefined) {
    data.title = input.title;
    if (input.slug === undefined) {
      data.slug = await createUniqueSlug(input.title, id);
    }
  }

  if (input.slug !== undefined) data.slug = await createUniqueSlug(slugify(input.slug), id);
  if (input.excerpt !== undefined) data.excerpt = input.excerpt;
  if (input.coverImage !== undefined) data.coverImage = input.coverImage;
  if (input.blocksJson !== undefined) data.blocksJson = input.blocksJson;
  if (input.published !== undefined) data.published = input.published;

  return prisma.article.update({
    where: { id },
    data,
    include: { assets: { orderBy: { createdAt: "desc" } } },
  });
}

export async function deleteArticle(id: string) {
  return prisma.article.delete({ where: { id } });
}
