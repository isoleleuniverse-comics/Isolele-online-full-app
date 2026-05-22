import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";

export type StoredMedia = {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
};

type StoreMediaInput = {
  file: File;
  folder: string;
};

function sanitizeSegment(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "file";
}

function buildFileName(file: File) {
  const ext = path.extname(file.name) || ".bin";
  const base = path.basename(file.name, ext);
  return `${sanitizeSegment(base)}-${crypto.randomUUID()}${ext.toLowerCase()}`;
}

async function storeLocally({
  file,
  folder,
}: StoreMediaInput): Promise<StoredMedia> {
  const fileName = buildFileName(file);
  const relativeDir = path.posix.join("uploads", folder);
  const absoluteDir = path.join(process.cwd(), "public", ...relativeDir.split("/"));
  await mkdir(absoluteDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const absolutePath = path.join(absoluteDir, fileName);
  await writeFile(absolutePath, buffer);

  return {
    url: `/${relativeDir}/${fileName}`,
    pathname: `${relativeDir}/${fileName}`,
    contentType: file.type || "application/octet-stream",
    size: file.size,
  };
}

async function storeOnVercelBlob({
  file,
  folder,
}: StoreMediaInput): Promise<StoredMedia> {
  const blob = await put(
    `${folder}/${buildFileName(file)}`,
    file,
    {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type || "application/octet-stream",
    },
  );

  return {
    url: blob.url,
    pathname: blob.pathname,
    contentType: file.type || "application/octet-stream",
    size: file.size,
  };
}

export async function storeImage(input: StoreMediaInput) {
  if (process.env.NODE_ENV === "production") {
    return storeOnVercelBlob(input);
  }

  return storeLocally(input);
}
