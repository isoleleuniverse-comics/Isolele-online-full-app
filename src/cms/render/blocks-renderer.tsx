/* eslint-disable @next/next/no-img-element */
import type { CmsBlockV1 } from "@/cms/blocks/v1";

export function BlocksRenderer({ blocks }: { blocks: CmsBlockV1[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, index) => {
        if (block.type === "hero") {
          return (
            <section
              key={index}
              className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-black/30 px-6 py-16 shadow-sm"
            >
              {block.backgroundImage?.url ? (
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `url(${block.backgroundImage.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
                  ISOLELE
                </p>
                <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {block.heading}
                </h1>
                {block.subheading ? (
                  <p className="mx-auto mt-4 max-w-2xl text-base text-white/75">
                    {block.subheading}
                  </p>
                ) : null}
              </div>
            </section>
          );
        }

        if (block.type === "richText") {
          return (
            <section key={index} className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed">
              {block.paragraphs.map((p, pIndex) => (
                <p key={pIndex} className="text-foreground/90">
                  {p}
                </p>
              ))}
            </section>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="mx-auto max-w-5xl space-y-3">
              <div className="overflow-hidden rounded-3xl border border-amber-500/10 bg-muted">
                {/* Intentionally using <img> for CMS content URLs to avoid Next Image domain constraints in v1. */}
                <img src={block.url} alt={block.alt ?? ""} className="h-auto w-full object-cover" />
              </div>
              {block.caption ? (
                <figcaption className="text-center text-sm text-muted-foreground">{block.caption}</figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "cta") {
          return (
            <section
              key={index}
              className="mx-auto max-w-4xl rounded-3xl border border-amber-500/15 bg-amber-500/5 px-6 py-10 text-center"
            >
              <h2 className="text-2xl font-black tracking-tight">{block.title}</h2>
              {block.description ? (
                <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{block.description}</p>
              ) : null}
              <a
                href={block.href}
                className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                {block.buttonLabel}
              </a>
            </section>
          );
        }

        return null;
      })}
    </div>
  );
}

