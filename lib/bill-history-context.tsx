"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface BillItem {
  id: string
  bookId: string
  bookTitle: string
  bookImage: string
  price: number
  quantity: number
  purchaseDate: number
  status: "completed" | "pending" | "cancelled"
  paymentMethod: string
}

interface BillHistoryContextType {
  bills: BillItem[]
  addBill: (bill: Omit<BillItem, "id" | "purchaseDate">) => void
  getBills: () => BillItem[]
  getTotalSpent: () => number
  clearBillHistory: () => void
}

const BillHistoryContext = createContext<BillHistoryContextType | undefined>(undefined)

export function BillHistoryProvider({ children }: { children: ReactNode }) {
  const [bills, setBills] = useState<BillItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Load from localStorage
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("isolele-bill-history")
    if (stored) {
      try {
        setBills(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to load bill history:", error)
      }
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("isolele-bill-history", JSON.stringify(bills))
    }
  }, [bills, mounted])

  const addBill = (bill: Omit<BillItem, "id" | "purchaseDate">) => {
    const newBill: BillItem = {
      ...bill,
      id: Date.now().toString(),
      purchaseDate: Date.now(),
    }
    setBills((prev) => [newBill, ...prev])
  }

  const getBills = () => bills

  const getTotalSpent = () => {
    return bills
      .filter((b) => b.status === "completed")
      .reduce((sum, b) => sum + b.price * b.quantity, 0)
  }

  const clearBillHistory = () => {
    setBills([])
  }

  return (
    <BillHistoryContext.Provider
      value={{
        bills,
        addBill,
        getBills,
        getTotalSpent,
        clearBillHistory,
      }}
    >
      {children}
    </BillHistoryContext.Provider>
  )
}

export function useBillHistory() {
  const context = useContext(BillHistoryContext)
  if (!context) {
    throw new Error("useBillHistory must be used within BillHistoryProvider")
  }
  return context
}
