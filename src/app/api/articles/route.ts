import { NextResponse } from "next/server";
import { requireCmsAuth } from "@private/lib/auth";
import { createDraftArticle } from "@private/features/articles/article-service";

export async function POST() {
  await requireCmsAuth();
  const article = await createDraftArticle();
  return NextResponse.json(article, { status: 201 });
}
