"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader } from "lucide-react";
import { EditableField } from "@/components/admin/editable-field";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { updateCharacterAction } from "@/lib/actions/characters";

interface AdminCharacterEditorPanelProps {
  character: {
    key: string;
    slug: string;
    name: string;
    title: string;
    origin: string;
    description: string;
    image: string;
    powers: string[];
  };
  publicProfileHref?: string;
}

export function AdminCharacterEditorPanel({ character, publicProfileHref }: AdminCharacterEditorPanelProps) {
  const router = useRouter();
  const [savingField, setSavingField] = useState<string | null>(null);

  const saveField = (field: "name" | "title" | "origin" | "description") => {
    return async (value: string) => {
      setSavingField(field);
      try {
        await updateCharacterAction(character.key, { [field]: value });
        router.refresh();
      } finally {
        setSavingField(null);
      }
    };
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <ImageUploadField
        characterKey={character.key}
        currentImage={character.image}
        imageAlt={character.name}
        onUploaded={() => router.refresh()}
      />

      <div className="space-y-6 rounded-2xl border border-amber-500/20 bg-background/80 p-6">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Identity</p>
            {savingField ? <Loader className="h-3.5 w-3.5 animate-spin text-amber-600" /> : null}
          </div>

          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Slug</dt>
              <dd className="mt-1 px-2 font-medium">{character.slug}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Name</dt>
              <dd className="mt-1">
                <EditableField value={character.name} onSave={saveField("name")} />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Title</dt>
              <dd className="mt-1">
                <EditableField value={character.title} onSave={saveField("title")} />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Origin</dt>
              <dd className="mt-1">
                <EditableField value={character.origin} onSave={saveField("origin")} />
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Description</dt>
              <dd className="mt-1">
                <EditableField
                  value={character.description}
                  onSave={saveField("description")}
                  as="textarea"
                  inputClassName="leading-relaxed"
                />
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Powers</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {character.powers.map((power) => (
              <li key={power} className="rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm">
                {power}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/characters"
            className="inline-flex rounded-full border border-amber-500/30 px-4 py-2 text-sm font-semibold text-amber-600 transition hover:bg-amber-500/10"
          >
            Back to list
          </Link>
          {publicProfileHref ? (
            <Link
              href={publicProfileHref}
              className="inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Open public profile
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
