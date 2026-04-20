"use client";

import { motion } from "framer-motion";

interface ComicsPageHeaderProps {
  isFrench: boolean;
}

export function ComicsPageHeader({ isFrench }: ComicsPageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="mb-20 px-6 text-center"
    >
      <h1 className="mb-4 text-5xl font-black tracking-wide text-[var(--isolele-accent)] md:text-6xl">
        ISOLELE COMICS
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-foreground/75 md:text-xl">
        {isFrench
          ? "Decouvrez notre univers african comic avec des bandes dessinees, des histoires et des aventures epiques."
          : "Explore our African comic universe with premium stories, heroes, and epic adventures."}
      </p>
    </motion.header>
  );
}

