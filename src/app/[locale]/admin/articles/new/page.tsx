import { redirect } from "next/navigation";

import {
    createArticle,
} from "@/features/articles/services/articles.services";

export const dynamic = "force-dynamic";

type NewArticlePageProps = {
    params: Promise<{
        locale: string;
    }>;
};
export default async function NewArticlePage({
    params,
}: NewArticlePageProps) {
    const { locale } = await params;

    const article = await createArticle();

    redirect(`/${locale}/admin/articles/${article.id}`);
}
