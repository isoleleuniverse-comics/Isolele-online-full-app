import { prisma } from "@/lib/prisma";
import {
  Prisma,
  type ArticleStatus,
  type TranslationStatus,
} from "@/generated/prisma/client";
import { getStaticArticleBySlug, getStaticPublishedArticles } from "../model/articles.data";
import {
  buildTranslationLocaleSummaries,
  getTranslatableBlockSignature,
  getTranslationStatusAfterManualEdit,
  getTranslationStatusAfterSourceUpdate,
  type TranslationLocaleSummary,
} from "../model/article-translation-workflow";
import {
  normalizeArticleBlocks,
  sanitizeArticleBlocks,
  type ArticleBlock,
} from "../model/article-blocks";
import {
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/shared/i18n/locales";

type PersistedArticle = {
  id: string;
  translationGroupId: string;
  locale: string;
  slug: string;
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  blocksJson: unknown;
  status: ArticleStatus;
  translationStatus: TranslationStatus;
  sourceVersion: number;
  translatedFromVersion: number | null;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type EditorArticlePayload = {
  id: string;
  translationGroupId: string;
  adminLocale: string;
  articleLocale: string;
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  blocksJson: unknown;
  status: ArticleStatus;
  translationStatus: TranslationStatus;
  sourceVersion: number;
  translatedFromVersion: number | null;
  translations: TranslationLocaleSummary[];
};

function haveTextFieldsChanged(current: PersistedArticle, next: UpdateArticleInput) {
  return (
    current.title !== next.title ||
    (current.excerpt ?? "") !== (next.excerpt ?? "") ||
    (current.coverImage ?? "") !== (next.coverImage ?? "") ||
    (current.seoTitle ?? "") !== (next.seoTitle ?? "") ||
    (current.seoDescription ?? "") !== (next.seoDescription ?? "")
  );
}

function markManuallyEditedBlocks(currentBlocks: ArticleBlock[], nextBlocks: ArticleBlock[]) {
  const currentByKey = new Map(currentBlocks.map((block) => [block.translationKey, block]));

  return nextBlocks.map((block) => {
    const current = currentByKey.get(block.translationKey);
    if (!current) {
      return {
        ...block,
        manuallyEdited: true,
      };
    }

    if (JSON.stringify(current) !== JSON.stringify(block)) {
      return {
        ...block,
        manuallyEdited: true,
      };
    }

    return block;
  });
}

function attachSourceFingerprints(blocks: ArticleBlock[]) {
  return blocks.map((block) => ({
    ...block,
    sourceFingerprint: getTranslatableBlockSignature(block) ?? undefined,
  }));
}

async function getTranslationsForArticle(article: Pick<PersistedArticle, "translationGroupId">) {
  return (await prisma.article.findMany({
    where: {
      translationGroupId: article.translationGroupId,
    },
    orderBy: {
      locale: "asc",
    },
  })) as Array<PersistedArticle>;
}

export async function buildEditorArticlePayload(article: PersistedArticle, adminLocale: string): Promise<EditorArticlePayload> {
  const translations = await getTranslationsForArticle(article);

  return {
    id: article.id,
    translationGroupId: article.translationGroupId,
    adminLocale,
    articleLocale: article.locale,
    title: article.title,
    excerpt: article.excerpt,
    coverImage: article.coverImage,
    seoTitle: article.seoTitle,
    seoDescription: article.seoDescription,
    blocksJson: article.blocksJson,
    status: article.status,
    translationStatus: article.translationStatus,
    sourceVersion: article.sourceVersion,
    translatedFromVersion: article.translatedFromVersion,
    translations: buildTranslationLocaleSummaries({
      locales: SUPPORTED_LOCALES,
      translations,
    }),
  };
}

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

export async function getPublicPublishedArticles(locale: SupportedLocale) {
  const dbArticles = await getPublishedArticles(locale);
  if (dbArticles.length > 0) {
    return dbArticles;
  }
  return getStaticPublishedArticles(locale);
}

export async function getArticleById(id: string) {
  return (await prisma.article.findUnique({
    where: {
      id,
    },
  })) as PersistedArticle | null;
}

export async function getArticleBySlug(slug: string, locale?: string) {
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

export async function getPublicArticleBySlug(slug: string, locale: SupportedLocale) {
  const dbArticle = await getArticleBySlug(slug, locale);

  if (dbArticle) {
    return dbArticle;
  }

  return getStaticArticleBySlug(slug, locale);
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
      translationStatus: "UP_TO_DATE",
      sourceVersion: 1,
      translatedFromVersion: 1,
    },
  });
}

type UpdateArticleInput = {
  title?: string;
  excerpt?: string;
  coverImage?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  blocksJson?: Prisma.InputJsonValue;
};

export async function updateArticle(id: string, data: UpdateArticleInput) {
  const currentArticle = await getArticleById(id);
  if (!currentArticle) {
    throw new Error("Article not found.");
  }

  const nextBlocks = sanitizeArticleBlocks(data.blocksJson ?? currentArticle.blocksJson).blocks;
  const currentBlocks = normalizeArticleBlocks(currentArticle.blocksJson);
  const blocksChanged = JSON.stringify(currentBlocks) !== JSON.stringify(nextBlocks);
  const textFieldsChanged = haveTextFieldsChanged(currentArticle, {
    title: data.title ?? currentArticle.title,
    excerpt: data.excerpt ?? currentArticle.excerpt,
    coverImage: data.coverImage ?? currentArticle.coverImage,
    seoTitle: data.seoTitle ?? currentArticle.seoTitle,
    seoDescription: data.seoDescription ?? currentArticle.seoDescription,
    blocksJson: (data.blocksJson ?? currentArticle.blocksJson) as Prisma.InputJsonValue,
  });
  const contentChanged = blocksChanged || textFieldsChanged;

  if (!contentChanged) {
    return prisma.article.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        blocksJson: nextBlocks as Prisma.InputJsonValue,
      },
    });
  }

  if (currentArticle.locale === "en") {
    return prisma.$transaction(async (tx) => {
      const updatedArticle = await tx.article.update({
        where: {
          id,
        },
        data: {
          title: data.title,
          excerpt: data.excerpt,
          coverImage: data.coverImage,
          seoTitle: data.seoTitle,
          seoDescription: data.seoDescription,
          blocksJson: attachSourceFingerprints(nextBlocks) as Prisma.InputJsonValue,
          sourceVersion: {
            increment: 1,
          },
          translationStatus: getTranslationStatusAfterSourceUpdate(currentArticle.locale),
          translatedFromVersion: currentArticle.sourceVersion + 1,
        },
      });

      await tx.article.updateMany({
        where: {
          translationGroupId: currentArticle.translationGroupId,
          NOT: {
            id,
          },
        },
        data: {
          translationStatus: "NEEDS_UPDATE",
        },
      });

      return updatedArticle;
    });
  }

  const manuallyEditedBlocks = markManuallyEditedBlocks(currentBlocks, nextBlocks);

  return prisma.article.update({
    where: {
      id,
    },
    data: {
      title: data.title,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      blocksJson: manuallyEditedBlocks as Prisma.InputJsonValue,
      translationStatus: getTranslationStatusAfterManualEdit(
        currentArticle.locale,
        currentArticle.translationStatus,
      ),
    },
  });
}

export async function getArticleByTranslationGroupAndLocale(translationGroupId: string, locale: string) {
  return (await prisma.article.findFirst({
    where: {
      translationGroupId,
      locale,
    },
  })) as PersistedArticle | null;
}

export async function getArticleTranslations(translationGroupId: string) {
  return (await prisma.article.findMany({
    where: {
      translationGroupId,
    },
    orderBy: {
      locale: "asc",
    },
  })) as PersistedArticle[];
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
  sourceVersion: number;
  translatedFromVersion: number;
  translationStatus: TranslationStatus;
};

export async function upsertArticleTranslation(input: UpsertArticleTranslationInput) {
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
        sourceVersion: input.sourceVersion,
        translatedFromVersion: input.translatedFromVersion,
        translationStatus: input.translationStatus,
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
      translationStatus: input.translationStatus,
      sourceVersion: input.sourceVersion,
      translatedFromVersion: input.translatedFromVersion,
    },
  });
}

export async function updateArticleStatus(id: string, status: ArticleStatus) {
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

export async function deleteArticle(id: string) {
  return prisma.article.delete({
    where: {
      id,
    },
  });
}

export async function getOrCreateArticleTranslationVariant(articleId: string, targetLocale: SupportedLocale) {
  const currentArticle = await getArticleById(articleId);
  if (!currentArticle) {
    throw new Error("Article not found.");
  }

  const variant = await getArticleByTranslationGroupAndLocale(currentArticle.translationGroupId, targetLocale);
  if (variant) {
    return variant;
  }

  return null;
}
