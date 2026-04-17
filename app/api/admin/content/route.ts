import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function GET(request: NextRequest) {
  try {
    const section = request.nextUrl.searchParams.get("section")

    if (!section) {
      const { data, error } = await supabase.from("page_content").select("*")

      if (error) throw error
      return NextResponse.json(data)
    }

    const { data, error } = await supabase
      .from("page_content")
      .select("*")
      .eq("section", section)

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { section, key, en, fr, es, pt } = await request.json()

    if (!section || !key) {
      return NextResponse.json({ error: "Missing section or key" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("page_content")
      .upsert(
        {
          section,
          key,
          en,
          fr,
          es,
          pt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "section,key" }
      )
      .select()
      .single()

    if (error) throw error

    revalidatePath("/")
    revalidatePath("/[lang]")

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, section, key, en, fr, es, pt } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("page_content")
      .update({
        section,
        key,
        en,
        fr,
        es,
        pt,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    revalidatePath("/")
    revalidatePath("/[lang]")

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    await supabase.from("page_content").delete().eq("id", id)

    revalidatePath("/")
    revalidatePath("/[lang]")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to delete content" }, { status: 500 })
  }
}
