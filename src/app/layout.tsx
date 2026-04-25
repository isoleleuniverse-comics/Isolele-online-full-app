import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { absoluteUrl, getSiteUrl } from "@/lib/seo/site-url";
import { DEFAULT_LOCALE, isSupportedLocale } from "@/lib/i18n/locales";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "ISOLELE - African Comics and African Games",
    template: "%s | ISOLELE",
  },
  description:
    "ISOLELE is an African comic and African games universe celebrating mythology, royalty, and cultural storytelling.",
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
