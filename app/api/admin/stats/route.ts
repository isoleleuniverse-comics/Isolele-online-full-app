import { NextResponse } from 'next/server'
import { getAdminStats } from '@/lib/admin-service'

export async function GET() {
  try {
    const stats = await getAdminStats()
    
    if (!stats) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch stats' },
        { status: 500 }
      )
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('[v0] Stats endpoint error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
