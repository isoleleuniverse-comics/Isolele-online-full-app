import { GamesPage } from "@/features/games/ui/games-page";
import { isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";

export default async function GamesRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : "en";

  return <GamesPage locale={safeLocale} />;
}
