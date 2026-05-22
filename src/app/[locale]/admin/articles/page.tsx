import { getAllArticles } from "@/features/articles/services/articles.services";
import Link from "next/link";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

function getStatusLabel(status: string) {
    if (status === "DRAFT") return "Brouillon";
    if (status === "REVIEW") return "En revision";
    if (status === "PUBLISHED") return "Publie";
    return "Archive";
}

export default async function AdminArticlesPage({
    params,
}: Props) {
    const { locale } = await params;
    const articles = await getAllArticles();

    return (
        < div className = "p-8" >

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Articles
        </h1>

        <Link
          href={`/${locale}/admin/articles/new`}
          className="px-4 py-2 rounded bg-black text-white"
        >
          Nouvel article
        </Link>
      </div>

      <div className="space-y-4">

        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded p-4"
          >
            <div className="flex items-center justify-between">

              <div>
                <h2 className="font-semibold">
                  {article.title}
                </h2>

                <p className="text-sm opacity-70">
                  {article.slug}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wide opacity-70">
                  {getStatusLabel(article.status)}
                </p>
              </div>

              <Link
                href={`/${locale}/admin/articles/${article.id}`}
                className="underline"
              >
                Modifier
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div >
    )
}
