import { motion } from "framer-motion";
import type { Theme } from "@/shared/contexts/theme-context";
import type { CulturalImpactItem } from "./types";

interface CulturalImpactCardProps {
  impact: CulturalImpactItem;
  index: number;
  theme: Theme;
}

export function CulturalImpactCard({ impact, index, theme }: CulturalImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.94, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.12 }}
      className="p-6 rounded-2xl"
      style={{
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.accentPrimary}20`,
        perspective: 1200,
      }}
    >
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
        style={{ backgroundColor: `${theme.colors.accentPrimary}20` }}
      >
        <impact.icon className="h-6 w-6" style={{ color: theme.colors.accentPrimary }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
        {impact.title}
      </h3>
      <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
        {impact.description}
      </p>
    </motion.div>
  );
}
