import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCharacterBySlug } from "@/features/characters/model/characters-seo";

interface CharacterDetailPageProps {
  character: string;
}

export function CharacterDetailPage({ character }: CharacterDetailPageProps) {
  const profile = getCharacterBySlug(character);

  if (!profile) notFound();

  return (
    <main className="min-h-screen bg-[var(--isolele-bg)] text-[var(--isolele-text)]">
      <section className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
        <Image src={profile.image} alt={profile.name} fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--isolele-bg)] via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-6xl px-6 pb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--isolele-accent)]">
            {profile.origin}
          </p>
          <h1 className="text-4xl font-black tracking-[0.06em] sm:text-5xl lg:text-6xl">{profile.name}</h1>
          <p className="mt-2 text-lg font-semibold text-[var(--isolele-accent)]">{profile.title}</p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-[var(--isolele-accent)]/25 bg-[var(--isolele-bg-secondary)]/85 p-6 lg:p-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--isolele-accent)]">Biography</p>
          <p className="text-base leading-relaxed text-[var(--isolele-text-secondary)] lg:text-lg">{profile.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/characters"
              className="inline-flex rounded-full border border-[var(--isolele-accent)] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[var(--isolele-accent)] transition hover:bg-[var(--isolele-accent)]/10"
            >
              Back to Characters
            </Link>
            <Link
              href="/comics"
              className="inline-flex rounded-full bg-[var(--isolele-accent)] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
            >
              Explore Comics
            </Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-[var(--isolele-accent)]/25 bg-[var(--isolele-bg-secondary)]/85 p-6 lg:p-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--isolele-accent)]">Powers</p>
          <ul className="space-y-3">
            {profile.powers.map((power) => (
              <li
                key={power}
                className="rounded-xl border border-[var(--isolele-accent)]/20 bg-black/10 px-4 py-3 text-sm font-medium text-[var(--isolele-text-secondary)]"
              >
                {power}
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}

