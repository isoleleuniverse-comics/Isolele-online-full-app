"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  FileText,
  Heading2,
  ImageIcon,
  LinkIcon,
  Minus,
  Plus,
  Quote,
  Trash2,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  createArticleBlock,
  type ArticleBlock,
  type ArticleBlockType,
} from "@/features/articles/model/article-blocks";
import { ArticleEditorHeader } from "./article-editor-header";
import { ArticleMetaForm } from "./article-meta-form";
import { AssetSidebar } from "./asset-sidebar";
import type { ArticleEditorPayload, EditorAsset, SaveState } from "./editor-types";

const BLOCK_OPTIONS: { type: ArticleBlockType; label: string }[] = [
  { type: "heading", label: "Section title" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
  { type: "quote", label: "Quote" },
  { type: "video", label: "Video" },
  { type: "divider", label: "Divider" },
  { type: "cta", label: "CTA" },
];

function blockIcon(type: ArticleBlockType) {
  if (type === "heading") return <Heading2 className="size-4" />;
  if (type === "image") return <ImageIcon className="size-4" />;
  if (type === "quote") return <Quote className="size-4" />;
  if (type === "video") return <Video className="size-4" />;
  if (type === "divider") return <Minus className="size-4" />;
  if (type === "cta") return <LinkIcon className="size-4" />;
  return <FileText className="size-4" />;
}

function BlockField({
  block,
  onChange,
  onFocus,
}: {
  block: ArticleBlock;
  onChange: (block: ArticleBlock) => void;
  onFocus: () => void;
}) {
  if (block.type === "heading") {
    return (
      <Input
        value={block.text}
        onFocus={onFocus}
        onChange={(event) => onChange({ ...block, text: event.target.value })}
        placeholder="Section title"
      />
    );
  }

  if (block.type === "text") {
    return (
      <Textarea
        value={block.text}
        onFocus={onFocus}
        onChange={(event) => onChange({ ...block, text: event.target.value })}
        placeholder="Write paragraphs here. Separate paragraphs with a blank line."
        className="min-h-44"
      />
    );
  }

  if (block.type === "image") {
    return (
      <div className="grid gap-3">
        <Input
          value={block.url}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, url: event.target.value })}
          placeholder="Image URL"
        />
        <Input
          value={block.alt ?? ""}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, alt: event.target.value })}
          placeholder="Alt text"
        />
        <Textarea
          value={block.caption ?? ""}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, caption: event.target.value })}
          placeholder="Caption"
          className="min-h-20"
        />
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div className="grid gap-3">
        <Textarea
          value={block.text}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, text: event.target.value })}
          placeholder="Quote"
          className="min-h-28"
        />
        <Input
          value={block.source ?? ""}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, source: event.target.value })}
          placeholder="Source"
        />
      </div>
    );
  }

  if (block.type === "video") {
    return (
      <div className="grid gap-3">
        <Input
          value={block.url}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, url: event.target.value })}
          placeholder="Video URL"
        />
        <Input
          value={block.title ?? ""}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, title: event.target.value })}
          placeholder="Video title"
        />
      </div>
    );
  }

  if (block.type === "cta") {
    return (
      <div className="grid gap-3">
        <Input
          value={block.title}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, title: event.target.value })}
          placeholder="CTA title"
        />
        <Textarea
          value={block.description ?? ""}
          onFocus={onFocus}
          onChange={(event) => onChange({ ...block, description: event.target.value })}
          placeholder="CTA description"
          className="min-h-20"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            value={block.buttonLabel}
            onFocus={onFocus}
            onChange={(event) => onChange({ ...block, buttonLabel: event.target.value })}
            placeholder="Button label"
          />
          <Input
            value={block.href}
            onFocus={onFocus}
            onChange={(event) => onChange({ ...block, href: event.target.value })}
            placeholder="Button link"
          />
        </div>
      </div>
    );
  }

  return <p className="text-sm text-neutral-500">Editorial divider.</p>;
}

export function ArticleEditorScreen({ article }: { article: ArticleEditorPayload }) {
  const [title, setTitle] = useState(article.title);
  const [slug, setSlug] = useState(article.slug);
  const [excerpt, setExcerpt] = useState(article.excerpt ?? "");
  const [coverImage, setCoverImage] = useState(article.coverImage ?? "");
  const [published, setPublished] = useState(article.published);
  const [blocks, setBlocks] = useState<ArticleBlock[]>(article.blocksJson);
  const [assets, setAssets] = useState(article.assets);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("saved");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeBlock = blocks.find((block) => block.id === activeBlockId) ?? null;

  const saveArticle = useCallback(
    async (payload: Record<string, unknown>) => {
      setSaveState("saving");
      const response = await fetch(`/api/articles/${article.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setSaveState("error");
        return null;
      }

      const updated = await response.json();
      setSlug(updated.slug);
      setPublished(updated.published);
      setSaveState("saved");
      return updated;
    },
    [article.id]
  );

  const scheduleBlocksSave = useCallback(
    (nextBlocks: ArticleBlock[]) => {
      setSaveState("dirty");
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        void saveArticle({ blocksJson: nextBlocks });
      }, 900);
    },
    [saveArticle]
  );

  const statusLabel = useMemo(() => {
    if (saveState === "saving") return "Saving";
    if (saveState === "dirty") return "Unsaved";
    if (saveState === "error") return "Save failed";
    return "Saved";
  }, [saveState]);

  async function saveMeta(nextPublished = published) {
    await saveArticle({
      title,
      slug,
      excerpt: excerpt || null,
      coverImage: coverImage || null,
      published: nextPublished,
    });
  }

  function commitBlocks(nextBlocks: ArticleBlock[]) {
    setBlocks(nextBlocks);
    scheduleBlocksSave(nextBlocks);
  }

  function updateBlock(nextBlock: ArticleBlock) {
    commitBlocks(blocks.map((block) => (block.id === nextBlock.id ? nextBlock : block)));
  }

  function addBlock(type: ArticleBlockType) {
    const block = createArticleBlock(type);
    setActiveBlockId(block.id);
    commitBlocks([...blocks, block]);
  }

  function moveBlock(index: number, direction: -1 | 1) {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= blocks.length) return;
    const nextBlocks = [...blocks];
    const [block] = nextBlocks.splice(index, 1);
    nextBlocks.splice(nextIndex, 0, block);
    commitBlocks(nextBlocks);
  }

  function removeBlock(id: string) {
    const nextBlocks = blocks.filter((block) => block.id !== id);
    if (activeBlockId === id) setActiveBlockId(null);
    commitBlocks(nextBlocks);
  }

  function applyAsset(asset: EditorAsset) {
    if (!activeBlock || (activeBlock.type !== "image" && activeBlock.type !== "video")) return;
    if (activeBlock.type === "image" && !asset.mimeType.startsWith("image/")) return;
    if (activeBlock.type === "video" && !asset.mimeType.startsWith("video/")) return;

    updateBlock({
      ...activeBlock,
      url: asset.url,
      ...(activeBlock.type === "image" ? { alt: activeBlock.alt || asset.filename } : { title: activeBlock.title || asset.filename }),
    } as ArticleBlock);
  }

  async function uploadAsset(file: File) {
    const formData = new FormData();
    formData.set("articleId", article.id);
    formData.set("file", file);

    const response = await fetch("/api/assets/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      setSaveState("error");
      return;
    }

    const asset = await response.json();
    setAssets((current) => [asset, ...current]);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <ArticleEditorHeader
        published={published}
        slug={slug}
        statusLabel={statusLabel}
        onSave={() => {
          void saveMeta();
          void saveArticle({ blocksJson: blocks });
        }}
        onTogglePublish={() => {
          const next = !published;
          setPublished(next);
          void saveMeta(next);
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 lg:grid-cols-[1fr_320px]">
        <section className="overflow-hidden rounded-lg border border-white/10 bg-white">
          <ArticleMetaForm
            coverImage={coverImage}
            excerpt={excerpt}
            onBlur={() => void saveMeta()}
            setCoverImage={setCoverImage}
            setExcerpt={setExcerpt}
            setSlug={setSlug}
            setTitle={setTitle}
            slug={slug}
            title={title}
          />

          <div className="border-b border-neutral-200 bg-neutral-50 px-8 py-4 text-neutral-950">
            <div className="flex flex-wrap items-center gap-2">
              {BLOCK_OPTIONS.map((option) => (
                <Button
                  key={option.type}
                  type="button"
                  variant="outline"
                  className="h-9 gap-2"
                  onClick={() => addBlock(option.type)}
                >
                  {blockIcon(option.type)}
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 px-8 py-7 text-neutral-950">
            {blocks.map((block, index) => (
              <article
                key={block.id}
                onClick={() => setActiveBlockId(block.id)}
                className={`rounded-lg border p-4 transition ${
                  activeBlockId === block.id ? "border-amber-500 bg-amber-50/50" : "border-neutral-200 bg-white"
                }`}
              >
                <header className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                    {blockIcon(block.type)}
                    <span className="capitalize">{block.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button type="button" variant="ghost" size="icon" onClick={() => moveBlock(index, -1)} disabled={index === 0}>
                      <ArrowUp className="size-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => moveBlock(index, 1)} disabled={index === blocks.length - 1}>
                      <ArrowDown className="size-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeBlock(block.id)}>
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </header>

                <BlockField
                  block={block}
                  onFocus={() => setActiveBlockId(block.id)}
                  onChange={(nextBlock) => updateBlock(nextBlock)}
                />
              </article>
            ))}

            {blocks.length === 0 ? (
              <div className="rounded-lg border border-dashed border-neutral-300 px-6 py-16 text-center text-neutral-500">
                Add your first editorial block.
              </div>
            ) : null}
          </div>
        </section>

        <AssetSidebar
          activeBlockType={activeBlock?.type ?? null}
          assets={assets}
          onSelectAsset={applyAsset}
          onUploadAsset={(file) => void uploadAsset(file)}
        />
      </div>
    </main>
  );
}
