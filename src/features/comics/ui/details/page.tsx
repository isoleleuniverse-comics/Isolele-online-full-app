import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { ComicDetailPageData } from "@/features/comics/model/comics.types";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";

interface ComicDetailPageProps {
  page: ComicDetailPageData;
  locale: SupportedLocale;
}

export function ComicDetailPage({ page, locale }: ComicDetailPageProps) {
  const priceLabel = locale === "fr" ? "Acheter" : "Buy now";
  const castEyebrow = locale === "fr" ? "Personnages" : "Cast";
  const castTitle = locale === "fr" ? "Personnages cles" : "Key Characters";
  const isExternalPurchase = !!page.purchaseHref && page.purchaseHref.startsWith("http");

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,134,11,0.14),transparent_36%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(248,246,240,0.95),rgba(255,255,255,0))]" />

        <div className="mx-auto grid min-h-[76vh] w-full max-w-7xl gap-10 px-6 pb-16 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative z-10 order-2 lg:order-1">
            

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--isolele-accent)]">{page.eyebrow}</p>
            <h1 className="max-w-3xl text-5xl font-black tracking-[0.04em] sm:text-6xl lg:text-7xl">{page.title}</h1>
            <p className="mt-3 text-xl font-semibold text-[var(--isolele-accent)] sm:text-2xl">{page.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">{page.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {page.purchaseHref ? (
                <a
                  href={page.purchaseHref}
                  target={isExternalPurchase ? "_blank" : undefined}
                  rel={isExternalPurchase ? "noreferrer noopener" : undefined}
                  className="inline-flex rounded-2xl border border-[var(--isolele-accent)]/25 bg-[var(--isolele-accent)] px-5 py-4 text-black transition hover:opacity-90"
                >
                  <span className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-[0.18em]">{priceLabel}</span>
                    <span className="mt-1 text-2xl font-black">${page.price.toFixed(2)}</span>
                  </span>
                </a>
              ) : (
                <div className="rounded-2xl border border-black/10 bg-[#f8f6f0] px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--isolele-accent)]">{priceLabel}</p>
                  <p className="mt-1 text-2xl font-black text-neutral-950">${page.price.toFixed(2)}</p>
                </div>
              )}

              {page.comingSoon ? (
                <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-[#f8f6f0] px-5 py-4 text-sm font-semibold text-neutral-900">
                  <Sparkles size={18} className="text-[var(--isolele-accent)]" />
                  {page.comingSoonLabel}
                </div>
              ) : null}
            </div>
          </div>

          <div className="relative z-10 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f8f6f0] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem]">
                <Image src={page.heroImage} alt={page.heroImageAlt} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {page.comingSoon ? (
        <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
          <div className="rounded-[2rem] border border-black/10 bg-[#f8f6f0] p-8 sm:p-10">
            <p className="text-sm leading-8 text-neutral-600">{page.comingSoonBody}</p>
          </div>
          <AuthorBlock page={page} />
        </section>
      ) : (
        <>
          <section className="mx-auto w-full max-w-7xl px-6 py-20">
            <div className="mb-8">
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">{castTitle}</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {page.characters.map((character) => (
                <article
                  key={character.name}
                  className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_12px_34px_rgba(0,0,0,0.05)]"
                >
                  <div className="relative aspect-[4/4.8] bg-[#f8f6f0]">
                    <Image src={character.image} alt={character.name} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="mt-2 text-xl font-regular sm:text-4xl">{character.role}</p>
                    <h3 className="mt-2 text-3xl font-black text-[var(--isolele-accent)]">{character.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{character.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-20 ">
            <article className="rounded-[2rem] p-8 sm:p-10">
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">{page.synopsisTitle}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-neutral-600">
                {page.synopsis.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div>
              <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-[1.15fr_0.85fr]">
                {page.gallery.map((item, index) => (
                  <div
                    key={`${item.image}-${index}`}
                    className={
                      index === 0
                        ? "relative min-h-[280px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#f8f6f0] sm:row-span-2"
                        : "relative min-h-[180px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#f8f6f0]"
                    }
                  >
                    <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AuthorBlock page={page} />
        </>
      )}
    </main>
  );
}

function AuthorBlock({ page }: { page: ComicDetailPageData }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24">
      <div className="grid gap-6 rounded-[2rem] border border-black/10 bg-[#f8f6f0] p-6 sm:p-8 md:grid-cols-[220px_1fr] md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
          <Image src={page.authorImage} alt={page.authorName} fill className="object-cover" />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--isolele-accent)]">{page.authorTitle}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{page.authorName}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">{page.authorDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default ComicDetailPage;
