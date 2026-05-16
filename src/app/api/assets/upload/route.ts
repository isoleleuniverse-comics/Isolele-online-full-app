import { NextResponse } from "next/server";
import { requireCmsAuth } from "@private/lib/auth";
import { uploadArticleAsset } from "@private/features/upload/upload-service";
import { uploadSchema } from "@private/lib/validations";

export async function POST(request: Request) {
  await requireCmsAuth();
  const formData = await request.formData();
  const parsed = uploadSchema.safeParse({
    articleId: formData.get("articleId"),
  });
  const file = formData.get("file");

  if (!parsed.success || !(file instanceof File)) {
    return NextResponse.json({ error: "Invalid upload payload" }, { status: 400 });
  }

  try {
    const asset = await uploadArticleAsset({ articleId: parsed.data.articleId, file });
    return NextResponse.json(asset, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    const status = message === "ARTICLE_NOT_FOUND" ? 404 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
