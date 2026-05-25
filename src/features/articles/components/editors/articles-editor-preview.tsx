"use client";

import { getReadingTimeMinutes } from "@/features/articles/model/article-blocks";
import { ArticleBlockRenderer } from "@/features/articles/ui/article-block-renderer";
import { cn } from "@/shared/lib/utils";
import { useArticleEditor } from "./articles-editor-context";

export function ArticlesEditorPreview() {
    const {
        articleLocale,
        title,
        excerpt,
        coverImage,
        blocks,
        previewMode,
    } = useArticleEditor();

    if (previewMode === "edit") {
        return null;
    }

    const previewDate = new Intl.DateTimeFormat("fr", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date());

    const readingTime = getReadingTimeMinutes(blocks);

    return (
        <aside
            className={cn(
                "min-h-0 overflow-y-auto bg-[#111111]",
                previewMode === "preview" ? "flex-1" : "min-w-0",
            )}
        >
            <div className="min-h-full">
                <div className="border-b border-white/10 px-6 py-3 text-[#a79b8b]">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a84c]">Preview</p>
                </div>

                <article>
                    <header className="relative min-h-[720px] overflow-hidden">
                        {coverImage ? (
                            <>
                                <div className="absolute inset-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={coverImage}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
                            </>
                        ) : (
                            <div className="absolute inset-0 bg-[#111111]" />
                        )}

                        <div className="relative z-10 flex min-h-[720px] items-end px-6 pb-16 pt-24">
                            <div className="mx-auto w-full max-w-5xl">
                                <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#d6b870]">
                                    <span className="h-px w-9 bg-[#d6b870]" />
                                    ISOLELE {articleLocale.toUpperCase()}
                                </p>

                                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl">
                                    {title.trim() || "Titre de l'article"}
                                </h1>

                                {excerpt.trim() ? (
                                    <p className="mt-8 max-w-2xl text-lg font-light leading-9 text-white/80">
                                        {excerpt}
                                    </p>
                                ) : null}

                                <div className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/60">
                                    <span>{previewDate}</span>
                                    <span className="text-[#d6b870]">/</span>
                                    <span>{readingTime} min read</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <ArticleBlockRenderer blocks={blocks} />
                </article>
            </div>
        </aside>
    );
}
