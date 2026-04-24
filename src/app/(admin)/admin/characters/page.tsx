import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { characters as staticCharacters } from "@/features/characters/model/characters.data";

export default async function AdminCharactersPage() {
  const dbCharacters = await prisma.character.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      title: true,
      origin: true,
      image: true,
    },
    orderBy: { name: "asc" },
  });

  const characters =
    dbCharacters.length > 0
      ? dbCharacters.map((character) => ({
          key: character.id,
          routeId: character.slug,
          name: character.name,
          title: character.title,
          origin: character.origin,
          image: character.image,
        }))
      : staticCharacters.map((character) => ({
          key: character.id,
          routeId: character.id,
          name: character.name,
          title: character.title,
          origin: character.origin,
          image: character.image,
        }));

  return (
    <main className="space-y-8">
      <section className="rounded-2xl border border-amber-500/20 bg-background/80 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Admin / Characters</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">Character Management</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Browse the character catalog and open any profile to inspect or edit its content.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <Link
            key={character.key}
            href={`/admin/characters/${character.routeId}`}
            className="group overflow-hidden rounded-2xl border border-amber-500/20 bg-background/80 transition hover:-translate-y-1 hover:border-amber-500/40"
          >
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">{character.origin}</p>
              <h2 className="text-lg font-bold">{character.name}</h2>
              <p className="text-sm text-muted-foreground">{character.title}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
