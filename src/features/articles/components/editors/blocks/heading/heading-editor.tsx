"use client";

import type { HeadingBlock } from "@/features/articles/model/article-blocks";
import { Input } from "@/components/ui/input";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function HeadingBlockEditor({
    block,
    onUpdate,
}: ArticleBlockEditorProps) {
    const headingBlock = block as HeadingBlock;

    return (
        <div className="space-y-4">
            <Input
                value={headingBlock.text}
                onChange={(event) =>
                    onUpdate({
                        ...headingBlock,
                        text: event.target.value,
                    })
                }
                placeholder="Titre de section"
                className="h-auto border-0 bg-transparent px-0 py-0 font-serif text-4xl font-light text-[#faf4eb] shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center gap-3">
                <label className="text-sm text-[#9d9386]">Niveau</label>
                <select
                    value={headingBlock.level ?? 2}
                    onChange={(event) =>
                        onUpdate({
                            ...headingBlock,
                            level: Number(event.target.value) as 1 | 2 | 3,
                        })
                    }
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#f4efe7]"
                >
                    <option value={1}>H1</option>
                    <option value={2}>H2</option>
                    <option value={3}>H3</option>
                </select>
            </div>
        </div>
    );
}
