import { NextResponse } from "next/server";
import { requireCmsAuth } from "@private/lib/auth";
import {
  deleteArticle,
  getPublishedArticleBySlug,
  updateArticle,
} from "@private/features/articles/article-service";
import { articlePatchSchema } from "@private/lib/validations";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const article = await getPublishedArticleBySlug(id);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireCmsAuth();
  const { id } = await params;
  const parsed = articlePatchSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const article = await updateArticle(id, parsed.data);
  return NextResponse.json(article);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireCmsAuth();
  const { id } = await params;
  await deleteArticle(id);
  return NextResponse.json({ ok: true });
}
