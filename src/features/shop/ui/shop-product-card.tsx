import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import type { ShopProduct } from "@/features/shop/model/shop.types";

interface ShopProductCardProps {
  product: ShopProduct;
  href: string;
  buyLabel: string;
  soldOutLabel: string;
}

export function ShopProductCard({ product, href, buyLabel, soldOutLabel }: ShopProductCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-[var(--isolele-accent)]/60 hover:shadow-lg hover:shadow-[var(--isolele-accent)]/15">
      <Link href={href} className="block">
        <div className="relative h-72 overflow-hidden bg-black/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute right-3 top-3 rounded-full bg-[var(--isolele-accent)] px-3 py-1 text-sm font-bold text-black">
            ${product.price.toFixed(2)}
          </div>
          {product.soldOut ? (
            <div className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {soldOutLabel}
            </div>
          ) : null}
        </div>

        <div className="flex h-[220px] flex-col p-4">
          <h3 className="mb-1 text-base font-bold leading-tight text-foreground">{product.name}</h3>
          <p className="mb-2 text-xs text-foreground/60">{product.subtitle}</p>
          <div className="mb-3 flex items-center gap-1 text-xs text-foreground/70">
            <Star size={14} className="fill-[var(--isolele-accent)] text-[var(--isolele-accent)]" />
            {product.rating.value.toFixed(1)} ({product.rating.count})
          </div>
          <p className="mb-4 flex-1 text-sm text-foreground/70 line-clamp-3">{product.description}</p>

          <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--isolele-accent)] px-4 py-2 text-sm font-bold text-black transition hover:opacity-90">
            <ShoppingBag size={16} />
            {product.soldOut ? soldOutLabel : buyLabel}
          </span>
        </div>
      </Link>
    </article>
  );
}
