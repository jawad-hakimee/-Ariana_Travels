"use client";

import { useEffect, useState } from "react";

const MAX_MILES = 24901; // Circumference of the Earth in miles

export default function DiveGauge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(Math.max(p, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const miles = Math.round(progress * MAX_MILES);

  return (
    <div className="gauge" aria-hidden="true">
      <div className="rail">
        <div className="fill" style={{ height: `${progress * 100}%` }} />
        <div className="sub" style={{ top: `calc(${progress * 100}% - 8px)` }}>
          ◆
        </div>
      </div>
      <div className="readout mono">
        <span className="num">{miles.toLocaleString("en-US")}</span>
        <span className="unit">mi</span>
      </div>

      <style jsx>{`
        .gauge {
          position: fixed;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 40;
        }
        .rail {
          position: relative;
          width: 3px;
          height: 46vh;
          background: var(--line);
          border-radius: 999px;
        }
        .fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(var(--biolum), var(--jelly));
          border-radius: 999px;
          box-shadow: 0 0 12px var(--glow-cyan);
        }
        .sub {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          color: var(--biolum);
          font-size: 12px;
          text-shadow: 0 0 10px var(--glow-cyan);
        }
        .readout {
          display: flex;
          align-items: baseline;
          gap: 2px;
          color: var(--foam);
        }
        .num {
          font-size: 0.85rem;
          font-weight: 700;
        }
        .unit {
          font-size: 0.65rem;
          color: var(--mist);
        }
        @media (max-width: 820px) {
          .gauge {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
