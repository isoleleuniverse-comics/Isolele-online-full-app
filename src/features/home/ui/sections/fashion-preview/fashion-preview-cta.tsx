import Link from "next/link";
import { motion } from "framer-motion";

interface FashionPreviewCtaProps {
  label: string;
  accentPrimary: string;
}

export function FashionPreviewCta({ label, accentPrimary }: FashionPreviewCtaProps) {
  return (
    <div className="flex justify-center">
      <Link href="/#hero">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
          style={{
            backgroundColor: accentPrimary,
            boxShadow: `0 0 30px ${accentPrimary}40`,
          }}
        >
          {label}
        </motion.button>
      </Link>
    </div>
  );
}
