import test from "node:test";
import assert from "node:assert/strict";
import {
  createArticleBlock,
  duplicateArticleBlock,
  normalizeArticleBlocksDetailed,
} from "../src/features/articles/model/article-blocks.ts";
import type { ParagraphBlock } from "../src/features/articles/model/article-blocks.ts";

test("translationKey is generated for new blocks", () => {
  const block = createArticleBlock("paragraph");

  assert.ok(block.translationKey);
  assert.notEqual(block.translationKey, block.id);
});

test("duplicating a block creates a new UI id and a new translation key", () => {
  const original = createArticleBlock("paragraph") as ParagraphBlock;
  const duplicate = duplicateArticleBlock(original) as ParagraphBlock;

  assert.notEqual(duplicate.id, original.id);
  assert.notEqual(duplicate.translationKey, original.translationKey);
  assert.equal(duplicate.text, original.text);
});

test("legacy blocks keep a stable translation key after edits", () => {
  const firstPass = normalizeArticleBlocksDetailed([
    { id: "legacy-1", type: "paragraph", text: "Hello" },
  ]).blocks[0];

  const secondPass = normalizeArticleBlocksDetailed([
    { ...firstPass, text: "Bonjour" },
  ]).blocks[0];

  assert.equal(firstPass.translationKey, "legacy-legacy-1");
  assert.equal(secondPass.translationKey, firstPass.translationKey);
});

test("old articles without translation keys and unsupported blocks are preserved", () => {
  const result = normalizeArticleBlocksDetailed([
    { id: "legacy-2", type: "heading", text: "Title" },
    { id: "legacy-3", type: "mystery", foo: "bar" },
  ]);

  assert.equal(result.blocks[0]?.translationKey, "legacy-legacy-2");
  assert.equal(result.blocks[1]?.type, "unsupported");
  assert.equal(result.blocks[1]?.translationKey, "legacy-legacy-3");
  assert.match(result.warnings[0] ?? "", /unsupported type/i);
});
