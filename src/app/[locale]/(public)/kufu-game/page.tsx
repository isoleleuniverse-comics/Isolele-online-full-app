import { KufuGamePage } from "@/features/kufu-game/ui/kufu-game-page";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  return <KufuGamePage locale={safeLocale} />;
}

