"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Plus, Trash2, Save, Globe } from "lucide-react"

interface Translation {
  id: string
  language_code: string
  key: string
  value: string
  context?: string
}

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "pt", name: "Portuguese" },
]

export default function TranslationManager() {
  const [translations, setTranslations] = useState<Translation[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  useEffect(() => {
    fetchTranslations()
  }, [selectedLanguage])

  const fetchTranslations = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/content?section=translations&lang=${selectedLanguage}`)
      const data = await response.json()
      setTranslations(data)
    } catch (error) {
      console.error("[v0] Error fetching translations:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
          <Globe className="h-6 w-6" />
          Manage Translations
        </h2>
        <div className="flex gap-2">
          {LANGUAGES.map((lang) => (
            <Button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`${
                selectedLanguage === lang.code
                  ? "bg-amber-600 hover:bg-amber-700"
                  : "bg-amber-900/50 hover:bg-amber-800/50"
              }`}
            >
              {lang.name}
            </Button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
        </div>
      ) : (
        <Card className="bg-black/50 border-amber-900/50 p-6">
          <p className="text-amber-200/70 text-center py-8">
            Translations are managed through the Content Editor. Select a section and update the{" "}
            <span className="font-semibold text-amber-400">{selectedLanguage.toUpperCase()}</span> column.
          </p>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => window.location.href = "/admin/dashboard"}
              className="gap-2 bg-amber-600 hover:bg-amber-700"
            >
              Go to Content Editor
            </Button>
          </div>
        </Card>
      )}

      <Card className="bg-black/50 border-amber-900/50 p-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Language Files</h3>
        <div className="space-y-3">
          {LANGUAGES.map((lang) => (
            <div key={lang.code} className="flex items-center justify-between p-3 bg-amber-950/30 rounded-lg border border-amber-900/50">
              <div>
                <p className="font-medium text-amber-400">{lang.name}</p>
                <p className="text-xs text-amber-200/50">
                  /translate/{lang.code}/content.json
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-amber-900/50 text-amber-400 hover:bg-amber-900/30"
              >
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
