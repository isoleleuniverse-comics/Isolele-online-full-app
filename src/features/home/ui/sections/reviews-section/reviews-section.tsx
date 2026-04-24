"use client";

import { useTheme } from "@/lib/theme-context";
import { useHomePageContent } from "@/features/home/model";
import { ReviewsHeader } from "./reviews-header";
import { ReviewCard } from "./review-card";

export function ReviewsSection() {
  const { currentTheme } = useTheme();
  const { reviews } = useHomePageContent();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto">
        <ReviewsHeader content={reviews} theme={currentTheme} />

        <div className={`grid gap-6 ${reviews.items.length === 1 ? "max-w-3xl mx-auto" : "md:grid-cols-2"}`}>
          {reviews.items.map((review, index) => (
            <ReviewCard
              key={`${review.author}-${index}`}
              review={review}
              index={index}
              theme={currentTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
