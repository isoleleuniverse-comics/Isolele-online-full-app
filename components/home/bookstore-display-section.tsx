"use client"

import Image from "next/image"

export function BookstoreDisplaySection() {
  return (
    <section className="w-full bg-background py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-8 md:mb-12 text-center">
          <p className="text-sm md:text-base font-semibold text-accent uppercase tracking-wide mb-2">
            In Stores Now
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            A Global Phenomenon
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            ISOLELE books are now featured on bestseller shelves in bookstores worldwide
          </p>
        </div>

        {/* Bookstore image */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/bookstore-display.jpg"
            alt="ZAIK books featured in bookstore Best Sellers display"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Stats or caption below image */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            Featured on international bestseller lists and retail displays
          </p>
        </div>
      </div>
    </section>
  )
}
