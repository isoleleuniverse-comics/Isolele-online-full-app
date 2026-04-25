import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { Theme } from "@/lib/theme-context";

interface FounderTextPanelProps {
  theme: Theme;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  ctaLabel: string;
}

export function FounderTextPanel({ theme, title, subtitle, description, quote, ctaLabel }: FounderTextPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-6 justify center"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2" style={{ color: theme.colors.textPrimary }}>
          {title}
        </h2>
        <p className="text-lg sm:text-xl font-semibold mb-4" style={{ color: theme.colors.accentPrimary }}>
          {subtitle}
        </p>
      </div>

      <p className="text-base sm:text-lg leading-relaxed" style={{ color: theme.colors.textSecondary }}>
        {description}
      </p>

      <div
        className="my-8 px-6 py-6 rounded-2xl text-center"
        style={{
          backgroundColor: theme.colors.backgroundSecondary,
          border: `1px solid ${theme.colors.accentPrimary}30`,
        }}
      >
        <Sparkles size={24} style={{ color: theme.colors.accentPrimary }} className="mx-auto mb-3 opacity-60" />
        <p className="text-lg sm:text-2xl italic font-semibold leading-relaxed" style={{ color: theme.colors.textPrimary }}>
          &quot;{quote}&quot;
        </p>
        <Sparkles size={24} style={{ color: theme.colors.accentPrimary }} className="mx-auto mt-3 opacity-60" />
      </div>

      <Link href="/" className="center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 inline-block"
          style={{
            backgroundColor: theme.colors.accentPrimary,
            boxShadow: `0 0 30px ${theme.colors.accentPrimary}40`,
          }}
        >
          {ctaLabel} -&gt;
        </motion.button>
      </Link>
    </motion.div>
  );
}
