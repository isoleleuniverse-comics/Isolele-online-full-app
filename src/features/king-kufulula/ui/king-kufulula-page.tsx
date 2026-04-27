"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, ArrowRight, Shield, Flame } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";

const KING_PHOTO = {
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/King%20kufulula-1pEeYE9t1QYruZhNooZuPw7Nkd1A8l.jpg",
  alt: "H.R.M King Kufulula - Creator of ISOLELE",
};

const CONTENT = {
  title: "HRM King Kufulula Bapindi Manikongo: The African King Who Built a Universe From Nothing",
  metaDescription:
    "HRM King Kufulula Bapindi Manikongo is the traditional King of the Bapindi people and Manikongo of the Kongo royal lineage. Founder of ISOLELE, the first Black African superhero universe, built from Kinshasa, DRC for the world.",
  sections: [
    {
      id: "king",
      h2: "The King Behind the Universe",
      body: "HRM King Kufulula Bapindi Manikongo is not a comic book creator who chose an African theme. He is an African king who chose to build a universe. As the traditional King of the Bapindi people of the Democratic Republic of Congo and Manikongo of the Kongo royal lineage, his identity, his bloodline, and his responsibility to his people are not inspiration for ISOLELE. They are ISOLELE. Every kingdom in the universe is real because the man who built it is royalty. Every hero who fights for their people is real because the man who created them fights for his every single day.",
      icon: Crown,
    },
    {
      id: "zaiire",
      h2: "Zaiire Is His Story",
      body: "Zaiire is the Prince of Kongo searching for his mother across the cosmos. King Kufulula knows what it means to search. To be separated from what you love. To carry a destiny that was chosen for you before you understood what it meant. The exile. The distance. The responsibility of a crown you did not ask for but cannot put down. Zaiire’s journey is not fiction. It is a mirror. When you read Zaiire crossing the cosmos to find his mother Kimoya, you are reading a king processing his own truth through the only language powerful enough to hold it. Story.",
      icon: Shield,
    },
    {
      id: "war",
      h2: "Built in the Middle of War",
      body: "Building ISOLELE was never just a creative challenge. It was survival. The DRC is one of the most conflict-affected countries on earth. North and South Kivu, where some of ISOLELE’s stories are set, are territories where armed groups, rebel forces, and violence are daily realities. During the creation of ISOLELE, three of our illustrators were killed by rebels. Three artists who gave their hands, their talent, and their lives to build something beautiful for African children. ISOLELE carries their names in every page. Their sacrifice is not forgotten. It is the foundation.",
      icon: Flame,
    },
    {
      id: "made-in-congo",
      h2: "Made in Congo. On Purpose.",
      body: "King Kufulula made a decision that most people told him was impossible. Everything ISOLELE produces will be made in Congo. Not in China. Not outsourced. Not dependent on a foreign supply chain that extracts value from Africa and returns nothing. The superhero costumes are made in Congo. The art is produced in Kinshasa. The fragrance bottles are crafted in Kinshasa. This is not a brand statement. It is a declaration of economic independence. King Kufulula was tired of a world that takes everything from Africa and gives African creators nothing in return. ISOLELE exists to prove that Africa can create for the world, not just supply it. One goal: dethrone the dependence on China. Build it in Congo. Ship it to the world.",
      icon: Crown,
    },
    {
      id: "children",
      h2: "Investing in the Children of War",
      body: "A portion of ISOLELE’s mission is dedicated to the children of North and South Kivu, young people growing up in active conflict zones who have never been told that their story matters. ISOLELE runs a free art education program for youth from these territories, because King Kufulula believes that a child who learns to draw their own hero cannot be fully broken by war. Art is armor. Story is survival. And every child who picks up a pencil in Kivu is already a warrior.",
      icon: Shield,
    },
    {
      id: "goal",
      h2: "One Goal",
      body: "HRM King Kufulula Bapindi Manikongo has one goal. To build from scratch what the world said Africa could not build. A complete creative lifestyle empire, comics, games, fragrance, fashion, all produced on African soil by African hands, distributed to the world. Not as a charity project. Not as a cultural curiosity. As a competitor. ISOLELE does not aspire to be recognized by the world. It is coming to change it. The king is not waiting to be discovered. He is building the thing they will one day have to come to him for.",
      icon: Crown,
    },
  ],
  ctas: [
    { label: "EXPLORE THE ISOLELE UNIVERSE", href: "/#hero" },
    { label: "READ ZAIIRE", href: "/books/zaiire" },
    { label: "DISCOVER YOUR ROYAL HISTORY", href: "/royal-history" },
  ],
};

export function KingKufululaPage() {
  const { currentTheme } = useTheme();

  return (
    <div style={{ backgroundColor: currentTheme.colors.background }}>
      {/* Photo hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[62vh] min-h-[520px] w-full">
          <Image
            src={KING_PHOTO.src}
            alt={KING_PHOTO.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.78) 65%, rgba(0,0,0,0.92) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `radial-gradient(circle at 18% 18%, ${currentTheme.colors.accentPrimary} 0%, transparent 55%),
                                radial-gradient(circle at 82% 15%, ${currentTheme.colors.accentSecondary} 0%, transparent 55%),
                                radial-gradient(circle at 60% 88%, ${currentTheme.colors.accentPrimary} 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black tracking-widest"
              style={{
                backgroundColor: `${currentTheme.colors.accentPrimary}22`,
                color: "#fff",
                border: `1px solid ${currentTheme.colors.accentPrimary}35`,
                backdropFilter: "blur(8px)",
              }}
            >
              <Crown className="h-4 w-4" />
              ISOLELE FOUNDER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance"
              style={{ color: "#fff", lineHeight: 1.05, textShadow: "0 8px 40px rgba(0,0,0,0.55)" }}
            >
              {CONTENT.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              className="mt-5 text-lg sm:text-xl leading-relaxed max-w-4xl"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              {CONTENT.metaDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.26 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {CONTENT.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.86)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {s.h2}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto grid gap-10">
          {CONTENT.sections.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 26 }}
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
                    backgroundImage: `radial-gradient(circle at 12% 18%, ${currentTheme.colors.accentPrimary} 0%, transparent 40%),
                                      radial-gradient(circle at 88% 78%, ${currentTheme.colors.accentSecondary} 0%, transparent 45%)`,
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
                      <Icon className="h-5 w-5" style={{ color: currentTheme.colors.accentPrimary }} />
                    </div>
                  </div>

                  <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />

                  <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                    {s.body}
                  </p>
                </div>
              </motion.article>
            );
          })}

          {/* Final CTAs */}
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
              <p className="text-base sm:text-lg font-semibold mb-7" style={{ color: currentTheme.colors.textSecondary }}>
                Three paths. One universe. One crown.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                {CONTENT.ctas.map((cta) => (
                  <Link key={cta.label} href={cta.href}>
                    <motion.button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black tracking-wider uppercase"
                      style={{
                        backgroundColor: currentTheme.colors.accentPrimary,
                        color: currentTheme.colors.background,
                      }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {cta.label}
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

