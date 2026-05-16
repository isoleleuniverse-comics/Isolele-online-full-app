import type { ArticleBlock } from "@/features/articles/model/article-blocks";

export type EditorAsset = {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  size: number;
  articleId: string;
  createdAt: string;
};

export type ArticleEditorPayload = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  blocksJson: ArticleBlock[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
  assets: EditorAsset[];
};

export type SaveState = "saved" | "saving" | "dirty" | "error";
