import { getStorageBucket } from "@private/lib/env";
import { prisma } from "@private/lib/prisma";
import { getSupabaseServerClient } from "@private/lib/supabase";
import { createAsset } from "@private/features/assets/asset-service";

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
  "video/mp4",
]);

function safeFilename(filename: string) {
  const cleaned = filename
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  return cleaned || "asset";
}

export async function uploadArticleAsset(input: { articleId: string; file: File }) {
  const article = await prisma.article.findUnique({
    where: { id: input.articleId },
    select: { id: true },
  });

  if (!article) {
    throw new Error("ARTICLE_NOT_FOUND");
  }

  if (!ALLOWED_MIME_TYPES.has(input.file.type)) {
    throw new Error("UNSUPPORTED_FILE_TYPE");
  }

  if (input.file.size > MAX_FILE_SIZE) {
    throw new Error("FILE_TOO_LARGE");
  }

  const bucket = getStorageBucket();
  const supabase = getSupabaseServerClient();
  const filename = safeFilename(input.file.name);
  const storagePath = `articles/${input.articleId}/${Date.now()}-${filename}`;
  const buffer = await input.file.arrayBuffer();

  const { error } = await supabase.storage.from(bucket).upload(storagePath, buffer, {
    contentType: input.file.type,
    upsert: false,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(storagePath);

  return createAsset({
    articleId: input.articleId,
    url: data.publicUrl,
    filename,
    mimeType: input.file.type,
    size: input.file.size,
  });
}
