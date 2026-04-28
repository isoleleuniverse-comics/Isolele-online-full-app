import type { SupportedLocale } from "@/shared/i18n/locales";
import { CharactersPage } from "@/features/characters/ui/characters-page";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = locale === "en" ? "en" : "fr";
  return <CharactersPage locale={safeLocale} />;
}

