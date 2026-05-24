"use client";

import type { ParagraphBlock } from "@/features/articles/model/article-blocks";
import { Textarea } from "@/components/ui/textarea";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function ParagraphBlockEditor({
    block,
    onUpdate,
}: ArticleBlockEditorProps) {
    const paragraphBlock = block as ParagraphBlock;

    return (
        <Textarea
            value={paragraphBlock.text}
            onChange={(event) =>
                onUpdate({
                    ...paragraphBlock,
                    text: event.target.value,
                })
            }
            placeholder="Votre paragraphe..."
            className="min-h-40 resize-y border-0 bg-transparent px-0 py-0 text-lg leading-9 text-[#ece4d8] shadow-none focus-visible:ring-0"
        />
    );
}
