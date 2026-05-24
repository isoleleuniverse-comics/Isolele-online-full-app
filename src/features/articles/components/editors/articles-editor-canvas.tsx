"use client";

import { ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/shared/lib/utils";
import { useArticleEditor } from "./articles-editor-context";
import { ArticlesEditorBlockList } from "./articles-editor-block-list";

function Banner({
    tone,
    message,
}: {
    tone: "warning" | "error" | "info";
    message: string;
}) {
    const tones = {
        warning: "border-amber-400/30 bg-amber-300/10 text-amber-100",
        error: "border-red-400/30 bg-red-300/10 text-red-100",
        info: "border-white/10 bg-white/[0.04] text-[#ddd4c7]",
    };

    return (
        <div className={cn("rounded-[1.6rem] border px-5 py-4 text-sm leading-6", tones[tone])}>
            {message}
        </div>
    );
}

export function ArticlesEditorCanvas() {
    const {
        title,
        setTitle,
        excerpt,
        setExcerpt,
        coverImage,
        setCoverImage,
        seoTitle,
        setSeoTitle,
        seoDescription,
        setSeoDescription,
        warnings,
        uploadError,
        activityMessage,
        previewMode,
        coverImageInputId,
        uploadImageFile,
    } = useArticleEditor();

    if (previewMode === "preview") {
        return null;
    }

    return (
        <section
            className={cn(
                "min-h-0 overflow-y-auto bg-[#1e1e1e]",
                previewMode === "split" ? "border-r border-white/10" : "flex-1",
            )}
        >
            <div className="flex min-h-full w-full flex-col gap-6 p-4 lg:p-5">
                <div className="space-y-4">
                    <div className="space-y-4">
                        {warnings.map((warning) => (
                            <Banner key={warning} tone="warning" message={warning} />
                        ))}
                        {uploadError ? <Banner tone="error" message={uploadError} /> : null}
                        {activityMessage ? <Banner tone="info" message={activityMessage} /> : null}
                    </div>
                </div>

                <div
                    id="article-editor-hero"
                    className="overflow-hidden rounded-xl border border-white/10 bg-[#f7f3ec] text-[#2b2824]"
                >
                    <div className="space-y-6 p-6 lg:p-8">
                        <Textarea
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Titre de l'article"
                            className="min-h-24 resize-none border-0 bg-transparent px-0 py-0 text-5xl font-semibold leading-[1.02] text-[#3a342c] shadow-none focus-visible:ring-0"
                        />

                        <Textarea
                            value={excerpt}
                            onChange={(event) => setExcerpt(event.target.value)}
                            placeholder="Resume editoriale, intention ou promesse de lecture"
                            className="min-h-20 resize-none border-0 bg-transparent px-0 py-0 text-lg leading-8 text-[#6c6458] shadow-none focus-visible:ring-0"
                        />

                        {coverImage ? (
                            <div className="overflow-hidden rounded-lg border border-[#d9d2c6] bg-[#f2ede4]">
                                <div className="border-b border-[#d9d2c6] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#8b7e6a]">
                                    Image de couverture
                                </div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={coverImage}
                                    alt=""
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                        ) : null}

                        <div className="grid gap-3 lg:grid-cols-2">
                            <Input
                                value={coverImage}
                                onChange={(event) => setCoverImage(event.target.value)}
                                placeholder="URL de l'image de couverture"
                                className="border-[#d6cec1] bg-white text-[#2b2824]"
                            />
                            <Input
                                value={seoTitle}
                                onChange={(event) => setSeoTitle(event.target.value)}
                                placeholder="Texte alternatif / intention SEO"
                                className="border-[#d6cec1] bg-white text-[#2b2824]"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => document.getElementById(coverImageInputId)?.click()}
                            className="flex min-h-44 w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#cfc5b5] bg-[#fbf8f2] px-6 text-center transition hover:border-[#b99b59] hover:bg-[#f8f2e7]"
                        >
                            <ImagePlus className="h-8 w-8 text-[#b99b59]" />
                            <p className="mt-4 text-base font-medium text-[#2b2824]">Importer une couverture</p>
                            <p className="mt-2 text-sm text-[#7f7568]">
                                Clique pour ajouter une image forte sous le titre.
                            </p>
                            <input
                                id={coverImageInputId}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(event) => {
                                    const file = event.target.files?.[0];
                                    if (!file) return;
                                    void uploadImageFile(file).then(() => {
                                        event.currentTarget.value = "";
                                    });
                                }}
                            />
                        </button>

                        <div className="grid gap-3 lg:grid-cols-2">
                            <Input
                                value={seoDescription}
                                onChange={(event) => setSeoDescription(event.target.value)}
                                placeholder="Legende / description courte"
                                className="border-[#d6cec1] bg-white text-[#2b2824]"
                            />
                            <Input
                                placeholder="Credits / source media"
                                className="border-[#d6cec1] bg-white text-[#2b2824]"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid min-h-0 flex-1 gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="rounded-xl border border-white/10 bg-[#f7f3ec] p-6 text-[#2b2824]">
                        <div className="mb-6">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8b7e6a]">
                                    Write
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#7f7568]">
                                    Ecris section par section, sans bruit.
                                </p>
                            </div>
                        </div>

                        <ArticlesEditorBlockList />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#232323] p-6">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[#c9a84c]">
                            SEO Notes
                        </p>

                        <div className="mt-6 space-y-5">
                            <div>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <p className="text-xs uppercase tracking-[0.16em] text-[#9d9386]">
                                        SEO title
                                    </p>
                                    <p className="text-xs text-[#7f7568]">{seoTitle.length}/60</p>
                                </div>
                                <Input
                                    value={seoTitle}
                                    onChange={(event) => setSeoTitle(event.target.value)}
                                    placeholder="Titre SEO"
                                    className="border-white/10 bg-[#191919] text-[#f4efe7]"
                                />
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <p className="text-xs uppercase tracking-[0.16em] text-[#9d9386]">
                                        SEO description
                                    </p>
                                    <p className="text-xs text-[#7f7568]">{seoDescription.length}/160</p>
                                </div>
                                <Textarea
                                    value={seoDescription}
                                    onChange={(event) => setSeoDescription(event.target.value)}
                                    placeholder="Description SEO"
                                    className="min-h-28 resize-y border-white/10 bg-[#191919] text-[#f4efe7]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
