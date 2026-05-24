"use client";

import type { ArticleBlock } from "@/features/articles/model/article-blocks";
import { cn } from "@/shared/lib/utils";
import { useArticleEditor } from "./articles-editor-context";
import { articleBlockRegistry } from "./blocks/article-block-registry";

const sidebarPanels = [
    { value: "structure", label: "Structure" },
    { value: "seo", label: "SEO" },
    { value: "media", label: "Media" },
] as const;

function getBlockTitle(block: ArticleBlock) {
    if (block.type === "heading") return block.text.trim() || "Section";
    if (block.type === "paragraph") return block.text.trim().slice(0, 54) || "Introduction";
    if (block.type === "image") return block.caption?.trim() || "Image de contenu";
    if (block.type === "quote") return block.text.trim().slice(0, 54) || "Citation";
    if (block.type === "video") return block.title?.trim() || "Video";
    if (block.type === "cta") return block.title.trim() || "CTA";
    if (block.type === "divider") return "Transition";
    return "Bloc preserve";
}

export function ArticlesEditorSidebar() {
    const {
        activeSidebarPanel,
        setActiveSidebarPanel,
        title,
        excerpt,
        blocks,
        focusedBlockId,
        focusBlock,
        seoTitle,
        seoDescription,
        coverImage,
        triggerCoverImagePicker,
        articleLocale,
    } = useArticleEditor();

    const seoTitleCount = seoTitle.trim().length || title.trim().length;
    const seoDescriptionCount = seoDescription.trim().length || excerpt.trim().length;

    return (
        <aside className="hidden w-[272px] shrink-0 border-r border-white/10 bg-[#161616] xl:flex xl:flex-col">
            <div className="border-b border-white/10 px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#c9a84c]">
                    Explorer
                </p>
                <p className="mt-2 text-sm text-[#9d9386]">
                    Structure, SEO et media
                </p>
            </div>

            <div className="px-3 py-3">
                <div className="grid grid-cols-3 gap-2">
                    {sidebarPanels.map((panel) => (
                        <button
                            key={panel.value}
                            type="button"
                            onClick={() => setActiveSidebarPanel(panel.value)}
                            className={cn(
                                "rounded-md px-3 py-2 text-center text-[11px] uppercase tracking-[0.16em] transition",
                                activeSidebarPanel === panel.value
                                    ? "bg-[#242424] text-[#f4e1b0]"
                                    : "bg-[#1d1d1d] text-[#9d9386] hover:text-[#f2ede6]",
                            )}
                        >
                            {panel.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
                {activeSidebarPanel === "structure" ? (
                    <div className="space-y-1.5">
                        <button
                            type="button"
                            onClick={() =>
                                document.getElementById("article-editor-hero")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            }
                            className="w-full rounded-lg bg-[#1d1d1d] px-4 py-4 text-left transition hover:bg-[#252525]"
                        >
                            <p className="text-[11px] uppercase tracking-[0.26em] text-[#c9a84c]">
                                Hero + Couverture
                            </p>
                            <p className="mt-2 truncate font-serif text-lg font-light text-[#f4efe7]">
                                {title.trim() || "Nouvel article"}
                            </p>
                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#9d9386]">
                                {excerpt.trim() || "Titre, image de couverture et tonalite editoriale."}
                            </p>
                        </button>

                        {blocks.map((block, index) => {
                            const registry = articleBlockRegistry[block.type];
                            const isActive = focusedBlockId === block.id;

                            return (
                                <button
                                    key={block.id}
                                    type="button"
                                    onClick={() => focusBlock(block.id)}
                                    className={cn(
                                        "w-full rounded-lg px-4 py-3 text-left transition",
                                        isActive
                                            ? "bg-[#252018]"
                                            : "bg-transparent hover:bg-[#202020]",
                                    )}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#c9a84c]">
                                            {String(index + 1).padStart(2, "0")} {registry.label}
                                        </p>
                                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#7d7468]">
                                            {block.type}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-[#ebe3d7]">
                                        {getBlockTitle(block)}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                ) : null}

                {activeSidebarPanel === "seo" ? (
                    <div className="space-y-4">
                        <div className="rounded-lg bg-[#1d1d1d] p-4">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c9a84c]">
                                Search Presence
                            </p>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm text-[#f4efe7]">SEO title</span>
                                        <span className="text-xs text-[#9d9386]">{seoTitleCount}/60</span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-white/10">
                                        <div
                                            className="h-2 rounded-full bg-[#d2b26d]"
                                            style={{ width: `${Math.min(100, (seoTitleCount / 60) * 100)}%` }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm text-[#f4efe7]">SEO description</span>
                                        <span className="text-xs text-[#9d9386]">{seoDescriptionCount}/160</span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-white/10">
                                        <div
                                            className="h-2 rounded-full bg-[#d2b26d]"
                                            style={{ width: `${Math.min(100, (seoDescriptionCount / 160) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-[#1d1d1d] p-4">
                            <p className="text-sm text-[#f4efe7]">Apercu moteur de recherche</p>
                            <div className="mt-4 space-y-1">
                                <p className="text-lg leading-7 text-[#8ab4f8]">
                                    {seoTitle.trim() || title.trim() || "Untitled article"}
                                </p>
                                <p className="text-sm text-[#7acb70]">
                                    isolele.com/{articleLocale}/articles/preview
                                </p>
                                <p className="text-sm leading-6 text-[#9d9386]">
                                    {seoDescription.trim() ||
                                        excerpt.trim() ||
                                        "Discover this article on ISOLELE."}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : null}

                {activeSidebarPanel === "media" ? (
                    <div className="space-y-4">
                        <div className="rounded-lg bg-[#1d1d1d] p-4">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c9a84c]">
                                Image de couverture
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#9d9386]">
                                Prepare une bibliotheque media reutilisable sans changer le modele actuel.
                            </p>
                            <button
                                type="button"
                                onClick={triggerCoverImagePicker}
                                className="mt-4 w-full rounded-md bg-[#2a2417] px-4 py-3 text-sm text-[#f4efe7] transition hover:bg-[#352d1c]"
                            >
                                Importer une couverture
                            </button>
                        </div>

                        <div className="overflow-hidden rounded-lg bg-[#1d1d1d]">
                            {coverImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={coverImage}
                                    alt=""
                                    className="h-56 w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-56 items-center justify-center px-6 text-center text-sm text-[#9d9386]">
                                    Aucune couverture definie pour le moment.
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}

            </div>
        </aside>
    );
}
