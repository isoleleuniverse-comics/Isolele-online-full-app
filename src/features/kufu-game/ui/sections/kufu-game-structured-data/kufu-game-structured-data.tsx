"use client";

import { getKufuProductJsonLd } from "@/features/kufu-game/model/kufu-game-json-ld";

export function KufuGameStructuredData() {
  const gameProductJsonLd = getKufuProductJsonLd();

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameProductJsonLd) }} />;
}

