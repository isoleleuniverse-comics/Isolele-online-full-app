import Link from "next/link";
import { motion } from "framer-motion";

interface NewsCtaProps {
  isInView: boolean;
  accentColor: string;
}

export function NewsCta({ isInView, accentColor }: NewsCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-center mt-12"
    >
      <Link href="/news">
        <motion.button
          className="px-8 py-4 rounded-lg text-sm font-bold tracking-wider transition-all border-2"
          style={{
            borderColor: accentColor,
            color: accentColor,
            backgroundColor: "transparent",
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: `${accentColor}20`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW ALL NEWS
        </motion.button>
      </Link>
    </motion.div>
  );
}
