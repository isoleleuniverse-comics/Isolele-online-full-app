"use server";

import { revalidatePath } from "next/cache";
import { Prisma, type ArticleStatus } from "@/generated/prisma/client";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { sanitizeArticleBlocks, type ArticleBlock } from "../model/article-blocks";
import { translateArticleFromEnglish } from "../services/articles-translation.service";

import {
    updateArticle,
    updateArticleStatus,
} from "../services/articles.services";

type Input = {
    id: string;
    locale: string;
    title?: string;
    excerpt?: string;
    coverImage?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    blocksJson?: ArticleBlock[];
};

export async function updateArticleAction(
    input: Input,
) {
    const { blocks } = sanitizeArticleBlocks(
        input.blocksJson ?? [],
    );

    const article = await updateArticle(
        input.id,
        {
            title: input.title,
            excerpt: input.excerpt,
            coverImage: input.coverImage,
            seoTitle: input.seoTitle,
            seoDescription: input.seoDescription,
            blocksJson: blocks as Prisma.InputJsonValue,
        },
    );

    revalidatePath(`/${input.locale}/admin/articles`);
    revalidatePath(`/${input.locale}/admin/articles/${input.id}`);
    revalidatePath(`/${article.locale}/articles`);
    revalidatePath(`/${article.locale}/articles/${article.slug}`);
}

type StatusInput = {
    id: string;
    locale: string;
    status: ArticleStatus;
};

export async function updateArticleStatusAction(
    input: StatusInput,
) {
    const article = await updateArticleStatus(
        input.id,
        input.status,
    );

    revalidatePath(`/${input.locale}/admin/articles`);
    revalidatePath(`/${input.locale}/admin/articles/${input.id}`);
    revalidatePath(`/${article.locale}/articles`);
    revalidatePath(`/${article.locale}/articles/${article.slug}`);
}

type TranslateInput = {
    id: string;
    adminLocale: string;
    targetLocale: SupportedLocale;
};

export async function translateArticleAction(
    input: TranslateInput,
) {
    const article = await translateArticleFromEnglish(
        input.id,
        input.targetLocale,
    );

    revalidatePath(`/${input.adminLocale}/admin/articles`);
    revalidatePath(`/${input.adminLocale}/admin/articles/${input.id}`);
    revalidatePath(`/${article.locale}/articles`);
    revalidatePath(`/${article.locale}/articles/${article.slug}`);

    return article;
}
