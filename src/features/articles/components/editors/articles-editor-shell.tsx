"use client";

import { useId, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
    createArticleBlock,
    type ArticleBlock,
    type ArticleBlockType,
} from "@/features/articles/model/article-blocks";
import {
    deleteArticleAction,
    updateArticleAction,
    updateArticleStatusAction,
} from "@/features/articles/actions/update-artilces";
import { cn } from "@/shared/lib/utils";
import { ArticleEditorProvider } from "./articles-editor-context";
import { ArticlesEditorCanvas } from "./articles-editor-canvas";
import { ArticlesEditorPreview } from "./articles-editor-preview";
import { ArticlesEditorSidebar } from "./articles-editor-sidebar";
import { ArticlesEditorTopbar } from "./articles-editor-topbar";
import type {
    ArticleEditorContextValue,
    ArticleEditorProps,
    ArticleEditorSidebarPanel,
} from "./articles-editor-types";

function withNewId(block: ArticleBlock): ArticleBlock {
    return {
        ...block,
        id: globalThis.crypto?.randomUUID?.() ?? `${block.type}-${Date.now()}`,
    };
}

export function ArticlesEditorShell(props: ArticleEditorProps) {
    const router = useRouter();
    const [title, setTitle] = useState(props.initialTitle);
    const [excerpt, setExcerpt] = useState(props.initialExcerpt);
    const [coverImage, setCoverImage] = useState(props.initialCoverImage ?? "");
    const [seoTitle, setSeoTitle] = useState(props.initialSeoTitle ?? "");
    const [seoDescription, setSeoDescription] = useState(props.initialSeoDescription ?? "");
    const [status, setStatus] = useState(props.initialStatus);
    const [blocks, setBlocks] = useState(props.initialBlocks);
    const [previewMode, setPreviewMode] = useState<"edit" | "split" | "preview">("split");
    const [activeSidebarPanel, setActiveSidebarPanel] =
        useState<ArticleEditorSidebarPanel>("structure");
    const [focusedBlockId, setFocusedBlockId] = useState<string | null>(props.initialBlocks[0]?.id ?? null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [activityMessage, setActivityMessage] = useState<string | null>(null);
    const [isSaving, startSaveTransition] = useTransition();
    const [isStatusPending, startStatusTransition] = useTransition();
    const [isDeleting, startDeleteTransition] = useTransition();
    const [isUploading, startUploadTransition] = useTransition();
    const coverImageInputId = useId();

    function focusBlock(id: string) {
        setFocusedBlockId(id);
        setActiveSidebarPanel("structure");
        const element = document.getElementById(`block-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    function addBlock(type: ArticleBlockType, index?: number) {
        const nextBlock = createArticleBlock(type);
        setBlocks((current) => {
            if (typeof index !== "number" || index < 0 || index > current.length) {
                return [...current, nextBlock];
            }

            const next = [...current];
            next.splice(index, 0, nextBlock);
            return next;
        });
        setFocusedBlockId(nextBlock.id);
        setActiveSidebarPanel("structure");
        setActivityMessage(`Bloc ${type} ajoute.`);
    }

    function duplicateBlock(id: string) {
        setBlocks((current) => {
            const index = current.findIndex((block) => block.id === id);
            if (index === -1) return current;
            const clone = withNewId(current[index]);
            const next = [...current];
            next.splice(index + 1, 0, clone);
            setFocusedBlockId(clone.id);
            return next;
        });
        setActivityMessage("Bloc duplique.");
    }

    function removeBlock(id: string) {
        setBlocks((current) => current.filter((block) => block.id !== id));
        setFocusedBlockId((current) => (current === id ? null : current));
        setActivityMessage("Bloc supprime.");
    }

    function moveBlock(id: string, delta: number) {
        setBlocks((current) => {
            const index = current.findIndex((block) => block.id === id);
            if (index === -1) return current;

            const nextIndex = Math.max(0, Math.min(current.length - 1, index + delta));
            if (nextIndex === index) return current;

            const next = [...current];
            const [moved] = next.splice(index, 1);
            next.splice(nextIndex, 0, moved);
            return next;
        });
        setFocusedBlockId(id);
    }

    function updateBlock(block: ArticleBlock) {
        setBlocks((current) => current.map((item) => (item.id === block.id ? block : item)));
    }

    async function uploadImageFile(file: File, blockId?: string) {
        return new Promise<void>((resolve) => {
            startUploadTransition(async () => {
                setUploadError(null);

                const formData = new FormData();
                formData.append("file", file);
                formData.append("folder", "articles");

                try {
                    const response = await fetch("/api/uploads/images", {
                        method: "POST",
                        body: formData,
                    });

                    if (!response.ok) {
                        setUploadError("Impossible d'envoyer l'image pour le moment.");
                        resolve();
                        return;
                    }

                    const payload = (await response.json()) as { url: string };

                    if (blockId) {
                        setBlocks((current) =>
                            current.map((block) =>
                                block.id === blockId && block.type === "image"
                                    ? { ...block, url: payload.url }
                                    : block,
                            ),
                        );
                        setFocusedBlockId(blockId);
                    } else {
                        const nextBlock = {
                            ...createArticleBlock("image"),
                            url: payload.url,
                        } as ArticleBlock;
                        setBlocks((current) => [...current, nextBlock]);
                        setFocusedBlockId(nextBlock.id);
                    }

                    setActivityMessage("Image importee.");
                } catch {
                    setUploadError("Impossible d'envoyer l'image pour le moment.");
                } finally {
                    resolve();
                }
            });
        });
    }

    function saveArticle() {
        startSaveTransition(async () => {
            setActivityMessage(null);
            await updateArticleAction({
                id: props.id,
                locale: props.locale,
                title,
                excerpt,
                coverImage: coverImage.trim() || null,
                seoTitle: seoTitle.trim() || null,
                seoDescription: seoDescription.trim() || null,
                blocksJson: blocks,
            });
            setActivityMessage("Article sauvegarde.");
        });
    }

    function changeStatus(value: typeof status) {
        startStatusTransition(async () => {
            await updateArticleStatusAction({
                id: props.id,
                locale: props.locale,
                status: value,
            });
            setStatus(value);
            setActivityMessage(`Statut mis a jour: ${value}.`);
        });
    }

    function deleteArticle() {
        startDeleteTransition(async () => {
            await deleteArticleAction({
                id: props.id,
                locale: props.locale,
            });
            router.push(`/${props.locale}/admin/articles`);
            router.refresh();
        });
    }

    const contextValue: ArticleEditorContextValue = {
        id: props.id,
        locale: props.locale,
        articleLocale: props.articleLocale,
        title,
        setTitle,
        excerpt,
        setExcerpt,
        coverImage,
        setCoverImage,
        seoTitle,
        setSeoTitle,
        seoDescription,
        setSeoDescription,
        status,
        blocks,
        setBlocks,
        warnings: props.initialWarnings,
        previewMode,
        setPreviewMode,
        activeSidebarPanel,
        setActiveSidebarPanel,
        focusedBlockId,
        setFocusedBlockId,
        isSaving,
        isStatusPending,
        isDeleting,
        isUploading,
        uploadError,
        activityMessage,
        coverImageInputId,
        saveArticle,
        changeStatus,
        deleteArticle,
        triggerCoverImagePicker: () => {
            document.getElementById(coverImageInputId)?.click();
            setActiveSidebarPanel("media");
        },
        addBlock,
        duplicateBlock,
        removeBlock,
        moveBlock,
        updateBlock,
        focusBlock,
        uploadImageFile,
    };

    return (
        <ArticleEditorProvider value={contextValue}>
            <div className="h-screen overflow-hidden bg-[#121212] text-[#f2ede6]">
                <div className="flex h-full flex-col">
                    <ArticlesEditorTopbar />

                    <div className="flex min-h-0 flex-1 overflow-hidden">
                        <ArticlesEditorSidebar />

                        <main className="flex min-h-0 flex-1 overflow-hidden bg-[#181818]">
                            <div
                                className={cn(
                                    "flex min-h-0 flex-1 overflow-hidden",
                                    previewMode === "split" &&
                                        "xl:grid xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]",
                                )}
	                            >
	                                <ArticlesEditorCanvas />
	                                <ArticlesEditorPreview />
	                            </div>
	                        </main>
	                    </div>
	                </div>
	            </div>
        </ArticleEditorProvider>
    );
}
