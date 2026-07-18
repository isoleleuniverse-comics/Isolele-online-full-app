"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Mail, MessageSquare, User, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";

export function ContactPage() {
  const { currentTheme } = useTheme();

  return (
    <div
      className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/royal-palace-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={() => history.back()}
        className="fixed left-4 top-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full shadow-md"
        style={{ backgroundColor: currentTheme.colors.backgroundSecondary, color: currentTheme.colors.textPrimary }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 -top-10 -left-10"
          style={{ backgroundColor: currentTheme.colors.accentPrimary }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bottom-10 right-10"
          style={{ backgroundColor: currentTheme.colors.accentSecondary }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          ISOLELE Universe welcomes inquiries from press, cultural institutions, licensing and distribution partners, retailers, and members of the public.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-left bg-black/30 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold">General Correspondence</h3>
          <p>Email: <a href="mailto:empire@isoleleuniverse.com" className="underline">empire@isoleleuniverse.com</a></p>

          <h4 className="mt-4 font-semibold">Inquiry Categories</h4>
          <p>To ensure your message reaches the correct department, please indicate the nature of your inquiry:</p>

          <ul className="list-disc list-inside mt-2">
            <li><strong>Press & Media</strong> — Outlet name, publication or broadcast date, and the nature of the coverage.</li>
            <li><strong>Partnerships, Licensing & Distribution</strong> — Company name, proposed opportunity, and relevant background on your organization.</li>
            <li><strong>Retail & Wholesale</strong> — Store or platform name, region, and product lines of interest.</li>
            <li><strong>Careers</strong> — Please refer to our Careers page for current opportunities and application guidelines.</li>
            <li><strong>General & Community</strong> — All other correspondence, including reader and fan inquiries, is welcome.</li>
          </ul>

          <h4 className="mt-4 font-semibold">Headquarters</h4>
          <p>ISOLELE Universe<br/>Kinshasa, Democratic Republic of Congo<br/>Additional operations in Bukavu, the United States, Kenya, and Zambia.</p>

          <h4 className="mt-4 font-semibold">Follow ISOLELE Universe</h4>
          <p>For ongoing announcements and releases, follow ISOLELE Universe across our official social channels.</p>

          <p className="mt-6 italic">Everything Begins in Kongo</p>
        </motion.div>
      </div>
    </div>
  );
}
