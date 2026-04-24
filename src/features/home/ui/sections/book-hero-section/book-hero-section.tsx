"use client";

import { useHomePageContent } from "@/features/home/model";
import { useBookHeroCarousel } from "./use-book-hero-carousel";
import { BookHeroSlide } from "./book-hero-slide";
import { BookHeroNavigation } from "./book-hero-navigation";

export function BookHeroSection() {
  const { bookHero } = useHomePageContent();
  const { current, direction, selectSlide } = useBookHeroCarousel(bookHero.slides.length);

  const slide = bookHero.slides[current];
  if (!slide) return null;

  return (
    <section
      className="relative w-full h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <BookHeroSlide slide={slide} current={current} direction={direction} />
      <BookHeroNavigation count={bookHero.slides.length} current={current} onSelect={selectSlide} />
    </section>
  );
}

