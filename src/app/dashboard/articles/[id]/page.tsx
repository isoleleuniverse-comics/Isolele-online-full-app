import { notFound, redirect } from "next/navigation";
import { normalizeArticleBlocks } from "@/features/articles/model/article-blocks";
import { isCmsAuthenticated } from "@private/lib/auth";
import { getArticleById } from "@private/features/articles/article-service";
import { ArticleEditorScreen } from "@private/features/editor/components/article-editor-screen";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isCmsAuthenticated())) redirect("/dashboard/login");
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) notFound();

  return (
    <ArticleEditorScreen
      article={{
        ...article,
        blocksJson: normalizeArticleBlocks(article.blocksJson),
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        assets: article.assets.map((asset) => ({
          ...asset,
          createdAt: asset.createdAt.toISOString(),
        })),
      }}
    />
  );
}
