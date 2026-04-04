import dynamic from "next/dynamic"
import { BookHeroSection } from "@/components/home/book-hero-section"
import { UniverseSection } from "@/components/home/universe-section"
import { CharactersSection } from "@/components/home/characters-section"
import { OrganizationJsonLd, ComicSeriesJsonLd, WebsiteJsonLd } from "@/components/json-ld"

// Dynamically import non-critical sections with lazy loading
const StorySection = dynamic(() => import("@/components/home/story-section").then(mod => ({ default: mod.StorySection })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const ProductsSection = dynamic(() => import("@/components/home/products-section").then(mod => ({ default: mod.ProductsSection })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const FounderPreview = dynamic(() => import("@/components/home/founder-preview").then(mod => ({ default: mod.FounderPreview })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const BookstoreDisplaySection = dynamic(() => import("@/components/home/bookstore-display-section").then(mod => ({ default: mod.BookstoreDisplaySection })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const ReviewsSection = dynamic(() => import("@/components/home/reviews-section").then(mod => ({ default: mod.ReviewsSection })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const NewsSection = dynamic(() => import("@/components/home/news-section").then(mod => ({ default: mod.NewsSection })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const FashionPreview = dynamic(() => import("@/components/home/fashion-preview").then(mod => ({ default: mod.FashionPreview })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const CharactersShowcase = dynamic(() => import("@/components/home/characters-showcase").then(mod => ({ default: mod.CharactersShowcase })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

const CtaSection = dynamic(() => import("@/components/home/cta-section").then(mod => ({ default: mod.CtaSection })), {
  loading: () => <div className="h-96 bg-background" />,
  ssr: true,
})

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
