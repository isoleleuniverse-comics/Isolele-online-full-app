"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ComicsPageFooterProps {
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export function ComicsPageFooter({
  description,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: ComicsPageFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-20 px-6 text-center"
    >
      <p className="mb-6 text-lg text-foreground/70">{description}</p>
      <Link href={primaryCtaHref} className="inline-flex rounded-lg bg-[var(--isolele-accent)] px-8 py-3 font-bold text-black transition hover:opacity-90">
        {primaryCtaLabel}
      </Link>
      <Link
        href={secondaryCtaHref}
        className="ml-3 inline-flex rounded-lg border border-[var(--isolele-accent)] px-8 py-3 font-bold text-[var(--isolele-accent)] transition hover:bg-[var(--isolele-accent)]/10"
      >
        {secondaryCtaLabel}
      </Link>
    </motion.footer>
  );
}
