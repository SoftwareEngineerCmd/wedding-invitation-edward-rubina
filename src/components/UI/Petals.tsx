import { useState } from "react";

export const Petals = () => {
  const [petals] = useState<
    Array<{
      left: number;
      dur: number;
      delay: number;
      drift: number;
      size: number;
    }>
  >(() =>
    Array.from({ length: 22 }, () => ({
      left: Math.random() * 100,
      dur: 8 + Math.random() * 10,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 200,
      size: 8 + Math.random() * 14,
    })),
  );
  return (
    <>
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${p.left}vw`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            width: p.size,
            height: p.size,
            ["--drift" as never]: `${p.drift}px`,
          }}
        />
      ))}
    </>
  );
};
