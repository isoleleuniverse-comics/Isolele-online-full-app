// app/[locale]/articles/page.tsx (Côté Site Public)
import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { fetchPublishedArticles } from "@/features/articles/model/cms-bridge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  return {
    title: "Articles",
    description: "Read ISOLELE articles, news, stories, and editorial updates.",
    alternates: {
      canonical: `/${safeLocale}/articles`,
      languages: {
        fr: "/fr/articles",
        en: "/en/articles",
      },
    },
    openGraph: {
      type: "website",
      url: `/${safeLocale}/articles`,
      title: "ISOLELE Articles",
      description: "Read ISOLELE articles, stories, and editorial updates.",
    },
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: SupportedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  // Récupération dynamique depuis Vercel Blob / CMS
  const articles = await fetchPublishedArticles(safeLocale);

  return (
    <main className="bg-[#0d0c0b] text-[#e8e0d4] min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">
            ISOLELE
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl text-white">Articles</h1>
          <p className="mt-4 text-base text-muted-foreground text-zinc-400">
            Editorial stories, universe notes, and updates from the ISOLELE world.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${safeLocale}/articles/${article.slug}`}
              className="grid gap-4 rounded-lg border border-zinc-800 bg-[#161412] p-4 transition hover:border-amber-500/40 sm:grid-cols-[180px_1fr]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-zinc-900 relative">
                {article.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={article.coverImage} alt="" className="h-full w-full object-cover" />
                ) : null}
              </div>
              <div className="min-w-0 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white group-hover:text-amber-500">{article.title}</h2>
                  {article.excerpt ? (
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">
                      {article.excerpt}
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm font-medium text-amber-500">Read article</p>
              </div>
            </Link>
          ))}
          {articles.length === 0 ? (
            <div className="rounded-lg border border-dashed border-zinc-800 px-6 py-16 text-center text-zinc-500">
              No published articles yet.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}