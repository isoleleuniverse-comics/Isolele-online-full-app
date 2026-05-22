import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { absoluteUrl } from "@/shared/seo/site-url";
import { normalizeArticleBlocks } from "@/features/articles/model/article-blocks";
import { getPublicArticleBySlug } from "@/features/articles/services/articles.services";
import { ArticleTemplate } from "@/features/articles/ui/article-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const article = await getPublicArticleBySlug(slug, safeLocale);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  const path = `/${safeLocale}/articles/${article.slug}`;
  const metadataTitle = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt || `Read ${article.title} on ISOLELE.`;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title: metadataTitle,
      description,
      images: article.coverImage
        ? [
            {
              url: article.coverImage.startsWith("http")
                ? article.coverImage
                : absoluteUrl(article.coverImage),
              alt: metadataTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
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
  const article = await getPublicArticleBySlug(slug, safeLocale);

  if (!article) notFound();
  const blocks = normalizeArticleBlocks(article.blocksJson);

  return <ArticleTemplate article={article} blocks={blocks} />;
}
