"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Palette, Rocket, Send, Sparkles } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";

const whyItems = [
  "Original IP, not licensed work. Every character, every world, every story is ours from the first sketch.",
  "Real cultural weight. Our universe is built on Kongo heritage, royal history, and ancestral cosmology, not a surface-level aesthetic.",
  "A growing portfolio. Comics (Zaiire, Zaiko, Mokele, Malaika the Genius, Mansa Musa, Kandake, Cléopâtre, and more), the Kufu card game, Ku Ludo, RoiRoyal Parfums, and a platform built to serve the diaspora.",
  "A mission beyond the work. Through Bana ya ISOLELE, we run literacy and arts programs for children in Goma and Kinshasa, with more regions to come.",
];

const roleGroups = [
  {
    title: "Creative",
    icon: Palette,
    roles: ["Illustrators & Character Artists", "Comic Letterers", "Concept Artists", "Colorists"],
  },
  {
    title: "Technical",
    icon: Code2,
    roles: ["Web & App Developers", "E-commerce / Platform Engineers"],
  },
  {
    title: "Business & Operations",
    icon: Briefcase,
    roles: ["Production Coordinators", "Partnerships & Licensing", "Marketing & Social Media"],
  },
];

export function CareersPage() {
  const { currentTheme } = useTheme();

  return (
    <div
      className="min-h-screen px-5 pb-24 pt-24 md:px-8 md:pt-32"
      style={{
        background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`,
        color: currentTheme.colors.textPrimary,
      }}
    >
      <section className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[34px] border px-6 py-12 md:px-12 md:py-16"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.backgroundSecondary}f2 0%, ${currentTheme.colors.background}f7 100%)`,
            borderColor: `${currentTheme.colors.accentPrimary}55`,
            boxShadow: `0 30px 90px ${currentTheme.colors.accentPrimary}1f`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${currentTheme.colors.accentPrimary}22` }}
          />
          <div className="relative max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.38em]" style={{ color: currentTheme.colors.accentPrimary }}>
              Careers at ISOLELE Universe
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Build the First Pan-African Superhero Universe</h1>
            <div className="mt-6 space-y-5 text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
              <p>
                ISOLELE Universe is not a studio chasing a trend. We are building an original mythology rooted in Kongo cosmology, from the ground up, across comics, games, film, and cultural products. Our tagline says it plainly: Everything Begins in Kongo.
              </p>
              <p>
                We are a global team working across Kinshasa, Goma, Bukavu, Los Angeles, and beyond. Some of our illustrators create pages under conditions most studios will never understand. We build anyway, because the story matters more than the obstacles.
              </p>
              <p className="font-bold" style={{ color: currentTheme.colors.textPrimary }}>
                If you want your work to mean something bigger than a paycheck, we want to hear from you.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-[32px] border p-6 md:p-8"
          style={{
            backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`,
            borderColor: `${currentTheme.colors.accentPrimary}45`,
          }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
              <Sparkles size={22} />
            </span>
            <h2 className="text-2xl font-black md:text-3xl">Why ISOLELE</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {whyItems.map((item) => (
              <div key={item} className="rounded-2xl border p-5" style={{ backgroundColor: `${currentTheme.colors.background}b8`, borderColor: `${currentTheme.colors.accentPrimary}30` }}>
                <p className="leading-7" style={{ color: currentTheme.colors.textSecondary }}>{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 rounded-[32px] border p-6 md:p-8"
          style={{
            background: `linear-gradient(180deg, ${currentTheme.colors.backgroundSecondary}f0 0%, ${currentTheme.colors.background}f5 100%)`,
            borderColor: `${currentTheme.colors.accentPrimary}45`,
          }}
        >
          <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: currentTheme.colors.accentPrimary }}>
            Open Roles
          </p>
          <h2 className="mt-3 text-3xl font-black">Creative, technical, and operational functions</h2>
          <p className="mt-4 max-w-3xl leading-7" style={{ color: currentTheme.colors.textSecondary }}>
            We hire across creative, technical, and operational functions as the universe expands. Roles typically fall into these areas.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {roleGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="rounded-2xl border p-6" style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`, borderColor: `${currentTheme.colors.accentPrimary}35` }}>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-black">{group.title}</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
                    {group.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="mt-8 rounded-2xl border p-5 leading-7" style={{ color: currentTheme.colors.textSecondary, borderColor: `${currentTheme.colors.accentPrimary}30`, backgroundColor: `${currentTheme.colors.background}b8` }}>
            Don’t see your exact fit listed? If you believe in what we’re building, reach out anyway. We’ve built this universe with people who found us, not just people we found.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-[32px] border p-6 md:p-10"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.accentPrimary}22 0%, ${currentTheme.colors.backgroundSecondary} 55%, ${currentTheme.colors.background} 100%)`,
            borderColor: `${currentTheme.colors.accentPrimary}55`,
          }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
                <Rocket size={22} />
              </div>
              <h2 className="text-2xl font-black md:text-3xl">How to Apply</h2>
              <p className="mt-4 max-w-2xl leading-7" style={{ color: currentTheme.colors.textSecondary }}>
                Send your portfolio, resume, or a short note about why ISOLELE speaks to you to empire@isoleleuniverse.com. Please include the role you’re interested in in the subject line. If you’re a visual artist, portfolio samples are the fastest way to get notice.
              </p>
            </div>
            <a href="mailto:empire@isoleleuniverse.com" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.16em] transition hover:opacity-90" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>
              <Send size={16} />
              Apply by Email
            </a>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
