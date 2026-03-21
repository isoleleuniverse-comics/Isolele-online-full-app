"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Upload, Trash2, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  id: string
  name: string
  url: string
  section: string
  field: string
  mime_type?: string
  size_bytes?: number
}

export default function MediaManager() {
  const [media, setMedia] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [section, setSection] = useState("hero")
  const [field, setField] = useState("background")

  useEffect(() => {
    fetchMedia()
  }, [])

  const fetchMedia = async () => {
    try {
      const response = await fetch("/api/admin/media")
      const data = await response.json()
      setMedia(data)
    } catch (error) {
      console.error("[v0] Error fetching media:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", selectedFile)
      formData.append("section", section)
      formData.append("field", field)

      const response = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        await fetchMedia()
        setSelectedFile(null)
      }
    } catch (error) {
      console.error("[v0] Error uploading media:", error)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this media?")) return

    try {
      await fetch("/api/admin/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      await fetchMedia()
    } catch (error) {
      console.error("[v0] Error deleting media:", error)
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
    <div className="space-y-8">
      {/* Upload Form */}
      <Card className="bg-black/50 border-amber-900/50 p-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Upload Media</h3>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium text-amber-200 mb-2 block">Section</label>
              <Input
                value={section}
                onChange={(e) => setSection(e.target.value)}
                placeholder="e.g., hero, characters"
                className="bg-amber-950/30 border-amber-900/50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-amber-200 mb-2 block">Field</label>
              <Input
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder="e.g., background, image"
                className="bg-amber-950/30 border-amber-900/50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-amber-200 mb-2 block">File</label>
              <Input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                accept="image/*"
                className="bg-amber-950/30 border-amber-900/50"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={!selectedFile || uploading}
            className="gap-2 bg-amber-600 hover:bg-amber-700"
          >
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </Card>

      {/* Media Grid */}
      <div>
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Uploaded Media</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.length === 0 ? (
            <Card className="bg-black/50 border-amber-900/50 p-8 col-span-full flex flex-col items-center justify-center">
              <ImageIcon className="h-12 w-12 text-amber-900/50 mb-4" />
              <p className="text-amber-200/50">No media uploaded yet</p>
            </Card>
          ) : (
            media.map((item) => (
              <Card key={item.id} className="bg-black/50 border-amber-900/50 overflow-hidden">
                <div className="relative h-40 bg-amber-950/30">
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs text-amber-200/50 uppercase">{item.section} / {item.field}</p>
                    <p className="text-sm font-medium text-amber-400 truncate">{item.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(item.url)
                      }}
                      size="sm"
                      variant="outline"
                      className="text-xs border-amber-900/50"
                    >
                      Copy URL
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      size="sm"
                      variant="destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
