"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { SupportedLocale } from "@/shared/i18n/locales";
import type { KufuTab } from "@/features/kufu-game/model/kufu-game.types";
import { getKufuGameContent } from "@/features/kufu-game/model/kufu-game.data";
import {
  KufuGameBrandFooter,
  KufuGameCharactersTab,
  KufuGameHero,
  KufuGameOverviewTab,
  KufuGameReviewsTab,
  KufuGameStructuredData,
  KufuGameTabs,
} from "@/features/kufu-game/ui/sections";

interface KufuGamePageProps {
  locale: SupportedLocale;
}

export function KufuGamePage({ locale }: KufuGamePageProps) {
  const [tab, setTab] = useState<KufuTab>("overview");
  const content = getKufuGameContent(locale);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A", color: "#F0F0F0" }}>
      <KufuGameStructuredData />
      <KufuGameHero game={content.game} content={content.page.hero} />
      <KufuGameTabs tab={tab} onChangeTab={setTab} tabs={content.page.tabs} />

      <section className="mx-auto max-w-6xl px-4 pb-28 md:px-8">
        <AnimatePresence mode="wait">
          {tab === "overview" ? (
            <KufuGameOverviewTab
              game={content.game}
              features={content.features}
              screenshots={content.screenshots}
              content={content.page.overview}
            />
          ) : null}
          {tab === "characters" ? (
            <KufuGameCharactersTab characters={content.characters} content={content.page.characters} />
          ) : null}
          {tab === "reviews" ? (
            <KufuGameReviewsTab game={content.game} reviews={content.reviews} content={content.page.reviews} />
          ) : null}
        </AnimatePresence>

        <KufuGameBrandFooter content={content.page.footer} />
      </section>
    </div>
  );
}
