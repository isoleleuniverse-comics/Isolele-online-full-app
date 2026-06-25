// app/[locale]/books/[slug]/page.tsx (Côté Site Public)
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BookStoryPage } from "@/features/books/ui/book-story-page";
import { getBookMetadata, getBooksStaticParams } from "@/features/books/model";
import { fetchBookBySlug } from "@/features/books/model/cms-books-bridge";
import { DEFAULT_LOCALE, isSupportedLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/shared/i18n/locales";

// Paramètres statiques pour la génération au build
export function generateStaticParams() {
  const pages = getBooksStaticParams();
  return SUPPORTED_LOCALES.flatMap((locale) => pages.map((item) => ({ locale, ...item })));
}

// Métadonnées dynamiques (vous pourrez l'adapter pour lire depuis fetchBookBySlug si nécessaire)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return getBookMetadata(locale, slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  // 1. Récupération dynamique ou fallback statique
  const page = await fetchBookBySlug(slug, safeLocale);

  if (!page) {
    notFound();
  }

  // 2. Affichage
  return <BookStoryPage page={page} locale={safeLocale} />;
}