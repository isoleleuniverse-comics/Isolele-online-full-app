"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface ThemeColors {
  background: string
  backgroundSecondary: string
  accentPrimary: string
  accentSecondary: string
  textPrimary: string
  textSecondary: string
}

export interface Theme {
  id: string
  name: string
  nameFr: string
  colors: ThemeColors
}

export const themes: Theme[] = [
  {
    id: "lumiere-royale",
    name: "Royal Light",
    nameFr: "Lumiere Royale",
    colors: {
      background: "#FFFFFF",
      backgroundSecondary: "#F8F6F0",
      accentPrimary: "#B8860B",
      accentSecondary: "#8B6914",
      textPrimary: "#1A1A1A",
      textSecondary: "#4A4A4A",
    },
  },
  {
    id: "royaume-ancestral",
    name: "Ancestral Kingdom",
    nameFr: "Royaume Ancestral",
    colors: {
      background: "#0A0A0A",
      backgroundSecondary: "#1A120B",
      accentPrimary: "#D4AF37",
      accentSecondary: "#B3541E",
      textPrimary: "#F5F5DC",
      textSecondary: "#D3D3C7",
    },
  },
  {
    id: "savane-electrique",
    name: "Electric Savanna",
    nameFr: "Savane Electrique",
    colors: {
      background: "#0F1A2B",
      backgroundSecondary: "#2D1B69",
      accentPrimary: "#00F5FF",
      accentSecondary: "#FF00FF",
      textPrimary: "#FFFFFF",
      textSecondary: "#ADD8E6",
    },
  },
  {
    id: "foret-mystique",
    name: "Mystic Forest",
    nameFr: "Foret Mystique",
    colors: {
      background: "#0B2818",
      backgroundSecondary: "#1A472A",
      accentPrimary: "#C0C0C0",
      accentSecondary: "#40E0D0",
      textPrimary: "#98FF98",
      textSecondary: "#C1E1C1",
    },
  },
  {
    id: "desert-enchante",
    name: "Enchanted Desert",
    nameFr: "Desert Enchante",
    colors: {
      background: "#8B4513",
      backgroundSecondary: "#B22222",
      accentPrimary: "#FFD700",
      accentSecondary: "#FF8C00",
      textPrimary: "#F4D03F",
      textSecondary: "#FAEBD7",
    },
  },
  {
    id: "comics-noir",
    name: "Comics Black & White",
    nameFr: "Comics Noir et Blanc",
    colors: {
      background: "#FFFFFF",
      backgroundSecondary: "#F0F0F0",
      accentPrimary: "#000000",
      accentSecondary: "#333333",
      textPrimary: "#000000",
      textSecondary: "#404040",
    },
  },
  {
    id: "journal-dessin",
    name: "Journal Drawing",
    nameFr: "Journal Dessin",
    colors: {
      background: "#FFF8DC",
      backgroundSecondary: "#F5E6D3",
      accentPrimary: "#8B4513",
      accentSecondary: "#D2691E",
      textPrimary: "#3E2723",
      textSecondary: "#5D4037",
    },
  },
  {
    id: "noir-premium",
    name: "Pure Black Premium",
    nameFr: "Noir Pur Premium",
    colors: {
      background: "#000000",
      backgroundSecondary: "#0A0A0A",
      accentPrimary: "#FFD700",
      accentSecondary: "#FFFFFF",
      textPrimary: "#FFFFFF",
      textSecondary: "#E0E0E0",
    },
  },
]

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement
  root.style.setProperty("--isolele-bg", theme.colors.background)
  root.style.setProperty("--isolele-bg-secondary", theme.colors.backgroundSecondary)
  root.style.setProperty("--isolele-accent", theme.colors.accentPrimary)
  root.style.setProperty("--isolele-accent-secondary", theme.colors.accentSecondary)
  root.style.setProperty("--isolele-text", theme.colors.textPrimary)
  root.style.setProperty("--isolele-text-secondary", theme.colors.textSecondary)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("isolele-theme")
    if (savedTheme) {
      const theme = themes.find((t) => t.id === savedTheme)
      if (theme) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentTheme(theme)
        applyTheme(theme)
      }
    } else {
      applyTheme(themes[0])
    }
  }, [])



  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId)
    if (theme && theme.id !== currentTheme.id) {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentTheme(theme)
        applyTheme(theme)
        localStorage.setItem("isolele-theme", themeId)
        
        setTimeout(() => {
          setIsTransitioning(false)
        }, 800)
      }, 100)
    }
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}