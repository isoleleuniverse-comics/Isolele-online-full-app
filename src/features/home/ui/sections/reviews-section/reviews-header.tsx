import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";
import type { ReviewsContentItem } from "./types";

interface ReviewsHeaderProps {
  content: ReviewsContentItem;
  theme: Theme;
}

export function ReviewsHeader({ content, theme }: ReviewsHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <p className="text-sm font-bold tracking-widest mb-4" style={{ color: theme.colors.accentPrimary }}>
        {content.subtitle}
      </p>
      <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: theme.colors.textPrimary }}>
        {content.title}
      </h2>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.textSecondary }}>
        {content.description}
      </p>
    </motion.div>
  );
}
