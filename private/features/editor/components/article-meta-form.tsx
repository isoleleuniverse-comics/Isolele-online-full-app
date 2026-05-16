import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ArticleMetaForm({
  coverImage,
  excerpt,
  onBlur,
  setCoverImage,
  setExcerpt,
  setSlug,
  setTitle,
  slug,
  title,
}: {
  coverImage: string;
  excerpt: string;
  onBlur: () => void;
  setCoverImage: (value: string) => void;
  setExcerpt: (value: string) => void;
  setSlug: (value: string) => void;
  setTitle: (value: string) => void;
  slug: string;
  title: string;
}) {
  return (
    <div className="border-b border-neutral-200 px-8 py-6 text-neutral-950">
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onBlur={onBlur}
        className="h-auto border-0 px-0 text-4xl font-semibold shadow-none focus-visible:ring-0"
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Input
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
          onBlur={onBlur}
          placeholder="slug"
        />
        <Input
          value={coverImage}
          onChange={(event) => setCoverImage(event.target.value)}
          onBlur={onBlur}
          placeholder="cover image URL"
        />
      </div>
      <Textarea
        value={excerpt}
        onChange={(event) => setExcerpt(event.target.value)}
        onBlur={onBlur}
        placeholder="Short SEO excerpt"
        className="mt-3 min-h-20"
      />
    </div>
  );
}

