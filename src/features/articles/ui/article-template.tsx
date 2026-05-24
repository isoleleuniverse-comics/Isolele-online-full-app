/* eslint-disable @next/next/no-img-element */
import { ArticleBlockRenderer } from "@/features/articles/ui/article-block-renderer";
import { ArticleReadingProgress } from "@/features/articles/ui/article-reading-progress";
import {
  getReadingTimeMinutes,
  type ArticleBlock,
} from "@/features/articles/model/article-blocks";

const FALLBACK_COVER = "/royal-palace-background.png";

export function ArticleTemplate({
  article,
  blocks,
}: {
  article: {
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    updatedAt: Date;
  };
  blocks: ArticleBlock[];
}) {
  const coverImage = article.coverImage || FALLBACK_COVER;
  const readingTime = getReadingTimeMinutes(blocks);
  const date = new Intl.DateTimeFormat("fr", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(article.updatedAt);

  return (
    <main className="min-h-screen bg-[#0d0c0b] text-[#e8e0d4]">
      <ArticleReadingProgress />

      <article>
        <header className="px-6 pb-16 pt-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-[#c9a84c]">
              <span className="h-px w-9 bg-[#c9a84c]" />
              ISOLELE Editorial
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-light leading-[1.03] text-white sm:text-7xl lg:text-8xl">
              {article.title}
            </h1>
            {article.excerpt ? (
              <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#e8e0d4]/75">
                {article.excerpt}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#8c8070]">
              <span>{date}</span>
              <span className="text-[#7d6630]">/</span>
              <span>{readingTime} min read</span>
            </div>

            <div className="mt-12 overflow-hidden border border-[#2a2620] bg-[#161412]">
              <img
                src={coverImage}
                alt=""
                className="h-auto max-h-[720px] w-full object-cover"
              />
            </div>
          </div>
        </header>

        <ArticleBlockRenderer blocks={blocks} />

        <footer className="mx-auto max-w-3xl border-t border-[#2a2620] px-6 py-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#c9a84c]">
            ISOLELE
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif text-2xl font-light italic leading-snug text-[#ede5d8]">
            Stories shaped with care, culture, and imagination.
          </p>
        </footer>
      </article>
    </main>
  );
}
