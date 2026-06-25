// app/[locale]/articles/[slug]/page.tsx (Côté Site Public)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { absoluteUrl } from "@/shared/seo/site-url";
import { ArticleTemplate } from "@/features/articles/ui/article-template";
import { fetchArticleBySlug, mapCmsBlocksToPublic } from "@/features/articles/model/cms-bridge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  // Utilisation de la récupération dynamique
  const article = await fetchArticleBySlug(slug, safeLocale);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  const path = `/${safeLocale}/articles/${article.slug}`;
  const description = article.excerpt || `Read ${article.title} on ISOLELE.`;

  return {
    title: article.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title: article.title,
      description,
      images: article.coverImage
        ? [
          {
            url: article.coverImage.startsWith("http")
              ? article.coverImage
              : absoluteUrl(article.coverImage),
            alt: article.title,
          },
        ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  // 1. Récupération de l'article (Distant ou Fallback local)
  const article = await fetchArticleBySlug(slug, safeLocale);

  if (!article) notFound();

  // 2. Conversion et mapping des blocs à la volée
  const blocks = mapCmsBlocksToPublic(article.blocks);

  // 3. Normalisation des dates pour le composant Template
  const formattedArticle = {
    title: article.title,
    excerpt: article.excerpt,
    coverImage: article.coverImage,
    updatedAt: new Date(article.updatedAt)
  };

  return <ArticleTemplate article={formattedArticle} blocks={blocks} />;
}