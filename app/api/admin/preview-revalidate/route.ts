import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { paths = [], tags = [], force = false } = await request.json()

    console.log('[v0] Preview revalidation request:', { paths, tags, force })

    // Revalidate specific paths
    for (const path of paths) {
      revalidatePath(path, 'layout')
      console.log(`[v0] Revalidated path: ${path}`)
    }

    // Revalidate content tags
    const defaultTags = ['page_content', 'media', 'translations', 'site_data']
    const tagsToRevalidate = tags.length > 0 ? [...tags, ...defaultTags] : defaultTags

    for (const tag of tagsToRevalidate) {
      revalidateTag(tag)
      console.log(`[v0] Revalidated tag: ${tag}`)
    }

    // Revalidate core pages if force or no specific paths given
    if (force || paths.length === 0) {
      const corePages = ['/', '/shop', '/kufu-game', '/characters', '/about', '/admin/display']
      for (const page of corePages) {
        revalidatePath(page, 'layout')
      }
      console.log('[v0] Force revalidated all core pages')
    }

    return NextResponse.json({
      success: true,
      message: 'Preview cache revalidated',
      revalidatedPaths: paths,
      revalidatedTags: tagsToRevalidate,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('[v0] Revalidation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to revalidate preview' },
      { status: 500 }
    )
  }
}
