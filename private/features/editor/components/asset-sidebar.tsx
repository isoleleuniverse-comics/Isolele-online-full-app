import { File, Upload, Video } from "lucide-react";
import type { ArticleBlockType } from "@/features/articles/model/article-blocks";
import type { EditorAsset } from "./editor-types";

export function AssetSidebar({
  activeBlockType,
  assets,
  onSelectAsset,
  onUploadAsset,
}: {
  activeBlockType: ArticleBlockType | null;
  assets: EditorAsset[];
  onSelectAsset: (asset: EditorAsset) => void;
  onUploadAsset: (file: File) => void;
}) {
  const canApplyAssets = activeBlockType === "image" || activeBlockType === "video";

  return (
    <aside className="h-fit rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="font-medium">Assets</h2>
          <p className="text-sm text-white/45">
            {canApplyAssets ? `Click to fill ${activeBlockType} block` : "Select an image or video block"}
          </p>
        </div>
        <label className="flex size-9 cursor-pointer items-center justify-center rounded-md bg-white text-black">
          <Upload className="size-4" />
          <input
            type="file"
            className="hidden"
            multiple
            accept="image/*,application/pdf,video/mp4"
            onChange={(event) => {
              const files = Array.from(event.target.files ?? []);
              files.forEach((file) => onUploadAsset(file));
              event.currentTarget.value = "";
            }}
          />
        </label>
      </div>

      <div className="grid gap-2">
        {assets.map((asset) => {
          const isCompatible =
            (activeBlockType === "image" && asset.mimeType.startsWith("image/")) ||
            (activeBlockType === "video" && asset.mimeType.startsWith("video/"));

          return (
            <button
              key={asset.id}
              type="button"
              disabled={!isCompatible}
              onClick={() => onSelectAsset(asset)}
              className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-2 text-left transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-45"
            >
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded bg-white/10">
                {asset.mimeType.startsWith("image/") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={asset.url} alt="" className="h-full w-full object-cover" />
                ) : asset.mimeType.startsWith("video/") ? (
                  <Video className="size-4 text-white/70" />
                ) : (
                  <File className="size-4 text-white/70" />
                )}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm">{asset.filename}</span>
                <span className="text-xs text-white/40">{Math.ceil(asset.size / 1024)} KB</span>
              </span>
            </button>
          );
        })}
      </div>

      {assets.length === 0 ? (
        <div className="rounded-md border border-dashed border-white/15 px-4 py-8 text-center text-sm text-white/45">
          Upload images, PDFs or videos.
        </div>
      ) : null}
    </aside>
  );
}
