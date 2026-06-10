"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, User, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";

export function ContactPage() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();

  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => null);
        setErrorMessage(json?.error || "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMessage("Impossible de contacter le serveur.");
      setStatus("error");
    }
  };

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

      <div className="max-w-6xl mx-auto relative z-10">
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
            {t("contact_title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {t("contact_subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2
              className="text-2xl font-bold tracking-wide mb-6 uppercase"
              style={{ color: currentTheme.colors.accentPrimary }}
            >
              {t("contact_info_title")}
            </h2>

            {[
              { title: t("contact_info_support"), email: "contact@isolele.com", icon: MessageSquare },
              { title: t("contact_info_careers"), email: "talents@isolele.com", icon: User },
              { title: t("contact_info_partners"), email: "partners@isolele.com", icon: Mail },
            ].map((card, idx) => (
              <motion.a
                key={idx}
                href={`mailto:${card.email}`}
                className="block p-6 rounded-2xl border transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
                style={{
                  backgroundColor: `${currentTheme.colors.backgroundSecondary}80`,
                  borderColor: `${currentTheme.colors.accentPrimary}20`,
                }}
                whileHover={{ borderColor: currentTheme.colors.accentPrimary }}
              >
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}15` }}>
                    <card.icon className="w-6 h-6" style={{ color: currentTheme.colors.accentPrimary }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: currentTheme.colors.textPrimary }}>
                      {card.title}
                    </h3>
                    <p className="text-sm transition-colors hover:underline" style={{ color: currentTheme.colors.accentPrimary }}>
                      {card.email}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 rounded-3xl border shadow-xl relative overflow-hidden backdrop-blur-md"
            style={{
              backgroundColor: `${currentTheme.colors.backgroundSecondary}a0`,
              borderColor: `${currentTheme.colors.accentPrimary}30`,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  {t("contact_form_name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    color: currentTheme.colors.textPrimary,
                    borderColor: `${currentTheme.colors.accentPrimary}30`,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = currentTheme.colors.accentPrimary)}
                  onBlur={(e) => (e.target.style.borderColor = `${currentTheme.colors.accentPrimary}30`)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  {t("contact_form_email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    color: currentTheme.colors.textPrimary,
                    borderColor: `${currentTheme.colors.accentPrimary}30`,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = currentTheme.colors.accentPrimary)}
                  onBlur={(e) => (e.target.style.borderColor = `${currentTheme.colors.accentPrimary}30`)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  {t("contact_form_subject")}
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder={t("contact_form_subject")}
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    color: currentTheme.colors.textPrimary,
                    borderColor: `${currentTheme.colors.accentPrimary}30`,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = currentTheme.colors.accentPrimary)}
                  onBlur={(e) => (e.target.style.borderColor = `${currentTheme.colors.accentPrimary}30`)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                  {t("contact_form_message")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={7}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none min-h-[220px]"
                  style={{
                    backgroundColor: currentTheme.colors.background,
                    color: currentTheme.colors.textPrimary,
                    borderColor: `${currentTheme.colors.accentPrimary}30`,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = currentTheme.colors.accentPrimary)}
                  onBlur={(e) => (e.target.style.borderColor = `${currentTheme.colors.accentPrimary}30`)}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full py-4 rounded-xl font-bold tracking-wider flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: currentTheme.colors.background,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? t("contact_form_sending") : t("contact_form_send")}
              </motion.button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex gap-2 items-center p-4 rounded-xl border text-sm"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      borderColor: "rgba(16, 185, 129, 0.3)",
                      color: "#10b981",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{t("contact_form_success")}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex gap-2 items-center p-4 rounded-xl border text-sm"
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      borderColor: "rgba(239, 68, 68, 0.3)",
                      color: "#ef4444",
                    }}
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage || t("contact_form_error")}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
