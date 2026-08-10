"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Megaphone, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/shared/contexts/theme-context";

const inquiryCategories = [
  {
    title: "Press & Media",
    body: "Outlet name, publication or broadcast date, and the nature of the coverage.",
  },
  {
    title: "Partnerships, Licensing & Distribution",
    body: "Company name, proposed opportunity, and relevant background on your organization.",
  },
  {
    title: "Retail & Wholesale",
    body: "Store or platform name, region, and product lines of interest.",
  },
  {
    title: "Careers",
    body: "Please refer to our Careers page for current opportunities and application guidelines.",
  },
  {
    title: "General & Community",
    body: "All other correspondence, including reader and fan inquiries, is welcome.",
  },
];

export function ContactPage() {
  const { currentTheme } = useTheme();
  const router = useRouter();

  return (
    <main
      className="min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.78), rgba(0,0,0,0.88)), url('/royal-palace-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
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
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4" style={{ color: currentTheme.colors.accentPrimary }} /> Everything Begins in Kongo
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Contact</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
            ISOLELE Universe welcomes inquiries from press, cultural institutions, licensing and distribution partners, retailers, and members of the public.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur md:p-8"
          >
            <Mail className="mb-5 h-10 w-10" style={{ color: currentTheme.colors.accentPrimary }} />
            <h2 className="text-2xl font-black">General Correspondence</h2>
            <a href="mailto:empire@isoleleuniverse.com" className="mt-4 inline-block text-lg font-bold underline decoration-white/30 underline-offset-4">
              empire@isoleleuniverse.com
            </a>
            <p className="mt-5 leading-8 text-white/70">
              All correspondence is reviewed directly by our team. We aim to respond within three to five business days. Press inquiries with a publication deadline should note that deadline clearly in the subject line.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/15 bg-black/35 p-7 shadow-2xl backdrop-blur md:p-8"
          >
            <Megaphone className="mb-5 h-10 w-10" style={{ color: currentTheme.colors.accentPrimary }} />
            <h2 className="text-2xl font-black">Inquiry Categories</h2>
            <p className="mt-3 leading-8 text-white/70">
              To ensure your message reaches the correct department, please indicate the nature of your inquiry:
            </p>
            <div className="mt-6 space-y-4">
              {inquiryCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-5"
                >
                  <h3 className="font-black" style={{ color: currentTheme.colors.accentPrimary }}>{category.title}</h3>
                  <p className="mt-2 leading-7 text-white/70">{category.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>
        </div>

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur md:p-8"
          >
            <MapPin className="mb-5 h-10 w-10" style={{ color: currentTheme.colors.accentPrimary }} />
            <h2 className="text-2xl font-black">Headquarters</h2>
            <p className="mt-4 leading-8 text-white/75">
              ISOLELE Universe<br />
              Kinshasa, Democratic Republic of Congo<br />
              Additional operations in Bukavu, the United States, Kenya, and Zambia.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border p-7 text-center shadow-xl backdrop-blur md:p-8"
            style={{ backgroundColor: `${currentTheme.colors.accentPrimary}22`, borderColor: `${currentTheme.colors.accentPrimary}55` }}
          >
            <h2 className="text-2xl font-black">Follow ISOLELE Universe</h2>
            <p className="mt-4 leading-8 text-white/75">
              For ongoing announcements and releases, follow ISOLELE Universe across our official social channels.
            </p>
            <p className="mt-7 text-xl font-black italic" style={{ color: currentTheme.colors.accentPrimary }}>
              Everything Begins in Kongo
            </p>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
