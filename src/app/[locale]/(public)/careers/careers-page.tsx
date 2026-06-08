"use client";

import { motion } from "framer-motion";
import { Briefcase, Send } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";

export function CareersPage() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div 
      className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 -bottom-10 right-10"
          style={{ backgroundColor: currentTheme.colors.accentPrimary }}
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
            {t("careers_title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {t("careers_subtitle")}
          </motion.p>
        </div>

        {/* Notice Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-12 rounded-3xl border shadow-xl relative overflow-hidden text-center backdrop-blur-md"
          style={{
            backgroundColor: `${currentTheme.colors.backgroundSecondary}80`,
            borderColor: `${currentTheme.colors.accentPrimary}30`,
          }}
        >
          <div className="flex justify-center mb-6">
            <div 
              className="p-5 rounded-2xl"
              style={{ backgroundColor: `${currentTheme.colors.accentPrimary}15` }}
            >
              <Briefcase className="w-10 h-10" style={{ color: currentTheme.colors.accentPrimary }} />
            </div>
          </div>

          <h2 
            className="text-3xl font-bold tracking-wide mb-4"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            {t("careers_not_hiring_title")}
          </h2>
          
          <p 
            className="text-base leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {t("careers_not_hiring_desc")}
          </p>

          <div className="flex justify-center">
            <motion.a
              href="mailto:talents@isolele.com"
              className="px-8 py-4 rounded-xl font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              style={{
                backgroundColor: currentTheme.colors.accentPrimary,
                color: currentTheme.colors.background,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 h-4" />
              <span>{t("contact_form_send")}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
