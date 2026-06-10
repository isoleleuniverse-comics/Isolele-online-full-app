"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";

export function PrivacyPage() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();

  const sections = [
    { title: t("privacy_sec1_title"), content: t("privacy_sec1_content"), icon: Eye },
    { title: t("privacy_sec2_title"), content: t("privacy_sec2_content"), icon: FileText },
    { title: t("privacy_sec3_title"), content: t("privacy_sec3_content"), icon: Lock },
    { title: t("privacy_sec4_title"), content: t("privacy_sec4_content"), icon: Shield },
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 -top-10 right-10"
          style={{ backgroundColor: currentTheme.colors.accentPrimary }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bottom-10 left-10"
          style={{ backgroundColor: currentTheme.colors.accentSecondary }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex justify-center gap-2 mb-4 items-center"
          >
            <div className="h-px w-8" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
            <span style={{ color: currentTheme.colors.accentPrimary }}>◆</span>
            <div className="h-px w-8" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {t("privacy_title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {t("privacy_subtitle")}
          </motion.p>
        </div>

        {/* Section Cards */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className=" shadow-lg relative overflow-hidden"
              style={{
                backgroundColor: `${currentTheme.colors.backgroundSecondary}80`,
                borderColor: `${currentTheme.colors.accentPrimary}20`,
              }}
            >
              <div className="flex gap-6 items-start">
                <div 
                  className="p-4 rounded-2xl flex-shrink-0"
                  style={{ backgroundColor: `${currentTheme.colors.accentPrimary}15` }}
                >
                  <section.icon className="w-6 h-6" style={{ color: currentTheme.colors.accentPrimary }} />
                </div>
                <div>
                  <h2 
                    className="text-2xl font-bold tracking-wide mb-4"
                    style={{ color: currentTheme.colors.textPrimary }}
                  >
                    {section.title}
                  </h2>
                  <p 
                    className="leading-relaxed text-base whitespace-pre-line"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
