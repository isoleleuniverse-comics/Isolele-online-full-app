"use client";

import type { UnsupportedBlock } from "@/features/articles/model/article-blocks";
import type { ArticleBlockEditorProps } from "../article-block-registry";

export function UnsupportedBlockEditor({ block }: ArticleBlockEditorProps) {
    const unsupportedBlock = block as UnsupportedBlock;

    return (
        <div className="rounded-3xl border border-dashed border-amber-400 bg-[#1a1207]/50 p-4 text-sm text-amber-100">
            <p className="mb-3 font-medium text-amber-200">
                Ce bloc n&apos;est pas editable dans l&apos;editeur actuel.
            </p>
            <pre className="overflow-x-auto rounded-lg bg-[#0d0a06] p-3 text-xs text-[#d8c5a6]">
                {JSON.stringify(unsupportedBlock.raw ?? unsupportedBlock, null, 2)}
            </pre>
        </div>
    );
}
