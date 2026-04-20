"use client";

import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { REVIEWS, REVIEWS_CONTENT } from "./data";
import { ReviewsHeader } from "./reviews-header";
import { ReviewCard } from "./review-card";

export function ReviewsSection() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useLanguage();

  const content = REVIEWS_CONTENT[currentLanguage.code] || REVIEWS_CONTENT.en;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto">
        <ReviewsHeader content={content} theme={currentTheme} />

        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((review, index) => (
            <ReviewCard
              key={`${review.author}-${index}`}
              review={review}
              index={index}
              langCode={currentLanguage.code}
              theme={currentTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
