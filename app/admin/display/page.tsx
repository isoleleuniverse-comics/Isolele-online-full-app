"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Edit2, Image as ImageIcon, Loader2 } from "lucide-react"

interface ContentItem {
  id: string
  section: string
  key: string
  en: string
  fr: string
  es: string
  pt: string
}

export default function DisplayMenu() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValues, setEditValues] = useState<Partial<ContentItem>>({})

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const res = await fetch("/api/admin/content")
      if (!res.ok) throw new Error("Failed to fetch content")
      const data = await res.json()
      setContent(data)
    } catch (error) {
      console.error("[v0] Error fetching content:", error)
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (item: ContentItem) => {
    setEditingId(item.id)
    setEditValues(item)
  }

  const saveEdit = async () => {
    if (!editingId) return

    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...editValues }),
      })

      if (!res.ok) throw new Error("Failed to save content")
      
      setContent(content.map(item => item.id === editingId ? { ...item, ...editValues } : item))
      setEditingId(null)
    } catch (error) {
      console.error("[v0] Error saving content:", error)
    }
  }

  const deleteContent = async (id: string) => {
    if (!confirm("Are you sure?")) return

    try {
      const res = await fetch("/api/admin/content", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })

      if (!res.ok) throw new Error("Failed to delete content")
      setContent(content.filter(item => item.id !== id))
    } catch (error) {
      console.error("[v0] Error deleting content:", error)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1524" }}>
      {/* Header */}
      <div
        className="border-b px-6 py-4"
        style={{ borderColor: "rgba(201, 165, 66, 0.1)", backgroundColor: "rgba(15, 21, 36, 0.8)" }}
      >
        <Link href="/admin/dashboard">
          <button className="flex items-center gap-2 text-[#C9A542] hover:text-[#F6B800] transition-colors mb-4">
            <ChevronLeft size={20} />
            Back to Dashboard
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-white">Display Management</h1>
        <p className="text-gray-400 mt-2">Edit all homepage content and images</p>
      </div>

      <div className="p-6 md:p-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#C9A542]" />
          </div>
        ) : (
          <div className="grid gap-4">
            {content.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                No content found. Create your first content item.
              </div>
            ) : (
              content.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg p-6 border"
                  style={{
                    backgroundColor: "rgba(26, 32, 53, 0.5)",
                    borderColor: "rgba(201, 165, 66, 0.1)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.section} / {item.key}
                      </h3>

                      {editingId === item.id ? (
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs text-gray-400 mb-1 block">English</label>
                            <textarea
                              value={editValues.en || ""}
                              onChange={(e) => setEditValues({ ...editValues, en: e.target.value })}
                              className="w-full px-3 py-2 bg-[#1a2035] border border-[#C9A542]/20 rounded text-white text-sm"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-400 mb-1 block">Français</label>
                            <textarea
                              value={editValues.fr || ""}
                              onChange={(e) => setEditValues({ ...editValues, fr: e.target.value })}
                              className="w-full px-3 py-2 bg-[#1a2035] border border-[#C9A542]/20 rounded text-white text-sm"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-400 mb-1 block">Español</label>
                            <textarea
                              value={editValues.es || ""}
                              onChange={(e) => setEditValues({ ...editValues, es: e.target.value })}
                              className="w-full px-3 py-2 bg-[#1a2035] border border-[#C9A542]/20 rounded text-white text-sm"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-400 mb-1 block">Português</label>
                            <textarea
                              value={editValues.pt || ""}
                              onChange={(e) => setEditValues({ ...editValues, pt: e.target.value })}
                              className="w-full px-3 py-2 bg-[#1a2035] border border-[#C9A542]/20 rounded text-white text-sm"
                              rows={3}
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={saveEdit}
                              className="px-4 py-2 bg-[#C9A542] text-[#0F1524] rounded font-medium text-sm hover:bg-[#F6B800] transition-colors"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-4 py-2 bg-[#1a2035] text-gray-300 rounded font-medium text-sm hover:bg-[#252d45] transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-xs text-gray-400">EN</span>
                            <p className="text-gray-200 line-clamp-2">{item.en}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-400">FR</span>
                            <p className="text-gray-200 line-clamp-2">{item.fr}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-400">ES</span>
                            <p className="text-gray-200 line-clamp-2">{item.es}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-400">PT</span>
                            <p className="text-gray-200 line-clamp-2">{item.pt}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {editingId !== item.id && (
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => startEdit(item)}
                          className="p-2 hover:bg-[#1a2035] rounded transition-colors text-[#C9A542]"
                        >
                          <Edit2 size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
