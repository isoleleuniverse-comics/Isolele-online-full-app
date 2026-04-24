import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AdminCharacterEditorPanel } from "@/components/admin/character-editor-panel";
import { profileRouteByCharacterId, characters } from "@/features/characters/model/characters.data";

export default async function AdminCharacterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dbCharacter = await prisma.character.findFirst({
    where: {
      OR: [{ id }, { slug: id }],
    },
    select: {
      id: true,
      slug: true,
      name: true,
      title: true,
      origin: true,
      description: true,
      image: true,
      powers: true,
    },
  });

  const fallbackCharacter = characters.find((entry) => entry.id === id);

  if (!dbCharacter && !fallbackCharacter) {
    notFound();
  }

  const resolvedCharacter = dbCharacter
    ? {
        key: dbCharacter.id,
        slug: dbCharacter.slug,
        name: dbCharacter.name,
        title: dbCharacter.title,
        origin: dbCharacter.origin,
        description: dbCharacter.description,
        image: dbCharacter.image,
        powers: dbCharacter.powers,
      }
    : {
        key: fallbackCharacter!.id,
        slug: fallbackCharacter!.id,
        name: fallbackCharacter!.name,
        title: fallbackCharacter!.title,
        origin: fallbackCharacter!.origin,
        description: fallbackCharacter!.description,
        image: fallbackCharacter!.image,
        powers: fallbackCharacter!.powers,
      };

  const publicProfileHref = profileRouteByCharacterId[resolvedCharacter.slug] ?? profileRouteByCharacterId[id];

  return (
    <main className="space-y-8">
      <section className="rounded-2xl border border-amber-500/20 bg-background/80 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Admin / Characters</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">{resolvedCharacter.name}</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{resolvedCharacter.description}</p>
      </section>

      <AdminCharacterEditorPanel character={resolvedCharacter} publicProfileHref={publicProfileHref} />
    </main>
  );
}
