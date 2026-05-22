import { NextResponse } from "next/server";
import { storeImage } from "@/shared/lib/media-storage";

export const runtime = "nodejs";

const ACCEPTED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const folder = String(formData.get("folder") || "articles");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Missing file" },
      { status: 400 },
    );
  }

  if (!ACCEPTED_IMAGE_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Unsupported image type" },
      { status: 400 },
    );
  }

  const stored = await storeImage({
    file,
    folder,
  });

  return NextResponse.json(stored);
}
