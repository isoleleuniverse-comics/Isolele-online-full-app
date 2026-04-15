import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";
import type { StoryContentItem } from "./types";

interface StoryTextPanelProps {
  content: StoryContentItem;
  theme: Theme;
}

export function StoryTextPanel({ content, theme }: StoryTextPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: theme.colors.accentPrimary }}>
        {content.title}
      </h2>
      <p className="text-xl mb-8" style={{ color: theme.colors.textSecondary }}>
        {content.subtitle}
      </p>

      <div className="space-y-4 mb-8">
        {content.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold italic mb-8 pl-6 border-l-4"
        style={{
          color: theme.colors.accentPrimary,
          borderColor: theme.colors.accentPrimary,
        }}
      >
        &quot;{content.conclusion}&quot;
      </motion.blockquote>
    </motion.div>
  );
}
