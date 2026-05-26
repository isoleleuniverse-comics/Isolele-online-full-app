import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BookStoryPage } from "@/features/books/ui/book-story-page";
import { getBookBySlug, getBookMetadata, getBooksStaticParams } from "@/features/books/model";
import { DEFAULT_LOCALE, isSupportedLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/shared/i18n/locales";

export const dynamic = "force-dynamic";
export function generateStaticParams() {
  const pages = getBooksStaticParams();
  return SUPPORTED_LOCALES.flatMap((locale) => pages.map((item) => ({ locale, ...item })));
}

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
  const page = getBookBySlug(slug, safeLocale);

  if (!page) {
    notFound();
  }

  return <BookStoryPage page={page} locale={safeLocale} />;
}
