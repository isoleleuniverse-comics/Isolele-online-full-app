import test from "node:test";
import assert from "node:assert/strict";
import {
  LANGUAGES,
  getDefaultLanguage,
  getEnabledLanguages,
  getLanguageByCode,
} from "../src/features/languages/config/languages.ts";

test("dynamic language registry exposes enabled languages", () => {
  const enabled = getEnabledLanguages();

  assert.ok(enabled.length > 0);
  assert.deepEqual(
    enabled.map((language) => language.code),
    LANGUAGES.filter((language) => language.enabled).map((language) => language.code),
  );
});

test("default language is resolved from the registry", () => {
  const defaultLanguage = getDefaultLanguage();

  assert.equal(defaultLanguage.isDefault, true);
  assert.equal(defaultLanguage.code, "fr");
});

test("language lookup returns matching definitions", () => {
  assert.equal(getLanguageByCode("en")?.nativeName, "English");
  assert.equal(getLanguageByCode("sw")?.name, "Swahili");
  assert.equal(getLanguageByCode("unknown"), null);
});
