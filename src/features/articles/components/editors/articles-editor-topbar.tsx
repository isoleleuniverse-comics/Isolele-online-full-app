"use client";

import { useState } from "react";
import type { ArticleStatus } from "@/generated/prisma";
import { Archive, ChevronDown, Eye, LayoutPanelTop, PencilLine, Save, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { useArticleEditor } from "./articles-editor-context";

const previewModes = [
    { value: "edit", label: "Edit" },
    { value: "split", label: "Split" },
    { value: "preview", label: "Preview" },
] as const;

function getStatusLabel(status: ArticleStatus) {
    if (status === "DRAFT") return "Brouillon";
    if (status === "REVIEW") return "En revision";
    if (status === "PUBLISHED") return "Publie";
    return "Archive";
}

export function ArticlesEditorTopbar() {
    const [publishMenuOpen, setPublishMenuOpen] = useState(false);
    const {
        articleLocale,
        title,
        status,
        previewMode,
        setPreviewMode,
        saveArticle,
        changeStatus,
        deleteArticle,
        isSaving,
        isStatusPending,
        isDeleting,
    } = useArticleEditor();

    return (
        <header className="border-b border-white/10 bg-[#1b1b1b]">
            <div className="grid gap-4 px-4 py-3 lg:px-6 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-center">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="truncate text-xl font-semibold text-[#f6f0e8]">
                            {title.trim() || "Nouvel article"}
                        </h1>
                        <span className="rounded-md border border-white/10 bg-[#252525] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#b9ac9a]">
                            {articleLocale}
                        </span>
                        <span className="rounded-md border border-[#574827] bg-[#2a2417] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#d7be7e]">
                            {getStatusLabel(status)}
                        </span>
                    </div>
                </div>

                <div className="flex justify-start xl:justify-center">
                    <div className="inline-flex w-fit rounded-lg border border-white/10 bg-[#202020] p-1">
                        {previewModes.map((mode) => (
                            <button
                                key={mode.value}
                                type="button"
                                onClick={() => setPreviewMode(mode.value)}
                                className={cn(
                                    "rounded-md px-4 py-2 text-xs uppercase tracking-[0.18em] transition",
                                    previewMode === mode.value
                                        ? "bg-[#d2b26d] text-[#16120d]"
                                        : "text-[#c1b6a9] hover:bg-white/5 hover:text-[#f2ede6]",
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    {mode.value === "edit" ? <PencilLine className="h-3.5 w-3.5" /> : null}
                                    {mode.value === "split" ? <LayoutPanelTop className="h-3.5 w-3.5" /> : null}
                                    {mode.value === "preview" ? <Eye className="h-3.5 w-3.5" /> : null}
                                    {mode.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-start gap-2 xl:justify-end">
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={saveArticle}
                        disabled={isSaving}
                        className="rounded-md border-white/10 bg-[#252525] px-4 text-[#f0e7db]"
                    >
                        <Save className="h-3.5 w-3.5" />
                        {isSaving ? "Sauvegarde..." : "Save"}
                    </Button>
                    <div className="relative">
                        <Button
                            type="button"
                            size="sm"
                            onClick={() => setPublishMenuOpen((open) => !open)}
                            disabled={isStatusPending || isDeleting}
                            className="rounded-md bg-[#d2b26d] px-5 text-[#16120d] hover:bg-[#e3c57f]"
                        >
                            Publish
                            <ChevronDown className="h-3.5 w-3.5" />
                        </Button>

                        {publishMenuOpen ? (
                            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 min-w-56 rounded-2xl border border-white/10 bg-[#15120e] p-2 shadow-2xl">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPublishMenuOpen(false);
                                        changeStatus("PUBLISHED");
                                    }}
                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-[#f4efe7] transition hover:bg-white/5"
                                >
                                    <Send className="h-4 w-4 text-[#d2b26d]" />
                                    Publish
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPublishMenuOpen(false);
                                        changeStatus("DRAFT");
                                    }}
                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-[#d7cec2] transition hover:bg-white/5"
                                >
                                    <Save className="h-4 w-4 text-[#9d9386]" />
                                    Save draft
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPublishMenuOpen(false);
                                        changeStatus("ARCHIVED");
                                    }}
                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-[#d7cec2] transition hover:bg-white/5"
                                >
                                    <Archive className="h-4 w-4 text-[#9d9386]" />
                                    Archive
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPublishMenuOpen(false);
                                        if (window.confirm("Supprimer cet article ? Cette action est irreversible.")) {
                                            deleteArticle();
                                        }
                                    }}
                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-[#f3b7ae] transition hover:bg-white/5"
                                >
                                    <Trash2 className="h-4 w-4" />
                                    {isDeleting ? "Suppression..." : "Delete article"}
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
