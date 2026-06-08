import type { FooterSectionContext } from "./footer.types";

export function FooterBottomBar({ currentTheme, content }: FooterSectionContext) {
  return (
    <div
      className="mt-16 flex flex-col items-center justify-center gap-4 border-t pt-8"
      style={{ borderColor: `${currentTheme.colors.accentPrimary}20` }}
    >
      <p className="flex items-center gap-2 text-center text-sm" style={{ color: currentTheme.colors.textSecondary }}>
        {content.copyright}
      </p>
    </div>
  );
}
