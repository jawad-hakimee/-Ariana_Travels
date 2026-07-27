"use client";

import { useMemo } from "react";

/**
 * A field of slowly rising bioluminescent motes. Pure CSS animation,
 * seeded once so positions stay stable across renders.
 */
export default function Particles({ count = 46 }) {
  const motes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = 1.5 + Math.random() * 4;
      return {
        id: i,
        left: Math.random() * 100,
        size,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 20,
        violet: Math.random() > 0.78,
        opacity: 0.25 + Math.random() * 0.5,
      };
    });
  }, [count]);

  return (
    <div aria-hidden="true" className="particles">
      {motes.map((m) => (
        <span
          key={m.id}
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            background: m.violet ? "var(--jelly)" : "var(--biolum)",
            boxShadow: `0 0 ${m.size * 3}px ${
              m.violet ? "var(--glow-jelly)" : "var(--glow-cyan)"
            }`,
            opacity: m.opacity,
          }}
        />
      ))}
      <style jsx>{`
        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        span {
          position: absolute;
          bottom: -10px;
          border-radius: 50%;
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
