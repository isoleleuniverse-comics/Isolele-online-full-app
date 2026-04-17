"use client";

import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { FounderPhotoPanel } from "./founder-photo-panel";
import { FounderTextPanel } from "./founder-text-panel";

export function FounderPreview() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FounderPhotoPanel
            theme={currentTheme}
            locationLabel={t("founder_location")}
            roleLabel={t("founder_creator_author")}
          />

          <FounderTextPanel
            theme={currentTheme}
            title={t("founder_title")}
            subtitle={t("founder_subtitle")}
            description={t("founder_description")}
            quote={t("founder_quote")}
            ctaLabel={t("founder_cta")}
          />
        </div>
      </div>
    </section>
  );
}
