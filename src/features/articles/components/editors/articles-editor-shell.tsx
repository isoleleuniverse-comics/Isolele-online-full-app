"use client";

import { useId, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  deleteArticleAction,
  duplicateArticleAction,
  translateArticleAction,
  switchArticleTranslationAction,
  updateArticleTranslationSettingsAction,
  updateArticleAction,
  updateArticleStatusAction,
} from "@/features/articles/actions/update-artilces";
import {
  shouldShowEditorPreview,
  shouldShowEditorSidebar,
  shouldShowTranslationWorkspace,
} from "@/features/articles/model/article-editor-ui";
import {
  duplicateArticleBlock,
  normalizeArticleBlocksDetailed,
  type ArticleBlock,
  type ArticleBlockType,
} from "@/features/articles/model/article-blocks";
import {
  getTranslationStatusAfterManualEdit,
  type TranslationLocaleSummary,
} from "@/features/articles/model/article-translation-workflow";
import { getEnabledLanguages, type LanguageCode } from "@/features/languages/config/languages";
import { cn } from "@/shared/lib/utils";
import { ArticleEditorProvider } from "./articles-editor-context";
import { ArticlesEditorCanvas } from "./articles-editor-canvas";
import { ArticlesEditorPreview } from "./articles-editor-preview";
import { ArticlesEditorSidebar } from "./articles-editor-sidebar";
import { ArticlesEditorTranslationPanel } from "./articles-editor-translation-panel";
import { ArticlesEditorTopbar } from "./articles-editor-topbar";
import type {
  ArticleEditorContextValue,
  ArticleEditorPreviewMode,
  ArticleEditorProps,
  ArticleEditorSidebarPanel,
} from "./articles-editor-types";
import { createArticleBlock } from "../../model/article-blocks";

export function ArticlesEditorShell(props: ArticleEditorProps) {
  const router = useRouter();
  const [articleId, setArticleId] = useState(props.id);
  const [translationGroupId, setTranslationGroupId] = useState(props.translationGroupId);
  const [articleLocale, setArticleLocale] = useState(props.articleLocale);
  const [sourceLocale, setSourceLocale] = useState(props.sourceLocale);
  const [targetLocales, setTargetLocales] = useState(props.targetLocales);
  const [translationStatus, setTranslationStatus] = useState(props.initialTranslationStatus);
  const [sourceVersion, setSourceVersion] = useState(props.initialSourceVersion);
  const [translatedFromVersion, setTranslatedFromVersion] = useState(props.initialTranslatedFromVersion);
  const [translations, setTranslations] = useState<TranslationLocaleSummary[]>(props.initialTranslations);
  const [title, setTitleState] = useState(props.initialTitle);
  const [excerpt, setExcerptState] = useState(props.initialExcerpt);
  const [coverImage, setCoverImageState] = useState(props.initialCoverImage ?? "");
  const [seoTitle, setSeoTitleState] = useState(props.initialSeoTitle ?? "");
  const [seoDescription, setSeoDescriptionState] = useState(props.initialSeoDescription ?? "");
  const [status, setStatus] = useState(props.initialStatus);
  const [blocks, setBlocks] = useState(props.initialBlocks);
  const [warnings, setWarnings] = useState(props.initialWarnings);
  const [previewMode, setPreviewMode] = useState<ArticleEditorPreviewMode>("split");
  const [activeSidebarPanel, setActiveSidebarPanel] =
    useState<ArticleEditorSidebarPanel>("structure");
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(props.initialBlocks[0]?.id ?? null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [activityMessage, setActivityMessage] = useState<string | null>(null);
  const [isSaving, startSaveTransition] = useTransition();
  const [isStatusPending, startStatusTransition] = useTransition();
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isUploading, startUploadTransition] = useTransition();
  const [isSwitchingLocale, startSwitchLocaleTransition] = useTransition();
  const [isTranslating, startTranslateTransition] = useTransition();
  const [isDuplicating, startDuplicateTransition] = useTransition();
  const coverImageInputId = useId();

  function updateTranslationMetadata(payload: {
    id: string;
    translationGroupId: string;
    articleLocale: string;
    sourceLocale: LanguageCode;
    targetLocales: LanguageCode[];
    translationStatus: ArticleEditorProps["initialTranslationStatus"];
    sourceVersion: number;
    translatedFromVersion: number | null;
    translations: TranslationLocaleSummary[];
  }) {
    setArticleId(payload.id);
    setTranslationGroupId(payload.translationGroupId);
    setArticleLocale(payload.articleLocale);
    setSourceLocale(payload.sourceLocale);
    setTargetLocales(payload.targetLocales);
    setTranslationStatus(payload.translationStatus);
    setSourceVersion(payload.sourceVersion);
    setTranslatedFromVersion(payload.translatedFromVersion);
    setTranslations(payload.translations);
  }

  function applyEditorPayload(payload: {
    id: string;
    translationGroupId: string;
    articleLocale: string;
    sourceLocale: LanguageCode;
    targetLocales: LanguageCode[];
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    seoTitle: string | null;
    seoDescription: string | null;
    blocksJson: unknown;
    status: ArticleEditorProps["initialStatus"];
    translationStatus: ArticleEditorProps["initialTranslationStatus"];
    sourceVersion: number;
    translatedFromVersion: number | null;
    translations: TranslationLocaleSummary[];
  }) {
    const normalized = normalizeArticleBlocksDetailed(payload.blocksJson);
    updateTranslationMetadata(payload);
    setTitleState(payload.title);
    setExcerptState(payload.excerpt ?? "");
    setCoverImageState(payload.coverImage ?? "");
    setSeoTitleState(payload.seoTitle ?? "");
    setSeoDescriptionState(payload.seoDescription ?? "");
    setBlocks(normalized.blocks);
    setWarnings(normalized.warnings);
    setStatus(payload.status);
    setFocusedBlockId(normalized.blocks[0]?.id ?? null);
    setActivityMessage(null);
    setUploadError(null);
  }

  function markTranslationAsReviewing() {
    setTranslationStatus((current) =>
      getTranslationStatusAfterManualEdit({
        articleLocale,
        sourceLocale,
        currentStatus: current,
      }),
    );
  }

  function setTitle(value: string) {
    setTitleState(value);
    markTranslationAsReviewing();
  }

  function setExcerpt(value: string) {
    setExcerptState(value);
    markTranslationAsReviewing();
  }

  function setCoverImage(value: string) {
    setCoverImageState(value);
    markTranslationAsReviewing();
  }

  function setSeoTitle(value: string) {
    setSeoTitleState(value);
    markTranslationAsReviewing();
  }

  function setSeoDescription(value: string) {
    setSeoDescriptionState(value);
    markTranslationAsReviewing();
  }

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
    markTranslationAsReviewing();
  }

  function duplicateBlock(id: string) {
    setBlocks((current) => {
      const index = current.findIndex((block) => block.id === id);
      if (index === -1) return current;
      const clone = duplicateArticleBlock(current[index]);
      const next = [...current];
      next.splice(index + 1, 0, clone);
      setFocusedBlockId(clone.id);
      return next;
    });
    setActivityMessage("Bloc duplique.");
    markTranslationAsReviewing();
  }

  function removeBlock(id: string) {
    setBlocks((current) => current.filter((block) => block.id !== id));
    setFocusedBlockId((current) => (current === id ? null : current));
    setActivityMessage("Bloc supprime.");
    markTranslationAsReviewing();
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
    markTranslationAsReviewing();
  }

  function updateBlock(block: ArticleBlock) {
    setBlocks((current) => current.map((item) => (item.id === block.id ? block : item)));
    markTranslationAsReviewing();
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
            setCoverImageState(payload.url);
          }

          setActivityMessage("Image importee.");
          markTranslationAsReviewing();
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
      const payload = await updateArticleAction({
        id: articleId,
        locale: props.locale,
        title,
        excerpt,
        coverImage: coverImage.trim() || null,
        seoTitle: seoTitle.trim() || null,
        seoDescription: seoDescription.trim() || null,
        blocksJson: blocks,
      });
      applyEditorPayload(payload);
      setActivityMessage("Article sauvegarde.");
    });
  }

  function changeStatus(value: typeof status) {
    startStatusTransition(async () => {
      const payload = await updateArticleStatusAction({
        id: articleId,
        locale: props.locale,
        status: value,
      });
      applyEditorPayload(payload);
      setStatus(value);
      setActivityMessage(`Statut mis a jour: ${value}.`);
    });
  }

  function deleteArticle() {
    startDeleteTransition(async () => {
      await deleteArticleAction({
        id: articleId,
        locale: props.locale,
      });
      router.push(`/${props.locale}/admin/articles`);
      router.refresh();
    });
  }

  async function switchLocale(locale: LanguageCode) {
    if (locale === articleLocale) return;

    startSwitchLocaleTransition(async () => {
      const payload = await switchArticleTranslationAction({
        id: articleId,
        adminLocale: props.locale,
        targetLocale: locale,
      });
      applyEditorPayload(payload);
      window.history.replaceState(null, "", `/${props.locale}/admin/articles/${payload.id}`);
      setActivityMessage(`Version ${locale.toUpperCase()} chargee.`);
    });
  }

  function selectSourceLocale(locale: LanguageCode) {
    startSaveTransition(async () => {
      const nextTargetLocales = getEnabledLanguages()
        .map((language) => language.code)
        .filter((code) => code !== locale);
      const payload = await updateArticleTranslationSettingsAction({
        id: articleId,
        adminLocale: props.locale,
        sourceLocale: locale,
        targetLocales: nextTargetLocales,
      });
      applyEditorPayload(payload);
      setActivityMessage(`Source language set to ${locale.toUpperCase()}.`);
    });
  }

  function toggleTargetLocale(locale: LanguageCode) {
    startSaveTransition(async () => {
      const nextTargetLocales = targetLocales.includes(locale)
        ? targetLocales.filter((item) => item !== locale)
        : [...targetLocales, locale];
      const payload = await updateArticleTranslationSettingsAction({
        id: articleId,
        adminLocale: props.locale,
        sourceLocale,
        targetLocales: nextTargetLocales,
      });
      applyEditorPayload(payload);
      setActivityMessage(`Target languages updated.`);
    });
  }

  function createTranslation(locale: LanguageCode) {
    startTranslateTransition(async () => {
      const sourceArticleId =
        articleLocale === sourceLocale
          ? articleId
          : (translations.find((translation) => translation.locale === sourceLocale)?.articleId ?? null);

      if (!sourceArticleId) {
        setActivityMessage("Select a source version that already exists before translating.");
        return;
      }

      const payload = await translateArticleAction({
        id: sourceArticleId,
        adminLocale: props.locale,
        targetLocale: locale,
      });
      applyEditorPayload(payload);
      setActivityMessage(`Version ${locale.toUpperCase()} creee.`);
    });
  }

  function duplicateArticle() {
    startDuplicateTransition(async () => {
      const payload = await duplicateArticleAction({
        id: articleId,
        locale: props.locale,
      });
      applyEditorPayload(payload);
      window.history.replaceState(null, "", `/${props.locale}/admin/articles/${payload.id}`);
      setActivityMessage("Copie de l'article prete.");
    });
  }

  const contextValue: ArticleEditorContextValue = {
    id: articleId,
    translationGroupId,
    locale: props.locale,
    articleLocale,
    sourceLocale,
    targetLocales,
    translationStatus,
    sourceVersion,
    translatedFromVersion,
    translations,
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
    warnings,
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
    isSwitchingLocale,
    isTranslating,
    isDuplicating,
    uploadError,
    activityMessage,
    coverImageInputId,
    saveArticle,
    changeStatus,
    deleteArticle,
    switchLocale,
    selectSourceLocale,
    toggleTargetLocale,
    createTranslation,
    duplicateArticle,
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
            {shouldShowEditorSidebar(previewMode) ? <ArticlesEditorSidebar /> : null}

            <main className="flex min-h-0 flex-1 overflow-hidden bg-[#181818]">
              {shouldShowTranslationWorkspace(previewMode) ? (
                <div className="flex min-h-0 flex-1 overflow-y-auto p-4 lg:p-6">
                  <ArticlesEditorTranslationPanel />
                </div>
              ) : (
                <div
                  className={cn(
                    "flex min-h-0 flex-1 overflow-hidden transition-all duration-300",
                    previewMode === "split" &&
                      "xl:grid xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]",
                  )}
                >
                  <ArticlesEditorCanvas />
                  {shouldShowEditorPreview(previewMode) ? <ArticlesEditorPreview /> : null}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </ArticleEditorProvider>
  );
}
