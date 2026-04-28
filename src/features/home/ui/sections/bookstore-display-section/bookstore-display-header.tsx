import type { BookstoreDisplayContent } from "./types";

interface BookstoreDisplayHeaderProps {
  content: BookstoreDisplayContent;
}

export function BookstoreDisplayHeader({ content }: BookstoreDisplayHeaderProps) {
  return (
    <div className="mb-8 md:mb-12 text-center">
      <p className="text-sm md:text-base font-semibold text uppercase tracking-wide mb-2">
        {content.headingTagline}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{content.headingTitle}</h2>
      <p className="text-base md:text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
        {content.headingDescription}
      </p>
    </div>
  );
}
