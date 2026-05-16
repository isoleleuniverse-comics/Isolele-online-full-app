import { redirect } from "next/navigation";
import { isCmsAuthenticated } from "@private/lib/auth";
import { createDraftArticle } from "@private/features/articles/article-service";

export default async function NewArticlePage() {
  if (!(await isCmsAuthenticated())) redirect("/dashboard/login");
  const article = await createDraftArticle();
  redirect(`/dashboard/articles/${article.id}`);
}
