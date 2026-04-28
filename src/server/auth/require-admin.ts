import { redirect } from "next/navigation";
import { prisma } from "@server/db/prisma";
import { createServerClient } from "@server/supabase/server";
import { Role } from "@/generated/prisma/enums";

export async function requireAdmin() {
  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/fr");
  }

  const existing = await prisma.user.findUnique({
    where: { supabaseId: data.user.id },
  });

  const adminUser =
    existing ??
    (await prisma.user.create({
      data: {
        supabaseId: data.user.id,
        email: data.user.email ?? `${data.user.id}@unknown.local`,
        // Default is least privilege. We can bootstrap in dev if no admins exist.
        role: Role.VIEWER,
        permissions: [],
        isActive: true,
      },
    }));

  if (process.env.NODE_ENV !== "production" && adminUser.role === Role.VIEWER) {
    const adminCount = await prisma.user.count({ where: { role: Role.ADMIN, isActive: true } });
    if (adminCount === 0) {
      const promoted = await prisma.user.update({
        where: { id: adminUser.id },
        data: { role: Role.ADMIN, permissions: ["manage_content", "upload_media"] },
      });
      return { supabaseUser: data.user, adminUser: promoted };
    }
  }

  if (!adminUser.isActive || adminUser.role === Role.VIEWER) {
    redirect("/fr");
  }

  return { supabaseUser: data.user, adminUser };
}
