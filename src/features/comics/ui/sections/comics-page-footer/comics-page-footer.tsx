"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ComicsPageFooterProps {
  isFrench: boolean;
}

export function ComicsPageFooter({ isFrench }: ComicsPageFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-20 px-6 text-center"
    >
      <p className="mb-6 text-lg text-foreground/70">
        {isFrench
          ? "Celebrer l'heritage africain a travers des histoires puissantes et des aventures heroiques."
          : "Celebrating African heritage through powerful stories and heroic adventures."}
      </p>
      <Link
        href="/"
        className="inline-flex rounded-lg bg-[var(--isolele-accent)] px-8 py-3 font-bold text-black transition hover:opacity-90"
      >
        {isFrench ? "Retour a l'accueil" : "Back to Home"}
      </Link>
      <Link
        href="/kufu-game"
        className="ml-3 inline-flex rounded-lg border border-[var(--isolele-accent)] px-8 py-3 font-bold text-[var(--isolele-accent)] transition hover:bg-[var(--isolele-accent)]/10"
      >
        {isFrench ? "Voir African Games" : "Explore African Games"}
      </Link>
    </motion.footer>
  );
}

