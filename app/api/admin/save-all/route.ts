import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { changes, revalidatePaths = [] } = body

    if (!changes || Object.keys(changes).length === 0) {
      return NextResponse.json(
        { success: false, error: 'No changes to save' },
        { status: 400 }
      )
    }

    console.log('[v0] Save All - Changes:', changes)

    // Revalidate all specified paths
    const revalidateList = [
      '/',
      '/shop',
      '/kufu-game',
      '/characters',
      '/about',
      ...revalidatePaths,
    ]

    for (const path of revalidateList) {
      revalidatePath(path)
    }

    // Revalidate content tags
    revalidateTag('page_content')
    revalidateTag('media')
    revalidateTag('translations')

    console.log('[v0] Revalidated paths and tags')

    return NextResponse.json({
      success: true,
      message: 'All changes saved and site updated',
      revalidatedPaths: revalidateList,
    })
  } catch (error) {
    console.error('[v0] Save All error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save changes' },
      { status: 500 }
    )
  }
}
