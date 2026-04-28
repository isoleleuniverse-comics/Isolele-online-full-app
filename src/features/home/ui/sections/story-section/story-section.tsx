"use client";

import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";
import { storyData } from "./data";
import { StoryImagePanel } from "./story-image-panel";
import { StoryTextPanel } from "./story-text-panel";

export function StorySection() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();
  const story = storyData[currentLanguage.code] || storyData.en;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StoryImagePanel theme={currentTheme} />
          <StoryTextPanel content={story} theme={currentTheme} />
        </div>
      </div>
    </section>
  );
}
