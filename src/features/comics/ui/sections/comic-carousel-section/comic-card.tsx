import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { ComicBook } from "@/features/comics/model/comics.types";

interface ComicCardProps {
  book: ComicBook;
  readLabel: string;
  href: string;
}

export function ComicCard({ book, readLabel, href }: ComicCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-[var(--isolele-accent)]/60 hover:shadow-lg hover:shadow-[var(--isolele-accent)]/15">
      <div className="relative h-72 overflow-hidden bg-black/20">
        <Image src={book.image} alt={book.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute right-3 top-3 rounded-full bg-[var(--isolele-accent)] px-3 py-1 text-sm font-bold text-black">
          ${book.price.toFixed(2)}
        </div>
      </div>

      <div className="flex h-[220px] flex-col p-4">
        <h3 className="mb-2 text-base font-bold leading-tight text-foreground">{book.title}</h3>
        <p className="mb-4 flex-1 text-sm text-foreground/70">{book.description}</p>

        <Link href={href} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--isolele-accent)] px-4 py-2 text-sm font-bold text-black transition hover:opacity-90">
          <ShoppingBag size={16} />
          {readLabel}
        </Link>
      </div>
    </article>
  );
}
