"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { useHomePageContent } from "@/features/home/model";
import { UNIVERSE_PILLARS, UNIVERSE_BACKGROUND_IMAGES } from "./data";
import { UniverseSectionHeader } from "./universe-section-header";
import { UniversePillarCard } from "./universe-pillar-card";

export function UniverseSection() {
  const { currentTheme } = useTheme();
  const { universe } = useHomePageContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${currentTheme.colors.accentPrimary} 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, ${currentTheme.colors.accentSecondary} 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <UniverseSectionHeader
          isInView={isInView}
          textPrimary={currentTheme.colors.textPrimary}
          accentPrimary={currentTheme.colors.accentPrimary}
          textSecondary={currentTheme.colors.textSecondary}
          title={universe.title}
          subtitle={universe.subtitle}
          description={universe.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {UNIVERSE_PILLARS.map((pillar, index) => (
            <UniversePillarCard
              key={pillar.key}
              pillar={{ ...pillar, ...universe.pillars[index] }}
              index={index}
              isInView={isInView}
              backgroundImage={UNIVERSE_BACKGROUND_IMAGES[index]}
              theme={currentTheme}
              discoverMoreLabel={universe.discoverMoreLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
