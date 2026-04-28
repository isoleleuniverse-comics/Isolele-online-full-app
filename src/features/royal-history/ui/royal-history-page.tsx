"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";

const CONTENT = {
  title: "You Have Always Been Royal: The African History They Never Taught You",
  lead: [
    "The first kings of Rome were Black. Europe was named after an African princess. The Moors ruled Europe for 700 years.",
    "The Kongo Empire was one of the greatest civilizations in human history. This is the truth ISOLELE was born to restore.",
  ],
  sections: [
    {
      id: "kongo",
      h2: "The Kongo Empire: Where Everything Began",
      body: "Before Rome. Before Greece. Before any empire the Western world calls great, the Kongo civilization existed. The Kingdom of Kongo was one of the largest and most sophisticated states in the world. It had a centralized government, a complex legal system, international trade networks, and an artistic tradition so advanced that European explorers who arrived in the 15th century described it as equal to the greatest kingdoms of Europe. The Kongo did not learn civilization from Europe. Europe learned what civilization looked like by encountering Kongo. ISOLELE was born from this truth. Every hero in the ISOLELE universe carries the blood of this kingdom.",
    },
    {
      id: "rome",
      h2: "The First Kings of Rome Were Black",
      body: "History books call Rome the foundation of Western civilization. What they do not teach is that the earliest inhabitants of the Italian peninsula, the people who built the foundations of what became Rome, carried African ancestry. The Moors, Black African Muslims from North Africa, ruled the Iberian Peninsula including Spain and Portugal for over 700 years, from 711 AD to 1492. They brought mathematics, astronomy, medicine, architecture, and philosophy to a Europe that was living in darkness. When the Moors ruled, Europe had universities. When the Moors left, Europe called it the end of an era. The Moors did not invade a great civilization. They built one.",
    },
    {
      id: "europa",
      h2: "Europe Was Named After an African Princess",
      body: "The continent of Europe takes its name from Europa, a Phoenician princess from the coast of what is now Lebanon and Syria, at the crossroads of Africa and Asia. The ancient Phoenicians themselves were a Semitic people with deep connections to the African continent and the civilizations of Egypt and Kush. The name of the most powerful continent in the modern world traces directly back to an African woman. This is not mythology. This is history. The kind ISOLELE was built to restore.",
    },
    {
      id: "egypt",
      h2: "Ancient Egypt: The African Civilization That Built the World",
      body: "The pyramids of Giza are the only wonder of the ancient world still standing. They were built by Africans. The ancient Egyptians were not the pale figures painted in Hollywood films. They were Black African people from the Nile Valley who built a civilization that lasted over 3000 years, longer than any empire in human history. They invented writing, medicine, architecture, mathematics, and spirituality. They built monuments so precise that modern engineering cannot fully explain them. Every child who reads ISOLELE carries the blood of the people who built those pyramids. That is not a metaphor. That is genetics. That is history. That is power.",
    },
    {
      id: "why",
      h2: "Why ISOLELE Exists",
      body: "ISOLELE exists because this history was stolen. Not lost. Stolen. Deliberately removed from school curriculums, deliberately erased from textbooks, deliberately replaced with a narrative that said Africa had no history worth telling. ISOLELE is the correction. Every superhero in the ISOLELE universe is a direct descendant of these civilizations. Zaiire carries the blood of Kongo kings. Amara carries the spirit of African warrior queens. Makanda carries the memory of civilizations that chose to disappear rather than be conquered. When you read ISOLELE, you are not reading fantasy. You are reading what was always true. You have always been royal. Welcome home.",
    },
  ],
  cta: {
    label: "EXPLORE THE ISOLELE UNIVERSE",
    href: "/#hero",
  },
};

export function RoyalHistoryPage() {
  const { currentTheme } = useTheme();

  return (
    <div style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 15%, ${currentTheme.colors.accentPrimary} 0%, transparent 55%),
                              radial-gradient(circle at 85% 10%, ${currentTheme.colors.accentSecondary} 0%, transparent 55%),
                              radial-gradient(circle at 60% 85%, ${currentTheme.colors.accentPrimary} 0%, transparent 50%)`,
          }}
        />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-widest"
            style={{
              backgroundColor: `${currentTheme.colors.accentPrimary}20`,
              color: currentTheme.colors.accentPrimary,
              border: `1px solid ${currentTheme.colors.accentPrimary}30`,
            }}
          >
            <Crown className="h-4 w-4" />
            ROYAL HISTORY
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance"
            style={{ color: currentTheme.colors.textPrimary, lineHeight: 1.05 }}
          >
            {CONTENT.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-6 grid gap-3 text-lg sm:text-xl leading-relaxed"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {CONTENT.lead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {CONTENT.sections.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: `${currentTheme.colors.backgroundSecondary}`,
                  color: currentTheme.colors.textPrimary,
                  border: `1px solid ${currentTheme.colors.accentPrimary}${idx % 2 === 0 ? "20" : "10"}`,
                }}
              >
                {s.h2}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto grid gap-10">
          {CONTENT.sections.map((s, index) => (
            <motion.article
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                backgroundColor: currentTheme.colors.backgroundSecondary,
                border: `1px solid ${currentTheme.colors.accentPrimary}22`,
              }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 10% 20%, ${currentTheme.colors.accentPrimary} 0%, transparent 40%),
                                    radial-gradient(circle at 90% 80%, ${currentTheme.colors.accentSecondary} 0%, transparent 45%)`,
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: currentTheme.colors.textPrimary }}>
                    {s.h2}
                  </h2>
                  <div
                    className="h-10 w-10 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${currentTheme.colors.accentPrimary}18`,
                      border: `1px solid ${currentTheme.colors.accentPrimary}26`,
                    }}
                  >
                    <Crown className="h-5 w-5" style={{ color: currentTheme.colors.accentPrimary }} />
                  </div>
                </div>

                <div
                  className="mt-4 h-1 w-24 rounded-full"
                  style={{ backgroundColor: currentTheme.colors.accentPrimary }}
                />

                <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                  {s.body}
                </p>
              </div>
            </motion.article>
          ))}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
            style={{
              backgroundColor: currentTheme.colors.background,
              border: `1px solid ${currentTheme.colors.accentPrimary}35`,
              boxShadow: `0 24px 60px ${currentTheme.colors.accentPrimary}14`,
            }}
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 30%, ${currentTheme.colors.accentPrimary} 0%, transparent 55%),
                                  radial-gradient(circle at 75% 70%, ${currentTheme.colors.accentSecondary} 0%, transparent 55%)`,
              }}
            />

            <div className="relative">
              <p className="text-base sm:text-lg font-semibold mb-6" style={{ color: currentTheme.colors.textSecondary }}>
                You have always been royal. Now explore the universe built to restore that truth.
              </p>

              <Link href={CONTENT.cta.href}>
                <motion.button
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-black tracking-wider uppercase"
                  style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {CONTENT.cta.label}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

