"use client";

import type { ArticleStatus } from "@/generated/prisma";
import { normalizeArticleBlocksDetailed } from "@/features/articles/model/article-blocks";
import { ArticlesEditorShell } from "./editors/articles-editor-shell";

type Props = {
    article: {
        id: string;
        adminLocale: string;
        articleLocale: string;
        title: string;
        excerpt: string | null;
        coverImage: string | null;
        seoTitle: string | null;
        seoDescription: string | null;
        blocksJson: unknown;
        status: string;
    };
};

export function ArticlesEditors({ article }: Props) {
    const normalized = normalizeArticleBlocksDetailed(article.blocksJson);

    return (
        <ArticlesEditorShell
            id={article.id}
            locale={article.adminLocale}
            articleLocale={article.articleLocale}
            initialTitle={article.title}
            initialExcerpt={article.excerpt ?? ""}
            initialCoverImage={article.coverImage}
            initialSeoTitle={article.seoTitle}
            initialSeoDescription={article.seoDescription}
            initialBlocks={normalized.blocks}
            initialStatus={article.status as ArticleStatus}
            initialWarnings={normalized.warnings}
        />
    );
}
