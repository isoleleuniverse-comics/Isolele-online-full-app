import { motion } from "framer-motion";

interface FashionPreviewHeaderProps {
  title: string;
  subtitle: string;
  textPrimary: string;
  textSecondary: string;
  isInView: boolean;
}

export function FashionPreviewHeader({
  title,
  subtitle,
  textPrimary,
  textSecondary,
  isInView,
}: FashionPreviewHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: textPrimary }}>
        {title}
      </h2>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: textSecondary }}>
        {subtitle}
      </p>
    </motion.div>
  );
}
