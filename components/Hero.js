"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Particles from "./Particles";

const line1 = ["Discover", "the", "Heart"];
const line2 = ["of", "the", "ancient"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const word = {
  hidden: { y: 44, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="hero">
      <motion.div style={{ y: yBg }} className="backdrop" />
      <div className="caustics" aria-hidden="true" />
      <Particles count={40} />

      <motion.div style={{ y: yText, opacity: fade }} className="content container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          Curated Escapes · Exclusive Itineraries
        </motion.p>

        <motion.h1 variants={container} initial="hidden" animate="show" className="display title">
          <span className="ln">
            {line1.map((w, i) => (
               <motion.span key={i} variants={word} className="w">
                 {w}&nbsp;
               </motion.span>
            ))}
          </span>
          <span className="ln accent">
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="w">
                {w}&nbsp;
              </motion.span>
            ))}
            <motion.span variants={word} className="w glow-text">
              Silk Road.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          className="sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Ariana Travels unlocks the breathtaking landscapes and ancient heritage of Afghanistan. From the towering peaks of the Hindu Kush to the deep valleys of Bamiyan, your journey into the extraordinary begins here.
        </motion.p>

        <motion.div
          className="actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <a href="#zones" className="btn btn-primary">
            Explore Destinations →
          </a>
          <a href="#life" className="btn btn-ghost">
            View Experiences
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity: fade }}
      >
        <span className="mono">scroll to discover</span>
        <span className="arrow">↓</span>
      </motion.div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 6rem;
        }
        .backdrop {
          position: absolute;
          inset: -20% 0 0 0;
          background: radial-gradient(
              120% 80% at 50% -10%,
              var(--hero-grad-1) 0%,
              var(--hero-grad-2) 34%,
              var(--abyss) 78%
            );
          z-index: 0;
        }
        .caustics {
          position: absolute;
          inset: -30%;
          background: repeating-radial-gradient(
            circle at 30% 10%,
            rgba(224, 169, 109, 0.05) 0px,
            rgba(224, 169, 109, 0) 60px,
            rgba(221, 123, 106, 0.04) 120px,
            rgba(0, 0, 0, 0) 180px
          );
          animation: caustics 26s ease-in-out infinite alternate;
          z-index: 0;
          mix-blend-mode: screen;
        }
        .content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .title {
          font-size: clamp(2.9rem, 8vw, 6.4rem);
          margin: 1.6rem 0;
        }
        .ln {
          display: block;
        }
        .accent {
          color: var(--mist);
        }
        .accent .glow-text {
          color: var(--biolum);
          font-style: italic;
        }
        .w {
          display: inline-block;
        }
        .sub {
          max-width: 44ch;
          color: var(--mist);
          font-size: clamp(1rem, 1.6vw, 1.2rem);
          margin-bottom: 2.2rem;
        }
        .actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .scroll-cue {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: var(--mist);
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          z-index: 2;
        }
        .arrow {
          animation: drift 2.4s ease-in-out infinite;
          color: var(--biolum);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
