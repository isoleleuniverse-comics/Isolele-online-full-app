import test from "node:test";
import assert from "node:assert/strict";
import {
  applyTranslatedText,
  buildTranslationLocaleSummaries,
  buildTranslationPlan,
  collectBlockEntries,
  getTranslatableBlockSignature,
  getTranslationStatusAfterManualEdit,
  getTranslationStatusAfterSourceUpdate,
  getTranslationStatusAfterSync,
  mergeTranslatedBlocks,
  resolveTranslationByLocale,
} from "../src/features/articles/model/article-translation-workflow.ts";
import type { ParagraphBlock } from "../src/features/articles/model/article-blocks.ts";

function paragraph(
  id: string,
  translationKey: string,
  text: string,
  extras?: Partial<ParagraphBlock>,
): ParagraphBlock {
  return {
    id,
    type: "paragraph" as const,
    translationKey,
    text,
    ...extras,
  };
}

test("only changed blocks are selected for translation", () => {
  const previousSource = paragraph("src-1", "tk-1", "Old source");
  const currentSource = paragraph("src-1", "tk-1", "New source");
  const unchangedSource = paragraph("src-2", "tk-2", "Stable source");
  const manualSource = paragraph("src-3", "tk-3", "Manual source updated");

  const existingTranslation = [
    paragraph("fr-1", "tk-1", "Ancienne traduction", {
      sourceFingerprint: getTranslatableBlockSignature(previousSource) ?? undefined,
    }),
    paragraph("fr-2", "tk-2", "Traduction stable", {
      sourceFingerprint: getTranslatableBlockSignature(unchangedSource) ?? undefined,
    }),
    paragraph("fr-3", "tk-3", "Traduction retravaillee", {
      manuallyEdited: true,
      sourceFingerprint: getTranslatableBlockSignature(paragraph("src-3", "tk-3", "Manual source")) ?? undefined,
    }),
  ];

  const plan = buildTranslationPlan({
    sourceBlocks: [currentSource, unchangedSource, manualSource],
    existingTranslationBlocks: existingTranslation,
  });

  assert.deepEqual([...plan.changedKeys], ["tk-1"]);
  assert.deepEqual(plan.staleManualBlocks, ["tk-3"]);

  const entries = collectBlockEntries([currentSource, unchangedSource, manualSource], plan.changedKeys);
  assert.deepEqual(entries.map((entry) => entry.key), ["block:tk-1:text"]);
});

test("unchanged translations and manual edits are preserved while changed text is applied", () => {
  const sourceBlocks = [
    paragraph("src-1", "tk-1", "Hello world"),
    paragraph("src-2", "tk-2", "Stable source"),
    paragraph("src-3", "tk-3", "Manual source changed"),
  ];

  const existingTranslation = [
    paragraph("fr-1", "tk-1", "Bonjour ancien", {
      sourceFingerprint: getTranslatableBlockSignature(paragraph("src-1", "tk-1", "Hello old")) ?? undefined,
    }),
    paragraph("fr-2", "tk-2", "Traduction stable", {
      sourceFingerprint: getTranslatableBlockSignature(sourceBlocks[1]) ?? undefined,
    }),
    paragraph("fr-3", "tk-3", "Version retouchee", {
      manuallyEdited: true,
      sourceFingerprint: getTranslatableBlockSignature(paragraph("src-3", "tk-3", "Manual source")) ?? undefined,
    }),
  ];

  const merged = mergeTranslatedBlocks({
    sourceBlocks,
    existingTranslationBlocks: existingTranslation,
    translatedMap: new Map([["block:tk-1:text", "Bonjour monde"]]),
  });

  const [updated, stable, manual] = merged as ParagraphBlock[];

  assert.equal(updated?.text, "Bonjour monde");
  assert.equal(stable?.text, "Traduction stable");
  assert.equal(manual?.text, "Version retouchee");
  assert.equal(manual?.manuallyEdited, true);
  assert.equal(
    updated?.sourceFingerprint,
    getTranslatableBlockSignature(sourceBlocks[0]) ?? undefined,
  );
});

test("translated text uses translation keys rather than UI ids", () => {
  const block = paragraph("ui-1", "tk-55", "Source");
  const translated = applyTranslatedText(block, new Map([["block:tk-55:text", "Cible"]])) as ParagraphBlock;

  assert.equal(translated.text, "Cible");
});

test("translation statuses reflect creation, manual edits, and source updates", () => {
  assert.equal(
    getTranslationStatusAfterSync({ isNewTranslation: true, hasPendingManualReview: false }),
    "TRANSLATED",
  );
  assert.equal(getTranslationStatusAfterManualEdit("fr", "UP_TO_DATE"), "REVIEWING");
  assert.equal(getTranslationStatusAfterSourceUpdate("fr"), "NEEDS_UPDATE");
});

test("language switching resolves the correct linked translation and missing locales are exposed", () => {
  const articles = [
    { id: "en-1", translationGroupId: "group-1", locale: "en" },
    { id: "fr-1", translationGroupId: "group-1", locale: "fr" },
    { id: "en-2", translationGroupId: "group-2", locale: "en" },
  ];

  const summaries = buildTranslationLocaleSummaries({
    locales: ["fr", "en"],
    translations: [
      { id: "en-1", locale: "en", translationStatus: "UP_TO_DATE" },
    ],
  });

  const resolved = resolveTranslationByLocale({
    translationGroupId: "group-1",
    targetLocale: "fr",
    articles,
  });

  assert.equal(resolved?.id, "fr-1");
  assert.equal(summaries[0]?.isMissing, true);
  assert.equal(summaries[1]?.articleId, "en-1");
});
