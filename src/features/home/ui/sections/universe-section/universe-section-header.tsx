import { motion } from "framer-motion";

interface UniverseSectionHeaderProps {
  isInView: boolean;
  textPrimary: string;
  accentPrimary: string;
  textSecondary: string;
  title: string;
  subtitle: string;
  description: string;
}

export function UniverseSectionHeader({
  isInView,
  textPrimary,
  accentPrimary,
  textSecondary,
  title,
  subtitle,
  description,
}: UniverseSectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-black tracking-wider mb-4 whitespace-nowrap"
        style={{ color: textPrimary }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl font-medium tracking-wide mb-6"
        style={{ color: accentPrimary }}
      >
        {subtitle}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        style={{ color: textSecondary }}
      >
        {description}
      </motion.p>
    </div>
  );
}
