"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { KufuTab } from "@/features/kufu-game/model/kufu-game.types";
import {
  KufuGameBrandFooter,
  KufuGameCharactersTab,
  KufuGameHero,
  KufuGameOverviewTab,
  KufuGameReviewsTab,
  KufuGameStructuredData,
  KufuGameTabs,
} from "@/features/kufu-game/ui/sections";

export function KufuGamePage() {
  const [tab, setTab] = useState<KufuTab>("overview");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A", color: "#F0F0F0" }}>
      <KufuGameStructuredData />
      <KufuGameHero />
      <KufuGameTabs tab={tab} onChangeTab={setTab} />

      <section className="mx-auto max-w-6xl px-4 pb-28 md:px-8">
        <AnimatePresence mode="wait">
          {tab === "overview" ? <KufuGameOverviewTab /> : null}
          {tab === "characters" ? <KufuGameCharactersTab /> : null}
          {tab === "reviews" ? <KufuGameReviewsTab /> : null}
        </AnimatePresence>

        <KufuGameBrandFooter />
      </section>
    </div>
  );
}

