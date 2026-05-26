import { getEnabledLanguages, getLanguageByCode } from "../../languages/config/languages.ts";
import type { ArticleStatus, TranslationStatus } from "../../../generated/prisma/client";
import type { TranslationLocaleSummary } from "./article-translation-workflow";
import type { ArticleManagerItem } from "../services/articles.services";

export type ArticleManagerView = "grid" | "list";
export type ArticleManagerSort = "updated-desc" | "updated-asc";
export type ArticleEditorWorkspaceMode = "edit" | "split" | "preview" | "translations";
export type QuickActionId =
  | "edit"
  | "preview"
  | "duplicate"
  | "create-translation"
  | "publish"
  | "archive"
  | "delete";

export const ARTICLE_EDITOR_WORKSPACE_MODES = [
  { value: "edit", label: "Edit" },
  { value: "split", label: "Split" },
  { value: "preview", label: "Preview" },
  { value: "translations", label: "Translations" },
] as const satisfies ReadonlyArray<{ value: ArticleEditorWorkspaceMode; label: string }>;

export function getArticleStatusLabel(status: ArticleStatus) {
  if (status === "DRAFT") return "Draft";
  if (status === "REVIEW") return "In review";
  if (status === "PUBLISHED") return "Published";
  return "Archived";
}

export function getTranslationStatusLabel(status: TranslationStatus | "MISSING") {
  if (status === "MACHINE_TRANSLATED") return "Translated";
  if (status === "NEEDS_REVIEW") return "Reviewing";
  if (status === "UP_TO_DATE") return "Up to date";
  if (status === "OUTDATED") return "Needs update";
  return "Missing";
}

export function getTranslationStatusTone(status: TranslationStatus | "MISSING") {
  if (status === "UP_TO_DATE") return "success";
  if (status === "MACHINE_TRANSLATED") return "accent";
  if (status === "NEEDS_REVIEW") return "warning";
  if (status === "OUTDATED") return "danger";
  return "ghost";
}

export function getMissingTranslationLocales(translations: TranslationLocaleSummary[]) {
  return translations.filter((translation) => translation.isMissing).map((translation) => translation.locale);
}

export function buildTranslationPanelItems(params: {
  articleLocale: string;
  sourceLocale: string;
  translations: TranslationLocaleSummary[];
}) {
  return params.translations.map((translation) => {
    const language = getLanguageByCode(translation.locale);
    return {
      locale: translation.locale,
      languageName: language?.name ?? translation.locale.toUpperCase(),
      nativeName: language?.nativeName ?? translation.locale.toUpperCase(),
      flag: language?.flag ?? "🌐",
      isActive: translation.locale === params.articleLocale,
      isSource: translation.locale === params.sourceLocale,
      isMissing: translation.isMissing,
      status: translation.status,
      statusLabel: translation.isMissing ? "Missing" : getTranslationStatusLabel(translation.status),
    };
  });
}

export function buildTranslationWorkspaceSummary(translations: TranslationLocaleSummary[]) {
  const availableTranslations = translations.filter((translation) => !translation.isMissing);
  const missingTranslations = translations.filter((translation) => translation.isMissing);
  const upToDateCount = translations.filter((translation) => translation.status === "UP_TO_DATE").length;
  const coveragePercent =
    translations.length === 0 ? 0 : Math.round((availableTranslations.length / translations.length) * 100);

  return {
    total: translations.length,
    available: availableTranslations.length,
    missing: missingTranslations.length,
    upToDate: upToDateCount,
    coveragePercent,
  };
}

export function shouldShowTranslationWorkspace(mode: ArticleEditorWorkspaceMode) {
  return mode === "translations";
}

export function shouldShowEditorCanvas(mode: ArticleEditorWorkspaceMode) {
  return mode === "edit" || mode === "split";
}

export function shouldShowEditorPreview(mode: ArticleEditorWorkspaceMode) {
  return mode === "split" || mode === "preview";
}

export function shouldShowEditorSidebar(mode: ArticleEditorWorkspaceMode) {
  return mode !== "translations";
}

export function buildQuickActions(item: ArticleManagerItem) {
  const missingTranslations = getMissingTranslationLocales(item.translations);

  return [
    { id: "edit", label: "Edit" },
    { id: "preview", label: "Preview" },
    { id: "duplicate", label: "Duplicate" },
    {
      id: "create-translation",
      label: missingTranslations[0] ? `Create ${missingTranslations[0].toUpperCase()}` : "Create translation",
      disabled: missingTranslations.length === 0,
    },
    { id: "publish", label: "Publish" },
    { id: "archive", label: "Archive" },
    { id: "delete", label: "Delete" },
  ] satisfies Array<{ id: QuickActionId; label: string; disabled?: boolean }>;
}

export function filterAndSortArticles(params: {
  articles: ArticleManagerItem[];
  query: string;
  locale: string;
  status: string;
  sort: ArticleManagerSort;
}) {
  const normalizedQuery = params.query.trim().toLowerCase();

  const filtered = params.articles.filter((article) => {
    const matchesQuery =
      !normalizedQuery ||
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.slug.toLowerCase().includes(normalizedQuery) ||
      (article.excerpt ?? "").toLowerCase().includes(normalizedQuery);
    const matchesLocale = params.locale === "all" || article.locale === params.locale;
    const matchesStatus =
      params.status === "all" ||
      article.status === params.status ||
      article.translationStatus === params.status;

    return matchesQuery && matchesLocale && matchesStatus;
  });

  return filtered.sort((left, right) => {
    if (params.sort === "updated-asc") {
      return left.updatedAt.getTime() - right.updatedAt.getTime();
    }
    return right.updatedAt.getTime() - left.updatedAt.getTime();
  });
}

export function getArticleManagerEmptyState(params: {
  totalArticles: number;
  filteredArticles: number;
  query: string;
}) {
  if (params.totalArticles === 0) {
    return {
      title: "No articles yet",
      description: "Create your first story to start building the editorial library.",
    };
  }

  if (params.filteredArticles === 0 && params.query.trim()) {
    return {
      title: "No search results",
      description: "Try a different keyword, locale, or status filter.",
    };
  }

  if (params.filteredArticles === 0) {
    return {
      title: "Nothing matches these filters",
      description: "Adjust the current view to surface more articles.",
    };
  }

  return null;
}

export function getArticleManagerCollectionClassName(view: ArticleManagerView) {
  return view === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3" : "space-y-3";
}

export function getAvailableLanguageOptions() {
  return getEnabledLanguages().map((language) => ({
    code: language.code,
    label: language.name,
    nativeName: language.nativeName,
    flag: language.flag,
  }));
}
