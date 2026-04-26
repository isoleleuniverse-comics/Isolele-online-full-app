import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Theme } from "@/shared/contexts/theme-context";
import type { HomeReviewContent } from "@/features/home/content/types";

interface ReviewCardProps {
  review: HomeReviewContent;
  index: number;
  theme: Theme;
}

export function ReviewCard({ review, index, theme }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.58, delay: 0.12 + index * 0.14 }}
      className="relative p-8 rounded-2xl"
      style={{
        backgroundColor: theme.colors.backgroundSecondary,
        border: `1px solid ${theme.colors.accentPrimary}20`,
      }}
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 opacity-20" style={{ color: theme.colors.accentPrimary }} />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" style={{ color: theme.colors.accentPrimary }} />
        ))}
      </div>

      {review.image ? (
        <div className="relative mb-5 h-48 w-full overflow-hidden rounded-xl sm:h-56">
          <Image
            src={review.image}
            alt={review.imageAlt ?? review.author}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
        </div>
      ) : null}

      <p className="text-lg mb-4 leading-relaxed" style={{ color: theme.colors.textPrimary }}>
        &quot;{review.text}&quot;
      </p>

      <p className="text-sm font-bold" style={{ color: theme.colors.accentPrimary }}>
        - {review.author}
      </p>

      {review.ctaLabel && review.ctaHref ? (
        <Link
          href={review.ctaHref === "/comics" ? review.ctaHref : "/#hero"}
          className="mt-5 inline-flex rounded-md px-5 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
          style={{ backgroundColor: theme.colors.accentPrimary, color: theme.colors.background }}
        >
          {review.ctaLabel}
        </Link>
      ) : null}
    </motion.div>
  );
}
