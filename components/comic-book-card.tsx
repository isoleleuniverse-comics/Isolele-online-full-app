import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { ComicBook } from "@/lib/comic-books-data"

interface ComicBookCardProps {
  book: ComicBook
}

export function ComicBookCard({ book }: ComicBookCardProps) {
  const { t } = useLanguage()

  return (
    <Link href={book.link || "#"} className="group h-full">
      <div className="relative h-full flex flex-col bg-background-secondary rounded-lg overflow-hidden border border-background-tertiary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        {/* Book Cover Image */}
        <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-background-tertiary">
          <Image
            src={book.image}
            alt={t(book.titleKey)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-5">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-3 group-hover:text-primary transition-colors">
            {t(book.titleKey)}
          </h3>

          {/* Excerpt/Description */}
          <p className="text-xs sm:text-sm text-foreground/70 mb-3 line-clamp-2 flex-1">
            {book.excerptKey.length > 100 ? book.excerptKey.substring(0, 100) + "..." : book.excerptKey}
          </p>

          {/* Date if available */}
          {book.dateKey && (
            <p className="text-xs text-foreground/50 mb-3">
              {t(book.dateKey)}
            </p>
          )}

          {/* Price and Action */}
          <div className="flex items-center justify-between mt-auto">
            {book.price && (
              <span className="text-lg font-bold text-primary">
                ${book.price}
              </span>
            )}
            <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-background font-semibold rounded transition-colors duration-200 text-sm">
              {t("book_discover_story") || "Discover"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
