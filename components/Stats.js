"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";

function Stat({ end, decimals, prefix, suffix, label }) {
  const [value, ref] = useCountUp(end, { decimals });
  return (
    <div className="stat" ref={ref}>
      <span className="display num">
        {prefix}
        {value}
        {suffix}
      </span>
      <span className="label">{label}</span>
      <style jsx>{`
        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 2rem 0;
        }
        .num {
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          color: var(--biolum);
          line-height: 1;
        }
        .label {
          color: var(--mist);
          font-size: 0.92rem;
          max-width: 26ch;
        }
      `}</style>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="data" className="data">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our footprint, in numbers
        </motion.p>

        <div className="grid">
          <Stat end={34} suffix="" label="provinces waiting to be explored across the nation" />
          <Stat end={7492} suffix="m" label="elevation of Noshaq, the highest peak in Afghanistan" />
          <Stat end={5} suffix="k+" label="years of recorded history and Silk Road heritage" />
          <Stat end={6} suffix="" label="UNESCO World Heritage sites and tentative entries" />
          <Stat end={15} suffix="+" label="years of specialized Afghan travel expertise" />
          <Stat end={100} suffix="%" label="commitment to local communities and sustainable tourism" />
        </div>
      </div>

      <style jsx>{`
        .data {
          padding: 7rem 0;
          background: linear-gradient(var(--abyss), var(--deep));
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem 3rem;
          margin-top: 2rem;
          border-top: 1px solid var(--line);
        }
      `}</style>
    </section>
  );
}
