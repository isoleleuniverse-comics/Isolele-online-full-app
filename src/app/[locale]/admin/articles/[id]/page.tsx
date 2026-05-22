import { notFound } from "next/navigation";

import { ArticlesEditors } from "@/features/articles/components/articles-editors";
import { getArticleById } from "@/features/articles/services/articles.services";

type Props = {
    params: Promise<{
        locale: string;
        id: string;
    }>;
};

export default async function EditArticlePage({
    params,
}: Props) {
    const { id, locale } = await params;
    const article = await getArticleById(id);

    if (!article) {
        notFound();
    }

    return (
        <div className="p-8">
            <h1 className="mb-8 text-3xl font-bold">
                Edition article
            </h1>

            <ArticlesEditors
                article={{
                    id: article.id,
                    adminLocale: locale,
                    articleLocale: article.locale,
                    title: article.title,
                    excerpt: article.excerpt,
                    coverImage: article.coverImage,
                    seoTitle: article.seoTitle,
                    seoDescription: article.seoDescription,
                    blocksJson: article.blocksJson,
                    status: article.status,
                }}
            />
        </div>
    );
}
