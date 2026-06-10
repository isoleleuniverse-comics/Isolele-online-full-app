"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/shared/contexts/theme-context";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface PrivacyPageProps {
    locale: SupportedLocale;
}

const privacyContent = {
    en: {
        eyebrow: "LEGAL",
        title: "Privacy Policy",
        description: "Understand how ISOLELE collects, uses, and protects your personal information.",
        lastUpdated: "Last updated: January 2026",
        sections: [
            {
                title: "1. Introduction",
                content: "ISOLELE (\"we\", \"our\", or \"us\") operates the ISOLELE website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
            },
            {
                title: "2. Information Collection and Use",
                content: "We collect several different types of information for various purposes to provide and improve our Service to you.",
            },
            {
                title: "3. Types of Data Collected",
                content: "Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). This may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.",
            },
            {
                title: "4. Use of Data",
                content: "ISOLELE uses the collected data for various purposes: To provide and maintain our Service, To notify you about changes to our Service, To provide customer support, To gather analysis or valuable information so that we can improve our Service, To monitor the usage of our Service, To detect, prevent and address technical issues.",
            },
            {
                title: "5. Security of Data",
                content: "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
            },
            {
                title: "6. Contact Us",
                content: "If you have any questions about this Privacy Policy, please contact us at: privacy@isolele.com",
            },
        ],
    },
    fr: {
        eyebrow: "LÉGAL",
        title: "Politique de Confidentialité",
        description: "Comprenez comment ISOLELE collecte, utilise et protège vos informations personnelles.",
        lastUpdated: "Dernière mise à jour: Janvier 2026",
        sections: [
            {
                title: "1. Introduction",
                content: "ISOLELE (\"nous\", \"notre\" ou \"nos\") exploite le site web ISOLELE. Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation de données personnelles lorsque vous utilisez notre Service.",
            },
            {
                title: "2. Collecte et Utilisation des Informations",
                content: "Nous collectons plusieurs types d'informations à diverses fins pour vous fournir et améliorer notre Service.",
            },
            {
                title: "3. Types de Données Collectées",
                content: "Données Personnelles: Lors de l'utilisation de notre Service, nous pouvons vous demander de nous fournir certaines informations d'identification personnelle (\"Données Personnelles\"). Cela peut inclure, sans s'y limiter: Adresse e-mail, Prénom et nom, Cookies et Données d'Utilisation.",
            },
            {
                title: "4. Utilisation des Données",
                content: "ISOLELE utilise les données collectées à diverses fins: Fournir et maintenir notre Service, Vous informer des modifications apportées à notre Service, Fournir une assistance client, Recueillir des analyses, Surveiller l'utilisation de notre Service, Détecter et résoudre les problèmes techniques.",
            },
            {
                title: "5. Sécurité des Données",
                content: "La sécurité de vos données est importante pour nous, mais n'oubliez pas qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est 100% sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos Données Personnelles, nous ne pouvons pas garantir leur sécurité absolue.",
            },
            {
                title: "6. Nous Contacter",
                content: "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à: privacy@isolele.com",
            },
        ],
    },
} as const;

export function PrivacyPage({ locale }: PrivacyPageProps) {
    const { currentTheme } = useTheme();
    const content = privacyContent[locale] ?? privacyContent.en;

    return (
        <main
            className="min-h-screen px-5 pb-24 pt-28 md:px-8 md:pt-36"
            style={{
                background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`,
                color: currentTheme.colors.textPrimary,
            }}
        >
            <section className="mx-auto max-w-4xl">
                <div className="mb-12">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.35em]" style={{ color: currentTheme.colors.accentPrimary }}>
                        {content.eyebrow}
                    </p>
                    <h1 className="text-4xl font-black tracking-tight md:text-6xl">{content.title}</h1>
                    <p className="mt-5 text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
                        {content.description}
                    </p>
                    <p className="mt-4 text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                        {content.lastUpdated}
                    </p>
                </div>

                <div className="space-y-8 max-w-3xl">
                    {content.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h2 className="text-lg font-bold mb-3" style={{ color: currentTheme.colors.accentPrimary }}>
                                {section.title}
                            </h2>
                            <p className="leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
