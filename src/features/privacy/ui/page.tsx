"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useRouter } from "next/navigation";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface PrivacyPageProps {
  locale: SupportedLocale;
}

const policySections = [
  {
    title: "1. Information We Collect",
    body: [
      "Information you give us directly, such as when you fill out a contact form or email us, sign up for our newsletter or updates, create an account or make a purchase, or apply for a role listed under Careers.",
      "This may include your name, email address, shipping/billing address, phone number, and payment information. Payments are processed securely by our third-party payment provider(s); we do not store full card numbers on our own servers.",
      "International orders may also be shared with shipping carriers and customs authorities as required to deliver your order.",
      "Information collected automatically may include IP address, browser type, device type, pages visited, time spent on the Site, referring links, cookies, and similar tracking technologies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect to respond to inquiries and provide customer support; process orders, shipping, and payments; send updates about ISOLELE releases, products, and events only if you’ve opted in; improve the Site’s content, performance, and user experience; comply with legal obligations; and protect against fraud or misuse.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "3. Sharing Your Information",
    body: [
      "We may share information with service providers who help us operate the Site, including payment processors, email/newsletter platforms, and hosting providers, under confidentiality obligations.",
      "We may also share information with legal authorities if required by law or to protect our rights, users, or the public, and during business transfers if ISOLELE is involved in a merger, acquisition, or sale of assets.",
      "We do not share your information with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    body: [
      "The Site may use cookies and similar technologies to remember your preferences and understand how visitors use the Site. You can disable cookies through your browser settings; some features of the Site may not function properly without them.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We retain personal information only as long as necessary for the purposes described in this policy, or as required by law.",
    ],
  },
  {
    title: "6. Your Rights & Choices",
    body: [
      "Depending on your location, you may have the right to access, correct, or delete your personal information; opt out of marketing emails at any time; request a copy of the information we hold about you; object to or restrict certain processing; and withdraw consent where processing is based on consent.",
      "If you are in the European Economic Area or United Kingdom (GDPR), our legal basis for processing your information is your consent, performance of a contract, or our legitimate interests in operating and improving the Site. You have the right to lodge a complaint with your local data protection authority.",
      "If you are a California resident (CCPA/CPRA), you have the right to know what personal information we collect, request deletion of it, and opt out of any “sale” or “sharing” of personal information as those terms are defined by California law. We do not sell your personal information. You will not be discriminated against for exercising these rights.",
      "To exercise any of these rights, contact us using the details below. We may need to verify your identity before fulfilling a request.",
    ],
  },
  {
    title: "7. Children’s Privacy",
    body: [
      "The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it.",
    ],
  },
  {
    title: "8. Data Security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "9. International Users & Data Transfers",
    body: [
      "ISOLELE Universe operates internationally, with operations in the United States and the Democratic Republic of Congo, and customers worldwide. By using the Site, you understand your information may be transferred to, stored, and processed in countries, including the US and DRC, that may have different data protection laws than your home country.",
      "Where required, for example for visitors in the EEA or UK, we take steps to ensure such transfers are conducted in accordance with applicable law, such as through standard contractual clauses or by relying on your explicit consent to the transfer.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "11. Contact Us",
    body: ["If you have questions about this Privacy Policy or how we handle your information, contact us at empire@isoleleuniverse.com."],
  },
];

export function PrivacyPage({ locale }: PrivacyPageProps) {
  const { currentTheme } = useTheme();
  const router = useRouter();

  return (
    <main
      lang={locale}
      className="min-h-screen overflow-hidden px-5 pb-24 pt-28 md:px-8 md:pt-36"
      style={{
        background: `radial-gradient(80% 70% at 50% 0%, ${currentTheme.colors.accentPrimary}30 0%, transparent 62%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`,
        color: currentTheme.colors.textPrimary,
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

      <section className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-[2rem] border p-8 shadow-2xl md:p-12"
          style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}B3`, borderColor: `${currentTheme.colors.accentPrimary}35` }}
        >
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7" style={{ color: currentTheme.colors.accentPrimary }} />
            <p className="text-xs font-black uppercase tracking-[0.35em]" style={{ color: currentTheme.colors.accentPrimary }}>
              ISOLELE Universe
            </p>
          </div>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: currentTheme.colors.textSecondary }}>
            Last updated: July 17, 2026
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
            ISOLELE Universe (“ISOLELE,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect through isoleleuniverse.com (the “Site”), how we use it, and the choices you have.
          </p>
        </motion.div>

        <div className="space-y-7">
          {policySections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 42, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.65, delay: Math.min(index * 0.03, 0.2) }}
              className="rounded-[1.75rem] border p-6 shadow-xl md:p-8"
              style={{ backgroundColor: `${currentTheme.colors.background}B8`, borderColor: `${currentTheme.colors.accentPrimary}25` }}
            >
              <h2 className="mb-4 text-xl font-black md:text-2xl" style={{ color: currentTheme.colors.accentPrimary }}>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-[0.98rem] leading-8" style={{ color: currentTheme.colors.textSecondary }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
