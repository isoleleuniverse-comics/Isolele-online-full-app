"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Handshake, Mail, MapPin, Megaphone, Store, Users } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface ContactPageProps {
  locale: SupportedLocale;
}

const inquiryCategories = [
  {
    title: "Press & Media",
    description: "Outlet name, publication or broadcast date, and the nature of the coverage.",
    icon: Megaphone,
  },
  {
    title: "Partnerships, Licensing & Distribution",
    description: "Company name, proposed opportunity, and relevant background on your organization.",
    icon: Handshake,
  },
  {
    title: "Retail & Wholesale",
    description: "Store or platform name, region, and product lines of interest.",
    icon: Store,
  },
  {
    title: "Careers",
    description: "Please refer to our Careers page for current opportunities and application guidelines.",
    icon: Briefcase,
  },
  {
    title: "General & Community",
    description: "All other correspondence, including reader and fan inquiries, is welcome.",
    icon: Users,
  },
];

export function ContactPage({ locale }: ContactPageProps) {
  const { currentTheme } = useTheme();
  const localizedEyebrow = locale === "fr" ? "CONTACT" : "CONTACT";

  return (
    <div
      className="min-h-screen px-5 pb-24 pt-24 md:px-8 md:pt-32"
      style={{
        background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}24 0%, ${currentTheme.colors.accentPrimary}0d 45%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`,
        color: currentTheme.colors.textPrimary,
      }}
    >
      <section className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          <div className="relative max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.38em]" style={{ color: currentTheme.colors.accentPrimary }}>
              {localizedEyebrow}
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Contact</h1>
            <h2 className="mt-4 text-2xl font-black md:text-3xl">ISOLELE Universe</h2>
            <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
              ISOLELE Universe welcomes inquiries from press, cultural institutions, licensing and distribution partners, retailers, and members of the public.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[28px] border p-6 md:p-8"
            style={{
              backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`,
              borderColor: `${currentTheme.colors.accentPrimary}45`,
            }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
              <Mail size={22} />
            </div>
            <h2 className="text-2xl font-black">General Correspondence</h2>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: currentTheme.colors.accentPrimary }}>
              Email: <a href="mailto:empire@isoleleuniverse.com" className="underline decoration-1 underline-offset-4">empire@isoleleuniverse.com</a>
            </p>
            <p className="mt-5 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
              All correspondence is reviewed directly by our team. We aim to respond within three to five business days. Press inquiries with a publication deadline should note that deadline clearly in the subject line.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-[28px] border p-6 md:p-8"
            style={{
              backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`,
              borderColor: `${currentTheme.colors.accentPrimary}45`,
            }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
              <Building2 size={22} />
            </div>
            <h2 className="text-2xl font-black">Headquarters</h2>
            <div className="mt-5 flex gap-3 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
              <MapPin className="mt-1 shrink-0" size={18} style={{ color: currentTheme.colors.accentPrimary }} />
              <p>
                ISOLELE Universe<br />
                Kinshasa, Democratic Republic of Congo<br />
                Additional operations in Bukavu, the United States, Kenya, and Zambia.
              </p>
            </div>
          </motion.article>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-[32px] border p-6 md:p-8"
          style={{
            background: `linear-gradient(180deg, ${currentTheme.colors.backgroundSecondary}f0 0%, ${currentTheme.colors.background}f5 100%)`,
            borderColor: `${currentTheme.colors.accentPrimary}45`,
          }}
        >
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: currentTheme.colors.accentPrimary }}>
              Inquiry Categories
            </p>
            <h2 className="mt-3 text-3xl font-black">To ensure your message reaches the correct department</h2>
            <p className="mt-4 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
              Please indicate the nature of your inquiry when contacting ISOLELE Universe.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {inquiryCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: `${currentTheme.colors.background}b8`,
                    borderColor: `${currentTheme.colors.accentPrimary}30`,
                  }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}18`, color: currentTheme.colors.accentPrimary }}>
                      <Icon size={18} />
                    </span>
                    <h3 className="font-black">{category.title}</h3>
                  </div>
                  <p className="text-sm leading-6" style={{ color: currentTheme.colors.textSecondary }}>
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 overflow-hidden rounded-[32px] border p-6 text-center md:p-10"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.accentPrimary}22 0%, ${currentTheme.colors.backgroundSecondary} 55%, ${currentTheme.colors.background} 100%)`,
            borderColor: `${currentTheme.colors.accentPrimary}55`,
          }}
        >
          <h2 className="text-2xl font-black">Follow ISOLELE Universe</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7" style={{ color: currentTheme.colors.textSecondary }}>
            For ongoing announcements and releases, follow ISOLELE Universe across our official social channels.
          </p>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.32em]" style={{ color: currentTheme.colors.accentPrimary }}>
            Everything Begins in Kongo
          </p>
        </motion.section>
      </section>
    </div>
  );
}
