import { BookHeroSection } from "@/components/home/book-hero-section"
import { UniverseSection } from "@/components/home/universe-section"
import { CharactersSection } from "@/components/home/characters-section"
import { StorySection } from "@/components/home/story-section"
import { ProductsSection } from "@/components/home/products-section"
import { FounderPreview } from "@/components/home/founder-preview"
import { BookstoreDisplaySection } from "@/components/home/bookstore-display-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { NewsSection } from "@/components/home/news-section"
import { FashionPreview } from "@/components/home/fashion-preview"
import { CtaSection } from "@/components/home/cta-section"
import { CharactersShowcase } from "@/components/home/characters-showcase"
import { OrganizationJsonLd, ComicSeriesJsonLd, WebsiteJsonLd } from "@/components/json-ld"

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <OrganizationJsonLd />
      <ComicSeriesJsonLd />
      <WebsiteJsonLd />

      {/* Fullscreen book / game slideshow hero */}
      <BookHeroSection />
      
      {/* Universe Pillars Section */}
      <UniverseSection />
      
      {/* Characters Section */}
      <CharactersSection />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Founder Preview */}
      <FounderPreview />
      
      {/* Bookstore Display Section */}
      <BookstoreDisplaySection />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* News Section */}
      <NewsSection />
      
      {/* Fashion Preview */}
      <FashionPreview />
      
      {/* Characters Showcase — before footer */}
      <CharactersShowcase />
      
      {/* CTA Section */}
      <CtaSection />
    </>
  )
}
