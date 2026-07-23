"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, HeartHandshake, Palette, Send, Sparkles, Wrench } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useRouter } from "next/navigation";

const whyItems = [
  "Original IP, not licensed work. Every character, every world, every story is ours from the first sketch.",
  "Real cultural weight. Our universe is built on Kongo heritage, royal history, and ancestral cosmology, not a surface-level aesthetic.",
  "A growing portfolio. Comics (Zaiire, Zaiko, Mokele, Malaika the Genius, Mansa Musa, Kandake, Cléopâtre, and more), the Kufu card game, Ku Ludo, RoiRoyal Parfums, and a platform built to serve the diaspora.",
  "A mission beyond the work. Through Bana ya ISOLELE, we run literacy and arts programs for children in Goma and Kinshasa, with more regions to come.",
];

const roleGroups = [
  { title: "Creative", icon: Palette, roles: ["Illustrators & Character Artists", "Comic Letterers", "Concept Artists", "Colorists"] },
  { title: "Technical", icon: Wrench, roles: ["Web & App Developers", "E-commerce / Platform Engineers"] },
  { title: "Business & Operations", icon: HeartHandshake, roles: ["Production Coordinators", "Partnerships & Licensing", "Marketing & Social Media"] },
];

export function CareersPage() {
  const { currentTheme } = useTheme();
  const router = useRouter();

  return (
    <main
      className="min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      style={{
        background: `radial-gradient(70% 60% at 15% 5%, ${currentTheme.colors.accentPrimary}28 0%, transparent 58%), radial-gradient(60% 55% at 90% 20%, ${currentTheme.colors.accentSecondary}20 0%, transparent 55%), ${currentTheme.colors.background}`,
        color: currentTheme.colors.textPrimary,
      }}
    >
      <button
        onClick={() => router.back()}
        className="fixed left-4 top-6 z-40 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-md backdrop-blur"
        style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}E6`, color: currentTheme.colors.textPrimary }}
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </button>

      <section className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border px-5 py-2 text-xs font-black uppercase tracking-[0.28em]" style={{ borderColor: `${currentTheme.colors.accentPrimary}45`, color: currentTheme.colors.accentPrimary }}>
            <Sparkles className="h-4 w-4" /> Everything Begins in Kongo
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Careers at ISOLELE Universe</h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold" style={{ color: currentTheme.colors.textSecondary }}>
            Build the First Pan-African Superhero Universe
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border p-7 shadow-2xl md:p-10"
            style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}B8`, borderColor: `${currentTheme.colors.accentPrimary}35` }}
          >
            <p className="text-lg leading-8 md:text-xl" style={{ color: currentTheme.colors.textPrimary }}>
              ISOLELE Universe is not a studio chasing a trend. We are building an original mythology rooted in Kongo cosmology, from the ground up, across comics, games, film, and cultural products. Our tagline says it plainly: <strong>Everything Begins in Kongo.</strong>
            </p>
            <p className="mt-5 leading-8" style={{ color: currentTheme.colors.textSecondary }}>
              We are a global team working across Kinshasa, Goma, Bukavu, Los Angeles, and beyond. Some of our illustrators create pages under conditions most studios will never understand. We build anyway, because the story matters more than the obstacles.
            </p>
            <p className="mt-5 text-lg font-bold" style={{ color: currentTheme.colors.accentPrimary }}>
              If you want your work to mean something bigger than a paycheck, we want to hear from you.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border p-7 shadow-xl md:p-10"
            style={{ backgroundColor: `${currentTheme.colors.background}B8`, borderColor: `${currentTheme.colors.accentPrimary}25` }}
          >
            <h2 className="mb-6 text-2xl font-black" style={{ color: currentTheme.colors.accentPrimary }}>Why ISOLELE</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {whyItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: `${currentTheme.colors.accentPrimary}25`, backgroundColor: `${currentTheme.colors.backgroundSecondary}80` }}
                >
                  <p className="leading-7" style={{ color: currentTheme.colors.textSecondary }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border p-7 shadow-xl md:p-10"
            style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}B8`, borderColor: `${currentTheme.colors.accentPrimary}30` }}
          >
            <h2 className="mb-6 text-2xl font-black" style={{ color: currentTheme.colors.accentPrimary }}>Open Roles</h2>
            <p className="mb-7 leading-8" style={{ color: currentTheme.colors.textSecondary }}>
              We hire across creative, technical, and operational functions as the universe expands. Roles typically fall into:
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {roleGroups.map(({ title, icon: Icon, roles }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: `${currentTheme.colors.accentPrimary}25`, backgroundColor: `${currentTheme.colors.background}A6` }}
                >
                  <Icon className="mb-4 h-8 w-8" style={{ color: currentTheme.colors.accentPrimary }} />
                  <h3 className="mb-3 text-lg font-black">{title}</h3>
                  <ul className="space-y-2">
                    {roles.map((role) => (
                      <li key={role} className="leading-7" style={{ color: currentTheme.colors.textSecondary }}>• {role}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <p className="mt-7 leading-8" style={{ color: currentTheme.colors.textSecondary }}>
              Don’t see your exact fit listed? If you believe in what we’re building, reach out anyway. We’ve built this universe with people who found us, not just people we found.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border p-7 text-center shadow-2xl md:p-10"
            style={{ backgroundColor: `${currentTheme.colors.accentPrimary}18`, borderColor: `${currentTheme.colors.accentPrimary}45` }}
          >
            <Briefcase className="mx-auto mb-4 h-12 w-12" style={{ color: currentTheme.colors.accentPrimary }} />
            <h2 className="text-2xl font-black">How to Apply</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8" style={{ color: currentTheme.colors.textSecondary }}>
              Send your portfolio, resume, or a short note about why ISOLELE speaks to you to empire@isoleleuniverse.com. Please include the role you’re interested in in the subject line. If you’re a visual artist, portfolio samples are the fastest way to get noticed.
            </p>
            <motion.a
              href="mailto:empire@isoleleuniverse.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-black"
              style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="h-4 w-4" /> empire@isoleleuniverse.com
            </motion.a>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
