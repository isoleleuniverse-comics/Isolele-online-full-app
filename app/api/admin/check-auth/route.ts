import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"
import { isUserAdmin, updateLastLogin } from "@/lib/admin-auth"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(request: NextRequest) {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error || !user) {
      return NextResponse.json(
        { success: false, authenticated: false, error: "Not authenticated" },
        { status: 401 }
      )
    }

    const isAdmin = await isUserAdmin(user.id)

    if (!isAdmin) {
      return NextResponse.json(
        { success: false, authenticated: true, error: "Not an admin user" },
        { status: 403 }
      )
    }

    await updateLastLogin(user.id)

    return NextResponse.json({
      success: true,
      authenticated: true,
      isAdmin: true,
      user: {
        id: user.id,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("[v0] Auth Check Error:", error)
    return NextResponse.json(
      { success: false, error: "Error checking authentication" },
      { status: 500 }
    )
  }
}
