"use client";

import type { ArticleBlockType } from "@/features/articles/model/article-blocks";
import { ArrowDown, ArrowUp, Heading1, ImageIcon, Pilcrow, Quote, Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { useArticleEditor } from "./articles-editor-context";
import { articleBlockRegistry } from "./blocks/article-block-registry";

const insertableBlocks: ArticleBlockType[] = ["paragraph", "heading", "image", "quote"];

function getBlockIcon(type: ArticleBlockType) {
    if (type === "paragraph") return <Pilcrow className="h-4 w-4" />;
    if (type === "heading") return <Heading1 className="h-4 w-4" />;
    if (type === "image") return <ImageIcon className="h-4 w-4" />;
    if (type === "quote") return <Quote className="h-4 w-4" />;
    return <Pilcrow className="h-4 w-4" />;
}

function BlockInserter({ index }: { index: number }) {
    const { addBlock } = useArticleEditor();

    return (
        <div className="group relative py-3">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#d8cfc1]" />
            <div className="relative flex justify-center">
                <div className="grid w-full max-w-2xl grid-cols-2 gap-2 rounded-xl border border-[#d8cfc1] bg-[#fffdf8] p-2 opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-within:opacity-100 sm:grid-cols-4">
                    {insertableBlocks.map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => addBlock(type, index)}
                            className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-[#61584b] transition hover:bg-[#f3ede3] hover:text-[#2b2824]"
                        >
                            <span className="text-[#b99b59]">{getBlockIcon(type)}</span>
                            <span>{articleBlockRegistry[type].label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ArticlesEditorBlockList() {
    const {
        blocks,
        focusedBlockId,
        setFocusedBlockId,
        duplicateBlock,
        removeBlock,
        moveBlock,
        updateBlock,
        uploadImageFile,
    } = useArticleEditor();

    return (
        <div className="space-y-2">
            <BlockInserter index={0} />

            {blocks.map((block, index) => {
                const registry = articleBlockRegistry[block.type];
                const BlockEditor = registry.editor;
                const active = focusedBlockId === block.id;

                return (
                    <div key={block.id}>
                        <article
                            id={`block-${block.id}`}
                            className={cn(
                                "group rounded-lg border border-[#e2dbcf] bg-[#fffdf8] p-5 transition",
                                active
                                    ? "border-[#cfb575] ring-1 ring-[#cfb575]/25"
                                    : "hover:border-[#d4cab9]",
                            )}
                            onClick={() => setFocusedBlockId(block.id)}
                        >
                            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8b7e6a]">
                                        {registry.label}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-1 opacity-100 transition xl:opacity-70 xl:group-hover:opacity-100 xl:group-focus-within:opacity-100">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            moveBlock(block.id, -1);
                                        }}
                                        disabled={index === 0}
                                        className="rounded-md border border-[#d8cfc1] bg-[#f8f3eb] text-[#5c5448]"
                                        aria-label="Monter le bloc"
                                    >
                                        <ArrowUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            moveBlock(block.id, 1);
                                        }}
                                        disabled={index === blocks.length - 1}
                                        className="rounded-md border border-[#d8cfc1] bg-[#f8f3eb] text-[#5c5448]"
                                        aria-label="Descendre le bloc"
                                    >
                                        <ArrowDown className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            duplicateBlock(block.id);
                                        }}
                                        className="rounded-md border border-[#d8cfc1] bg-[#f8f3eb] text-[#5c5448]"
                                        aria-label="Dupliquer le bloc"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            removeBlock(block.id);
                                        }}
                                        className="rounded-md border border-[#ead1cb] bg-[#fff1ef] text-[#b65c4d]"
                                        aria-label="Supprimer le bloc"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <BlockEditor
                                block={block}
                                active={active}
                                onUpdate={(updated) => updateBlock(updated)}
                                onUploadImage={(file) => {
                                    void uploadImageFile(file, block.id);
                                }}
                            />
                        </article>

                        <BlockInserter index={index + 1} />
                    </div>
                );
            })}
        </div>
    );
}
