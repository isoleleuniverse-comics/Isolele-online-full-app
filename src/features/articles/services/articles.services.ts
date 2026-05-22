import { prisma } from "@/lib/prisma";
import { Prisma, type ArticleStatus } from "@/generated/prisma/client";
import { getStaticArticleBySlug, getStaticPublishedArticles } from "../model/articles.data";
import type { SupportedLocale } from "@/shared/i18n/locales";

export async function getAllArticles() {
    return prisma.article.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getPublishedArticles(locale?: string) {
    return prisma.article.findMany({
        where: {
            status: "PUBLISHED",
            ...(locale ? { locale } : {}),
        },
        orderBy: {
            publishedAt: "desc",
        },
    });
}

export async function getPublicPublishedArticles(
    locale: SupportedLocale,
) {
    const dbArticles = await getPublishedArticles(locale);
    if (dbArticles.length > 0) {
        return dbArticles;
    }
    return getStaticPublishedArticles(locale);
}

export async function getArticleById(id: string) {
    return prisma.article.findUnique({
        where: {
            id,
        },
    });
}

export async function getArticleBySlug(
    slug: string,
    locale?: string,
) {
    const article = await prisma.article.findFirst({
        where: {
            slug,
            status: "PUBLISHED",
            ...(locale ? { locale } : {}),
        },
    });
    if (!article) {
        return null;
    }
    return article;
}

export async function getPublicArticleBySlug(
    slug: string,
    locale: SupportedLocale,
) {
    const dbArticle = await getArticleBySlug(
        slug,
        locale,
    );

    if (dbArticle) {
        return dbArticle;
    }

    return getStaticArticleBySlug(
        slug,
        locale,
    );
}

export async function createArticle() {
    return prisma.article.create({
        data: {
            translationGroupId: crypto.randomUUID(),

            locale: "en",

            slug: `article-${Date.now()}`,

            title: "Nouvel article",

            blocksJson: [] as Prisma.InputJsonValue,

            status: "DRAFT",
        },
    });
}

// Update an article by its ID
type UpdateArticleInput = {
    title?: string;
    excerpt?: string;
    coverImage?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    blocksJson?: Prisma.InputJsonValue;
}

export async function updateArticle(
    id: string,
    data: UpdateArticleInput
){
    return prisma.article.update({
        where :{
            id,
        },
        data
    })
}

export async function getArticleByTranslationGroupAndLocale(
    translationGroupId: string,
    locale: string,
) {
    return prisma.article.findFirst({
        where: {
            translationGroupId,
            locale,
        },
    });
}

type UpsertArticleTranslationInput = {
    existingTranslationId?: string;
    translationGroupId: string;
    locale: string;
    slug: string;
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    seoTitle: string | null;
    seoDescription: string | null;
    blocksJson: Prisma.InputJsonValue;
}

export async function upsertArticleTranslation(
    input: UpsertArticleTranslationInput,
) {
    if (input.existingTranslationId) {
        return prisma.article.update({
            where: {
                id: input.existingTranslationId,
            },
            data: {
                slug: input.slug,
                title: input.title,
                excerpt: input.excerpt,
                coverImage: input.coverImage,
                seoTitle: input.seoTitle,
                seoDescription: input.seoDescription,
                blocksJson: input.blocksJson,
            },
        });
    }

    return prisma.article.create({
        data: {
            translationGroupId: input.translationGroupId,
            locale: input.locale,
            slug: input.slug,
            title: input.title,
            excerpt: input.excerpt,
            coverImage: input.coverImage,
            seoTitle: input.seoTitle,
            seoDescription: input.seoDescription,
            blocksJson: input.blocksJson,
            status: "DRAFT",
        },
    });
}

export async function updateArticleStatus(
    id: string,
    status: ArticleStatus,
) {
    return prisma.article.update({
        where: {
            id,
        },
        data: {
            status,
            publishedAt: status === "PUBLISHED" ? new Date() : null,
        },
    });
}
