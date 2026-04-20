interface BookstoreDisplayCaptionProps {
  caption: string;
}

export function BookstoreDisplayCaption({ caption }: BookstoreDisplayCaptionProps) {
  return (
    <div className="mt-6 md:mt-8 text-center">
      <p className="text-sm md:text-base text-muted-foreground">{caption}</p>
    </div>
  );
}
