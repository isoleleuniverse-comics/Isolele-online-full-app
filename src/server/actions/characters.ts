"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@server/db/prisma";
import { requireAdmin } from "@server/auth/require-admin";

const editableFields = ["name", "title", "origin", "description"] as const;
type EditableField = (typeof editableFields)[number];
type CharacterUpdateInput = Partial<Record<EditableField, string>>;

function sanitizeUpdate(data: CharacterUpdateInput) {
  const output: CharacterUpdateInput = {};

  for (const field of editableFields) {
    const value = data[field];
    if (typeof value !== "string") continue;

    const trimmed = value.trim();
    if (!trimmed) {
      throw new Error(`Le champ ${field} ne peut pas etre vide.`);
    }

    output[field] = trimmed;
  }

  return output;
}

export async function updateCharacterAction(characterKey: string, data: CharacterUpdateInput) {
  await requireAdmin();

  const sanitized = sanitizeUpdate(data);
  if (Object.keys(sanitized).length === 0) {
    throw new Error("Aucune modification valide a enregistrer.");
  }

  const target = await prisma.character.findFirst({
    where: {
      OR: [{ id: characterKey }, { slug: characterKey }],
    },
    select: { id: true, slug: true },
  });

  if (!target) {
    throw new Error("Personnage introuvable.");
  }

  const updatedCharacter = await prisma.character.update({
    where: { id: target.id },
    data: sanitized,
  });

  revalidatePath(`/admin/characters/${target.id}`);
  revalidatePath(`/admin/characters/${target.slug}`);
  revalidatePath(`/admin/characters`);
  revalidatePath(`/characters/${target.slug}`);

  return { success: true, character: updatedCharacter };
}
