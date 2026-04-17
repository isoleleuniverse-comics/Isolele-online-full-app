"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComicBook, TranslationFn } from "@/features/comics/model/comics.types";
import { ComicCard } from "./comic-card";

interface ComicCarouselSectionProps {
  titleEn: string;
  titleFr: string;
  books: ComicBook[];
  isFrench: boolean;
  t: TranslationFn;
}

export function ComicCarouselSection({ titleEn, titleFr, books, isFrench, t }: ComicCarouselSectionProps) {
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
        <h2 className="text-2xl font-bold text-[var(--isolele-text)] md:text-3xl">{isFrench ? titleFr : titleEn}</h2>
        <Link href="#" className="text-sm font-semibold text-[var(--isolele-accent)] hover:underline">
          {isFrench ? "Voir tout" : "See all"}
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
              <ComicCard book={book} isFrench={isFrench} t={t} />
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scrollBy("left")}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/65 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          aria-label={isFrench ? "Defiler vers la gauche" : "Scroll left"}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/65 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          aria-label={isFrench ? "Defiler vers la droite" : "Scroll right"}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </motion.section>
  );
}

