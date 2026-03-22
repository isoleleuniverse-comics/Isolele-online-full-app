import { NextRequest, NextResponse } from 'next/server'
import { initializeAdminUser } from '@/lib/admin-service'

export async function POST(request: NextRequest) {
  try {
    // For security, you should add a secret key check here
    const { secret } = await request.json()

    // Basic security check
    if (secret !== process.env.ADMIN_INIT_SECRET) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const result = await initializeAdminUser()

    if (result) {
      return NextResponse.json({
        success: true,
        message: 'Admin user initialized successfully',
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to initialize admin user',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('[v0] Init admin error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred' },
      { status: 500 }
    )
  }
}
