import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import type { ShopProduct } from "@/features/shop/model/shop.types";
import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";

interface ProductDetailPageProps {
  product: ShopProduct;
  locale: SupportedLocale;
  buyLabel: string;
  soldOutLabel: string;
  backLabel: string;
}

export function ProductDetailPage({ product, locale, buyLabel, soldOutLabel, backLabel }: ProductDetailPageProps) {
  return (
    <main className="min-h-dvh bg-background pb-24 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href={withLocale(locale, "/shop")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-foreground"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-black/20">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            {product.soldOut ? (
              <div className="absolute left-4 top-4 rounded-full bg-black/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                {soldOutLabel}
              </div>
            ) : null}
          </div>

          <div>
            {product.brand ? (
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--isolele-accent)]">{product.brand}</p>
            ) : null}
            <h1 className="font-serif text-3xl font-black tracking-tight text-foreground sm:text-4xl">{product.name}</h1>
            <p className="mt-2 text-base text-foreground/70">{product.subtitle}</p>

            <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70">
              <Star size={16} className="fill-[var(--isolele-accent)] text-[var(--isolele-accent)]" />
              {product.rating.value.toFixed(1)} ({product.rating.count})
            </div>

            <p className="mt-3 text-3xl font-black text-[var(--isolele-accent)]">${product.price.toFixed(2)}</p>

            {product.soldOut ? (
              <span className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-foreground/20 px-6 py-3 text-sm font-bold text-foreground/60 sm:w-auto">
                {soldOutLabel}
              </span>
            ) : (
              <a
                href={product.checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-[var(--isolele-accent)] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90 sm:w-auto"
              >
                <ShoppingBag size={18} />
                {buyLabel}
              </a>
            )}
            <p className="mt-2 text-xs text-foreground/50">{product.checkoutLabel}</p>

            <div className="mt-8 space-y-4 whitespace-pre-line text-sm leading-7 text-foreground/80">{product.description}</div>

            {product.specifications && product.specifications.length > 0 ? (
              <ul className="mt-8 space-y-2 border-t border-border/60 pt-6 text-sm text-foreground/70">
                {product.specifications.map((spec) => (
                  <li key={spec} className="flex gap-2">
                    <span className="text-[var(--isolele-accent)]">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
