"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/shared/contexts/cart-context";
import { useTheme } from "@/shared/contexts/theme-context";

export function CartButton({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const { totalItems, setIsCartOpen } = useCart();
  const { currentTheme } = useTheme();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className={isMobile ? "relative inline-flex rounded-2xl p-3" : "relative rounded-full border p-2"}
      style={{
        color: isMobile ? currentTheme.colors.textSecondary : currentTheme.colors.accentPrimary,
        borderColor: isMobile ? undefined : `${currentTheme.colors.accentPrimary}30`,
        backgroundColor: isMobile ? `${currentTheme.colors.accentPrimary}10` : undefined,
      }}
      aria-label="Open cart"
    >
      <ShoppingBag className={isMobile ? "h-5 w-5" : "h-4 w-4"} />
      {totalItems > 0 ? (
        <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
          {totalItems}
        </span>
      ) : null}
    </button>
  );
}
