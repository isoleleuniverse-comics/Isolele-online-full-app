import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { absoluteUrl, getSiteUrl } from "@/shared/seo/site-url";
import { DEFAULT_LOCALE, isSupportedLocale } from "@/shared/i18n/locales";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "ISOLELE - African Comics and African Games",
    template: "%s | ISOLELE",
  },
  description:
    "ISOLELE is an African comic and African games universe celebrating mythology, royalty, and cultural storytelling.",
  keywords: [
    "Black African superhero comics", "African comics universe", "Bande dessinée africaine moderne",
    "Afrocentric comic book universe", "African mythology comics", "Black-owned comic book franchise",
    "Comics africains héros", "Afro-futurism comics Africa", "African graphic novel series",
    "Bande dessinée noire et africaine", "Pan-African superhero universe", "Comics africains indépendants",
    "Afro fantasy comic books", "African cultural comics", "Black excellence comic universe",
    "bande dessinée africaine", "comics africains", "super-héros africains",
    "cómics africanos", "superhéroes africanos", "cómic afrodescendiente",
    "quadrinhos africanos", "super-heróis africanos", "katuni za Afrika", "mashujaa wa Afrika",
    "bandi dessinée ya Afrika", "héros ya Afrika", "bisalu bia mikanda mia Afrika",
    "非洲漫画", "非洲超级英雄", "黑人漫画", "非洲神话漫画",
    "非洲未来主义漫画", "非洲漫画宇宙", "非洲文化漫画", "아프리카 만화", "아프리카 슈퍼히어로",
    "흑인 만화", "아프리카 신화 만화", "아프로퓨처리즘 만화", "아프리카 만화 유니버스",
    "흑인 창작자 만화", "Африканские комиксы", "Африканские супергерои", "Комиксы чёрных авторов",
    "Африканская мифология комиксы", "Афрофутуризм комиксы", "Африканская вселенная комиксов",
    "Чёрная культура комиксы",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/LOGO.png",
    shortcut: "/LOGO.png",
    apple: "/LOGO.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ISOLELE",
    title: "ISOLELE - African Comics and African Games",
    description:
      "Discover ISOLELE, a premium African comic and African games universe rooted in Kongo mythology and cultural storytelling.",
    images: [
      {
        url: absoluteUrl("/LOGO.png"),
        width: 512,
        height: 512,
        alt: "ISOLELE icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISOLELE - African Comics and African Games",
    description:
      "Explore ISOLELE: African comic stories and African games inspired by mythology, heritage, and destiny.",
    images: [absoluteUrl("/LOGO.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-locale");
  const locale = isSupportedLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
