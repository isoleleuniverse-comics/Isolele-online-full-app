"use client";

import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { STORY_CONTENT } from "./data";
import { StoryImagePanel } from "./story-image-panel";
import { StoryTextPanel } from "./story-text-panel";

export function StorySection() {
  const { currentTheme } = useTheme();
  const { t, currentLanguage } = useLanguage();

  const content = STORY_CONTENT[currentLanguage.code] || STORY_CONTENT.en;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StoryImagePanel theme={currentTheme} founderLabel={t("founder_creator_author")} />
          <StoryTextPanel content={content} theme={currentTheme} />
        </div>
      </div>
    </section>
  );
}
