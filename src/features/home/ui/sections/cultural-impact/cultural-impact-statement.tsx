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
      initial={{ opacity: 0, y: 18, scale: 0.96, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.12 }}
      className="text-center py-12 px-8 rounded-2xl"
      style={{
        background: `linear-gradient(135deg, ${accentPrimary}20 0%, ${accentSecondary}20 100%)`,
        border: `1px solid ${accentPrimary}30`,
        perspective: 1200,
      }}
    >
      <p className="text-2xl sm:text-3xl font-black" style={{ color: textPrimary }}>
        &quot;{statement}&quot;
      </p>
    </motion.div>
  );
}
