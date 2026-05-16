import Link from "next/link";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ArticleEditorHeader({
  published,
  slug,
  statusLabel,
  onSave,
  onTogglePublish,
}: {
  published: boolean;
  slug: string;
  statusLabel: string;
  onSave: () => void;
  onTogglePublish: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/dashboard/articles" className="text-sm text-white/55 hover:text-white">
            Articles
          </Link>
          <span className="text-white/20">/</span>
          <span className="truncate text-sm text-white/70">{slug}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50">{statusLabel}</span>
          <Button
            type="button"
            variant="outline"
            className="border-white/15 bg-white/5 text-white"
            onClick={onSave}
          >
            <Save className="size-4" />
            Save
          </Button>
          <Button type="button" onClick={onTogglePublish}>
            {published ? "Unpublish" : "Publish"}
          </Button>
        </div>
      </div>
    </header>
  );
}

