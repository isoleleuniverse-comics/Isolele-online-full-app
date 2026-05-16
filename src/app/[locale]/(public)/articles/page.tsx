import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from "@/shared/i18n/locales";
import { getStaticPublishedArticles } from "@/features/articles/model/articles.data";

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
  const articles = getStaticPublishedArticles(safeLocale);

  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">
            ISOLELE
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Articles</h1>
          <p className="mt-4 text-base text-muted-foreground">
            Editorial stories, universe notes, and updates from the ISOLELE world.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${safeLocale}/articles/${article.slug}`}
              className="grid gap-4 rounded-lg border border-border bg-card p-4 transition hover:border-amber-500/40 sm:grid-cols-[180px_1fr]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
                {article.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={article.coverImage} alt="" className="h-full w-full object-cover" />
                ) : null}
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                {article.excerpt ? (
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {article.excerpt}
                  </p>
                ) : null}
                <p className="mt-4 text-sm font-medium text-amber-700">Read article</p>
              </div>
            </Link>
          ))}
          {articles.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border px-6 py-16 text-center text-muted-foreground">
              No published articles yet.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
