"use server";

import { revalidatePath } from "next/cache";
import { Prisma, type ArticleStatus } from "@/generated/prisma/client";
import type { LanguageCode } from "@/features/languages/config/languages";
import { sanitizeArticleBlocks, type ArticleBlock } from "../model/article-blocks";
import { translateArticle } from "../services/articles-translation.service";
import {
  buildEditorArticlePayload,
  deleteArticle,
  duplicateArticle,
  getArticleManagerItems,
  getArticleById,
  getArticleByTranslationGroupAndLocale,
  updateArticleTranslationSettings,
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

export async function updateArticleAction(input: Input) {
  const { blocks } = sanitizeArticleBlocks(input.blocksJson ?? []);

  const article = await updateArticle(input.id, {
    title: input.title,
    excerpt: input.excerpt,
    coverImage: input.coverImage,
    seoTitle: input.seoTitle,
    seoDescription: input.seoDescription,
    blocksJson: blocks as Prisma.InputJsonValue,
  });

  revalidatePath(`/${input.locale}/admin/articles`);
  revalidatePath(`/${input.locale}/admin/articles/${input.id}`);
  revalidatePath(`/${article.locale}/articles`);
  revalidatePath(`/${article.locale}/articles/${article.slug}`);

  return buildEditorArticlePayload(article, input.locale);
}

type StatusInput = {
  id: string;
  locale: string;
  status: ArticleStatus;
};

export async function updateArticleStatusAction(input: StatusInput) {
  const article = await updateArticleStatus(input.id, input.status);

  revalidatePath(`/${input.locale}/admin/articles`);
  revalidatePath(`/${input.locale}/admin/articles/${input.id}`);
  revalidatePath(`/${article.locale}/articles`);
  revalidatePath(`/${article.locale}/articles/${article.slug}`);

  return buildEditorArticlePayload(article, input.locale);
}

type TranslateInput = {
  id: string;
  adminLocale: string;
  targetLocale: LanguageCode;
};

export async function translateArticleAction(input: TranslateInput) {
  const article = await translateArticle(input.id, input.targetLocale);

  revalidatePath(`/${input.adminLocale}/admin/articles`);
  revalidatePath(`/${input.adminLocale}/admin/articles/${input.id}`);
  revalidatePath(`/${article.locale}/articles`);
  revalidatePath(`/${article.locale}/articles/${article.slug}`);

  return buildEditorArticlePayload(article, input.adminLocale);
}

type SwitchTranslationInput = {
  id: string;
  adminLocale: string;
  targetLocale: LanguageCode;
};

export async function switchArticleTranslationAction(input: SwitchTranslationInput) {
  const currentArticle = await getArticleById(input.id);
  if (!currentArticle) {
    throw new Error("Article not found.");
  }

  let targetArticle =
    (await getArticleByTranslationGroupAndLocale(currentArticle.translationGroupId, input.targetLocale)) ??
    null;
  const currentPayload = await buildEditorArticlePayload(currentArticle, input.adminLocale);

  if (!targetArticle && input.targetLocale !== currentPayload.sourceLocale) {
    const sourceArticle =
      currentArticle.locale === currentPayload.sourceLocale
        ? currentArticle
        : await getArticleByTranslationGroupAndLocale(
            currentArticle.translationGroupId,
            currentPayload.sourceLocale,
          );

    if (!sourceArticle) {
      throw new Error("Source article was not found for this translation group.");
    }

    targetArticle = await translateArticle(sourceArticle.id, input.targetLocale);
  }

  if (!targetArticle) {
    throw new Error("Target translation does not exist yet.");
  }

  revalidatePath(`/${input.adminLocale}/admin/articles/${targetArticle.id}`);
  return buildEditorArticlePayload(targetArticle, input.adminLocale);
}

type DeleteInput = {
  id: string;
  locale: string;
};

export async function deleteArticleAction(input: DeleteInput) {
  const article = await deleteArticle(input.id);

  revalidatePath(`/${input.locale}/admin/articles`);
  revalidatePath(`/${input.locale}/admin/articles/${input.id}`);
  revalidatePath(`/${article.locale}/articles`);
  revalidatePath(`/${article.locale}/articles/${article.slug}`);
}

export async function duplicateArticleAction(input: { id: string; locale: string }) {
  const copiedArticle = await duplicateArticle(input.id);

  revalidatePath(`/${input.locale}/admin/articles`);
  revalidatePath(`/${input.locale}/admin/articles/${copiedArticle.id}`);

  return buildEditorArticlePayload(copiedArticle, input.locale);
}

export async function getArticleManagerItemsAction() {
  return getArticleManagerItems();
}

export async function updateArticleTranslationSettingsAction(input: {
  id: string;
  adminLocale: string;
  sourceLocale: LanguageCode;
  targetLocales: LanguageCode[];
}) {
  const article = await updateArticleTranslationSettings({
    articleId: input.id,
    sourceLocale: input.sourceLocale,
    targetLocales: input.targetLocales,
  });

  revalidatePath(`/${input.adminLocale}/admin/articles`);
  revalidatePath(`/${input.adminLocale}/admin/articles/${input.id}`);

  return buildEditorArticlePayload(article, input.adminLocale);
}
