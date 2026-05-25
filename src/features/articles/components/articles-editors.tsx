"use client";

import type { ArticleStatus, TranslationStatus } from "@/generated/prisma/client";
import { normalizeArticleBlocksDetailed } from "@/features/articles/model/article-blocks";
import { ArticlesEditorShell } from "./editors/articles-editor-shell";
import type { TranslationLocaleSummary } from "../model/article-translation-workflow";

type Props = {
    article: {
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
        status: string;
        translationStatus: string;
        sourceVersion: number;
        translatedFromVersion: number | null;
        translations: TranslationLocaleSummary[];
    };
};

export function ArticlesEditors({ article }: Props) {
    const normalized = normalizeArticleBlocksDetailed(article.blocksJson);

    return (
            <ArticlesEditorShell
                id={article.id}
                translationGroupId={article.translationGroupId}
                locale={article.adminLocale}
                articleLocale={article.articleLocale}
                initialTitle={article.title}
            initialExcerpt={article.excerpt ?? ""}
            initialCoverImage={article.coverImage}
            initialSeoTitle={article.seoTitle}
                initialSeoDescription={article.seoDescription}
                initialBlocks={normalized.blocks}
                initialStatus={article.status as ArticleStatus}
                initialTranslationStatus={article.translationStatus as TranslationStatus}
                initialSourceVersion={article.sourceVersion}
                initialTranslatedFromVersion={article.translatedFromVersion}
                initialTranslations={article.translations}
                initialWarnings={normalized.warnings}
            />
        );
}
