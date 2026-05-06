"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { KING_KUFULULA_PHOTO, type KingKufululaPageContent } from "@/features/king-kufulula/model/king-kufulula.data";
import { useTheme } from "@/shared/contexts/theme-context";

interface Props {
  hero: KingKufululaPageContent["hero"];
}

export function KingKufululaHeroSection({ hero }: Props) {
  const { currentTheme } = useTheme();

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[62vh] min-h-[520px] w-full">
        <Image src={KING_KUFULULA_PHOTO.src} alt={KING_KUFULULA_PHOTO.alt} fill sizes="100vw" priority className="object-cover object-top" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.78) 65%, rgba(0,0,0,0.92) 100%)" }} />
      </div>

      <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black tracking-widest"
            style={{ backgroundColor: `${currentTheme.colors.accentPrimary}22`, color: "#fff", border: `1px solid ${currentTheme.colors.accentPrimary}35`, backdropFilter: "blur(8px)" }}
          >
            <Crown className="h-4 w-4" />
            {hero.founderBadge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="mt-5 text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style={{ color: "#fff", lineHeight: 1.05, textShadow: "0 8px 40px rgba(0,0,0,0.55)" }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-5 max-w-4xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {hero.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
