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
            A Pan-African Phenomenon
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            The first Pan-African superhero universe already on bestseller shelves across Africa
          </p>
        </div>

        {/* Bookstore image */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/bookstore-display.jpg"
            alt="ZAIK books featured in bookstore Best Sellers display"
            width={1200}
            height={800}
            sizes="100vw"
            className="w-full h-auto object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsICQkJChAODwoQFwwTGB8WFBcUFRYaFxwpHhcYGRgaGBgSHBwcHhcYGhj/2wBDAQcHBwoIChMICQsMCggKGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"
          />
        </div>

        {/* Stats or caption below image */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            From Kinshasa to Nairobi's bestseller shelves — ISOLELE is taking Africa by storm
          </p>
        </div>
      </div>
    </section>
  )
}
