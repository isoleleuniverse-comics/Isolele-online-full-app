import type { Metadata } from "next";
import { CharacterDetailPage } from "@/features/characters/ui/character-detail-page";
import { getCharacterMetadata, getCharacterStaticParams } from "@/features/characters/model/characters-seo";
import { DEFAULT_LOCALE, isSupportedLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/shared/i18n/locales";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  const characters = getCharacterStaticParams();
  return SUPPORTED_LOCALES.flatMap((locale) => characters.map((item) => ({ locale, ...item })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; character: string }>;
}): Promise<Metadata> {
  const { locale, character } = await params;
  return getCharacterMetadata(locale, character);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; character: string }>;
}) {
  const { locale, character } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  return <CharacterDetailPage character={character} locale={safeLocale} />;
}

