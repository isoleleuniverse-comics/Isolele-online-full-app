import { motion } from "framer-motion";

interface NewsHeaderProps {
  title: string;
  isInView: boolean;
  textColor: string;
}

export function NewsHeader({ title, isInView, textColor }: NewsHeaderProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl font-black tracking-wider mb-12 text-center"
      style={{ color: textColor }}
    >
      {title}
    </motion.h2>
  );
}
