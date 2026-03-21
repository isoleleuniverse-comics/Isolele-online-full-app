"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Plus, Trash2, Save } from "lucide-react"

interface ContentItem {
  id: string
  section: string
  key: string
  en?: string
  fr?: string
  es?: string
  pt?: string
}

export default function ContentEditor() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValues, setEditValues] = useState<Partial<ContentItem>>({})

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch("/api/admin/content")
      const data = await response.json()
      setContent(data)
    } catch (error) {
      console.error("[v0] Error fetching content:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id)
    setEditValues(item)
  }

  const handleSave = async () => {
    if (!editingId) return
    setSaving(true)

    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editValues),
      })

      if (response.ok) {
        await fetchContent()
        setEditingId(null)
        setEditValues({})
      }
    } catch (error) {
      console.error("[v0] Error saving content:", error)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return

    try {
      await fetch("/api/admin/content", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      await fetchContent()
    } catch (error) {
      console.error("[v0] Error deleting content:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-amber-400">Manage Content</h2>
        <Button className="gap-2 bg-amber-600 hover:bg-amber-700">
          <Plus className="h-4 w-4" />
          Add Content
        </Button>
      </div>

      <div className="grid gap-4">
        {content.map((item) => (
          <Card
            key={item.id}
            className="bg-black/50 border-amber-900/50 p-6"
          >
            {editingId === item.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-amber-200 mb-2 block">Section</label>
                    <Input
                      value={editValues.section || ""}
                      onChange={(e) => setEditValues({ ...editValues, section: e.target.value })}
                      className="bg-amber-950/30 border-amber-900/50"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-amber-200 mb-2 block">Key</label>
                    <Input
                      value={editValues.key || ""}
                      onChange={(e) => setEditValues({ ...editValues, key: e.target.value })}
                      className="bg-amber-950/30 border-amber-900/50"
                      disabled
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {(["en", "fr", "es", "pt"] as const).map((lang) => (
                    <div key={lang}>
                      <label className="text-xs font-medium text-amber-200 mb-2 block uppercase">{lang}</label>
                      <Textarea
                        value={editValues[lang] || ""}
                        onChange={(e) => setEditValues({ ...editValues, [lang]: e.target.value })}
                        className="bg-amber-950/30 border-amber-900/50 min-h-24"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleSave}
                    disabled={saving}
                    className="gap-2 bg-green-600 hover:bg-green-700"
                  >
                    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    Save
                  </Button>
                  <Button
                    onClick={() => setEditingId(null)}
                    variant="outline"
                    className="border-amber-900/50"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-amber-200/50 uppercase tracking-wider">{item.section}</p>
                    <p className="text-lg font-semibold text-amber-400">{item.key}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(item)}
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      size="sm"
                      variant="destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  {(["en", "fr", "es", "pt"] as const).map((lang) => (
                    <div key={lang}>
                      <p className="text-amber-200/50 uppercase text-xs mb-1">{lang}</p>
                      <p className="text-amber-100 line-clamp-2">{item[lang] || "-"}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
