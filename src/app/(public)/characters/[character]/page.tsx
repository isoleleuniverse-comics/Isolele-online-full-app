import type { Metadata } from "next";
import { CharacterDetailPage } from "@/features/characters/ui/character-detail-page";
import { getCharacterMetadata, getCharacterStaticParams } from "@/features/characters/model/characters-seo";

export function generateStaticParams() {
  return getCharacterStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ character: string }>;
}): Promise<Metadata> {
  const { character } = await params;
  return getCharacterMetadata(character);
}

export default async function Page({
  params,
}: {
  params: Promise<{ character: string }>;
}) {
  const { character } = await params;
  return <CharacterDetailPage character={character} />;
}

