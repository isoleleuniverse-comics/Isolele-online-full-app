import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseKey)

export interface AdminUser {
  id: string
  user_id: string
  role: "admin" | "editor" | "viewer"
  permissions: string[]
  is_active: boolean
  created_at: string
  last_login?: string
}

export async function getAdminUser(userId: string): Promise<AdminUser | null> {
  const { data, error } = await supabase
    .from("admin_users")
    .select("*")
    .eq("user_id", userId)
    .eq("is_active", true)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("[v0] Error fetching admin user:", error)
  }

  return data || null
}

export async function isUserAdmin(userId: string): Promise<boolean> {
  const admin = await getAdminUser(userId)
  return !!admin
}

export async function updateLastLogin(userId: string): Promise<void> {
  await supabase
    .from("admin_users")
    .update({ last_login: new Date().toISOString() })
    .eq("user_id", userId)
}

export async function hasPermission(userId: string, permission: string): Promise<boolean> {
  const admin = await getAdminUser(userId)
  if (!admin) return false
  return admin.permissions.includes(permission)
}

export async function getAllAdminUsers(): Promise<AdminUser[]> {
  const { data, error } = await supabase
    .from("admin_users")
    .select("*")
    .eq("is_active", true)

  if (error) {
    console.error("[v0] Error fetching admin users:", error)
    return []
  }

  return data || []
}

export async function createAdminUser(
  userId: string,
  role: "admin" | "editor" | "viewer" = "editor",
  permissions: string[] = ["manage_content", "upload_media"]
): Promise<AdminUser | null> {
  const { data, error } = await supabase
    .from("admin_users")
    .insert({
      user_id: userId,
      role,
      permissions,
      is_active: true,
    })
    .select()
    .single()

  if (error) {
    console.error("[v0] Error creating admin user:", error)
    return null
  }

  return data
}
