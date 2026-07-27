"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const entries = [
  {
    quote:
      "Seeing the blue lakes of Band-e-Amir contrast against the desert cliffs was surreal. The hospitality we received everywhere was truly heartwarming.",
    who: "Elena Rostova",
    role: "Traveler, Bamiyan Valley",
  },
  {
    quote:
      "Trekking through the Wakhan Corridor felt like stepping back in time. The isolation and beauty of the Pamirs is unmatched anywhere else in the world.",
    who: "Marcus Chen",
    role: "Explorer, Badakhshan Expedition",
  },
  {
    quote:
      "The intricate tilework of the Blue Mosque in Mazar-i-Sharif is mesmerizing. Ariana Travels ensured we felt safe and welcomed at every step.",
    who: "Sarah & David",
    role: "Cultural Tour, Northern Afghanistan",
  },
];

export default function Logs() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % entries.length), 6000);
    return () => clearInterval(t);
  }, []);

  const e = entries[i];

  return (
    <section id="logs" className="logs">
      <div className="container inner">
        <div className="side">
          <p className="eyebrow">Client Journals</p>
          <h2 className="display">
            Stories from<br /> the journey
          </h2>
          <div className="dots">
            {entries.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Review entry ${idx + 1}`}
                className={`dot ${idx === i ? "on" : ""}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>

        <div className="stage">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="display quote">“{e.quote}”</p>
              <footer>
                <span className="who">{e.who}</span>
                <span className="role mono">{e.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .logs {
          padding: 8rem 0;
          background: var(--deep);
        }
        .inner {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
          align-items: center;
        }
        .side h2 {
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          margin-top: 1rem;
        }
        .dots {
          display: flex;
          gap: 0.6rem;
          margin-top: 2rem;
        }
        .dot {
          width: 32px;
          height: 4px;
          border: none;
          border-radius: 999px;
          background: var(--line);
          transition: background 0.4s ease, width 0.4s ease;
        }
        .dot.on {
          background: var(--biolum);
          width: 48px;
          box-shadow: 0 0 12px var(--glow-cyan);
        }
        .stage {
          min-height: 220px;
          display: flex;
          align-items: center;
        }
        .quote {
          font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          line-height: 1.3;
          font-style: italic;
          max-width: 24ch;
        }
        footer {
          display: flex;
          flex-direction: column;
          margin-top: 1.6rem;
        }
        .who {
          color: var(--biolum);
          font-weight: 500;
        }
        .role {
          color: var(--mist);
          font-size: 0.78rem;
        }
        @media (max-width: 820px) {
          .inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
