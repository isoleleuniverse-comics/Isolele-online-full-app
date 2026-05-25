"use client";

import type { QuoteBlock } from "@/features/articles/model/article-blocks";
import { AutoResizeTextarea } from "@/components/editor/auto-resize-textarea";
import { Input } from "@/components/ui/input";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function QuoteBlockEditor({
    block,
    onUpdate,
}: ArticleBlockEditorProps) {
    const quoteBlock = block as QuoteBlock;

    return (
        <div className="space-y-4">
            <AutoResizeTextarea
                value={quoteBlock.text}
                onChange={(event) =>
                    onUpdate({
                        ...quoteBlock,
                        text: event.target.value,
                    })
                }
                placeholder="Citation"
                rows={1}
                className="h-auto overflow-hidden resize-none border-0 bg-transparent px-0 py-0 font-serif text-3xl font-light italic leading-tight text-[#2b2824] placeholder:text-[#b8afa2] shadow-none outline-none focus:outline-none"
            />
            <Input
                value={quoteBlock.author ?? ""}
                onChange={(event) =>
                    onUpdate({
                        ...quoteBlock,
                        author: event.target.value,
                    })
                }
                placeholder="Auteur"
                className="border-[#d6cec1] bg-white text-[#6c6458] placeholder:text-[#b8afa2]"
            />
        </div>
    );
}
