import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
}

export function TypingText({ text, delay = 0 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    const timer = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index >= text.length && interval) clearInterval(interval);
      }, 80);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  return <span>{displayedText}</span>;
}
