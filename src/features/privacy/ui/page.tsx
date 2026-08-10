"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import type { SupportedLocale } from "@/shared/i18n/locales";

interface PrivacyPageProps {
  locale: SupportedLocale;
}

const content = {
  en: {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    updated: "ISOLELE Universe — Last updated: July 17, 2026",
    intro: "ISOLELE Universe (“ISOLELE,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect through isoleleuniverse.com (the “Site”), how we use it, and the choices you have.",
    sections: [
      ["1. Information We Collect", ["Information you give us directly, such as when you fill out a contact form or email us, sign up for our newsletter or updates, create an account or make a purchase, or apply for a role listed under Careers.", "This may include your name, email address, shipping/billing address, phone number, and payment information. Payments are processed securely by our third-party payment provider(s); we do not store full card numbers on our own servers. International orders may also be shared with shipping carriers and customs authorities as required to deliver your order.", "Information collected automatically may include IP address, browser type, device type, pages visited, time spent on the Site, referring links, cookies and similar tracking technologies."]],
      ["2. How We Use Your Information", ["We use the information we collect to respond to inquiries, provide customer support, process orders, shipping, and payments, send opted-in updates about ISOLELE releases, products, and events, improve the Site’s content, performance, and user experience, comply with legal obligations, and protect against fraud or misuse.", "We do not sell your personal information."]],
      ["3. Sharing Your Information", ["We may share information with service providers who help us operate the Site, legal authorities if required by law or to protect our rights, users, or the public, and in connection with business transfers if ISOLELE is involved in a merger, acquisition, or sale of assets.", "We do not share your information with third parties for their own marketing purposes."]],
      ["4. Cookies & Tracking", ["The Site may use cookies and similar technologies to remember your preferences and understand how visitors use the Site. You can disable cookies through your browser settings; some features of the Site may not function properly without them."]],
      ["5. Data Retention", ["We retain personal information only as long as necessary for the purposes described in this policy, or as required by law."]],
      ["6. Your Rights & Choices", ["Depending on your location, you may have the right to access, correct, or delete your personal information, opt out of marketing emails, request a copy of the information we hold about you, object to or restrict certain processing, and withdraw consent where processing is based on consent.", "If you are in the European Economic Area or United Kingdom (GDPR), our legal basis for processing your information is your consent, performance of a contract, or our legitimate interests in operating and improving the Site. You have the right to lodge a complaint with your local data protection authority.", "If you are a California resident (CCPA/CPRA), you have the right to know what personal information we collect, request deletion of it, and opt out of any “sale” or “sharing” of personal information as those terms are defined by California law. We do not sell your personal information. You will not be discriminated against for exercising these rights.", "To exercise any of these rights, contact us using the details below. We may need to verify your identity before fulfilling a request."]],
      ["7. Children’s Privacy", ["The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it."]],
      ["8. Data Security", ["We use reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is 100% secure."]],
      ["9. International Users & Data Transfers", ["ISOLELE Universe operates internationally, with operations in the United States and the Democratic Republic of Congo, and customers worldwide. By using the Site, you understand your information may be transferred to, stored, and processed in countries that may have different data protection laws than your home country.", "Where required, we take steps to ensure such transfers are conducted in accordance with applicable law, such as through standard contractual clauses or by relying on your explicit consent to the transfer."]],
      ["10. Changes to This Policy", ["We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated policy."]],
      ["11. Contact Us", ["If you have questions about this Privacy Policy or how we handle your information, contact us at empire@isoleleuniverse.com."]],
    ],
  },
  fr: {
    eyebrow: "Politique de confidentialité",
    title: "Politique de confidentialité",
    updated: "ISOLELE Universe — Dernière mise à jour : 17 juillet 2026",
    intro: "ISOLELE Universe (« ISOLELE », « nous », « notre » ou « nos ») respecte votre vie privée. Cette politique explique les informations que nous collectons via isoleleuniverse.com (le « Site »), la manière dont nous les utilisons et les choix dont vous disposez.",
    sections: [
      ["1. Informations que nous collectons", ["Les informations que vous nous donnez directement, par exemple lorsque vous remplissez un formulaire de contact, nous envoyez un email, vous inscrivez à notre newsletter, créez un compte, effectuez un achat ou postulez à une opportunité listée sur la page Careers.", "Cela peut inclure votre nom, adresse email, adresse de livraison ou de facturation, numéro de téléphone et informations de paiement. Les paiements sont traités de manière sécurisée par nos prestataires tiers ; nous ne stockons pas les numéros complets de carte bancaire sur nos propres serveurs.", "Les informations collectées automatiquement peuvent inclure l’adresse IP, le type de navigateur, le type d’appareil, les pages visitées, le temps passé sur le Site, les liens référents, les cookies et technologies similaires."]],
      ["2. Comment nous utilisons vos informations", ["Nous utilisons les informations collectées pour répondre aux demandes, fournir le support client, traiter les commandes, l’expédition et les paiements, envoyer des mises à jour ISOLELE uniquement si vous avez donné votre accord, améliorer le contenu, la performance et l’expérience utilisateur du Site, respecter nos obligations légales et nous protéger contre la fraude ou les abus.", "Nous ne vendons pas vos informations personnelles."]],
      ["3. Partage de vos informations", ["Nous pouvons partager des informations avec des prestataires qui nous aident à exploiter le Site, avec les autorités légales si la loi l’exige ou pour protéger nos droits, nos utilisateurs ou le public, et dans le cadre d’un transfert d’entreprise si ISOLELE est impliqué dans une fusion, acquisition ou vente d’actifs.", "Nous ne partageons pas vos informations avec des tiers pour leur propre marketing."]],
      ["4. Cookies & suivi", ["Le Site peut utiliser des cookies et technologies similaires pour mémoriser vos préférences et comprendre l’utilisation du Site. Vous pouvez désactiver les cookies dans votre navigateur ; certaines fonctionnalités peuvent alors ne pas fonctionner correctement."]],
      ["5. Conservation des données", ["Nous conservons les informations personnelles uniquement aussi longtemps que nécessaire pour les objectifs décrits dans cette politique, ou selon les exigences de la loi."]],
      ["6. Vos droits & choix", ["Selon votre localisation, vous pouvez avoir le droit d’accéder à vos informations personnelles, de les corriger ou supprimer, de vous désabonner des emails marketing, de demander une copie des informations que nous détenons, de vous opposer à certains traitements, d’en limiter l’usage ou de retirer votre consentement.", "Si vous êtes dans l’Espace économique européen ou au Royaume-Uni (RGPD), notre base légale de traitement est votre consentement, l’exécution d’un contrat ou notre intérêt légitime à exploiter et améliorer le Site. Vous avez le droit de déposer une plainte auprès de votre autorité locale de protection des données.", "Si vous êtes résident de Californie (CCPA/CPRA), vous avez le droit de savoir quelles informations personnelles nous collectons, d’en demander la suppression et de refuser toute « vente » ou « partage » au sens de la loi californienne. Nous ne vendons pas vos informations personnelles.", "Pour exercer ces droits, contactez-nous avec les informations ci-dessous. Nous pouvons avoir besoin de vérifier votre identité avant de traiter votre demande."]],
      ["7. Confidentialité des enfants", ["Le Site ne s’adresse pas aux enfants de moins de 13 ans et nous ne collectons pas volontairement d’informations personnelles les concernant. Si vous pensez qu’un enfant nous a fourni des informations personnelles, contactez-nous afin que nous puissions les supprimer."]],
      ["8. Sécurité des données", ["Nous utilisons des mesures administratives, techniques et physiques raisonnables pour protéger vos informations. Cependant, aucune méthode de transmission sur internet n’est sécurisée à 100 %."]],
      ["9. Utilisateurs internationaux & transferts de données", ["ISOLELE Universe opère à l’international, avec des activités aux États-Unis et en République démocratique du Congo, et des clients dans le monde entier. En utilisant le Site, vous comprenez que vos informations peuvent être transférées, stockées et traitées dans des pays dont les lois de protection des données diffèrent de celles de votre pays.", "Lorsque cela est requis, nous prenons des mesures pour que ces transferts soient réalisés conformément à la loi applicable, notamment au moyen de clauses contractuelles types ou de votre consentement explicite."]],
      ["10. Modifications de cette politique", ["Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La date de dernière mise à jour indiquera la version la plus récente. L’utilisation continue du Site après l’entrée en vigueur des modifications constitue l’acceptation de la politique mise à jour."]],
      ["11. Nous contacter", ["Pour toute question concernant cette politique de confidentialité ou notre traitement de vos informations, contactez-nous à empire@isoleleuniverse.com."]],
    ],
  },
} as const;

export function PrivacyPage({ locale }: PrivacyPageProps) {
  const { currentTheme } = useTheme();
  const page = content[locale] ?? content.en;

  return (
    <div className="min-h-screen px-5 pb-24 pt-24 md:px-8 md:pt-32" style={{ background: `radial-gradient(120% 90% at 50% 0%, ${currentTheme.colors.accentPrimary}20 0%, ${currentTheme.colors.accentPrimary}08 50%, transparent 100%), linear-gradient(180deg, ${currentTheme.colors.background} 0%, ${currentTheme.colors.backgroundSecondary} 100%)`, color: currentTheme.colors.textPrimary }}>
      <section className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[34px] border px-6 py-10 md:px-12 md:py-14" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.backgroundSecondary}f2 0%, ${currentTheme.colors.background}f7 100%)`, borderColor: `${currentTheme.colors.accentPrimary}55`, boxShadow: `0 30px 90px ${currentTheme.colors.accentPrimary}1f` }}>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${currentTheme.colors.accentPrimary}20`, color: currentTheme.colors.accentPrimary }}><ShieldCheck size={22} /></div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.38em]" style={{ color: currentTheme.colors.accentPrimary }}>{page.eyebrow}</p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">{page.title}</h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: currentTheme.colors.accentPrimary }}>{page.updated}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 md:text-lg" style={{ color: currentTheme.colors.textSecondary }}>{page.intro}</p>
        </motion.div>

        <div className="mt-8 space-y-5">
          {page.sections.map(([title, paragraphs], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.03 }} className="rounded-[24px] border p-6 md:p-8" style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}e8`, borderColor: `${currentTheme.colors.accentPrimary}35` }}>
              <h2 className="text-xl font-black md:text-2xl">{title}</h2>
              <div className="mt-5 space-y-4 leading-7" style={{ color: currentTheme.colors.textSecondary }}>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
