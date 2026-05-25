"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/shared/contexts/cart-context";
import { useTheme } from "@/shared/contexts/theme-context";
import { useLanguage } from "@/shared/i18n/language-context";

const CART_COPY = {
  en: {
    title: "Your cart",
    empty: "Your cart is empty.",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    clear: "Clear cart",
    checkout: "Checkout soon",
    close: "Close cart",
    remove: "Remove item",
  },
  fr: {
    title: "Votre panier",
    empty: "Votre panier est vide.",
    subtotal: "Sous-total",
    shipping: "Livraison",
    total: "Total",
    clear: "Vider le panier",
    checkout: "Paiement bientot disponible",
    close: "Fermer le panier",
    remove: "Retirer l'article",
  },
} as const;

export function CartSheet() {
  const { items, subtotal, shipping, total, isCartOpen, setIsCartOpen, updateQuantity, removeItem, clearCart } = useCart();
  const { currentTheme } = useTheme();
  const { locale } = useLanguage();

  const copy = CART_COPY[locale === "fr" ? "fr" : "en"];
  const formatter = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <AnimatePresence>
      {isCartOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
        >
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="absolute inset-x-0 bottom-0 max-h-[82vh] rounded-t-[2rem] border p-5 shadow-2xl lg:inset-y-0 lg:right-0 lg:left-auto lg:w-full lg:max-w-md lg:rounded-none lg:rounded-l-[2rem]"
            style={{
              backgroundColor: currentTheme.colors.background,
              borderColor: `${currentTheme.colors.accentPrimary}33`,
              color: currentTheme.colors.textPrimary,
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${currentTheme.colors.accentPrimary}14`, color: currentTheme.colors.accentPrimary }}
                >
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{copy.title}</h2>
                  <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                    {items.length} item{items.length === 1 ? "" : "s"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="rounded-full border p-2"
                style={{ borderColor: `${currentTheme.colors.accentPrimary}33`, color: currentTheme.colors.textSecondary }}
                aria-label={copy.close}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div
                className="flex h-48 flex-col items-center justify-center rounded-[1.75rem] border text-center"
                style={{
                  borderColor: `${currentTheme.colors.accentPrimary}22`,
                  backgroundColor: `${currentTheme.colors.accentPrimary}08`,
                }}
              >
                <ShoppingBag className="mb-3 h-8 w-8" style={{ color: currentTheme.colors.accentPrimary }} />
                <p className="font-medium">{copy.empty}</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 overflow-y-auto pr-1 lg:max-h-[calc(82vh-16rem)]">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[1.5rem] border p-4"
                      style={{
                        borderColor: `${currentTheme.colors.accentPrimary}22`,
                        backgroundColor: `${currentTheme.colors.backgroundSecondary}cc`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate font-semibold">{item.name}</p>
                          <p className="mt-1 text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                            {formatter.format(item.price)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="rounded-full p-2"
                          style={{ color: currentTheme.colors.textSecondary }}
                          aria-label={copy.remove}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div
                          className="inline-flex items-center gap-2 rounded-full border px-2 py-1"
                          style={{ borderColor: `${currentTheme.colors.accentPrimary}2e` }}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="rounded-full p-1"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-6 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="rounded-full p-1"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <p className="font-semibold">{formatter.format(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-5 rounded-[1.75rem] border p-4"
                  style={{
                    borderColor: `${currentTheme.colors.accentPrimary}22`,
                    backgroundColor: `${currentTheme.colors.accentPrimary}0d`,
                  }}
                >
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span style={{ color: currentTheme.colors.textSecondary }}>{copy.subtotal}</span>
                    <span>{formatter.format(subtotal)}</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span style={{ color: currentTheme.colors.textSecondary }}>{copy.shipping}</span>
                    <span>{formatter.format(shipping)}</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold">
                    <span>{copy.total}</span>
                    <span>{formatter.format(total)}</span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="flex-1 rounded-full border px-4 py-3 text-sm font-semibold"
                      style={{ borderColor: `${currentTheme.colors.accentPrimary}33`, color: currentTheme.colors.textSecondary }}
                    >
                      {copy.clear}
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-full px-4 py-3 text-sm font-semibold"
                      style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}
                    >
                      {copy.checkout}
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
