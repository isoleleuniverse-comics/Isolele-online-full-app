"use client";

import type { SupportedLocale } from "@/shared/i18n/locales";
import { getRoyalHistoryPageContent } from "@/features/royal-history/model/royal-history.data";
import { useTheme } from "@/shared/contexts/theme-context";
import { RoyalHistoryHeroSection } from "./sections/royal-history-hero-section/royal-history-hero-section";
import { RoyalHistoryIntroSection } from "./sections/royal-history-intro-section/royal-history-intro-section";
import { RoyalHistorySections } from "./sections/royal-history-sections/royal-history-sections";
import { RoyalHistoryCtaSection } from "./sections/royal-history-cta-section/royal-history-cta-section";

interface Props {
  locale: SupportedLocale;
}

export function RoyalHistoryPage({ locale }: Props) {
  const { currentTheme } = useTheme();
  const content = getRoyalHistoryPageContent(locale);

  return (
    <div style={{ backgroundColor: currentTheme.colors.background }}>
      <RoyalHistoryHeroSection hero={content.hero} />
      <RoyalHistoryIntroSection intro={content.intro} />
      <RoyalHistorySections history={content.history} />
      <RoyalHistoryCtaSection cta={content.cta} />
    </div>
  );
}
