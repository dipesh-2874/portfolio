import { useEffect, useRef } from "react";

const useScrambleText = (text, speed = 50) => {
  const elementRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      let iteration = 0;
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        el.innerText = text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return String.fromCharCode(
              Math.floor(Math.random() * 26) + 65
            );
          })
          .join("");

        iteration += 1 / 5;

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          el.innerText = text;
        }
      }, speed);
    };

    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearInterval(intervalRef.current);
      el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [text, speed]);

  return elementRef;
};

export default useScrambleText;
