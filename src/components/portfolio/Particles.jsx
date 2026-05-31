import { useEffect, useState } from "react";
function Particles({ count = 30, className = "" }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 6,
        tx: (Math.random() - 0.5) * 80
      }))
    );
  }, [count]);
  return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((p) => <span
    key={p.id}
    className="absolute rounded-full bg-[var(--gold)]"
    style={{
      left: `${p.left}%`,
      top: `${p.top}%`,
      width: p.size,
      height: p.size,
      opacity: 0.6,
      // @ts-expect-error custom prop
      "--tx": `${p.tx}px`,
      animation: `particle-float ${p.duration}s ${p.delay}s linear infinite`,
      filter: "blur(0.5px)"
    }}
  />)}
    </div>;
}
export {
  Particles
};
