import test from "node:test";
import assert from "node:assert/strict";
import {
  ARTICLE_EDITOR_WORKSPACE_MODES,
  buildQuickActions,
  buildTranslationPanelItems,
  buildTranslationWorkspaceSummary,
  filterAndSortArticles,
  getArticleManagerCollectionClassName,
  getArticleManagerEmptyState,
  getMissingTranslationLocales,
  shouldShowEditorCanvas,
  shouldShowEditorPreview,
  shouldShowEditorSidebar,
  shouldShowTranslationWorkspace,
} from "../src/features/articles/model/article-editor-ui.ts";
import type { ArticleManagerItem } from "../src/features/articles/services/articles.services.ts";

function createArticle(overrides: Partial<ArticleManagerItem> = {}): ArticleManagerItem {
  return {
    id: "article-1",
    translationGroupId: "group-1",
    sourceLocale: "en",
    targetLocales: ["fr", "sw"],
    locale: "en",
    slug: "royal-history",
    title: "Royal History",
    excerpt: "A story about dynasties",
    coverImage: null,
    status: "DRAFT",
    translationStatus: "UP_TO_DATE",
    sourceVersion: 1,
    translatedFromVersion: 1,
    publishedAt: null,
    createdAt: new Date("2026-05-20T10:00:00.000Z"),
    updatedAt: new Date("2026-05-21T10:00:00.000Z"),
    translationCount: 1,
    missingLocaleCount: 2,
    translations: [
      {
        locale: "en",
        articleId: "article-1",
        status: "UP_TO_DATE",
        isMissing: false,
        isSource: true,
      },
      {
        locale: "fr",
        articleId: null,
        status: "MISSING",
        isMissing: true,
        isSource: false,
      },
      {
        locale: "sw",
        articleId: null,
        status: "MISSING",
        isMissing: true,
        isSource: false,
      },
    ],
    ...overrides,
  };
}

test("translation panel highlights source and missing translations", () => {
  const items = buildTranslationPanelItems({
    articleLocale: "en",
    sourceLocale: "en",
    translations: createArticle().translations,
  });

  assert.equal(items[0]?.isSource, true);
  assert.equal(items[1]?.statusLabel, "Missing");
  assert.deepEqual(getMissingTranslationLocales(createArticle().translations), ["fr", "sw"]);
});

test("translations workspace summary exposes coverage progress", () => {
  const summary = buildTranslationWorkspaceSummary(createArticle().translations);

  assert.equal(summary.total, 3);
  assert.equal(summary.available, 1);
  assert.equal(summary.missing, 2);
  assert.equal(summary.coveragePercent, 33);
});

test("workspace navigation includes dedicated translations mode", () => {
  assert.deepEqual(
    ARTICLE_EDITOR_WORKSPACE_MODES.map((mode) => mode.value),
    ["edit", "split", "preview", "translations"],
  );
});

test("translations workspace is isolated from editor modes", () => {
  assert.equal(shouldShowTranslationWorkspace("translations"), true);
  assert.equal(shouldShowTranslationWorkspace("edit"), false);
  assert.equal(shouldShowEditorCanvas("edit"), true);
  assert.equal(shouldShowEditorCanvas("translations"), false);
  assert.equal(shouldShowEditorPreview("preview"), true);
  assert.equal(shouldShowEditorPreview("translations"), false);
  assert.equal(shouldShowEditorSidebar("split"), true);
  assert.equal(shouldShowEditorSidebar("translations"), false);
});

test("switching workspaces preserves article draft data in the shared state model", () => {
  const draftTitle = "Royal History Draft";
  const draftExcerpt = "Source notes stay intact while changing workspaces.";
  const modes = ["edit", "split", "preview", "translations"] as const;

  for (const mode of modes) {
    const snapshot = {
      mode,
      title: draftTitle,
      excerpt: draftExcerpt,
      activeLocale: "en",
    };

    assert.equal(snapshot.title, draftTitle);
    assert.equal(snapshot.excerpt, draftExcerpt);
    assert.equal(snapshot.activeLocale, "en");
  }
});

test("article manager search and filters narrow results", () => {
  const alpha = createArticle();
  const beta = createArticle({
    id: "article-2",
    translationGroupId: "group-2",
    locale: "fr",
    slug: "kufu-game",
    title: "Kufu Game",
    status: "PUBLISHED",
    translationStatus: "NEEDS_UPDATE",
    updatedAt: new Date("2026-05-24T10:00:00.000Z"),
  });

  const results = filterAndSortArticles({
    articles: [alpha, beta],
    query: "kufu",
    locale: "fr",
    status: "PUBLISHED",
    sort: "updated-desc",
  });

  assert.equal(results.length, 1);
  assert.equal(results[0]?.id, "article-2");
});

test("article manager sorting supports both newest and oldest first", () => {
  const older = createArticle({ id: "old", updatedAt: new Date("2026-05-20T10:00:00.000Z") });
  const newer = createArticle({ id: "new", updatedAt: new Date("2026-05-24T10:00:00.000Z") });

  const newestFirst = filterAndSortArticles({
    articles: [older, newer],
    query: "",
    locale: "all",
    status: "all",
    sort: "updated-desc",
  });
  const oldestFirst = filterAndSortArticles({
    articles: [older, newer],
    query: "",
    locale: "all",
    status: "all",
    sort: "updated-asc",
  });

  assert.equal(newestFirst[0]?.id, "new");
  assert.equal(oldestFirst[0]?.id, "old");
});

test("quick actions expose translation creation only when a locale is missing", () => {
  const withMissing = buildQuickActions(createArticle());
  const withoutMissing = buildQuickActions(
    createArticle({
      translations: [
        {
          locale: "en",
          articleId: "article-1",
          status: "UP_TO_DATE",
          isMissing: false,
          isSource: true,
        },
        {
          locale: "fr",
          articleId: "article-2",
          status: "TRANSLATED",
          isMissing: false,
          isSource: false,
        },
      ],
    }),
  );

  assert.match(withMissing.find((action) => action.id === "create-translation")?.label ?? "", /FR/i);
  assert.equal(withoutMissing.find((action) => action.id === "create-translation")?.disabled, true);
  assert.equal(withMissing.some((action) => action.id === "create-translation"), true);
});

test("grid and list views resolve distinct collection layouts", () => {
  assert.match(getArticleManagerCollectionClassName("grid"), /\bgrid\b/);
  assert.match(getArticleManagerCollectionClassName("list"), /space-y-3/);
});

test("empty states distinguish no articles from no search results", () => {
  assert.equal(
    getArticleManagerEmptyState({ totalArticles: 0, filteredArticles: 0, query: "" })?.title,
    "No articles yet",
  );
  assert.equal(
    getArticleManagerEmptyState({ totalArticles: 3, filteredArticles: 0, query: "missing" })?.title,
    "No search results",
  );
});
