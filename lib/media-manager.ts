import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseKey)

export interface MediaItem {
  id: string
  name: string
  url: string
  section: string
  field: string
  mime_type?: string
  size_bytes?: number
  created_at: string
  is_active: boolean
}

export async function uploadMedia(
  file: File,
  section: string,
  field: string,
  userId?: string
): Promise<MediaItem | null> {
  try {
    const fileName = `${section}/${field}/${Date.now()}-${file.name}`

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("media")
      .upload(fileName, file, { upsert: true })

    if (uploadError) throw uploadError

    const {
      data: { publicUrl },
    } = supabase.storage.from("media").getPublicUrl(fileName)

    const { data: mediaRecord, error: insertError } = await supabase
      .from("media")
      .insert({
        name: file.name,
        url: publicUrl,
        section,
        field,
        mime_type: file.type,
        size_bytes: file.size,
        uploaded_by: userId,
      })
      .select()
      .single()

    if (insertError) throw insertError

    return mediaRecord
  } catch (error) {
    console.error("[v0] Error uploading media:", error)
    return null
  }
}

export async function getMediaForField(
  section: string,
  field: string
): Promise<MediaItem | null> {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("section", section)
    .eq("field", field)
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("[v0] Error fetching media:", error)
  }

  return data || null
}

export async function deleteMedia(mediaId: string): Promise<boolean> {
  const { error } = await supabase
    .from("media")
    .update({ is_active: false })
    .eq("id", mediaId)

  if (error) {
    console.error("[v0] Error deleting media:", error)
    return false
  }

  return true
}

export async function getAllMediaForSection(section: string): Promise<MediaItem[]> {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("section", section)
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching media:", error)
    return []
  }

  return data || []
}
