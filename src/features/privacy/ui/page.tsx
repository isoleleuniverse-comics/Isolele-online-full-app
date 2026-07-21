"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface PrivacyPageProps {
  locale: SupportedLocale;
}

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "Information you give us directly, such as when you fill out a contact form or email us, sign up for our newsletter or updates, create an account or make a purchase, or apply for a role listed under Careers.",
      "This may include your name, email address, shipping/billing address, phone number, and payment information. Payments are processed securely by our third-party payment provider(s); we do not store full card numbers on our own servers. International orders may also be shared with shipping carriers and customs authorities as required to deliver your order.",
      "Information collected automatically may include IP address, browser type, device type, pages visited, time spent on the Site, referring links, cookies and similar tracking technologies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    bullets: [
      "Respond to inquiries and provide customer support",
      "Process orders, shipping, and payments",
      "Send updates about ISOLELE releases, products, and events only if you have opted in",
      "Improve the Site’s content, performance, and user experience",
      "Comply with legal obligations and protect against fraud or misuse",
    ],
    body: ["We do not sell your personal information."],
  },
  {
    title: "3. Sharing Your Information",
    body: [
      "We may share information with service providers who help us operate the Site, legal authorities if required by law or to protect our rights, users, or the public, and in connection with business transfers if ISOLELE is involved in a merger, acquisition, or sale of assets.",
      "We do not share your information with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    body: ["The Site may use cookies and similar technologies to remember your preferences and understand how visitors use the Site. You can disable cookies through your browser settings; some features of the Site may not function properly without them."],
  },
  {
    title: "5. Data Retention",
    body: ["We retain personal information only as long as necessary for the purposes described in this policy, or as required by law."],
  },
  {
    title: "6. Your Rights & Choices",
    bullets: [
      "Access, correct, or delete your personal information",
      "Opt out of marketing emails at any time via the unsubscribe link",
      "Request a copy of the information we hold about you",
      "Object to or restrict certain processing of your information",
      "Withdraw consent at any time, where processing is based on consent",
    ],
    body: [
      "If you are in the European Economic Area or United Kingdom (GDPR), our legal basis for processing your information is your consent, performance of a contract, or our legitimate interests in operating and improving the Site. You have the right to lodge a complaint with your local data protection authority.",
      "If you are a California resident (CCPA/CPRA), you have the right to know what personal information we collect, request deletion of it, and opt out of any “sale” or “sharing” of personal information as those terms are defined by California law. We do not sell your personal information. You will not be discriminated against for exercising these rights.",
      "To exercise any of these rights, contact us using the details below. We may need to verify your identity before fulfilling a request.",
    ],
  },
  {
    title: "7. Children’s Privacy",
    body: ["The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it."],
  },
  {
    title: "8. Data Security",
    body: ["We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is 100% secure."],
  },
  {
    title: "9. International Users & Data Transfers",
    body: [
      "ISOLELE Universe operates internationally, with operations in the United States and the Democratic Republic of Congo, and customers worldwide. By using the Site, you understand your information may be transferred to, stored, and processed in countries that may have different data protection laws than your home country.",
      "Where required, we take steps to ensure such transfers are conducted in accordance with applicable law, such as through standard contractual clauses or by relying on your explicit consent to the transfer.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: ["We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated policy."],
  },
  {
    title: "11. Contact Us",
    body: ["If you have questions about this Privacy Policy or how we handle your information, contact us at empire@isoleleuniverse.com."],
  },
];

export function PrivacyPage({ locale }: PrivacyPageProps) {
  const { currentTheme } = useTheme();
  const eyebrow = locale === "fr" ? "PRIVACY POLICY" : "PRIVACY POLICY";

  return (
    <div
      className="min-h-screen px-5 pb-24 pt-24 md:px-8 md:pt-32"
      style={{
        background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`,
        color: currentTheme.colors.textPrimary,
      }}
    >
      <section className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[34px] border px-6 py-10 md:px-12 md:py-14"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.backgroundSecondary}f2 0%, ${currentTheme.colors.background}f7 100%)`,
            borderColor: `${currentTheme.colors.accentPrimary}55`,
            boxShadow: `0 30px 90px ${currentTheme.colors.accentPrimary}1f`,
          }}
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}>
            <ShieldCheck size={22} />
          </div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.38em]" style={{ color: currentTheme.colors.accentPrimary }}>
            {eyebrow}
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: currentTheme.colors.accentPrimary }}>
            ISOLELE Universe — Last updated: July 17, 2026
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
            ISOLELE Universe (“ISOLELE,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect through isoleleuniverse.com (the “Site”), how we use it, and the choices you have.
          </p>
        </motion.div>

        <div className="mt-8 space-y-5">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="rounded-[24px] border p-6 md:p-8"
              style={{
                backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`,
                borderColor: `${currentTheme.colors.accentPrimary}35`,
              }}
            >
              <h2 className="text-xl font-black md:text-2xl">{section.title}</h2>
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-2 pl-5 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5 space-y-4 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
