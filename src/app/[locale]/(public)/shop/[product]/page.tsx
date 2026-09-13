import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getShopPageContent, getShopProductBySlug, getShopStaticParams } from "@/features/shop/model/shop.data";
import { ProductDetailPage } from "@/features/shop/ui/product-detail-page";
import { buildLocaleAlternates, DEFAULT_LOCALE, isSupportedLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/shared/i18n/locales";

export function generateStaticParams() {
  const products = getShopStaticParams();
  return SUPPORTED_LOCALES.flatMap((locale) => products.map((item) => ({ locale, ...item })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; product: string }>;
}): Promise<Metadata> {
  const { locale, product } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const item = getShopProductBySlug(product, safeLocale);

  if (!item) {
    return {};
  }

  const canonical = `/${safeLocale}/shop/${product}`;

  return {
    title: `${item.name} | ISOLELE Shop`,
    description: item.subtitle,
    alternates: {
      canonical,
      languages: buildLocaleAlternates((locale) => `/${locale}/shop/${product}`),
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${item.name} | ISOLELE Shop`,
      description: item.subtitle,
      images: [{ url: item.image }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; product: string }>;
}) {
  const { locale, product } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const item = getShopProductBySlug(product, safeLocale);

  if (!item) {
    notFound();
  }

  const content = getShopPageContent(safeLocale);

  return (
    <ProductDetailPage
      product={item}
      locale={safeLocale}
      buyLabel={content.buyLabel}
      soldOutLabel={content.soldOutLabel}
      backLabel={content.backLabel}
    />
  );
}
