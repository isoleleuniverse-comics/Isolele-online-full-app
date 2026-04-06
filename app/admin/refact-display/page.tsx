"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Menu,
  X,
  Plus,
  Edit2,
  Trash2,
  Save,
  Smartphone,
  Monitor,
  Tablet,
  Type,
  Image as ImageIcon,
  Zap,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { useChangeStore } from "@/lib/change-store"

type ViewportSize = "mobile" | "tablet" | "desktop"
type EditMode = "select" | "edit" | "text" | "media" | "animation"

interface ContentItem {
  id: string
  section: string
  type: "text" | "image" | "book" | "game" | "component"
  title: string
  content?: Record<string, any>
}

export default function RefactDisplayPage() {
  const [viewport, setViewport] = useState<ViewportSize>("desktop")
  const [editMode, setEditMode] = useState<EditMode>("select")
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null)
  const [contentList, setContentList] = useState<ContentItem[]>([])
  const [showEditor, setShowEditor] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["hero", "shop", "kufu"]))
  
  const { addChange, clearChanges, hasPendingChanges, getPendingCount } = useChangeStore()

  const contentStructure: Record<string, ContentItem[]> = {
    hero: [
      { id: "hero-title", section: "hero", type: "text", title: "Hero Title", content: { en: "Welcome to ISOLELE" } },
      { id: "hero-subtitle", section: "hero", type: "text", title: "Hero Subtitle", content: { en: "The Chosen Ones" } },
      { id: "hero-image", section: "hero", type: "image", title: "Hero Background" },
    ],
    shop: [
      { id: "shop-title", section: "shop", type: "text", title: "Shop Title" },
      { id: "shop-books", section: "shop", type: "book", title: "Book Catalog" },
    ],
    kufu: [
      { id: "kufu-title", section: "kufu", type: "text", title: "KUFU Game Title" },
      { id: "kufu-description", section: "kufu", type: "text", title: "KUFU Description" },
      { id: "kufu-image", section: "kufu", type: "image", title: "KUFU Cover Image" },
      { id: "kufu-characters", section: "kufu", type: "game", title: "Game Characters" },
    ],
  }

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
  }

  const handleAddItem = (section: string, type: ContentItem["type"]) => {
    const newItem: ContentItem = {
      id: `${section}-${Date.now()}`,
      section,
      type,
      title: `New ${type}`,
      content: {},
    }
    setSelectedItem(newItem)
    setEditMode("edit")
    setShowEditor(true)
    addChange(newItem.id, {
      id: newItem.id,
      type: "content",
      section,
      data: newItem,
      timestamp: Date.now(),
    })
  }

  const handleSaveItem = () => {
    if (selectedItem) {
      addChange(selectedItem.id, {
        id: selectedItem.id,
        type: "content",
        section: selectedItem.section,
        data: selectedItem,
        timestamp: Date.now(),
      })
      setShowEditor(false)
      setSelectedItem(null)
    }
  }

  const handleSaveAll = async () => {
    try {
      const response = await fetch("/api/admin/save-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          changes: contentList,
          revalidatePaths: ["/", "/shop", "/kufu-game"],
        }),
      })

      const data = await response.json()
      if (data.success) {
        clearChanges()
        alert("All changes saved and site updated!")
      }
    } catch (error) {
      console.error("[v0] Save error:", error)
      alert("Error saving changes")
    }
  }

  const viewportWidths = {
    mobile: "375px",
    tablet: "768px",
    desktop: "1024px",
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1524" }}>
      {/* Header with Save All button */}
      <div className="border-b flex items-center justify-between px-6 py-4" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
        <h1 className="text-2xl font-bold text-[#C9A542]">Refact Display</h1>
        <div className="flex items-center gap-4">
          {hasPendingChanges && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", borderColor: "rgba(34, 197, 94, 0.3)", border: "1px solid" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-green-400">{getPendingCount()} pending</span>
            </motion.div>
          )}
          <motion.button
            onClick={handleSaveAll}
            disabled={!hasPendingChanges}
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-[#0F1524] transition-all disabled:opacity-50"
            style={{ backgroundColor: hasPendingChanges ? "#C9A542" : "#666" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Save size={18} />
            Save All Changes
          </motion.button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Content Tree - Left Panel */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-80 border-r overflow-y-auto p-6"
          style={{ borderColor: "rgba(201, 165, 66, 0.1)", backgroundColor: "rgba(26, 32, 53, 0.3)" }}
        >
          <h2 className="text-lg font-bold text-white mb-6">Content Structure</h2>

          {Object.entries(contentStructure).map(([section, items]) => (
            <div key={section} className="mb-4">
              <button
                onClick={() => toggleSection(section)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-[#1a2035] text-left text-sm font-medium text-gray-300"
              >
                {expandedSections.has(section) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <span className="capitalize font-semibold text-[#C9A542]">{section}</span>
              </button>

              <AnimatePresence>
                {expandedSections.has(section) && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="ml-4 mt-2 space-y-1">
                    {items.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => {
                          setSelectedItem(item)
                          setShowEditor(true)
                        }}
                        className={`w-full px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          selectedItem?.id === item.id
                            ? "bg-[#C9A542]/20 border border-[#C9A542]"
                            : "hover:bg-[#1a2035] border border-transparent"
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center gap-2">
                          {item.type === "text" && <Type size={14} />}
                          {item.type === "image" && <ImageIcon size={14} />}
                          {item.type === "book" && <Plus size={14} />}
                          {item.type === "game" && <Zap size={14} />}
                          <span className="text-xs text-gray-400">{item.title}</span>
                        </div>
                      </motion.button>
                    ))}

                    {/* Add buttons */}
                    <div className="flex gap-1 mt-3 pt-2 border-t border-[#1a2035]">
                      <button
                        onClick={() => handleAddItem(section, "text")}
                        className="flex-1 px-2 py-1.5 rounded text-xs text-[#C9A542] hover:bg-[#1a2035] transition-colors"
                        title="Add text"
                      >
                        <Type size={14} className="mx-auto" />
                      </button>
                      <button
                        onClick={() => handleAddItem(section, "image")}
                        className="flex-1 px-2 py-1.5 rounded text-xs text-[#C9A542] hover:bg-[#1a2035] transition-colors"
                        title="Add image"
                      >
                        <ImageIcon size={14} className="mx-auto" />
                      </button>
                      <button
                        onClick={() => handleAddItem(section, "book")}
                        className="flex-1 px-2 py-1.5 rounded text-xs text-[#C9A542] hover:bg-[#1a2035] transition-colors"
                        title="Add book"
                      >
                        <Plus size={14} className="mx-auto" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Live Preview - Center Panel */}
        <div className="flex-1 flex flex-col border-r" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
          {/* Viewport selector */}
          <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
            <span className="text-sm text-gray-400 mr-2">Preview:</span>
            <button
              onClick={() => setViewport("mobile")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                viewport === "mobile" ? "bg-[#C9A542] text-[#0F1524]" : "bg-[#1a2035] text-gray-400"
              }`}
            >
              <Smartphone size={16} className="inline mr-1" /> Mobile
            </button>
            <button
              onClick={() => setViewport("tablet")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                viewport === "tablet" ? "bg-[#C9A542] text-[#0F1524]" : "bg-[#1a2035] text-gray-400"
              }`}
            >
              <Tablet size={16} className="inline mr-1" /> Tablet
            </button>
            <button
              onClick={() => setViewport("desktop")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                viewport === "desktop" ? "bg-[#C9A542] text-[#0F1524]" : "bg-[#1a2035] text-gray-400"
              }`}
            >
              <Monitor size={16} className="inline mr-1" /> Desktop
            </button>
          </div>

          {/* Preview iframe area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-6" style={{ backgroundColor: "rgba(26, 32, 53, 0.3)" }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                width: viewportWidths[viewport],
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 0 50px rgba(201, 165, 66, 0.2)",
                overflow: "hidden",
              }}
            >
              <iframe
                src="/"
                className="w-full h-full border-0"
                style={{ minHeight: "600px" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Editor Panel - Right */}
        <AnimatePresence>
          {showEditor && selectedItem && (
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              className="w-96 border-l flex flex-col"
              style={{ borderColor: "rgba(201, 165, 66, 0.1)", backgroundColor: "rgba(26, 32, 53, 0.5)" }}
            >
              {/* Editor header */}
              <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
                <h3 className="font-semibold text-white">{selectedItem.title}</h3>
                <button
                  onClick={() => setShowEditor(false)}
                  className="p-1 hover:bg-[#1a2035] rounded transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Editor content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedItem.type === "text" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">English</label>
                    <textarea
                      value={selectedItem.content?.en || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          content: { ...selectedItem.content, en: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none resize-none"
                      rows={4}
                    />
                  </div>
                )}

                {selectedItem.type === "image" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                    <input
                      type="text"
                      value={selectedItem.content?.url || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          content: { ...selectedItem.content, url: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none"
                      placeholder="https://..."
                    />
                    {selectedItem.content?.url && (
                      <div className="mt-3 rounded-lg overflow-hidden">
                        <Image
                          src={selectedItem.content.url}
                          alt="Preview"
                          width={200}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}

                {selectedItem.type === "book" && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Book Title</label>
                      <input
                        type="text"
                        value={selectedItem.content?.bookTitle || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            content: { ...selectedItem.content, bookTitle: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Author</label>
                      <input
                        type="text"
                        value={selectedItem.content?.author || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            content: { ...selectedItem.content, author: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Book Cover</label>
                      <input
                        type="text"
                        value={selectedItem.content?.coverUrl || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            content: { ...selectedItem.content, coverUrl: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none text-sm"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                )}

                {selectedItem.type === "game" && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Game Name</label>
                      <input
                        type="text"
                        value={selectedItem.content?.gameName || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            content: { ...selectedItem.content, gameName: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                      <textarea
                        value={selectedItem.content?.description || ""}
                        onChange={(e) =>
                          setSelectedItem({
                            ...selectedItem,
                            content: { ...selectedItem.content, description: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#1a2035] text-white border border-[#C9A542]/20 focus:border-[#C9A542] outline-none resize-none text-sm"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Editor footer */}
              <div className="flex gap-2 px-6 py-4 border-t" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
                <button
                  onClick={handleSaveItem}
                  className="flex-1 px-4 py-2 rounded-lg font-semibold text-[#0F1524] bg-[#C9A542] hover:bg-[#F6B800] transition-colors flex items-center justify-center gap-2"
                >
                  <Save size={16} />
                  Save
                </button>
                <button
                  onClick={() => setShowEditor(false)}
                  className="flex-1 px-4 py-2 rounded-lg font-semibold text-gray-300 bg-[#1a2035] hover:bg-[#252f47] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
