import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ArticleStatus } from "@/generated/prisma";
import type { ArticleBlock, ArticleBlockType } from "../../model/article-blocks";

export type ArticleEditorPreviewMode = "edit" | "split" | "preview";
export type ArticleEditorSidebarPanel = "structure" | "seo" | "media";

export type ArticleEditorProps = {
    id: string;
    locale: string;
    articleLocale: string;
    initialTitle: string;
    initialExcerpt: string;
    initialCoverImage: string | null;
    initialSeoTitle: string | null;
    initialSeoDescription: string | null;
    initialBlocks: ArticleBlock[];
    initialStatus: ArticleStatus;
    initialWarnings: string[];
};

export type ArticleEditorContextValue = {
    id: string;
    locale: string;
    articleLocale: string;
    title: string;
    setTitle: (value: string) => void;
    excerpt: string;
    setExcerpt: (value: string) => void;
    coverImage: string;
    setCoverImage: (value: string) => void;
    seoTitle: string;
    setSeoTitle: (value: string) => void;
    seoDescription: string;
    setSeoDescription: (value: string) => void;
    status: ArticleStatus;
    blocks: ArticleBlock[];
    setBlocks: Dispatch<SetStateAction<ArticleBlock[]>>;
    warnings: string[];
    previewMode: ArticleEditorPreviewMode;
    setPreviewMode: (value: ArticleEditorPreviewMode) => void;
    activeSidebarPanel: ArticleEditorSidebarPanel;
    setActiveSidebarPanel: (value: ArticleEditorSidebarPanel) => void;
    focusedBlockId: string | null;
    setFocusedBlockId: (id: string | null) => void;
    isSaving: boolean;
    isStatusPending: boolean;
    isDeleting: boolean;
    isUploading: boolean;
    uploadError: string | null;
    activityMessage: string | null;
    coverImageInputId: string;
    saveArticle: () => void;
    changeStatus: (value: ArticleStatus) => void;
    deleteArticle: () => void;
    triggerCoverImagePicker: () => void;
    addBlock: (type: ArticleBlockType, index?: number) => void;
    duplicateBlock: (id: string) => void;
    removeBlock: (id: string) => void;
    moveBlock: (id: string, delta: number) => void;
    updateBlock: (block: ArticleBlock) => void;
    focusBlock: (id: string) => void;
    uploadImageFile: (file: File, blockId?: string) => Promise<void>;
};

export type ArticleEditorProviderProps = {
    value: ArticleEditorContextValue;
    children: ReactNode;
};
