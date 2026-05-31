import Image from "next/image";
import Link from "next/link";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";
import { KUFU_ASSETS } from "@/features/kufu-game/model/kufu-game.data";

const gamesPageContent = {
  fr: {
    eyebrow: "Univers Jeux",
    title: "Les jeux ISOLELE",
    description:
      "Retrouvez les experiences ludiques de l'univers ISOLELE, entre ceremonie, strategie, royaute et imaginaire africain.",
    cards: [
      {
        title: "KUFU Ludo",
        label: "Jeu de plateau",
        description:
          "Un jeu de strategie inspire du ludo, repense comme un rituel de couronnement dans l'univers ISOLELE.",
        href: "/kufu-game",
        cta: "Voir le jeu",
        image: KUFU_ASSETS.board,
      },
      {
        title: "KUFU",
        label: "Jeu de cartes",
        description:
          "Le premier jeu de cartes panafricain d'ISOLELE, avec rois, reines et guerriers issus de la civilisation Kongo.",
        href: "/books/kufu",
        cta: "Decouvrir les cartes",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg",
      },
    ],
  },
  en: {
    eyebrow: "Games Universe",
    title: "ISOLELE games",
    description:
      "Explore the playable side of the ISOLELE universe, where ceremony, strategy, royalty, and African imagination meet.",
    cards: [
      {
        title: "KUFU Ludo",
        label: "Board game",
        description:
          "A strategy board game inspired by ludo and reimagined as a coronation ritual inside the ISOLELE universe.",
        href: "/kufu-game",
        cta: "View game",
        image: KUFU_ASSETS.board,
      },
      {
        title: "KUFU",
        label: "Card game",
        description:
          "ISOLELE's first Pan-African card game, featuring kings, queens, and warriors drawn from Kongo civilization.",
        href: "/books/kufu",
        cta: "Discover cards",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jeux%20-des-cartes-ISOLELE%202026%20copie-1.png-ifvBiGyVajqX0jXvhJQOH1k83wp5KC.jpeg",
      },
    ],
  },
} as const;

export function GamesPage({ locale }: { locale: SupportedLocale }) {
  const content = gamesPageContent[locale] ?? gamesPageContent.en;

  return (
    <main
      className="min-h-screen px-5 pb-24 pt-28 md:px-8 md:pt-36"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, rgba(246,184,0,0.12) 0%, rgba(10,10,10,0) 45%), linear-gradient(180deg, #090909 0%, #050505 100%)",
        color: "#F5F1E8",
      }}
    >
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em]" style={{ color: "#F6B800" }}>
            {content.eyebrow}
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">{content.title}</h1>
          <p className="mt-5 text-base leading-8 text-[#D1CCC2] md:text-lg">{content.description}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.cards.map((card) => (
            <article
              key={card.href}
              className="overflow-hidden rounded-[28px] border"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                borderColor: "rgba(246,184,0,0.16)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
              }}
            >
              <div className="relative h-72">
                <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.78)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-[#F6B800]/35 bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F6B800]">
                  {card.label}
                </div>
              </div>

              <div className="space-y-4 p-6 md:p-7">
                <h2 className="text-2xl font-black tracking-tight">{card.title}</h2>
                <p className="text-sm leading-7 text-[#D1CCC2] md:text-base">{card.description}</p>
                <Link
                  href={withLocale(locale, card.href)}
                  className="inline-flex items-center rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.16em] transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "#F6B800", color: "#111111" }}
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
