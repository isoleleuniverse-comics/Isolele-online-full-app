import { prisma } from "@private/lib/prisma";

export async function listArticleAssets(articleId: string) {
  return prisma.asset.findMany({
    where: { articleId },
    orderBy: { createdAt: "desc" },
  });
}

export async function createAsset(input: {
  articleId: string;
  url: string;
  filename: string;
  mimeType: string;
  size: number;
}) {
  return prisma.asset.create({ data: input });
}
