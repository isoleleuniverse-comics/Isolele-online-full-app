"use client";

import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";
import { CULTURAL_IMPACT_CONTENT } from "./data";
import { CulturalImpactHeader } from "./cultural-impact-header";
import { CulturalImpactCard } from "./cultural-impact-card";
import { CulturalImpactStatement } from "./cultural-impact-statement";

export function CulturalImpact() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();

  const content = CULTURAL_IMPACT_CONTENT[currentLanguage.code] || CULTURAL_IMPACT_CONTENT.en;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <div className="max-w-7xl mx-auto">
        <CulturalImpactHeader content={content} theme={currentTheme} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {content.impacts.map((impact, index) => (
            <CulturalImpactCard key={impact.title} impact={impact} index={index} theme={currentTheme} />
          ))}
        </div>

        <CulturalImpactStatement
          statement={content.statement}
          accentPrimary={currentTheme.colors.accentPrimary}
          accentSecondary={currentTheme.colors.accentSecondary}
          textPrimary={currentTheme.colors.textPrimary}
        />
      </div>
    </section>
  );
}
