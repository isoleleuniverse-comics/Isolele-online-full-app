"use client";

import { useRef } from "react";
import { ImagePlus } from "lucide-react";
import type { ImageBlock } from "@/features/articles/model/article-blocks";
import { Input } from "@/components/ui/input";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function ImageBlockEditor({
    block,
    onUpdate,
    onUploadImage,
}: ArticleBlockEditorProps) {
    const imageBlock = block as ImageBlock;
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className="space-y-5">
            <div className="grid gap-3 lg:grid-cols-2">
                <Input
                    value={imageBlock.alt ?? ""}
                    onChange={(event) =>
                        onUpdate({
                            ...imageBlock,
                            alt: event.target.value,
                        })
                    }
                    placeholder="Texte alternatif"
                    className="border-white/10 bg-white/[0.03] text-[#f4efe7]"
                />
                <Input
                    value={imageBlock.url}
                    onChange={(event) =>
                        onUpdate({
                            ...imageBlock,
                            url: event.target.value,
                        })
                    }
                    placeholder="URL de l'image de contenu"
                    className="border-white/10 bg-white/[0.03] text-[#f4efe7]"
                />
            </div>

            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex min-h-56 w-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.02] px-6 text-center transition hover:border-[#5b4b30] hover:bg-white/[0.04]"
            >
                <ImagePlus className="h-8 w-8 text-[#d2b26d]" />
                <p className="mt-4 text-base text-[#f4efe7]">
                    {imageBlock.url ? "Remplacer l'image de contenu" : "Ajouter une image de contenu"}
                </p>
                <p className="mt-2 text-sm text-[#9d9386]">
                    Clique pour importer une image dans le corps de l&apos;article.
                </p>
            </button>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file || !onUploadImage) return;
                    onUploadImage(file);
                    event.currentTarget.value = "";
                }}
                className="hidden"
            />

            {imageBlock.url ? (
                <div className="overflow-hidden rounded-[1.4rem] bg-white/[0.03]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageBlock.url}
                        alt={imageBlock.alt ?? ""}
                        className="h-72 w-full object-cover"
                    />
                </div>
            ) : null}

            <div className="grid gap-3 lg:grid-cols-2">
                <Input
                    value={imageBlock.caption ?? ""}
                    onChange={(event) =>
                        onUpdate({
                            ...imageBlock,
                            caption: event.target.value,
                        })
                    }
                    placeholder="Legende de l'image de contenu"
                    className="border-white/10 bg-white/[0.03] text-[#f4efe7]"
                />
                <Input
                    placeholder="Credits / source"
                    className="border-white/10 bg-white/[0.03] text-[#f4efe7]"
                />
            </div>
        </div>
    );
}
