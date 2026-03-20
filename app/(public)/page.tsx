"use client"

import { BookHeroSection } from "@/components/home/book-hero-section"
import { OrganizationJsonLd, ComicSeriesJsonLd, WebsiteJsonLd } from "@/components/json-ld"

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <OrganizationJsonLd />
      <ComicSeriesJsonLd />
      <WebsiteJsonLd />

      {/* Single fullscreen book / game slideshow — all transitions contained here */}
      <BookHeroSection />
    </>
  )
}
