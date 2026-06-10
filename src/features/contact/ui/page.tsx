"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import type { SupportedLocale } from "@/shared/i18n/locales";
import emailjs from "@emailjs/browser";

interface ContactPageProps {
    locale: SupportedLocale;
}

const contactContent = {
    en: {
        eyebrow: "GET IN TOUCH",
        title: "Contact the Royal Court",
        description: "Reach out to the ISOLELE team for partnerships, press inquiries, or general support.",
        formName: "Full Name",
        formEmail: "Email Address",
        formSubject: "Subject",
        formMessage: "Your Message",
        formSubmit: "Send Message",
        formSubmitting: "Sending...",
        formSuccess: "Your message has been sent successfully. We will respond shortly.",
        infoTitle: "Royal Headquarters",
        infoAddress: "Kinshasa, Democratic Republic of Congo",
        infoEmailPartnerships: "Partnerships & Press",
        infoEmailSupport: "General Support",
        placeholderName: "Your name",
        placeholderEmail: "your.email@example.com",
        placeholderSubject: "How can we help you?",
        placeholderMessage: "Write your message here...",
    },
    fr: {
        eyebrow: "CONTACTER LA COUR",
        title: "Contacter la Cour Royale",
        description: "Contactez l'équipe ISOLELE pour des partenariats, des demandes de presse ou une assistance générale.",
        formName: "Nom Complet",
        formEmail: "Adresse Email",
        formSubject: "Sujet",
        formMessage: "Votre Message",
        formSubmit: "Envoyer le Message",
        formSubmitting: "Envoi en cours...",
        formSuccess: "Votre message a été envoyé avec succès. Nous vous répondrons sous peu.",
        infoTitle: "Siège Royal",
        infoAddress: "Kinshasa, République Démocratique du Congo",
        infoEmailPartnerships: "Partenariats & Presse",
        infoEmailSupport: "Support Général",
        placeholderName: "Votre nom",
        placeholderEmail: "votre.email@exemple.com",
        placeholderSubject: "Comment pouvons-nous vous aider ?",
        placeholderMessage: "Écrivez votre message ici...",
    },
} as const;

export function ContactPage({ locale }: ContactPageProps) {
    const { currentTheme } = useTheme();
    const content = contactContent[locale] ?? contactContent.en;

    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            await emailjs.send(
                'service_123abc', // Replace with your EmailJS service ID
                'template_456def', // Replace with your EmailJS template ID
                {
                    ...formData,
                    email: formData.email,
                }
            );
        } catch (error) {
            console.error("Error sending email:", error);
        }

        // Simulation d'envoi de formulaire
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main
            className="min-h-screen px-5 pb-24 pt-28 md:px-8 md:pt-36"
            style={{
                background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`,
                color: currentTheme.colors.textPrimary,
            }}
        >
            <section className="mx-auto max-w-6xl">
                <div className="max-w-3xl mb-12">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.35em]" style={{ color: currentTheme.colors.accentPrimary }}>
                        {content.eyebrow}
                    </p>
                    <h1 className="text-4xl font-black tracking-tight md:text-6xl">{content.title}</h1>
                    <p className="mt-5 text-base leading-8 text-[var(--isolele-text-secondary)] md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
                        {content.description}
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Formulaire de Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[28px] border p-6 md:p-10"
                        style={{
                            background: `linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)`,
                            borderColor: currentTheme.colors.accentPrimary,
                            boxShadow: `0 24px 60px ${currentTheme.colors.accentPrimary}20`,
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <CheckCircle size={48} style={{ color: currentTheme.colors.accentPrimary }} className="mb-4" />
                                    <p className="text-lg font-bold leading-relaxed max-w-md">{content.formSuccess}</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition hover:opacity-90"
                                        style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
                                    >
                                        OK
                                    </button>
                                </motion.div>
                            ) : (
                                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: currentTheme.colors.textSecondary }}>
                                            {content.formName}
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder={content.placeholderName}
                                            className="w-full rounded-xl px-4 py-3 text-sm bg-white/90 border outline-none transition"
                                            style={{
                                                color: currentTheme.colors.textPrimary,
                                                borderColor: currentTheme.colors.accentPrimary,
                                            }}
                                            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.accentPrimary}30`)}
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: currentTheme.colors.textSecondary }}>
                                            {content.formEmail}
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={content.placeholderEmail}
                                            className="w-full rounded-xl px-4 py-3 text-sm bg-white/90 border outline-none transition"
                                            style={{
                                                color: currentTheme.colors.textPrimary,
                                                borderColor: currentTheme.colors.accentPrimary,
                                            }}
                                            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.accentPrimary}30`)}
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: currentTheme.colors.textSecondary }}>
                                            {content.formSubject}
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder={content.placeholderSubject}
                                            className="w-full rounded-xl px-4 py-3 text-sm bg-white/90 border outline-none transition"
                                            style={{
                                                color: currentTheme.colors.textPrimary,
                                                borderColor: currentTheme.colors.accentPrimary,
                                            }}
                                            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.accentPrimary}30`)}
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: currentTheme.colors.textSecondary }}>
                                            {content.formMessage}
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder={content.placeholderMessage}
                                            className="w-full rounded-xl px-4 py-3 text-sm bg-white/90 border outline-none resize-none transition"
                                            style={{
                                                color: currentTheme.colors.textPrimary,
                                                borderColor: currentTheme.colors.accentPrimary,
                                            }}
                                            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.accentPrimary}30`)}
                                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-black uppercase tracking-[0.16em] transition disabled:opacity-50"
                                        style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={14} />
                                        {status === "submitting" ? content.formSubmitting : content.formSubmit}
                                    </motion.button>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Section d'Informations Alternatives */}
                    
                </div>
            </section>
        </main>
    );
}