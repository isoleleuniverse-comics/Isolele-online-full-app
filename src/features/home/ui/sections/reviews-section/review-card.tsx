import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Theme } from "@/lib/theme-context";
import type { ReviewItem } from "./types";

interface ReviewCardProps {
  review: ReviewItem;
  index: number;
  langCode: string;
  theme: Theme;
}

export function ReviewCard({ review, index, langCode, theme }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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

      <p className="text-lg mb-4 leading-relaxed" style={{ color: theme.colors.textPrimary }}>
        &quot;{review.text[langCode] || review.text.en}&quot;
      </p>

      <p className="text-sm font-bold" style={{ color: theme.colors.accentPrimary }}>
        - {review.author}
      </p>
    </motion.div>
  );
}
