"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useRouter } from "next/navigation";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface PrivacyPageProps {
    locale: SupportedLocale;
}

const privacyText = `Privacy Policy
ISOLELE Universe Last updated: July 17, 2026

ISOLELE Universe ("ISOLELE," "we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect through isoleleuniverse.com (the "Site"), how we use it, and the choices you have.

1. Information We Collect
Information you give us directly, such as when you: Fill out a contact form or email us; Sign up for our newsletter or updates; Create an account or make a purchase; Apply for a role listed under Careers. This may include your name, email address, shipping/billing address, phone number, and payment information. Payments are processed securely by our third-party payment provider(s); we do not store full card numbers on our own servers. International orders may also be shared with shipping carriers and customs authorities as required to deliver your order.

Information collected automatically, such as: IP address, browser type, device type; Pages visited, time spent on the Site, referring links; Cookies and similar tracking technologies (see Section 4).

2. How We Use Your Information
We use the information we collect to: Respond to inquiries and provide customer support; Process orders, shipping, and payments; Send updates about ISOLELE releases, products, and events (only if you’ve opted in); Improve the Site’s content, performance, and user experience; Comply with legal obligations and protect against fraud or misuse.

We do not sell your personal information.

3. Sharing Your Information
We may share information with: Service providers who help us operate the Site (e.g., payment processors, email/newsletter platforms, hosting providers), under confidentiality obligations; Legal authorities, if required by law or to protect our rights, users, or the public; Business transfers, if ISOLELE is involved in a merger, acquisition, or sale of assets.

We do not share your information with third parties for their own marketing purposes.

4. Cookies & Tracking
The Site may use cookies and similar technologies to remember your preferences and understand how visitors use the Site. You can disable cookies through your browser settings; some features of the Site may not function properly without them.

5. Data Retention
We retain personal information only as long as necessary for the purposes described in this policy, or as required by law.

6. Your Rights & Choices
Depending on your location, you may have the right to: Access, correct, or delete your personal information; Opt out of marketing emails at any time (via the unsubscribe link); Request a copy of the information we hold about you; Object to or restrict certain processing of your information; Withdraw consent at any time, where processing is based on consent.

If you are in the European Economic Area or United Kingdom (GDPR): Our legal basis for processing your information is your consent (e.g., newsletter signup), performance of a contract (e.g., order fulfillment), or our legitimate interests in operating and improving the Site. You have the right to lodge a complaint with your local data protection authority.

If you are a California resident (CCPA/CPRA): You have the right to know what personal information we collect, request deletion of it, and opt out of any “sale” or “sharing” of personal information as those terms are defined by California law. We do not sell your personal information. You will not be discriminated against for exercising these rights.

To exercise any of these rights, contact us using the details below. We may need to verify your identity before fulfilling a request.

7. Children’s Privacy
The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it.

8. Data Security
We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.

9. International Users & Data Transfers
ISOLELE Universe operates internationally, with operations in the United States and the Democratic Republic of Congo, and customers worldwide. By using the Site, you understand your information may be transferred to, stored, and processed in countries (including the US and DRC) that may have different data protection laws than your home country.

Where required (for example, for visitors in the EEA or UK), we take steps to ensure such transfers are conducted in accordance with applicable law, such as through standard contractual clauses or by relying on your explicit consent to the transfer.

10. Changes to This Policy
We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated policy.

11. Contact Us
If you have questions about this Privacy Policy or how we handle your information, contact us at: empire@isoleleuniverse.com
`;

export function PrivacyPage({ locale }: PrivacyPageProps) {
    const { currentTheme } = useTheme();
    const router = useRouter();

    return (
        <main className="min-h-screen px-5 pb-24 pt-28 md:px-8 md:pt-36" style={{ background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`, color: currentTheme.colors.textPrimary }}>
            <button
                onClick={() => router.back()}
                className="fixed left-4 top-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full shadow-md"
                style={{ backgroundColor: currentTheme.colors.backgroundSecondary, color: currentTheme.colors.textPrimary }}
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </button>

            <section className="mx-auto max-w-4xl">
                <div className="mb-12">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.35em]" style={{ color: currentTheme.colors.accentPrimary }}>
                        LEGAL
                    </p>
                    <h1 className="text-4xl font-black tracking-tight md:text-6xl">Privacy Policy</h1>
                    <p className="mt-5 text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>
                        ISOLELE Universe respects your privacy. This page explains what we collect and how we use it.
                    </p>
                    <p className="mt-4 text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                        Last updated: July 17, 2026
                    </p>
                </div>

                <div className="space-y-8 max-w-3xl">
                    {privacyText.split('\n\n').map((para, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                            <p className="leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>{para}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
