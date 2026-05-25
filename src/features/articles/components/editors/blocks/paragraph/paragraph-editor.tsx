"use client";

import type { ParagraphBlock } from "@/features/articles/model/article-blocks";
import { AutoResizeTextarea } from "@/components/editor/auto-resize-textarea";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function ParagraphBlockEditor({
    block,
    onUpdate,
}: ArticleBlockEditorProps) {
    const paragraphBlock = block as ParagraphBlock;

    return (
        <AutoResizeTextarea
            value={paragraphBlock.text}
            onChange={(event) =>
                onUpdate({
                    ...paragraphBlock,
                    text: event.target.value,
                })
            }
            placeholder="Votre paragraphe..."
            rows={1}
            className="w-full h-auto overflow-hidden resize-none border-0 bg-transparent px-0 py-0 text-lg leading-9 text-[#2b2824] placeholder:text-[#b8afa2] outline-none focus:outline-none"
        />
    );
}
