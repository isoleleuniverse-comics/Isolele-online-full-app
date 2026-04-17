import { motion } from "framer-motion";

interface CulturalImpactStatementProps {
  statement: string;
  accentPrimary: string;
  accentSecondary: string;
  textPrimary: string;
}

export function CulturalImpactStatement({
  statement,
  accentPrimary,
  accentSecondary,
  textPrimary,
}: CulturalImpactStatementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center py-12 px-8 rounded-2xl"
      style={{
        background: `linear-gradient(135deg, ${accentPrimary}20 0%, ${accentSecondary}20 100%)`,
        border: `1px solid ${accentPrimary}30`,
      }}
    >
      <p className="text-2xl sm:text-3xl font-black" style={{ color: textPrimary }}>
        &quot;{statement}&quot;
      </p>
    </motion.div>
  );
}
