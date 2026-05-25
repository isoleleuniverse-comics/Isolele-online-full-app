import { prisma } from "@/lib/prisma";
import {
  Prisma,
  type ArticleStatus,
  type TranslationStatus,
} from "@/generated/prisma/client";
import {
  getDefaultLanguage,
  getEnabledLanguages,
  getLanguageByCode,
  type LanguageCode,
} from "@/features/languages/config/languages";
import {
  type SupportedLocale,
} from "@/shared/i18n/locales";
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

type TranslationGroupMeta = {
  sourceLocale: LanguageCode;
  targetLocales: LanguageCode[];
};

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
  sourceLocale: LanguageCode;
  targetLocales: LanguageCode[];
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

export type ArticleManagerItem = {
  id: string;
  translationGroupId: string;
  sourceLocale: LanguageCode;
  targetLocales: LanguageCode[];
  locale: string;
  slug: string;
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  status: ArticleStatus;
  translationStatus: TranslationStatus;
  sourceVersion: number;
  translatedFromVersion: number | null;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  translationCount: number;
  missingLocaleCount: number;
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

async function getTranslationGroupMeta(translationGroupId: string): Promise<TranslationGroupMeta | null> {
  try {
    const rows = await prisma.$queryRaw<Array<{ sourceLocale: string; targetLocales: unknown }>>(Prisma.sql`
      SELECT sourceLocale, targetLocales
      FROM TranslationGroup
      WHERE id = ${translationGroupId}
      LIMIT 1
    `);
    const row = rows[0];
    if (!row) return null;
    const resolvedSourceLocale = getLanguageByCode(row.sourceLocale)?.code;
    if (!resolvedSourceLocale) {
      return null;
    }

    if (Array.isArray(row.targetLocales)) {
      return {
        sourceLocale: resolvedSourceLocale,
        targetLocales: row.targetLocales.filter((item): item is LanguageCode => typeof item === "string"),
      };
    }

    if (typeof row.targetLocales === "string") {
      try {
        const parsed = JSON.parse(row.targetLocales) as unknown;
        return {
          sourceLocale: resolvedSourceLocale,
          targetLocales: Array.isArray(parsed)
            ? parsed.filter((item): item is LanguageCode => typeof item === "string")
            : [],
        };
      } catch {
        return {
          sourceLocale: resolvedSourceLocale,
          targetLocales: [],
        };
      }
    }

    return {
      sourceLocale: resolvedSourceLocale,
      targetLocales: [],
    };
  } catch {
    return null;
  }
}

async function upsertTranslationGroupMeta(translationGroupId: string, meta: TranslationGroupMeta) {
  try {
    await prisma.$executeRaw(Prisma.sql`
      INSERT INTO TranslationGroup (id, sourceLocale, targetLocales, createdAt, updatedAt)
      VALUES (
        ${translationGroupId},
        ${meta.sourceLocale},
        ${JSON.stringify(meta.targetLocales)},
        NOW(),
        NOW()
      )
      ON DUPLICATE KEY UPDATE
        sourceLocale = VALUES(sourceLocale),
        targetLocales = VALUES(targetLocales),
        updatedAt = NOW()
    `);
  } catch {
    // The editor can still function with heuristic metadata if this table is unavailable.
  }
}

async function resolveTranslationGroupMeta(article: Pick<PersistedArticle, "translationGroupId" | "locale">) {
  const storedMeta = await getTranslationGroupMeta(article.translationGroupId);
  const enabledCodes = getEnabledLanguages().map((language) => language.code);
  const sourceLocale =
    getLanguageByCode(storedMeta?.sourceLocale)?.code ??
    getLanguageByCode(article.locale)?.code ??
    getDefaultLanguage().code;
  const targetLocales = (
    storedMeta?.targetLocales ?? enabledCodes.filter((code) => code !== sourceLocale)
  ).filter((locale): locale is LanguageCode => locale !== sourceLocale && enabledCodes.includes(locale as LanguageCode));

  return {
    sourceLocale,
    targetLocales,
  };
}

export async function buildEditorArticlePayload(article: PersistedArticle, adminLocale: string): Promise<EditorArticlePayload> {
  const translations = await getTranslationsForArticle(article);
  const translationGroup = await resolveTranslationGroupMeta(article);

  return {
    id: article.id,
    translationGroupId: article.translationGroupId,
    adminLocale,
    articleLocale: article.locale,
    sourceLocale: translationGroup.sourceLocale,
    targetLocales: translationGroup.targetLocales,
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
      locales: getEnabledLanguages().map((language) => language.code),
      sourceLocale: translationGroup.sourceLocale,
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

export async function getArticleManagerItems(): Promise<ArticleManagerItem[]> {
  const articles = (await prisma.article.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  })) as PersistedArticle[];

  const translationsByGroup = new Map<string, PersistedArticle[]>();
  articles.forEach((article) => {
    const current = translationsByGroup.get(article.translationGroupId) ?? [];
    current.push(article);
    translationsByGroup.set(article.translationGroupId, current);
  });

  return Promise.all(
    articles.map(async (article) => {
      const groupArticles = translationsByGroup.get(article.translationGroupId) ?? [];
      const translationGroup = await resolveTranslationGroupMeta(article);
      const summaries = buildTranslationLocaleSummaries({
        locales: getEnabledLanguages().map((language) => language.code),
        sourceLocale: translationGroup.sourceLocale,
        translations: groupArticles,
      });

      return {
        id: article.id,
        translationGroupId: article.translationGroupId,
        sourceLocale: translationGroup.sourceLocale,
        targetLocales: translationGroup.targetLocales,
        locale: article.locale,
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        coverImage: article.coverImage,
        status: article.status,
        translationStatus: article.translationStatus,
        sourceVersion: article.sourceVersion,
        translatedFromVersion: article.translatedFromVersion,
        publishedAt: article.publishedAt,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
        translationCount: groupArticles.length,
        missingLocaleCount: summaries.filter((summary) => summary.isMissing).length,
        translations: summaries,
      } satisfies ArticleManagerItem;
    }),
  );
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
  const sourceLocale = getDefaultLanguage().code;
  const translationGroupId = crypto.randomUUID();
  await upsertTranslationGroupMeta(translationGroupId, {
    sourceLocale,
    targetLocales: getEnabledLanguages()
      .map((language) => language.code)
      .filter((code) => code !== sourceLocale),
  });

  return prisma.article.create({
    data: {
      translationGroupId,
      locale: sourceLocale,
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

export async function duplicateArticle(id: string) {
  const currentArticle = await getArticleById(id);
  if (!currentArticle) {
    throw new Error("Article not found.");
  }
  const sourceLocale = getLanguageByCode(currentArticle.locale)?.code ?? getDefaultLanguage().code;

  const translationGroupId = crypto.randomUUID();
  await upsertTranslationGroupMeta(translationGroupId, {
    sourceLocale,
    targetLocales: getEnabledLanguages()
      .map((language) => language.code)
      .filter((code) => code !== sourceLocale),
  });

  return prisma.article.create({
    data: {
      translationGroupId,
      locale: sourceLocale,
      slug: `${currentArticle.slug}-${Date.now()}`,
      title: `${currentArticle.title} (Copy)`,
      excerpt: currentArticle.excerpt,
      coverImage: currentArticle.coverImage,
      seoTitle: currentArticle.seoTitle,
      seoDescription: currentArticle.seoDescription,
      blocksJson: currentArticle.blocksJson as Prisma.InputJsonValue,
      status: "DRAFT",
      translationStatus: "UP_TO_DATE",
      sourceVersion: 1,
      translatedFromVersion: 1,
    },
  });
}

export async function updateArticleTranslationSettings(input: {
  articleId: string;
  sourceLocale: LanguageCode;
  targetLocales: LanguageCode[];
}) {
  const article = await getArticleById(input.articleId);
  if (!article) {
    throw new Error("Article not found.");
  }

  const targetLocales = input.targetLocales.filter((locale) => locale !== input.sourceLocale);
  await upsertTranslationGroupMeta(article.translationGroupId, {
    sourceLocale: input.sourceLocale,
    targetLocales,
  });

  return article;
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
  const translationGroup = await resolveTranslationGroupMeta(currentArticle);

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

  if (currentArticle.locale === translationGroup.sourceLocale) {
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
          translationStatus: getTranslationStatusAfterSourceUpdate({
            articleLocale: currentArticle.locale,
            sourceLocale: translationGroup.sourceLocale,
          }),
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
      translationStatus: getTranslationStatusAfterManualEdit({
        articleLocale: currentArticle.locale,
        sourceLocale: translationGroup.sourceLocale,
        currentStatus: currentArticle.translationStatus,
      }),
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

export async function getOrCreateArticleTranslationVariant(articleId: string, targetLocale: LanguageCode) {
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
