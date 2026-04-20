import { useEffect, type RefObject } from "react";

export function useInfiniteScrollTrack(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let position = 0;
    const speed = 1;

    let frameId = 0;
    const loop = () => {
      position += speed;
      const halfWidth = container.scrollWidth / 2;

      if (position >= halfWidth) {
        position = 0;
      }

      container.style.transform = `translateX(-${position}px)`;
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [ref]);
}
