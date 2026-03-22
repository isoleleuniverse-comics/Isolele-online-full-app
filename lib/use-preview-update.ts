import { useCallback } from 'react'
import { useChangeStore } from './change-store'

export function usePreviewUpdate() {
  const { clearChanges } = useChangeStore()

  const updatePreview = useCallback(async (paths?: string[], tags?: string[]) => {
    try {
      const response = await fetch('/api/admin/preview-revalidate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paths: paths || ['/'],
          tags: tags || ['page_content', 'media'],
          force: !paths && !tags,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update preview')
      }

      const data = await response.json()
      console.log('[v0] Preview updated:', data)
      return { success: true, data }
    } catch (error) {
      console.error('[v0] Preview update error:', error)
      return { success: false, error }
    }
  }, [])

  const saveAndUpdate = useCallback(
    async (changes: Record<string, any>, paths?: string[]) => {
      try {
        // First save changes
        const saveResponse = await fetch('/api/admin/save-all', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            changes,
            revalidatePaths: paths || ['/', '/shop', '/kufu-game'],
          }),
        })

        if (!saveResponse.ok) {
          throw new Error('Failed to save changes')
        }

        // Then update preview
        const previewUpdate = await updatePreview(paths)

        if (previewUpdate.success) {
          clearChanges()
        }

        return previewUpdate
      } catch (error) {
        console.error('[v0] Save and update error:', error)
        return { success: false, error }
      }
    },
    [updatePreview, clearChanges]
  )

  return { updatePreview, saveAndUpdate }
}
