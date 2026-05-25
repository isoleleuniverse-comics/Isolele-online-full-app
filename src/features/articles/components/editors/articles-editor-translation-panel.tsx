"use client";

import { Button } from "@/components/ui/button";
import {
  buildTranslationPanelItems,
  buildTranslationWorkspaceSummary,
  getAvailableLanguageOptions,
  getTranslationStatusTone,
} from "@/features/articles/model/article-editor-ui";
import { cn } from "@/shared/lib/utils";
import { useArticleEditor } from "./articles-editor-context";

const toneClasses = {
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  accent: "border-amber-500/30 bg-amber-500/10 text-amber-100",
  warning: "border-orange-500/30 bg-orange-500/10 text-orange-200",
  danger: "border-rose-500/30 bg-rose-500/10 text-rose-200",
  muted: "border-white/10 bg-white/5 text-[#d5c8b9]",
  ghost: "border-dashed border-white/10 bg-transparent text-[#ab9f92]",
} as const;

export function ArticlesEditorTranslationPanel() {
  const {
    articleLocale,
    sourceLocale,
    targetLocales,
    translations,
    isSwitchingLocale,
    isTranslating,
    isSaving,
    activityMessage,
    selectSourceLocale,
    toggleTargetLocale,
    createTranslation,
    switchLocale,
  } = useArticleEditor();

  const languageOptions = getAvailableLanguageOptions();
  const translationItems = buildTranslationPanelItems({
    articleLocale,
    sourceLocale,
    translations,
  });
  const summary = buildTranslationWorkspaceSummary(translations);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-5">
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(210,178,109,0.1),rgba(24,24,24,0.92)_40%,rgba(18,18,18,0.98))] p-5 lg:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.26em] text-[#aa9d8f]">Translations workspace</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f7f1e8]">Source, coverage, and delivery</h2>
            <p className="mt-3 text-sm leading-7 text-[#b3a79b]">
              Manage language relationships without interrupting writing. Source language, targets,
              translation status, and creation actions live here.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#a89987]">Coverage</p>
              <p className="mt-2 text-2xl font-semibold text-[#f8f2ea]">{summary.coveragePercent}%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#a89987]">Available</p>
              <p className="mt-2 text-2xl font-semibold text-[#f8f2ea]">{summary.available}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#a89987]">Missing</p>
              <p className="mt-2 text-2xl font-semibold text-[#f8f2ea]">{summary.missing}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-[#d2b26d] transition-all duration-300"
            style={{ width: `${summary.coveragePercent}%` }}
          />
        </div>

        {activityMessage ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#e7dccf]">
            {activityMessage}
          </div>
        ) : null}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.25fr_0.95fr]">
        <div className="rounded-[28px] border border-white/10 bg-[#171717] p-5 lg:p-6">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a89987]">Source language</p>
            <h3 className="mt-2 text-xl font-semibold text-[#f7f1e8]">Choose the editorial origin</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {languageOptions.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => selectSourceLocale(language.code)}
                disabled={isSaving}
                className={cn(
                  "rounded-full border px-3 py-2 text-sm transition",
                  sourceLocale === language.code
                    ? "border-[#d2b26d] bg-[#d2b26d] text-[#16120d]"
                    : "border-white/10 bg-[#202020] text-[#ddd0c1] hover:border-white/20 hover:bg-white/5",
                )}
              >
                <span className="mr-2">{language.flag}</span>
                {language.nativeName}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a89987]">Language variants</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {targetLocales.length > 0 ? (
                targetLocales.map((locale) => {
                  const language = languageOptions.find((item) => item.code === locale);
                  return (
                    <button
                      key={locale}
                      type="button"
                      onClick={() => toggleTargetLocale(locale)}
                      disabled={isSaving}
                      className="rounded-full border border-[#d2b26d]/30 bg-[#d2b26d]/10 px-3 py-2 text-sm text-[#f2dfb8] transition hover:border-[#d2b26d]/50 hover:bg-[#d2b26d]/15"
                    >
                      <span className="mr-2">{language?.flag ?? "🌐"}</span>
                      {language?.nativeName ?? locale.toUpperCase()}
                    </button>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 bg-[#151515] px-4 py-4 text-sm text-[#aa9d8f]">
                  No target languages configured yet.
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {languageOptions
                .filter((language) => language.code !== sourceLocale && !targetLocales.includes(language.code))
                .map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => toggleTargetLocale(language.code)}
                    disabled={isSaving}
                    className="rounded-full border border-dashed border-white/10 bg-transparent px-3 py-2 text-sm text-[#aa9d90] transition hover:border-white/20 hover:bg-white/5"
                  >
                    <span className="mr-2">{language.flag}</span>
                    Add {language.nativeName}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#171717] p-5 lg:p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a89987]">Coverage snapshot</p>
          <h3 className="mt-2 text-xl font-semibold text-[#f7f1e8]">Translation status by language</h3>
          <div className="mt-5 space-y-3">
            {translationItems.map((translation) => {
              const tone = getTranslationStatusTone(translation.status);
              return (
                <div
                  key={translation.locale}
                  className={cn(
                    "rounded-2xl border border-white/10 bg-[#1f1f1f] p-4 transition",
                    translation.isActive && "border-[#d2b26d]/45 bg-[#2a2419]",
                  )}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg">{translation.flag}</span>
                        <span className="font-medium text-[#f5eee4]">{translation.nativeName}</span>
                        {translation.isSource ? (
                          <span className="rounded-full border border-[#d2b26d]/40 bg-[#d2b26d]/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[#e6c988]">
                            Source
                          </span>
                        ) : null}
                        {translation.isActive ? (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-[#ddd2c4]">
                            Open
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-[#aa9d8f]">{translation.languageName}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className={cn("rounded-full border px-2.5 py-1 text-xs", toneClasses[tone])}>
                        {translation.statusLabel}
                      </span>
                      {translation.isMissing ? (
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => createTranslation(translation.locale)}
                          disabled={isTranslating || translation.isSource}
                          className="rounded-full bg-[#d2b26d] text-[#16120d] hover:bg-[#e0c07c]"
                        >
                          {isTranslating ? "Creating..." : "Create translation"}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            void switchLocale(translation.locale);
                          }}
                          disabled={isSwitchingLocale}
                          className="rounded-full border-white/10 bg-transparent text-[#efe5d7]"
                        >
                          Open version
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
