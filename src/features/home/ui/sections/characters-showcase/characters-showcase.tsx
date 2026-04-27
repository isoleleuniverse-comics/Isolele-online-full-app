"use client";

import { useRef } from "react";
import { useLanguage } from "@/shared/i18n/language-context";
import { charactersShowcaseData } from "./data";
import { useInView } from "framer-motion";
import { useTheme } from "@/shared/contexts/theme-context";
import { ShowcaseHeader } from "./showcase-header";
import { ShowcaseCharacterCard } from "./showcase-character-card";
import { ShowcaseCta } from "./showcase-cta";

export function CharactersShowcase() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const charactersShowcase = charactersShowcaseData[currentLanguage.code] || charactersShowcaseData.en;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px" });

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
          labels={{
            eyebrow: charactersShowcase.eyebrow,
            title: charactersShowcase.title,
            subtitle: charactersShowcase.subtitle,
            btn: charactersShowcase.buttonLabel,
          }}
          isInView={isInView}
          accentColor={currentTheme.colors.accentPrimary}
          textPrimary={currentTheme.colors.textPrimary}
          textSecondary={currentTheme.colors.textSecondary}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {charactersShowcase.characters.map((character, index) => (
            <ShowcaseCharacterCard
              key={character.name}
              character={character}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <ShowcaseCta
          label={charactersShowcase.buttonLabel}
          isInView={isInView}
          accentColor={currentTheme.colors.accentPrimary}
        />
      </div>
    </section>
  );
}
