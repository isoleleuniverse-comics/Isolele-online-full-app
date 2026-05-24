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
                    <header className="px-6 pb-10 pt-16">
                        <div className="mx-auto max-w-4xl">
                            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#c9a84c]">
                                <span className="h-px w-9 bg-[#c9a84c]" />
                                ISOLELE {articleLocale.toUpperCase()}
                            </p>

                            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] text-white sm:text-5xl">
                                {title.trim() || "Titre de l'article"}
                            </h1>

                            {excerpt.trim() ? (
                                <p className="mt-6 max-w-2xl text-base font-light leading-8 text-[#e8e0d4]/75">
                                    {excerpt}
                                </p>
                            ) : null}

                            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#8c8070]">
                                <span>{previewDate}</span>
                                <span className="text-[#7d6630]">/</span>
                                <span>{readingTime} min read</span>
                            </div>

                            {coverImage ? (
                                <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#181818]">
                                    <div className="border-b border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#c9a84c]">
                                        Image de couverture
                                    </div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={coverImage}
                                        alt=""
                                        className="h-auto max-h-[520px] w-full object-cover"
                                    />
                                </div>
                            ) : null}
                        </div>
                    </header>

                    <ArticleBlockRenderer blocks={blocks} />
                </article>
            </div>
        </aside>
    );
}
