import { ArticlesManager } from "@/features/articles/components/articles-manager";
import { getArticleManagerItems } from "@/features/articles/services/articles.services";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AdminArticlesPage({ params }: Props) {
  const { locale } = await params;
  const articles = await getArticleManagerItems();

  return (
    <ArticlesManager
      adminLocale={locale}
      initialArticles={articles.map((article) => ({
        ...article,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        publishedAt: article.publishedAt?.toISOString() ?? null,
      }))}
    />
  );
}
