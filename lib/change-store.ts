import { create } from 'zustand'

interface Change {
  id: string
  type: 'content' | 'media' | 'settings' | 'layout'
  section?: string
  data: Record<string, any>
  timestamp: number
}

interface ChangeStore {
  changes: Map<string, Change>
  hasPendingChanges: boolean
  addChange: (id: string, change: Change) => void
  removeChange: (id: string) => void
  clearChanges: () => void
  getPendingCount: () => number
  getAllChanges: () => Record<string, Change>
}

export const useChangeStore = create<ChangeStore>((set, get) => ({
  changes: new Map(),
  hasPendingChanges: false,

  addChange: (id: string, change: Change) => {
    set((state) => {
      const newChanges = new Map(state.changes)
      newChanges.set(id, change)
      return {
        changes: newChanges,
        hasPendingChanges: true,
      }
    })
  },

  removeChange: (id: string) => {
    set((state) => {
      const newChanges = new Map(state.changes)
      newChanges.delete(id)
      return {
        changes: newChanges,
        hasPendingChanges: newChanges.size > 0,
      }
    })
  },

  clearChanges: () => {
    set({
      changes: new Map(),
      hasPendingChanges: false,
    })
  },

  getPendingCount: () => {
    return get().changes.size
  },

  getAllChanges: () => {
    const result: Record<string, Change> = {}
    get().changes.forEach((change, id) => {
      result[id] = change
    })
    return result
  },
}))
