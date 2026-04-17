"use client";

import { comicsData } from "@/features/comics/model/comics.data";
import { useLanguage } from "@/lib/language-context";
import {
  ComicCarouselSection,
  ComicsPageFooter,
  ComicsPageHeader,
  ComicsStructuredData,
} from "@/features/comics/ui/sections";

export function ComicsPage() {
  const { t, currentLanguage } = useLanguage();
  const isFrench = currentLanguage.code === "fr";

  const featured = comicsData.filter((book) => book.category === "featured");
  const bestsellers = comicsData.filter((book) => book.category === "bestseller");
  const newReleases = comicsData.filter((book) => book.category === "new");

  return (
    <main className="min-h-screen bg-background pb-24 pt-32">
      <ComicsStructuredData />

      <ComicsPageHeader isFrench={isFrench} />

      <ComicCarouselSection titleEn="Featured Collections" titleFr="Collections Vedettes" books={featured} isFrench={isFrench} t={t} />
      <ComicCarouselSection titleEn="Best Sellers" titleFr="Meilleures Ventes" books={bestsellers} isFrench={isFrench} t={t} />
      <ComicCarouselSection titleEn="New Releases" titleFr="Nouvelles Sorties" books={newReleases} isFrench={isFrench} t={t} />

      <ComicsPageFooter isFrench={isFrench} />
    </main>
  );
}

