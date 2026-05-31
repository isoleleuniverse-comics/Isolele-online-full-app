"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComicBook } from "@/features/comics/model/comics.types";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";
import { ComicCard } from "./comic-card";

interface ComicCarouselSectionProps {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  books: ComicBook[];
  readLabel: string;
  locale: SupportedLocale;
  scrollLeftLabel: string;
  scrollRightLabel: string;
}

export function ComicCarouselSection({
  title,
  ctaLabel,
  ctaHref,
  books,
  readLabel,
  locale,
  scrollLeftLabel,
  scrollRightLabel,
}: ComicCarouselSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const delta = direction === "left" ? -340 : 340;

    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + delta,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="mb-6 flex items-center justify-between px-6">
        <h2 className="text-2xl font-bold text-[var(--isolele-text)] md:text-3xl">{title}</h2>
        <Link href={ctaHref} className="text-sm font-semibold text-[var(--isolele-accent)] hover:underline">
          {ctaLabel}
        </Link>
      </div>

      <div className="group relative">
        <div ref={containerRef} className="flex gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.4) }}
            className="w-72 flex-shrink-0 sm:w-80"
          >
              <ComicCard book={book} readLabel={readLabel} href={withLocale(locale, `/comics/${book.id}`)} />
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scrollBy("left")}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/65 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          aria-label={scrollLeftLabel}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/65 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          aria-label={scrollRightLabel}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </motion.section>
  );
}
