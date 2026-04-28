"use client";

import { useLanguage } from "@/shared/i18n/language-context";
import { useBookHeroCarousel } from "./use-book-hero-carousel";
import { BookHeroSlide } from "./book-hero-slide";
import { BookHeroNavigation } from "./book-hero-navigation";
import { bookHeroData } from "./data";

export function BookHeroSection() {
  const { currentLanguage } = useLanguage();
  const bookHero = bookHeroData[currentLanguage.code] || bookHeroData.en;
  
  const { current, direction, selectSlide } = useBookHeroCarousel(bookHero.slides.length);

  const slide = bookHero.slides[current];
  if (!slide) return null;

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <BookHeroSlide slide={slide} current={current} direction={direction} />
      <BookHeroNavigation count={bookHero.slides.length} current={current} onSelect={selectSlide} />
    </section>
  );
}

