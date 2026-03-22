"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Send, Loader2, Zap, Copy, Check } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

const QUICK_PROMPTS = [
  "Generate a description for our latest KUFU game book",
  "Suggest improvements for the shop page",
  "Create marketing copy for a new book release",
  "Analyze our site performance and suggest optimizations",
  "Help write character descriptions for ISOLELE universe",
]

export default function GrokChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Welcome to ISOLELE AI Assistant powered by Grok! I'm here to help you with content suggestions, analytics insights, and creative ideas for your site. What can I help you with today?",
      timestamp: Date.now(),
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent, prompt?: string) => {
    e.preventDefault()
    const userMessage = prompt || input

    if (!userMessage.trim()) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: userMessage,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("/api/admin/grok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userMessage,
          context: "You are assisting an admin of the ISOLELE comic/game platform",
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let fullResponse = ""

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: "",
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, assistantMsg])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          fullResponse += chunk

          setMessages((prev) => [
            ...prev.slice(0, -1),
            { ...assistantMsg, content: fullResponse },
          ])
        }
      }
    } catch (error) {
      console.error("[v0] Grok error:", error)
      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again later.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1524" }}>
      {/* Header */}
      <div className="border-b px-6 py-4" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
        <div className="flex items-center gap-3 mb-2">
          <Zap size={28} style={{ color: "#C9A542" }} />
          <div>
            <h1 className="text-2xl font-bold text-[#C9A542]">ISOLELE AI Assistant</h1>
            <p className="text-sm text-gray-400">Powered by Grok</p>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-100px)]">
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-md lg:max-w-2xl rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-[#C9A542] text-[#0F1524]"
                        : "bg-[#1a2035] text-gray-300 border border-[#C9A542]/20"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    {message.role === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(message.content, message.id)}
                        className="mt-2 flex items-center gap-1 text-xs text-gray-400 hover:text-[#C9A542] transition-colors"
                      >
                        {copiedId === message.id ? (
                          <>
                            <Check size={14} /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[#1a2035] text-gray-300 rounded-lg p-4 border border-[#C9A542]/20 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Grok is thinking...</span>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts or input area */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-xs text-gray-500 mb-3">Quick prompts:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {QUICK_PROMPTS.map((prompt, i) => (
                  <motion.button
                    key={i}
                    onClick={(e) => handleSubmit(e as React.FormEvent, prompt)}
                    className="text-left px-3 py-2 rounded-lg bg-[#1a2035] hover:bg-[#252f47] text-xs text-gray-300 transition-colors border border-[#C9A542]/20"
                    whileHover={{ x: 4 }}
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-6 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Grok anything..."
              className="flex-1 px-4 py-3 rounded-lg bg-[#1a2035] text-white placeholder-gray-500 border border-[#C9A542]/20 focus:border-[#C9A542] outline-none transition-colors"
            />
            <motion.button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-3 rounded-lg font-semibold text-[#0F1524] bg-[#C9A542] hover:bg-[#F6B800] transition-colors disabled:opacity-50 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send size={18} />}
            </motion.button>
          </form>
        </div>

        {/* Sidebar with suggestions */}
        <div
          className="w-80 border-l p-6 hidden lg:flex flex-col"
          style={{ borderColor: "rgba(201, 165, 66, 0.1)", backgroundColor: "rgba(26, 32, 53, 0.3)" }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">AI Capabilities</h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="rounded-lg bg-[#1a2035] p-3 border border-[#C9A542]/20">
              <p className="font-semibold text-[#C9A542] mb-1">Content Creation</p>
              <p className="text-xs">Generate descriptions, marketing copy, and content improvements</p>
            </div>

            <div className="rounded-lg bg-[#1a2035] p-3 border border-[#C9A542]/20">
              <p className="font-semibold text-[#C9A542] mb-1">Analytics Insights</p>
              <p className="text-xs">Get recommendations based on your site data</p>
            </div>

            <div className="rounded-lg bg-[#1a2035] p-3 border border-[#C9A542]/20">
              <p className="font-semibold text-[#C9A542] mb-1">Creative Assistance</p>
              <p className="text-xs">Help with character descriptions and universe lore</p>
            </div>

            <div className="rounded-lg bg-[#1a2035] p-3 border border-[#C9A542]/20">
              <p className="font-semibold text-[#C9A542] mb-1">SEO Optimization</p>
              <p className="text-xs">Suggestions for better search engine visibility</p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t" style={{ borderColor: "rgba(201, 165, 66, 0.1)" }}>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Grok Connected
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
