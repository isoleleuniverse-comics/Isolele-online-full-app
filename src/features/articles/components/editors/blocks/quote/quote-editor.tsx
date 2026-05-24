"use client";

import type { QuoteBlock } from "@/features/articles/model/article-blocks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function QuoteBlockEditor({
    block,
    onUpdate,
}: ArticleBlockEditorProps) {
    const quoteBlock = block as QuoteBlock;

    return (
        <div className="space-y-4">
            <Textarea
                value={quoteBlock.text}
                onChange={(event) =>
                    onUpdate({
                        ...quoteBlock,
                        text: event.target.value,
                    })
                }
                placeholder="Citation"
                className="min-h-32 resize-y border-0 bg-transparent px-0 py-0 font-serif text-3xl font-light italic leading-tight text-[#f2e9dd] shadow-none focus-visible:ring-0"
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
                className="border-white/10 bg-white/[0.03] text-[#f4efe7]"
            />
        </div>
    );
}
