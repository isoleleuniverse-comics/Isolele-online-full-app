/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ArticleBlock } from "@/features/articles/model/article-blocks";

function getYoutubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");
    if (host === "youtube.com") {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host === "youtu.be") {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function paragraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ArticleBlockRenderer({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-[#d8d0c4] sm:py-20">
      {blocks.map((block) => {
        if (block.type === "heading") {
          if (!block.text.trim()) return null;
          const HeadingTag = block.level === 1 ? "h1" : block.level === 3 ? "h3" : "h2";
          return (
            <section key={block.id} className="mt-16 first:mt-0">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px flex-1 bg-[#3a342c]" />
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#c9a84c]">
                  Section
                </span>
              </div>
              <HeadingTag className="font-serif text-3xl font-light leading-tight text-[#f4ecdf] sm:text-5xl">
                {block.text}
              </HeadingTag>
            </section>
          );
        }

        if (block.type === "paragraph") {
          const parts = paragraphs(block.text);
          if (parts.length === 0) return null;
          return (
            <div key={block.id} className="my-8 space-y-6">
              {parts.map((paragraph, index) => (
                <p key={index} className="text-lg leading-9 text-[#d8d0c4]">
                  {paragraph}
                </p>
              ))}
            </div>
          );
        }

        if (block.type === "image") {
          if (!block.url.trim()) return null;
          return (
            <figure key={block.id} className="my-14 sm:-mx-12">
              <div className="overflow-hidden border border-[#2a2620] bg-[#161412]">
                <img
                  src={block.url}
                  alt={block.alt ?? ""}
                  className="h-auto max-h-[680px] w-full object-cover brightness-90 contrast-105"
                />
              </div>
              {block.caption ? (
                <figcaption className="mt-3 border-t border-[#3a342c] pt-3 text-sm leading-6 text-[#8c8070]">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "quote") {
          if (!block.text.trim()) return null;
          return (
            <figure key={block.id} className="my-12 border-y border-[#2a2620] px-4 py-8 sm:-mx-8 sm:px-8">
              <blockquote className="font-serif text-2xl font-light italic leading-snug text-[#ede5d8] sm:text-3xl">
                &ldquo;{block.text}&rdquo;
              </blockquote>
              {block.author ? (
                <figcaption className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[#7d6630]">
                  {block.author}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "video") {
          if (!block.url.trim()) return null;
          const embedUrl = getYoutubeEmbedUrl(block.url);
          return (
            <figure key={block.id} className="my-14 sm:-mx-12">
              <div className="aspect-video overflow-hidden border border-[#2a2620] bg-black">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={block.title || "Article video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <video src={block.url} controls className="h-full w-full object-cover" />
                )}
              </div>
              {block.title ? (
                <figcaption className="mt-3 text-sm leading-6 text-[#8c8070]">{block.title}</figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "divider") {
          return (
            <div key={block.id} className="my-12 flex items-center gap-5 text-[#7d6630]">
              <span className="h-px flex-1 bg-[#3a342c]" />
              <span className="text-xs tracking-[0.35em]">*</span>
              <span className="h-px flex-1 bg-[#3a342c]" />
            </div>
          );
        }

        if (block.type === "cta") {
          if (!block.title.trim()) return null;
          return (
            <aside key={block.id} className="my-14 border border-[#2a2620] bg-[#161412] px-6 py-8 text-center">
              <h2 className="font-serif text-3xl font-light text-[#f4ecdf]">{block.title}</h2>
              {block.description ? (
                <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#a79b8b]">{block.description}</p>
              ) : null}
              {block.href && block.buttonLabel ? (
                <Link
                  href={block.href}
                  className="mt-6 inline-flex items-center justify-center bg-[#c9a84c] px-5 py-3 text-sm font-semibold text-[#0d0c0b] transition hover:bg-[#e0bf61]"
                >
                  {block.buttonLabel}
                </Link>
              ) : null}
            </aside>
          );
        }

        if (block.type === "unsupported") {
          return (
            <aside
              key={block.id}
              className="my-10 rounded border border-dashed border-[#7d6630] bg-[#161412] px-5 py-4 text-sm text-[#a79b8b]"
            >
              Unsupported block type: {block.originalType}
            </aside>
          );
        }

        return null;
      })}
    </div>
  );
}
