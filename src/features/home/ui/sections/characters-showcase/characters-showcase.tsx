"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { SHOWCASE_CHARACTERS, SHOWCASE_LABELS } from "./data";
import { ShowcaseHeader } from "./showcase-header";
import { ShowcaseCharacterCard } from "./showcase-character-card";
import { ShowcaseCta } from "./showcase-cta";

export function CharactersShowcase() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const labels = SHOWCASE_LABELS[currentLanguage.code] || SHOWCASE_LABELS.en;

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentTheme.colors.accentPrimary}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <ShowcaseHeader
          labels={labels}
          isInView={isInView}
          accentColor={currentTheme.colors.accentPrimary}
          textPrimary={currentTheme.colors.textPrimary}
          textSecondary={currentTheme.colors.textSecondary}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {SHOWCASE_CHARACTERS.map((character, index) => (
            <ShowcaseCharacterCard
              key={character.name}
              character={character}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <ShowcaseCta
          label={labels.btn}
          isInView={isInView}
          accentColor={currentTheme.colors.accentPrimary}
        />
      </div>
    </section>
  );
}
