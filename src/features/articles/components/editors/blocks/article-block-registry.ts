import type { ComponentType } from "react";
import type { ArticleBlock, ArticleBlockType } from "@/features/articles/model/article-blocks";
import { HeadingBlockEditor } from "./heading/heading-editor";
import { ImageBlockEditor } from "./image/image-editor";
import { ParagraphBlockEditor } from "./paragraph/paragraph-editor";
import { QuoteBlockEditor } from "./quote/quote-editor";
import { UnsupportedBlockEditor } from "./unsupported/unsupported-editor";

export type ArticleBlockEditorProps = {
    block: ArticleBlock;
    active: boolean;
    onUpdate: (block: ArticleBlock) => void;
    onUploadImage?: (file: File) => void;
};

export type ArticleBlockRegistryEntry = {
    label: string;
    editor: ComponentType<ArticleBlockEditorProps>;
};

export const articleBlockRegistry: Record<ArticleBlockType, ArticleBlockRegistryEntry> = {
    heading: {
        label: "Titre",
        editor: HeadingBlockEditor,
    },
    paragraph: {
        label: "Paragraphe",
        editor: ParagraphBlockEditor,
    },
    image: {
        label: "Image",
        editor: ImageBlockEditor,
    },
    quote: {
        label: "Citation",
        editor: QuoteBlockEditor,
    },
    video: {
        label: "Video",
        editor: UnsupportedBlockEditor,
    },
    divider: {
        label: "Separateur",
        editor: UnsupportedBlockEditor,
    },
    cta: {
        label: "CTA",
        editor: UnsupportedBlockEditor,
    },
    unsupported: {
        label: "Bloc non supporte",
        editor: UnsupportedBlockEditor,
    },
};
