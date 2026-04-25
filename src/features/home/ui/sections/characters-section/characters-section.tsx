"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useHomePageContent } from "@/features/home/model";
import { CharacterCard } from "./character-card";

export function CharactersSection() {
  const { currentTheme } = useTheme();
  const { characters } = useHomePageContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!carouselRef.current || isHovered) return;

    const carousel = carouselRef.current;
    const scroll = () => {
      carousel.scrollLeft += 2;
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      }
    };

    const animationId = setInterval(scroll, 30);
    return () => clearInterval(animationId);
  }, [isHovered]);

  const triplicatedCharacters = [...characters.items, ...characters.items, ...characters.items];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black tracking-wider mb-2"
              style={{ color: currentTheme.colors.textPrimary }}
            >
              {characters.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              {characters.subtitle}
            </motion.p>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {triplicatedCharacters.map((character, index) => (
            <CharacterCard
              key={`${character.id}-${index}`}
              character={character}
              index={index}
              totalCharacters={characters.items.length}
              isInView={isInView}
              discoverLabel={characters.discoverLabel}
              colors={{
                background: currentTheme.colors.background,
                backgroundSecondary: currentTheme.colors.backgroundSecondary,
                accentPrimary: currentTheme.colors.accentPrimary,
                textPrimary: currentTheme.colors.textPrimary,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

