import { useEffect, useState } from "react";
function Dots({ count = 30 }) {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    setDots(
      Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.55
      }))
    );
  }, [count]);
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => <span
    key={i}
    className="absolute rounded-full bg-[var(--gold-light)]"
    style={{
      top: `${d.top}%`,
      left: `${d.left}%`,
      width: `${d.size}px`,
      height: `${d.size}px`,
      opacity: d.opacity,
      boxShadow: `0 0 ${d.size * 4}px oklch(0.88 0.1 88 / 0.6)`,
      animation: `dot-float ${d.duration}s ease-in-out ${d.delay}s infinite`
    }}
  />)}
    </div>;
}
export {
  Dots
};
