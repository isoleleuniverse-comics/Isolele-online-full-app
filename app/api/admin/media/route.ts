import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const section = formData.get("section") as string
    const field = formData.get("field") as string

    if (!file || !section || !field) {
      return NextResponse.json(
        { error: "Missing file, section, or field" },
        { status: 400 }
      )
    }

    const fileName = `${section}/${field}/${Date.now()}-${file.name}`
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(fileName, buffer, { upsert: true })

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
      })
      .select()
      .single()

    if (insertError) throw insertError

    revalidatePath("/")
    revalidatePath("/[lang]")

    return NextResponse.json(mediaRecord)
  } catch (error) {
    console.error("[v0] Upload Error:", error)
    return NextResponse.json({ error: "Failed to upload media" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const section = request.nextUrl.searchParams.get("section")
    const field = request.nextUrl.searchParams.get("field")

    if (section && field) {
      const { data, error } = await supabase
        .from("media")
        .select("*")
        .eq("section", section)
        .eq("field", field)
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single()

      if (error && error.code !== "PGRST116") throw error
      return NextResponse.json(data || null)
    }

    const { data, error } = await supabase
      .from("media")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to fetch media" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const { error } = await supabase
      .from("media")
      .update({ is_active: false })
      .eq("id", id)

    if (error) throw error

    revalidatePath("/")
    revalidatePath("/[lang]")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Delete Error:", error)
    return NextResponse.json({ error: "Failed to delete media" }, { status: 500 })
  }
}
