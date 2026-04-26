"use client";

import { useTheme } from "@/shared/contexts/theme-context";
import { useHomePageContent } from "@/features/home/model";
import { FounderPhotoPanel } from "./founder-photo-panel";
import { FounderTextPanel } from "./founder-text-panel";

export function FounderPreview() {
  const { currentTheme } = useTheme();
  const { founder } = useHomePageContent();

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
