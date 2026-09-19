"use client";

import type { SupportedLocale } from "@/shared/i18n/locales";
import { withLocale } from "@/shared/i18n/locales";
import { getShopPageContent, getShopProducts } from "@/features/shop/model/shop.data";
import { ShopProductCard } from "@/features/shop/ui/shop-product-card";

interface ShopPageProps {
  locale: SupportedLocale;
}

export function ShopPage({ locale }: ShopPageProps) {
  const content = getShopPageContent(locale);
  const products = getShopProducts(locale);
  const hats = products.filter((product) => product.category === "hats");
  const books = products.filter((product) => product.category === "books");

  return (
    <main className="min-h-dvh bg-background pb-24 pt-32">
      <header className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-serif text-4xl font-black tracking-tight text-foreground sm:text-5xl">{content.heroTitle}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70 sm:text-lg">{content.heroDescription}</p>
      </header>

      {hats.length > 0 ? (
        <section className="mx-auto mt-16 max-w-7xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-foreground">{content.hatsTitle}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hats.map((product) => (
              <ShopProductCard
                key={product.id}
                product={product}
                href={withLocale(locale, `/shop/${product.id}`)}
                buyLabel={content.buyLabel}
                soldOutLabel={content.soldOutLabel}
              />
            ))}
          </div>
        </section>
      ) : null}

      {books.length > 0 ? (
        <section className="mx-auto mt-16 max-w-7xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-foreground">{content.booksTitle}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((product) => (
              <ShopProductCard
                key={product.id}
                product={product}
                href={withLocale(locale, `/shop/${product.id}`)}
                buyLabel={content.buyLabel}
                soldOutLabel={content.soldOutLabel}
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
