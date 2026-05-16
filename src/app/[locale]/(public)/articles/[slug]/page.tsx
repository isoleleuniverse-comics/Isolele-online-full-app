import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { absoluteUrl } from "@/shared/seo/site-url";
import { normalizeArticleBlocks } from "@/features/articles/model/article-blocks";
import { ArticleTemplate } from "@/features/articles/ui/article-template";
import { getStaticArticleBySlug } from "@/features/articles/model/articles.data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const article = getStaticArticleBySlug(slug, safeLocale);

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
  const article = getStaticArticleBySlug(slug, safeLocale);

  if (!article) notFound();
  const blocks = normalizeArticleBlocks(article.blocksJson);

  return <ArticleTemplate article={article} blocks={blocks} />;
}
