"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Palette, Rocket, Send, Sparkles } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface CareersPageProps {
  locale: SupportedLocale;
}

const content = {
  en: {
    eyebrow: "Careers at ISOLELE Universe",
    title: "Build the First Pan-African Superhero Universe",
    intro: [
      "ISOLELE Universe is not a studio chasing a trend. We are building an original mythology rooted in Kongo cosmology, from the ground up, across comics, games, film, and cultural products. Our tagline says it plainly: Everything Begins in Kongo.",
      "We are a global team working across Kinshasa, Goma, Bukavu, Los Angeles, and beyond. Some of our illustrators create pages under conditions most studios will never understand. We build anyway, because the story matters more than the obstacles.",
      "If you want your work to mean something bigger than a paycheck, we want to hear from you.",
    ],
    whyTitle: "Why ISOLELE",
    why: [
      "Original IP, not licensed work. Every character, every world, every story is ours from the first sketch.",
      "Real cultural weight. Our universe is built on Kongo heritage, royal history, and ancestral cosmology, not a surface-level aesthetic.",
      "A growing portfolio. Comics (Zaiire, Zaiko, Mokele, Malaika the Genius, Mansa Musa, Kandake, Cléopâtre, and more), the Kufu card game, Ku Ludo, RoiRoyal Parfums, and a platform built to serve the diaspora.",
      "A mission beyond the work. Through Bana ya ISOLELE, we run literacy and arts programs for children in Goma and Kinshasa, with more regions to come.",
    ],
    openRoles: "Open Roles",
    openRolesTitle: "Creative, technical, and operational functions",
    openRolesIntro: "We hire across creative, technical, and operational functions as the universe expands. Roles typically fall into these areas.",
    groups: [
      ["Creative", ["Illustrators & Character Artists", "Comic Letterers", "Concept Artists", "Colorists"]],
      ["Technical", ["Web & App Developers", "E-commerce / Platform Engineers"]],
      ["Business & Operations", ["Production Coordinators", "Partnerships & Licensing", "Marketing & Social Media"]],
    ],
    noFit: "Don’t see your exact fit listed? If you believe in what we’re building, reach out anyway. We’ve built this universe with people who found us, not just people we found.",
    applyTitle: "How to Apply",
    applyText: "Send your portfolio, resume, or a short note about why ISOLELE speaks to you to empire@isoleleuniverse.com. Please include the role you’re interested in in the subject line. If you’re a visual artist, portfolio samples are the fastest way to get notice.",
    applyButton: "Apply by Email",
  },
  fr: {
    eyebrow: "Careers chez ISOLELE Universe",
    title: "Construire le premier univers super-héroïque panafricain",
    intro: [
      "ISOLELE Universe n’est pas un studio qui suit une tendance. Nous construisons une mythologie originale enracinée dans la cosmologie Kongo, depuis la base, à travers les comics, les jeux, le film et les produits culturels. Notre phrase le dit clairement : Everything Begins in Kongo.",
      "Nous sommes une équipe mondiale qui travaille entre Kinshasa, Goma, Bukavu, Los Angeles et au-delà. Certains de nos illustrateurs créent des pages dans des conditions que la plupart des studios ne comprendront jamais. Nous construisons malgré tout, parce que l’histoire compte plus que les obstacles.",
      "Si vous voulez que votre travail signifie plus qu’un simple salaire, nous voulons vous entendre.",
    ],
    whyTitle: "Pourquoi ISOLELE",
    why: [
      "Une propriété intellectuelle originale, pas du travail sous licence. Chaque personnage, chaque monde, chaque histoire nous appartient dès le premier croquis.",
      "Un véritable poids culturel. Notre univers repose sur l’héritage Kongo, l’histoire royale et la cosmologie ancestrale, pas sur une esthétique superficielle.",
      "Un portfolio en croissance. Comics (Zaiire, Zaiko, Mokele, Malaika the Genius, Mansa Musa, Kandake, Cléopâtre, et plus), le jeu de cartes Kufu, Ku Ludo, RoiRoyal Parfums et une plateforme pensée pour servir la diaspora.",
      "Une mission au-delà du travail. Avec Bana ya ISOLELE, nous menons des programmes de lecture et d’arts pour les enfants à Goma et Kinshasa, avec d’autres régions à venir.",
    ],
    openRoles: "Postes ouverts",
    openRolesTitle: "Fonctions créatives, techniques et opérationnelles",
    openRolesIntro: "Nous recrutons dans les fonctions créatives, techniques et opérationnelles à mesure que l’univers grandit. Les rôles se regroupent généralement dans ces domaines.",
    groups: [
      ["Créatif", ["Illustrateurs & Character Artists", "Comic Letterers", "Concept Artists", "Coloristes"]],
      ["Technique", ["Développeurs Web & App", "Ingénieurs e-commerce / plateforme"]],
      ["Business & Opérations", ["Coordinateurs de production", "Partenariats & licences", "Marketing & réseaux sociaux"]],
    ],
    noFit: "Vous ne voyez pas exactement votre profil ? Si vous croyez à ce que nous construisons, contactez-nous quand même. Nous avons bâti cet univers avec des personnes qui nous ont trouvés, pas seulement avec celles que nous avons trouvées.",
    applyTitle: "Comment postuler",
    applyText: "Envoyez votre portfolio, CV ou une courte note expliquant pourquoi ISOLELE vous parle à empire@isoleleuniverse.com. Veuillez inclure le rôle qui vous intéresse dans l’objet du message. Si vous êtes artiste visuel, les exemples de portfolio sont le moyen le plus rapide d’être remarqué.",
    applyButton: "Postuler par email",
  },
} as const;

const groupIcons = [Palette, Code2, Briefcase];

export function CareersPage({ locale }: CareersPageProps) {
  const { currentTheme } = useTheme();
  const page = content[locale] ?? content.en;

  return (
    <div className="min-h-screen px-5 pb-24 pt-24 md:px-8 md:pt-32" style={{ background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`, color: currentTheme.colors.textPrimary }}>
      <section className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-[34px] border px-6 py-12 md:px-12 md:py-16" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.backgroundSecondary}f2 0%, ${currentTheme.colors.background}f7 100%)`, borderColor: `${currentTheme.colors.accentPrimary}55`, boxShadow: `0 30px 90px ${currentTheme.colors.accentPrimary}1f` }}>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}22` }} />
          <div className="relative max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.38em]" style={{ color: currentTheme.colors.accentPrimary }}>{page.eyebrow}</p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">{page.title}</h1>
            <div className="mt-6 space-y-5 text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
              {page.intro.map((paragraph, index) => <p key={paragraph} className={index === 2 ? "font-bold" : undefined} style={index === 2 ? { color: currentTheme.colors.textPrimary } : undefined}>{paragraph}</p>)}
            </div>
          </div>
        </motion.div>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-10 rounded-[32px] border p-6 md:p-8" style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`, borderColor: `${currentTheme.colors.accentPrimary}45` }}>
          <div className="mb-6 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}><Sparkles size={22} /></span><h2 className="text-2xl font-black md:text-3xl">{page.whyTitle}</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{page.why.map((item) => <div key={item} className="rounded-2xl border p-5" style={{ backgroundColor: `${currentTheme.colors.background}b8`, borderColor: `${currentTheme.colors.accentPrimary}30` }}><p className="leading-7" style={{ color: currentTheme.colors.textSecondary }}>{item}</p></div>)}</div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-10 rounded-[32px] border p-6 md:p-8" style={{ background: `linear-gradient(180deg, ${currentTheme.colors.backgroundSecondary}f0 0%, ${currentTheme.colors.background}f5 100%)`, borderColor: `${currentTheme.colors.accentPrimary}45` }}>
          <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: currentTheme.colors.accentPrimary }}>{page.openRoles}</p>
          <h2 className="mt-3 text-3xl font-black">{page.openRolesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7" style={{ color: currentTheme.colors.textSecondary }}>{page.openRolesIntro}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {page.groups.map(([title, roles], index) => {
              const Icon = groupIcons[index];
              return <article key={title} className="rounded-2xl border p-6" style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`, borderColor: `${currentTheme.colors.accentPrimary}35` }}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}><Icon size={20} /></div><h3 className="text-xl font-black">{title}</h3><ul className="mt-4 list-disc space-y-2 pl-5 leading-7" style={{ color: currentTheme.colors.textSecondary }}>{roles.map((role) => <li key={role}>{role}</li>)}</ul></article>;
            })}
          </div>
          <p className="mt-8 rounded-2xl border p-5 leading-7" style={{ color: currentTheme.colors.textSecondary, borderColor: `${currentTheme.colors.accentPrimary}30`, backgroundColor: `${currentTheme.colors.background}b8` }}>{page.noFit}</p>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 overflow-hidden rounded-[32px] border p-6 md:p-10" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.accentPrimary}22 0%, ${currentTheme.colors.backgroundSecondary} 55%, ${currentTheme.colors.background} 100%)`, borderColor: `${currentTheme.colors.accentPrimary}55` }}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}><Rocket size={22} /></div><h2 className="text-2xl font-black md:text-3xl">{page.applyTitle}</h2><p className="mt-4 max-w-2xl leading-7" style={{ color: currentTheme.colors.textSecondary }}>{page.applyText}</p></div><a href="mailto:empire@isoleleuniverse.com" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.16em] transition hover:opacity-90" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}><Send size={16} />{page.applyButton}</a></div>
        </motion.section>
      </section>
    </div>
  );
}
