"use client";

import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";
import { founderData } from "./data";
import { FounderPhotoPanel } from "./founder-photo-panel";
import { FounderTextPanel } from "./founder-text-panel";

export function FounderPreview() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const founder = founderData[currentLanguage.code] || founderData.en;

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FounderPhotoPanel
            theme={currentTheme}
            locationLabel={founder.locationLabel}
            roleLabel={founder.roleLabel}
          />

          <FounderTextPanel
            theme={currentTheme}
            title={founder.title}
            subtitle={founder.subtitle}
            description={founder.description}
            quote={founder.quote}
            ctaLabel={founder.ctaLabel}
          />
        </div>
      </div>
    </section>
  );
}
