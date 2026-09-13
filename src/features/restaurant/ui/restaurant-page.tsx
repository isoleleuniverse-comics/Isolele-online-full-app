import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { getRestaurantContent, RESTAURANT_GALLERY_IMAGES } from "@/features/restaurant/model/restaurant.data";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";

interface RestaurantPageProps {
  locale: SupportedLocale;
}

export function RestaurantPage({ locale }: RestaurantPageProps) {
  const content = getRestaurantContent(locale);

  return (
    <main className="min-h-screen bg-background pb-24 pt-32">
      <section className="relative overflow-hidden border-b border-border/60">
        <Image
          src={RESTAURANT_GALLERY_IMAGES[0]}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/45" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="font-serif text-4xl font-black tracking-tight text-foreground sm:text-5xl">{content.hero.title}</h1>
          <p className="mt-3 text-lg font-semibold text-[var(--isolele-accent)]">{content.hero.subtitle}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/70">{content.hero.description}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--isolele-accent)] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
          >
            {content.hero.cta}
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">{content.features.title}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.items.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-6 text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground">{content.gallery.title}</h2>
        <p className="mb-8 text-center text-sm text-foreground/60">{content.gallery.subtitle}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {RESTAURANT_GALLERY_IMAGES.map((image) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-xl border border-border/60">
              <Image src={image} alt={content.gallery.title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground">{content.location.title}</h2>
        <p className="mb-4 text-sm leading-6 text-foreground/70">{content.location.description}</p>
        <p className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
          <MapPin size={16} className="text-[var(--isolele-accent)]" />
          {content.location.address}
        </p>
        <p className="mt-2 text-sm text-foreground/60">
          {content.location.hours}: {content.location.hoursText}
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-2xl px-6 text-center">
        <div className="rounded-2xl border border-border/60 bg-card p-10">
          <h2 className="text-2xl font-bold text-foreground">{content.ctaFinal.title}</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">{content.ctaFinal.description}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--isolele-accent)] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
          >
            {content.ctaFinal.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
