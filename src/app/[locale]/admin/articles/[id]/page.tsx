import { notFound } from "next/navigation";

import { ArticlesEditors } from "@/features/articles/components/articles-editors";
import { buildEditorArticlePayload, getArticleById } from "@/features/articles/services/articles.services";

export const dynamic = "force-dynamic";

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

    const payload = await buildEditorArticlePayload(article, locale);

    return (
            <ArticlesEditors
                article={payload}
            />
    );
}
