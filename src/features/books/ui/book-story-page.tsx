import Image from "next/image";
import Link from "next/link";
import { withLocale, type SupportedLocale } from "@/lib/i18n/locales";
import { getBookBreadcrumbJsonLd, getBookJsonLd } from "@/features/books/model/books-json-ld";
import type { BookCta, BookPageData } from "@/features/books/model/books.types";

function resolveHref(locale: SupportedLocale, href: string) {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  if (href.startsWith("#")) return href;
  return withLocale(locale, href);
}

function CtaButton({ cta, locale, accentColor }: { cta: BookCta; locale: SupportedLocale; accentColor: string }) {
  const href = resolveHref(locale, cta.href);
  const secondary = cta.style === "secondary";

  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-md border px-6 py-3 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 hover:scale-[1.015]"
      style={{
        backgroundColor: secondary ? "rgba(255,255,255,0.04)" : accentColor,
        borderColor: secondary ? "rgba(255,255,255,0.25)" : accentColor,
        color: secondary ? "#F7F7F7" : "#0A0A0A",
        boxShadow: secondary ? "none" : `0 0 0 1px ${accentColor}, 0 10px 24px ${accentColor}40`,
      }}
    >
      {cta.label}
    </Link>
  );
}

export function BookStoryPage({ page, locale }: { page: BookPageData; locale: SupportedLocale }) {
  const articleJsonLd = getBookJsonLd(page, locale);
  const breadcrumbJsonLd = getBookBreadcrumbJsonLd(page, locale);
  const introProse = page.sections.find((section) => section.type === "prose");
  const uiText =
    locale === "fr"
      ? {
          universeContext: "Contexte Univers",
          contextBody: "Produit a Kinshasa, RDC. Construit comme partie de l'univers narratif africain noir ISOLELE.",
          focusKeywords: "Mots-cles",
          quote: "Citation",
          continueJourney: "Continuer l'aventure",
        }
      : {
          universeContext: "Universe Context",
          contextBody: "Produced in Kinshasa, DRC. Built as part of the ISOLELE Black African storytelling universe.",
          focusKeywords: "Focus Keywords",
          quote: "Quote",
          continueJourney: "Continue The Journey",
        };

  return (
    <article
      className="relative overflow-hidden pb-20"
      style={{
        background:
          "radial-gradient(90% 70% at 10% 0%, rgba(255,255,255,0.08) 0%, rgba(9,9,9,0.98) 45%), linear-gradient(180deg, #0B0B0B 0%, #060606 100%)",
        color: "#F7F7F7",
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="pointer-events-none absolute -top-16 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${page.accentColor}30` }} />
      <div className="pointer-events-none absolute top-[40%] -right-16 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: `${page.accentColor}26` }} />

      <section className="relative min-h-[72vh] w-full">
        <Image src={page.heroImage} alt={page.title} fill priority className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.68)_40%,rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_40%)] opacity-30" />

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-end px-5 pb-14 md:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-bold tracking-[0.16em] uppercase">
            <span className="rounded-sm border border-white/20 bg-black/30 px-2 py-1 text-zinc-100">ISOLELE</span>
            <span className="rounded-sm border border-white/20 bg-black/30 px-2 py-1 text-zinc-300">/</span>
            <span className="rounded-sm border border-white/20 bg-black/30 px-2 py-1 text-zinc-100">{page.heroTag}</span>
          </div>

          <span
            className="mb-4 inline-flex w-fit rounded-sm px-3 py-1 text-[11px] font-extrabold tracking-[0.18em] uppercase"
            style={{ backgroundColor: page.accentColor, color: "#121212" }}
          >
            {page.heroTag}
          </span>

          <h1
            className="max-w-5xl text-3xl leading-tight font-black tracking-tight md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              textShadow: "0 6px 26px rgba(0,0,0,0.65)",
            }}
          >
            {page.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-200 md:text-lg">{page.metaDescription}</p>
        </div>
      </section>

      <div className="mx-auto mt-10 w-full max-w-6xl px-5 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-5">
              {introProse?.type === "prose"
                ? introProse.paragraphs.map((paragraph, index) => (
                    <p key={`intro-${index}`} className="text-lg leading-8 text-zinc-100 md:text-xl md:leading-9">
                      {paragraph}
                    </p>
                  ))
                : null}
            </div>
            <aside className="space-y-4 rounded-xl border border-white/10 bg-black/35 p-5">
              <p className="text-[11px] font-bold tracking-[0.16em] text-zinc-300 uppercase">{uiText.universeContext}</p>
              <p className="text-sm leading-7 text-zinc-200">{uiText.contextBody}</p>
              <div className="h-px w-full bg-white/10" />
              <p className="text-[11px] font-bold tracking-[0.16em] text-zinc-300 uppercase">{uiText.focusKeywords}</p>
              <div className="flex flex-wrap gap-2">
                {page.keywords.slice(0, 5).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-zinc-100 uppercase">
                    {keyword}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-10 px-5 md:px-8">
        {page.sections
          .filter((section) => section.type !== "prose")
          .map((section, index) => {
            if (section.type === "image_quote") {
              return (
                <section key={`${section.type}-${index}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="grid md:grid-cols-[1.2fr_1fr]">
                    <div className="relative h-[320px] md:h-[460px]">
                      <Image src={section.image} alt={section.imageAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 65vw" />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 p-6 md:p-8" style={{ background: `linear-gradient(140deg, ${page.accentColor}20 0%, rgba(0,0,0,0) 70%)` }}>
                      <p className="text-[11px] font-bold tracking-[0.16em] text-zinc-300 uppercase">{uiText.quote}</p>
                      <blockquote className="text-lg leading-8 font-medium italic text-zinc-100 md:text-xl md:leading-9">{`"${section.quote}"`}</blockquote>
                      {section.attribution ? (
                        <p className="text-xs font-bold tracking-[0.18em] text-zinc-200 uppercase">{section.attribution}</p>
                      ) : null}
                    </div>
                  </div>
                </section>
              );
            }

            if (section.type === "heading_group") {
              return (
                <section key={`${section.type}-${index}`} className="grid gap-4">
                  {section.sections.map((item, itemIndex) => (
                    <div key={item.heading} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold"
                          style={{ backgroundColor: `${page.accentColor}26`, color: page.accentColor }}
                        >
                          {itemIndex + 1}
                        </span>
                        <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">{item.heading}</h2>
                      </div>
                      <p className="text-base leading-8 text-zinc-200 md:text-lg">{item.body}</p>
                    </div>
                  ))}
                </section>
              );
            }

            return (
              <section key={`${section.type}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">{section.heading}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {section.images.map((image) => (
                    <div key={image.src} className="relative h-[320px] overflow-hidden rounded-xl border border-white/10 md:h-[440px]">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-zinc-200 md:text-lg">{`"${section.caption}"`}</p>
              </section>
            );
          })}

        {page.ctas.length > 0 ? (
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="mb-4 text-[11px] font-bold tracking-[0.18em] text-zinc-300 uppercase">{uiText.continueJourney}</p>
            <div className="flex flex-wrap gap-3">
              {page.ctas.map((cta) => (
                <CtaButton key={cta.id} cta={cta} locale={locale} accentColor={page.accentColor} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
