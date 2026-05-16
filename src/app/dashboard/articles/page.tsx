import Link from "next/link";
import { redirect } from "next/navigation";
import { FileText, Plus, Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isCmsAuthenticated } from "@private/lib/auth";
import { listArticles } from "@private/features/articles/article-service";

export default async function DashboardArticlesPage() {
  if (!(await isCmsAuthenticated())) redirect("/dashboard/login");
  const articles = await listArticles();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300">ISOLELE CMS</p>
            <h1 className="mt-2 text-3xl font-semibold">Articles</h1>
          </div>
          <div className="flex items-center gap-2">
            <form action="/api/cms/logout" method="post">
              <Button type="submit" variant="outline" className="border-white/15 bg-white/5 text-white">
                <Power className="size-4" />
                Logout
              </Button>
            </form>
            <Link
              href="/dashboard/articles/new"
              className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-white px-2.5 text-sm font-medium text-black transition hover:bg-white/85"
            >
              <Plus className="size-4" />
              New article
            </Link>
          </div>
        </header>

        <section className="mt-8 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/dashboard/articles/${article.id}`}
              className="flex items-center justify-between gap-4 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.07]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <FileText className="size-5 shrink-0 text-amber-300" />
                <div className="min-w-0">
                  <h2 className="truncate font-medium">{article.title}</h2>
                  <p className="truncate text-sm text-white/50">/{article.slug}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65">
                {article.published ? "Published" : "Draft"}
              </span>
            </Link>
          ))}
          {articles.length === 0 ? (
            <div className="bg-white/[0.03] px-5 py-12 text-center text-white/55">
              No articles yet.
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
