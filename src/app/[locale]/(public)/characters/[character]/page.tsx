import type { Metadata } from "next";
import { CharacterDetailPage } from "@/features/characters/ui/character-detail-page";
import { getCharacterMetadata, getCharacterStaticParams } from "@/features/characters/model/characters-seo";
import { SUPPORTED_LOCALES } from "@/lib/i18n/locales";

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
  const { character } = await params;
  return <CharacterDetailPage character={character} />;
}

