"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, MessageCircle } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Welcome to ISOLELE! How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { currentTheme } = useTheme()
  const { t } = useLanguage()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages
            .concat(userMessage)
            .map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("[v0] Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundColor: currentTheme.colors.background,
              border: `2px solid ${currentTheme.colors.accentPrimary}`,
              width: "380px",
              height: "500px",
              maxHeight: "90vh",
            }}
          >
            {/* Header */}
            <div
              className="p-4 flex items-center justify-between"
              style={{ backgroundColor: currentTheme.colors.accentPrimary }}
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                ISOLELE AI Assistant
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ height: "360px" }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "rounded-br-none text-white"
                        : "rounded-bl-none"
                    }`}
                    style={{
                      backgroundColor:
                        message.role === "user"
                          ? currentTheme.colors.accentPrimary
                          : `${currentTheme.colors.accentPrimary}15`,
                      color:
                        message.role === "user"
                          ? "white"
                          : currentTheme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div
                    className="px-4 py-2 rounded-lg rounded-bl-none flex gap-1"
                    style={{
                      backgroundColor: `${currentTheme.colors.accentPrimary}15`,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="p-4 border-t flex gap-2"
              style={{ borderColor: `${currentTheme.colors.accentPrimary}30` }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-lg border outline-none transition"
                style={{
                  borderColor: currentTheme.colors.accentPrimary,
                  backgroundColor: `${currentTheme.colors.accentPrimary}05`,
                }}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-lg transition disabled:opacity-50"
                style={{
                  backgroundColor: currentTheme.colors.accentPrimary,
                  color: "white",
                }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full shadow-lg transition-all"
        style={{
          backgroundColor: currentTheme.colors.accentPrimary,
          color: "white",
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
