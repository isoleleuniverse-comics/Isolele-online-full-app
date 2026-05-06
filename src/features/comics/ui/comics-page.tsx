"use client";

import type { SupportedLocale } from "@/shared/i18n/locales";
import { getComicsPageContent } from "@/features/comics/model/comics.data";
import { ComicCarouselSection, ComicsPageFooter, ComicsPageHeader, ComicsStructuredData } from "@/features/comics/ui/sections";

interface ComicsPageProps {
  locale: SupportedLocale;
}

export function ComicsPage({ locale }: ComicsPageProps) {
  const content = getComicsPageContent(locale);

  return (
    <main className="min-h-screen bg-background pb-24 pt-32">
      <ComicsStructuredData />

      <ComicsPageHeader title={content.hero.title} description={content.hero.description} />

      {content.sections.map((section) => (
        <ComicCarouselSection
          key={section.id}
          title={section.title}
          ctaLabel={section.ctaLabel}
          ctaHref={section.ctaHref}
          books={section.books}
          readLabel={content.ui.readLabel}
          scrollLeftLabel={content.ui.scrollLeftLabel}
          scrollRightLabel={content.ui.scrollRightLabel}
        />
      ))}

      <ComicsPageFooter
        description={content.footer.description}
        primaryCtaLabel={content.footer.primaryCtaLabel}
        primaryCtaHref={content.footer.primaryCtaHref}
        secondaryCtaLabel={content.footer.secondaryCtaLabel}
        secondaryCtaHref={content.footer.secondaryCtaHref}
      />
    </main>
  );
}
