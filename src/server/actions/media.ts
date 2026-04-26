"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@server/db/prisma";
import { requireAdmin } from "@server/auth/require-admin";
import { createServerClient } from "@server/supabase/server";

export async function uploadCharacterImageAction(characterKey: string, formData: FormData) {
  await requireAdmin();

  const target = await prisma.character.findFirst({
    where: {
      OR: [{ id: characterKey }, { slug: characterKey }],
    },
    select: { id: true, slug: true },
  });

  if (!target) {
    throw new Error("Personnage introuvable.");
  }

  const supabase = await createServerClient();
  const file = formData.get("file") as File | null;

  if (!file) {
    throw new Error("Aucun fichier fourni.");
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `characters/${target.id}/${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage.from("media").upload(fileName, file);
  if (error) {
    console.error("Erreur upload storage:", error);
    throw new Error("Erreur lors de l'upload de l'image.");
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("media").getPublicUrl(fileName);

  await prisma.character.update({
    where: { id: target.id },
    data: { image: publicUrl },
  });

  revalidatePath(`/admin/characters/${target.id}`);
  revalidatePath(`/admin/characters/${target.slug}`);
  revalidatePath(`/admin/characters`);
  revalidatePath(`/characters/${target.slug}`);

  return { success: true, imageUrl: publicUrl };
}
