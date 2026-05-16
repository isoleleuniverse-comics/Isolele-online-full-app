import { NextResponse } from "next/server";
import { requireCmsAuth } from "@private/lib/auth";
import { listArticleAssets } from "@private/features/assets/asset-service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireCmsAuth();
  const { id } = await params;
  const assets = await listArticleAssets(id);
  return NextResponse.json(assets);
}
