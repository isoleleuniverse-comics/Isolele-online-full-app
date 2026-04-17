"use client";

import { motion } from "framer-motion";
import { characters } from "@/features/characters/model/characters.data";
import { useTheme } from "@/lib/theme-context";

export function CharactersHeroSection() {
  const { currentTheme } = useTheme();

  return (
    <section
      className="relative overflow-hidden px-4 py-24 text-center"
      style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}
    >
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, index) => (
          <div
            key={`ring-${index}`}
            className="absolute rounded-full border"
            style={{
              width: `${200 + index * 80}px`,
              height: `${200 + index * 80}px`,
              borderColor: currentTheme.colors.accentPrimary,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-4 text-xs font-bold tracking-[0.4em]"
        style={{ color: currentTheme.colors.accentPrimary }}
      >
        ISOLELE UNIVERSE
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative mb-4 text-balance text-5xl font-black tracking-wider sm:text-7xl"
        style={{ color: currentTheme.colors.textPrimary }}
      >
        LEGENDARY
        <br />
        <span style={{ color: currentTheme.colors.accentPrimary }}>CHARACTERS</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mx-auto max-w-2xl text-lg text-balance"
        style={{ color: currentTheme.colors.textSecondary }}
      >
        Meet the superheroes, gods, and mythic figures born from the rich tapestry of African folklore.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative mt-10 flex justify-center gap-8 sm:gap-12"
      >
        {[
          { label: "Characters", value: `${characters.length}+` },
          { label: "Kingdoms", value: "12+" },
          { label: "Universes", value: "3" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-black" style={{ color: currentTheme.colors.accentPrimary }}>
              {stat.value}
            </p>
            <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

