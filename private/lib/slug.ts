import { prisma } from "@private/lib/prisma";

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);
}

export async function createUniqueSlug(title: string, articleId?: string) {
  const base = slugify(title) || "article";
  let candidate = base;
  let index = 2;

  while (true) {
    const existing = await prisma.article.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    if (!existing || existing.id === articleId) return candidate;
    candidate = `${base}-${index}`;
    index += 1;
  }
}
