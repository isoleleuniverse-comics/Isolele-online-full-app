import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseKey)

export interface PageContent {
  id: string
  section: string
  key: string
  en?: string
  fr?: string
  es?: string
  pt?: string
  updated_at: string
}

export async function getPageContent(
  section: string,
  language: "en" | "fr" | "es" | "pt" = "en"
): Promise<Record<string, string>> {
  const { data, error } = await supabase
    .from("page_content")
    .select("*")
    .eq("section", section)

  if (error) {
    console.error("[v0] Error fetching page content:", error)
    return {}
  }

  const result: Record<string, string> = {}
  data?.forEach((item: PageContent) => {
    const value = item[language] || item.en || ""
    result[item.key] = value
  })

  return result
}

export async function updatePageContent(
  section: string,
  key: string,
  values: Record<string, string>,
  userId?: string
): Promise<boolean> {
  const { error } = await supabase
    .from("page_content")
    .upsert(
      {
        section,
        key,
        ...values,
        updated_by: userId,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "section,key" }
    )

  if (error) {
    console.error("[v0] Error updating page content:", error)
    return false
  }

  return true
}

export async function getAllSections(): Promise<string[]> {
  const { data, error } = await supabase
    .from("page_content")
    .select("section", { count: "exact" })
    .distinct()

  if (error) {
    console.error("[v0] Error fetching sections:", error)
    return []
  }

  return data?.map((item: { section: string }) => item.section) || []
}
