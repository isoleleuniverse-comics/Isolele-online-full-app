/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import { ArticleReadingProgress } from "@/features/articles/ui/article-reading-progress";
import {
  getReadingTimeMinutes,
  type ArticleBlock,
  type GalleryBlock,
  type ImageBlock,
} from "@/features/articles/model/article-blocks";

const FALLBACK_COVER = "/royal-palace-background.png";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
}

function paragraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function ArticleContainer({ children }: { children: ReactNode }) {
  return <div className="article-container">{children}</div>;
}

function ArticleHeading({ text }: { text: string }) {
  if (!text.trim()) return null;

  return (
    <ArticleContainer>
      <div className="article-prose reveal visible">
        <h2>{text}</h2>
      </div>
    </ArticleContainer>
  );
}

function ArticleParagraph({ text, dropcap }: { text: string; dropcap: boolean }) {
  const parts = paragraphs(text);
  if (parts.length === 0) return null;

  return (
    <>
      {parts.map((paragraph, index) => (
        <ArticleContainer key={index}>
          <div className="article-prose reveal visible">
            <p className={dropcap && index === 0 ? "has-dropcap" : undefined}>{paragraph}</p>
          </div>
        </ArticleContainer>
      ))}
    </>
  );
}

function ArticleImage({ block, full }: { block: ImageBlock; full: boolean }) {
  if (!block.url.trim()) return null;

  return (
    <ArticleContainer>
      <figure className={`article-figure ${full ? "article-figure-full" : ""} reveal visible`}>
        <img src={block.url} alt={block.alt || block.caption || "Article image"} />
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    </ArticleContainer>
  );
}

function ArticleQuote({ text, source }: { text: string; source?: string }) {
  if (!text.trim()) return null;

  return (
    <ArticleContainer>
      <div className="reveal visible">
        <blockquote className="article-quote">
          <p>{text}</p>
          {source ? <cite>{source}</cite> : null}
        </blockquote>
      </div>
    </ArticleContainer>
  );
}

function ArticleSeparator() {
  return (
    <ArticleContainer>
      <div className="article-separator reveal visible">
        <div className="sep-line" />
        <div className="sep-ornament" aria-hidden="true">
          <div className="sep-diamond" />
          <div className="sep-diamond" />
          <div className="sep-diamond" />
        </div>
        <div className="sep-line" />
      </div>
    </ArticleContainer>
  );
}

function ArticleCallout({ title, text }: { title: string; text: string }) {
  if (!title.trim() && !text.trim()) return null;

  return (
    <ArticleContainer>
      <div className="reveal visible">
        <blockquote className="article-quote article-callout">
          {title ? <p>{title}</p> : null}
          {text ? <cite>{text}</cite> : null}
        </blockquote>
      </div>
    </ArticleContainer>
  );
}

function ArticleGallery({ block }: { block: GalleryBlock }) {
  const images = block.images.filter((image) => image.url.trim());
  if (images.length === 0) return null;

  return (
    <div className="article-container-wide">
      <div className="article-gallery reveal visible">
        <div className="gallery-header">
          <span className="gallery-title">{block.caption || "Galerie"}</span>
          <span className="gallery-count">{String(images.length).padStart(2, "0")} images</span>
        </div>
        <div className="gallery-grid">
          {images.map((image) => (
            <div className="gallery-item" key={image.id}>
              <img src={image.url} alt={image.alt || "Image galerie"} />
            </div>
          ))}
        </div>
        {block.caption ? <p className="gallery-caption">{block.caption}</p> : null}
      </div>
    </div>
  );
}

function ArticleCta({
  title,
  description,
  buttonLabel,
  href,
}: {
  title: string;
  description?: string;
  buttonLabel: string;
  href: string;
}) {
  if (!title.trim()) return null;

  return (
    <ArticleContainer>
      <aside className="article-cta reveal visible">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {href && buttonLabel ? <Link href={href}>{buttonLabel}</Link> : null}
      </aside>
    </ArticleContainer>
  );
}

function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  const firstParagraphId = blocks.find((block) => block.type === "text")?.id;
  const firstImageId = blocks.find((block) => block.type === "image")?.id;

  return (
    <>
      {blocks.map((block) => {
        if (block.type === "heading") return <ArticleHeading key={block.id} text={block.text} />;
        if (block.type === "text") {
          return <ArticleParagraph key={block.id} text={block.text} dropcap={block.id === firstParagraphId} />;
        }
        if (block.type === "image") return <ArticleImage key={block.id} block={block} full={block.id === firstImageId} />;
        if (block.type === "quote") return <ArticleQuote key={block.id} text={block.text} source={block.source} />;
        if (block.type === "divider") return <ArticleSeparator key={block.id} />;
        if (block.type === "callout") return <ArticleCallout key={block.id} title={block.title} text={block.text} />;
        if (block.type === "gallery") return <ArticleGallery key={block.id} block={block} />;
        if (block.type === "cta") {
          return (
            <ArticleCta
              key={block.id}
              title={block.title}
              description={block.description}
              buttonLabel={block.buttonLabel}
              href={block.href}
            />
          );
        }
        return null;
      })}
    </>
  );
}

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
  const date = formatDate(article.updatedAt);

  return (
    <main className="article-render">
      <ArticleReadingProgress />
      <style>{articleStyles}</style>

      <article>
        <section className="article-hero">
          <img className="hero-img" src={coverImage} alt="" />
          <div className="hero-bg" />
          <div className="hero-texture" />

          <div className="hero-content">
            <span className="hero-tag">ISOLELE Editorial</span>
            <h1 className="hero-title">{article.title}</h1>
            {article.excerpt ? <p className="hero-subtitle">{article.excerpt}</p> : null}
            <div className="hero-meta">
              <span className="hero-meta-date">{date}</span>
              <span className="hero-meta-sep" />
              <span className="hero-meta-cat">Lecture · {readingTime} min</span>
            </div>
          </div>

          <div className="hero-scroll">
            <div className="hero-scroll-line" />
            <span>scroll</span>
          </div>
        </section>

        {article.excerpt ? (
          <ArticleContainer>
            <div className="article-intro reveal visible">
              <p className="intro-lead">{article.excerpt}</p>
            </div>
          </ArticleContainer>
        ) : null}

        <ArticleBlocks blocks={blocks} />

        <footer className="article-footer">
          <div className="footer-logo">ISOLELE</div>
          <div className="footer-sep" />
          <p className="footer-text">Stories shaped with care, culture, and imagination.</p>
        </footer>
      </article>
    </main>
  );
}

const articleStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');

  .article-render {
    --ink: #0e0c09;
    --parchment: #f5f0e8;
    --warm-white: #faf8f4;
    --gold: #b8942a;
    --gold-light: #e8d5a0;
    --muted: #7a7060;
    --border: rgba(14,12,9,0.12);
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans: 'DM Sans', sans-serif;
    --mono: 'DM Mono', monospace;
    min-height: 100vh;
    overflow: hidden;
    background: var(--warm-white);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 18px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
  }

  .article-render * { box-sizing: border-box; }

  .article-hero {
    position: relative;
    display: flex;
    min-height: min(100vh, 900px);
    overflow: hidden;
    align-items: flex-end;
  }

  .hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.35;
    mix-blend-mode: luminosity;
    filter: sepia(0.4) contrast(1.1);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(14,12,9,0) 30%, rgba(14,12,9,0.92) 100%),
      linear-gradient(135deg, #2a1f0e 0%, #1a1208 50%, #0e0c09 100%);
  }

  .hero-texture {
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(184,148,42,0.03) 2px, rgba(184,148,42,0.03) 4px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(184,148,42,0.02) 2px, rgba(184,148,42,0.02) 4px);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 980px;
    padding: 0 6vw 7vh;
  }

  .hero-tag {
    display: inline-block;
    margin-bottom: 24px;
    border: 0.5px solid var(--gold);
    border-radius: 2px;
    padding: 5px 12px;
    color: var(--gold);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .hero-title {
    max-width: 900px;
    margin: 0 0 16px;
    color: #fff;
    font-family: var(--serif);
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 300;
    line-height: 1.05;
  }

  .hero-subtitle {
    max-width: 620px;
    margin: 0 0 32px;
    color: rgba(255,255,255,0.68);
    font-family: var(--serif);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-style: italic;
    font-weight: 300;
  }

  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  .hero-meta-date {
    color: rgba(255,255,255,0.45);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.1em;
  }

  .hero-meta-sep {
    width: 32px;
    height: 0.5px;
    background: var(--gold);
    opacity: 0.6;
  }

  .hero-meta-cat {
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    font-weight: 300;
  }

  .hero-scroll {
    position: absolute;
    right: 6vw;
    bottom: 32px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .hero-scroll span {
    writing-mode: vertical-rl;
    color: rgba(255,255,255,0.3);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hero-scroll-line {
    width: 0.5px;
    height: 48px;
    background: linear-gradient(to bottom, var(--gold), transparent);
  }

  .article-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .article-container-wide {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .article-intro {
    padding: 80px 0 48px;
    border-bottom: 0.5px solid var(--border);
  }

  .intro-lead {
    margin: 0;
    color: var(--ink);
    font-family: var(--serif);
    font-size: clamp(1.35rem, 2.5vw, 1.75rem);
    font-weight: 300;
    line-height: 1.5;
  }

  .article-prose { padding: 24px 0; }

  .article-prose p {
    margin: 0 0 1.6em;
    color: #2a2520;
    font-family: var(--serif);
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.85;
  }

  .article-prose p.has-dropcap::first-letter {
    float: left;
    margin: 0.05em 0.1em 0 0;
    color: var(--gold);
    font-family: var(--serif);
    font-size: 4.5em;
    font-weight: 400;
    line-height: 0.8;
  }

  .article-prose h2 {
    margin: 1.6em 0 0.8em;
    padding-top: 1.5em;
    border-top: 0.5px solid var(--border);
    color: var(--ink);
    font-family: var(--serif);
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1.15;
  }

  .article-quote {
    position: relative;
    margin: 48px 0;
    padding: 40px 48px;
    border-left: 3px solid var(--gold);
    background: var(--parchment);
  }

  .article-quote::before {
    content: '\\201C';
    position: absolute;
    top: -20px;
    left: 28px;
    color: var(--gold-light);
    font-family: var(--serif);
    font-size: 120px;
    line-height: 1;
    pointer-events: none;
  }

  .article-quote p {
    position: relative;
    z-index: 1;
    margin: 0 0 20px;
    color: var(--ink);
    font-family: var(--serif);
    font-size: clamp(1.2rem, 2.5vw, 1.55rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1.65;
  }

  .article-quote cite {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    font-style: normal;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .article-quote cite::before {
    content: '';
    display: block;
    width: 24px;
    height: 0.5px;
    background: var(--gold);
  }

  .article-callout::before { content: ''; }

  .article-figure { margin: 48px 0; }

  .article-figure-full {
    max-width: 100vw;
    margin-left: calc(-1 * (50vw - 360px));
    margin-right: calc(-1 * (50vw - 360px));
  }

  .article-figure img {
    display: block;
    width: 100%;
    height: auto;
    filter: sepia(0.08) contrast(1.04);
  }

  .article-figure-full img {
    height: 500px;
    object-fit: cover;
    filter: sepia(0.12) contrast(1.05);
  }

  .article-figure figcaption {
    margin-top: 12px;
    border-left: 2px solid var(--gold-light);
    padding-left: 10px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.04em;
    line-height: 1.5;
  }

  .article-separator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 16px 0;
    padding: 40px 0;
  }

  .sep-line {
    flex: 1;
    height: 0.5px;
    background: var(--border);
  }

  .sep-ornament {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sep-diamond {
    width: 5px;
    height: 5px;
    background: var(--gold);
    transform: rotate(45deg);
  }

  .article-gallery { margin: 56px 0; }

  .gallery-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .gallery-title,
  .gallery-count {
    font-family: var(--mono);
    font-size: 11px;
  }

  .gallery-title {
    color: var(--muted);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .gallery-count { color: var(--gold); }

  .gallery-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 240px 200px;
    gap: 6px;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    background: var(--parchment);
  }

  .gallery-item:first-child { grid-row: 1 / 3; }

  .gallery-item img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: sepia(0.1) contrast(1.05);
  }

  .gallery-caption {
    margin: 12px 0 0;
    color: var(--muted);
    text-align: center;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.04em;
  }

  .article-cta {
    margin: 52px 0;
    border: 0.5px solid var(--border);
    background: var(--parchment);
    padding: 38px;
    text-align: center;
  }

  .article-cta h2 {
    margin: 0;
    color: var(--ink);
    font-family: var(--serif);
    font-size: 2rem;
    font-weight: 300;
  }

  .article-cta p {
    margin: 12px auto 0;
    max-width: 560px;
    color: var(--muted);
  }

  .article-cta a {
    display: inline-flex;
    margin-top: 24px;
    background: var(--gold);
    padding: 11px 18px;
    color: var(--ink);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .article-footer {
    margin-top: 80px;
    padding: 48px 24px;
    background: var(--ink);
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 12px;
    color: var(--gold-light);
    font-family: var(--serif);
    font-size: 1.8rem;
    font-style: italic;
    font-weight: 300;
  }

  .footer-sep {
    width: 40px;
    height: 0.5px;
    margin: 0 auto 16px;
    background: var(--gold);
    opacity: 0.5;
  }

  .footer-text {
    margin: 0;
    color: rgba(255,255,255,0.35);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 780px) {
    .article-figure-full {
      margin-left: -24px;
      margin-right: -24px;
    }

    .gallery-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 220px 160px 160px;
    }

    .gallery-item:first-child {
      grid-column: 1 / 3;
      grid-row: auto;
    }
  }

  @media (max-width: 600px) {
    .article-render { font-size: 16px; }
    .article-hero { min-height: 560px; }
    .hero-content { padding: 0 24px 72px; }
    .hero-scroll { display: none; }
    .article-quote { padding: 34px 28px; }
  }
`;
