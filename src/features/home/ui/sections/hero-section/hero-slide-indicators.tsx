interface HeroSlideIndicatorsProps {
  activeSlide: number;
  onSelect: (index: number) => void;
  activeColor: string;
  inactiveColor: string;
}

export function HeroSlideIndicators({
  activeSlide,
  onSelect,
  activeColor,
  inactiveColor,
}: HeroSlideIndicatorsProps) {
  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
      {[0, 1].map((idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className="transition-all duration-300 rounded-full"
          style={{
            width: activeSlide === idx ? "28px" : "10px",
            height: "10px",
            backgroundColor: activeSlide === idx ? activeColor : inactiveColor,
          }}
          aria-label={`Slide ${idx + 1}`}
        />
      ))}
    </div>
  );
}
