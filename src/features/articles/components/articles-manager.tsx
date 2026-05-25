"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Archive,
  ChevronDown,
  Grid2X2,
  Languages,
  List,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  deleteArticleAction,
  duplicateArticleAction,
  getArticleManagerItemsAction,
  translateArticleAction,
  updateArticleStatusAction,
} from "@/features/articles/actions/update-artilces";
import {
  buildQuickActions,
  filterAndSortArticles,
  getArticleManagerCollectionClassName,
  getArticleManagerEmptyState,
  getArticleStatusLabel,
  getAvailableLanguageOptions,
  getMissingTranslationLocales,
  getTranslationStatusLabel,
  type ArticleManagerSort,
  type ArticleManagerView,
  type QuickActionId,
} from "@/features/articles/model/article-editor-ui";
import { getLanguageByCode } from "@/features/languages/config/languages";
import { cn } from "@/shared/lib/utils";
import type { ArticleManagerItem } from "../services/articles.services";

type SerializableArticleManagerItem = Omit<
  ArticleManagerItem,
  "createdAt" | "updatedAt" | "publishedAt"
> & {
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

type Props = {
  adminLocale: string;
  initialArticles: SerializableArticleManagerItem[];
};

function hydrateArticles(items: SerializableArticleManagerItem[]): ArticleManagerItem[] {
  return items.map((item) => ({
    ...item,
    createdAt: new Date(item.createdAt),
    updatedAt: new Date(item.updatedAt),
    publishedAt: item.publishedAt ? new Date(item.publishedAt) : null,
  }));
}

const dateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeStyle: "short",
});

export function ArticlesManager({ adminLocale, initialArticles }: Props) {
  const router = useRouter();
  const [articles, setArticles] = useState<ArticleManagerItem[]>(() => hydrateArticles(initialArticles));
  const [query, setQuery] = useState("");
  const [localeFilter, setLocaleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sort, setSort] = useState<ArticleManagerSort>("updated-desc");
  const [view, setView] = useState<ArticleManagerView>("list");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filteredArticles = filterAndSortArticles({
    articles,
    query,
    locale: localeFilter,
    status: statusFilter,
    sort,
  });

  const emptyState = getArticleManagerEmptyState({
    totalArticles: articles.length,
    filteredArticles: filteredArticles.length,
    query,
  });

  async function refreshArticles() {
    const nextItems = await getArticleManagerItemsAction();
    setArticles(
      hydrateArticles(
        nextItems.map((item) => ({
          ...item,
          createdAt: item.createdAt instanceof Date ? item.createdAt.toISOString() : String(item.createdAt),
          updatedAt: item.updatedAt instanceof Date ? item.updatedAt.toISOString() : String(item.updatedAt),
          publishedAt:
            item.publishedAt instanceof Date
              ? item.publishedAt.toISOString()
              : item.publishedAt
                ? String(item.publishedAt)
                : null,
        })),
      ),
    );
  }

  function handleQuickAction(article: ArticleManagerItem, action: QuickActionId) {
    setOpenMenuId(null);

    if (action === "edit") {
      router.push(`/${adminLocale}/admin/articles/${article.id}`);
      return;
    }

    if (action === "preview") {
      window.open(`/${article.locale}/articles/${article.slug}`, "_blank", "noopener,noreferrer");
      return;
    }

    startTransition(async () => {
      if (action === "duplicate") {
        await duplicateArticleAction({ id: article.id, locale: adminLocale });
      }

      if (action === "create-translation") {
        const targetLocale = getMissingTranslationLocales(article.translations)[0];
        const sourceArticleId =
          article.locale === article.sourceLocale
            ? article.id
            : (article.translations.find((translation) => translation.locale === article.sourceLocale)?.articleId ??
              null);

        if (targetLocale && sourceArticleId) {
          const payload = await translateArticleAction({
            id: sourceArticleId,
            adminLocale,
            targetLocale,
          });
          router.push(`/${adminLocale}/admin/articles/${payload.id}`);
        }
      }

      if (action === "publish") {
        await updateArticleStatusAction({ id: article.id, locale: adminLocale, status: "PUBLISHED" });
      }

      if (action === "archive") {
        await updateArticleStatusAction({ id: article.id, locale: adminLocale, status: "ARCHIVED" });
      }

      if (action === "delete") {
        if (!window.confirm("Delete this article? This cannot be undone.")) {
          return;
        }
        await deleteArticleAction({ id: article.id, locale: adminLocale });
      }

      await refreshArticles();
    });
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(210,178,109,0.08),_transparent_35%),linear-gradient(180deg,#111111_0%,#171717_100%)] px-4 py-6 text-[#f4eee7] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-[#191919]/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#aa9d8f]">Editorial library</p>
              <h1 className="text-3xl font-semibold text-[#faf4eb]">Articles</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/${adminLocale}/admin/articles/new`}
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#d2b26d] px-4 text-sm font-medium text-[#16120d] transition hover:bg-[#e0c07c]"
              >
                New article
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8f8478]" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, slug, or excerpt"
                className="h-11 rounded-full border-white/10 bg-[#111111] pl-10 text-[#f5eee3]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <select
                value={localeFilter}
                onChange={(event) => setLocaleFilter(event.target.value)}
                className="h-11 rounded-full border border-white/10 bg-[#111111] px-4 text-sm text-[#efe5d9]"
              >
                <option value="all">All locales</option>
                {getAvailableLanguageOptions().map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.nativeName}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="h-11 rounded-full border border-white/10 bg-[#111111] px-4 text-sm text-[#efe5d9]"
              >
                <option value="all">All statuses</option>
                <option value="DRAFT">Draft</option>
                <option value="REVIEW">In review</option>
                <option value="PUBLISHED">Published</option>
                <option value="ARCHIVED">Archived</option>
                <option value="NEEDS_UPDATE">Needs update</option>
                <option value="UP_TO_DATE">Up to date</option>
              </select>

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as ArticleManagerSort)}
                className="h-11 rounded-full border border-white/10 bg-[#111111] px-4 text-sm text-[#efe5d9]"
              >
                <option value="updated-desc">Newest first</option>
                <option value="updated-asc">Oldest first</option>
              </select>

              <div className="inline-flex rounded-full border border-white/10 bg-[#111111] p-1">
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition",
                    view === "list" ? "bg-[#d2b26d] text-[#16120d]" : "text-[#d5c8ba]",
                  )}
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition",
                    view === "grid" ? "bg-[#d2b26d] text-[#16120d]" : "text-[#d5c8ba]",
                  )}
                >
                  <Grid2X2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {emptyState ? (
          <div className="rounded-[28px] border border-dashed border-white/10 bg-[#171717] p-10 text-center">
            <h2 className="text-2xl font-semibold text-[#faf3e9]">{emptyState.title}</h2>
            <p className="mt-2 text-sm text-[#a99d90]">{emptyState.description}</p>
          </div>
        ) : (
          <div className={cn("gap-4", getArticleManagerCollectionClassName(view))}>
            {filteredArticles.map((article) => {
              const currentLanguage = getLanguageByCode(article.locale);
              const missingLocales = getMissingTranslationLocales(article.translations);
              const quickActions = buildQuickActions(article);

              return (
                <article
                  key={article.id}
                  className={cn(
                    "relative overflow-hidden rounded-[28px] border border-white/10 bg-[#191919] transition hover:border-white/20 hover:bg-[#1d1d1d]",
                    view === "list" && "flex flex-col md:flex-row",
                  )}
                >
                  <div className={cn("bg-[#121212]", view === "list" ? "md:w-52" : "aspect-[16/10] w-full")}>
                    {article.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-40 items-center justify-center bg-[linear-gradient(135deg,#2a241a,#141414)] text-[#8d7f6e]">
                        <Archive className="h-6 w-6" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-white/10 bg-[#111111] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d8ccbe]">
                            {(currentLanguage?.flag ?? "🌐") + " " + article.locale.toUpperCase()}
                          </span>
                          <span className="rounded-full border border-[#5f4b20] bg-[#2e2516] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#e6ca84]">
                            {getArticleStatusLabel(article.status)}
                          </span>
                          <span className="rounded-full border border-[#36543c] bg-[#1b2d20] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9ed4ac]">
                            {getTranslationStatusLabel(article.translationStatus)}
                          </span>
                        </div>
                        <h2 className="truncate text-xl font-semibold text-[#f7f1e8]">{article.title}</h2>
                        <p className="mt-1 text-sm text-[#8f8378]">{article.slug}</p>
                      </div>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenMenuId((current) => (current === article.id ? null : article.id))}
                          className="rounded-full border border-white/10 bg-[#111111] p-2 text-[#dbcfc2] transition hover:border-white/20 hover:bg-white/5"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>

                        {openMenuId === article.id ? (
                          <div className="absolute right-0 top-12 z-20 min-w-56 rounded-2xl border border-white/10 bg-[#121212] p-2 shadow-2xl">
                            {quickActions.map((action) => (
                              <button
                                key={action.id}
                                type="button"
                                disabled={action.disabled || isPending}
                                onClick={() => handleQuickAction(article, action.id)}
                                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-[#efe4d7] transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <span>{action.label}</span>
                                {action.id === "create-translation" ? <Languages className="h-4 w-4 text-[#d2b26d]" /> : null}
                                {action.id === "publish" || action.id === "archive" ? <ChevronDown className="h-4 w-4 text-[#8e8276]" /> : null}
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm text-[#b6a99b]">
                      {article.excerpt || "No excerpt yet for this article."}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {article.translations.map((translation) => {
                        const language = getLanguageByCode(translation.locale);
                        return (
                          <span
                            key={translation.locale}
                            className={cn(
                              "rounded-full border px-2.5 py-1 text-[11px]",
                              translation.isMissing
                                ? "border-dashed border-white/10 text-[#968a7c]"
                                : translation.isSource
                                  ? "border-[#d2b26d]/40 bg-[#d2b26d]/10 text-[#e5c887]"
                                  : "border-white/10 bg-[#121212] text-[#ddd0c2]",
                            )}
                          >
                            {(language?.flag ?? "🌐") + " " + translation.locale.toUpperCase()}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4 text-sm text-[#9c9084]">
                      <div>
                        Updated {dateFormatter.format(article.updatedAt)}
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{article.translationCount} version(s)</span>
                        <span>{missingLocales.length} missing</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
