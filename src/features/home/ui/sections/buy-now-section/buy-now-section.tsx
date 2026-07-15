"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/shared/i18n/language-context";
import { useTheme } from "@/shared/contexts/theme-context";
import Link from "next/link";

export function BuyNowSection() {
  const { currentLanguage } = useLanguage();
  const { currentTheme } = useTheme();

  const label = currentLanguage.code === "fr" ? "ACHETER LE LIVRE MAINTENANT" : "BUY THE BOOK NOW";
  const stripeHref = "https://buy.stripe.com/14A5kD44Z6yM2zR6qh6Zy0c";

  return (
    <section className="w-full py-10 px-4" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.a
          href={stripeHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-extrabold uppercase tracking-wider"
          style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
          aria-label={label}
        >
          {label}
        </motion.a>
      </div>
    </section>
  );
}
