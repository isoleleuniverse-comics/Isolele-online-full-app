"use client";

import type { SupportedLocale } from "@/shared/i18n/locales";
import { getKingKufululaPageContent } from "@/features/king-kufulula/model/king-kufulula.data";
import { useTheme } from "@/shared/contexts/theme-context";
import { KingKufululaHeroSection } from "./sections/king-kufulula-hero-section/king-kufulula-hero-section";
import { KingKufululaNavigationSection } from "./sections/king-kufulula-navigation-section/king-kufulula-navigation-section";
import { KingKufululaEditorialSection } from "./sections/king-kufulula-editorial-section/king-kufulula-editorial-section";
import { KingKufululaCtaSection } from "./sections/king-kufulula-cta-section/king-kufulula-cta-section";

interface Props {
  locale: SupportedLocale;
}

export function KingKufululaPage({ locale }: Props) {
  const { currentTheme } = useTheme();
  const content = getKingKufululaPageContent(locale);

  return (
    <div style={{ backgroundColor: currentTheme.colors.background }}>
      <KingKufululaHeroSection hero={content.hero} />
      <KingKufululaNavigationSection navigation={content.navigation} />
      <KingKufululaEditorialSection editorial={content.editorial} />
      <KingKufululaCtaSection cta={content.cta} />
    </div>
  );
}
