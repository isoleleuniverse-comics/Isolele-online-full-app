import { motion } from "framer-motion";
import type { Theme } from "@/lib/theme-context";
import type { CulturalImpactContent } from "./types";

interface CulturalImpactHeaderProps {
  content: CulturalImpactContent;
  theme: Theme;
}

export function CulturalImpactHeader({ content, theme }: CulturalImpactHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: theme.colors.textPrimary }}>
        {content.title}
      </h2>
      <p className="text-2xl font-semibold mb-4" style={{ color: theme.colors.accentPrimary }}>
        {content.subtitle}
      </p>
      <p className="text-lg max-w-3xl mx-auto" style={{ color: theme.colors.textSecondary }}>
        {content.description}
      </p>
    </motion.div>
  );
}
