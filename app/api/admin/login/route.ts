import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log('[v0] Login attempt with email:', email)

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Direct credential verification (no database required)
    const ADMIN_EMAIL = 'admin@isolele.com'
    const ADMIN_PASSWORD = 'Isolele2025#'

    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      console.log('[v0] Invalid email provided:', email)
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    if (password !== ADMIN_PASSWORD) {
      console.log('[v0] Invalid password provided')
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    console.log('[v0] Login successful for:', email)

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_session', 'authenticated', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
    response.cookies.set('admin_email', email, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
    return response
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}

