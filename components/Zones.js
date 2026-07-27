"use client";

import { motion } from "framer-motion";

const zones = [
  {
    id: "01",
    name: "Bamiyan Valley",
    common: "The Cultural Heartland",
    depth: "Central Highlands",
    light: 95,
    body: "Home to ancient monastic caves and the stunning Band-e-Amir national park. Experience deep blue lakes surrounded by towering limestone cliffs.",
  },
  {
    id: "02",
    name: "Wakhan Corridor",
    common: "The Roof of the World",
    depth: "Badakhshan",
    light: 65,
    body: "A dramatic alpine frontier bordered by the Pamir Mountains. Trek through untouched wilderness and meet the nomadic Kyrgyz herders.",
  },
  {
    id: "03",
    name: "Herat",
    common: "The Pearl of Khorasan",
    depth: "Western Afghanistan",
    light: 85,
    body: "A city steeped in poetry and history. Marvel at the intricate tilework of the Great Mosque and explore the ancient Citadel.",
  },
  {
    id: "04",
    name: "Mazar-i-Sharif",
    common: "The Blue City",
    depth: "Balkh Province",
    light: 90,
    body: "Discover the breathtaking Shrine of Hazrat Ali. Experience vibrant spring festivals and the rich tapestry of northern Afghan culture.",
  },
  {
    id: "05",
    name: "Kabul",
    common: "The Historic Capital",
    depth: "Kabul Province",
    light: 80,
    body: "A bustling metropolis nestled in a sweeping valley. Visit the peaceful Gardens of Babur and the historic Darul Aman Palace.",
  },
];

export default function Zones() {
  return (
    <section id="zones" className="zones">
      <div className="container">
        <motion.div
          className="head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Discover Afghanistan</p>
          <h2 className="display">
            The beauty of the nation.<br />
            <span className="muted">It is a tapestry of wonders.</span>
          </h2>
        </motion.div>

        <div className="stack">
          {zones.map((z, i) => (
            <motion.article
              key={z.id}
              className="zone"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="left">
                <span className="mono id">{z.id}</span>
                <span className="mono depth">{z.depth}</span>
              </div>

              <div className="mid">
                <h3 className="display">{z.name}</h3>
                <p className="common">{z.common}</p>
                <p className="body">{z.body}</p>
              </div>

              <div className="right">
                <div className="lightbar" title={`${z.light}% popularity index`}>
                  <motion.div
                    className="lightfill"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${z.light}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  />
                </div>
                <span className="mono pct">{z.light}%</span>
                <span className="mono lbl">demand</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .zones {
          padding: 8rem 0;
          background: linear-gradient(var(--abyss), var(--deep) 60%, var(--abyss));
        }
        .head {
          margin-bottom: 4rem;
        }
        .head h2 {
          font-size: clamp(1.9rem, 4.4vw, 3.2rem);
          margin-top: 1rem;
        }
        .muted {
          color: var(--mist);
        }
        .stack {
          display: flex;
          flex-direction: column;
        }
        .zone {
          display: grid;
          grid-template-columns: 160px 1fr 90px;
          gap: 2rem;
          padding: 2.4rem 0;
          border-top: 1px solid var(--line);
          align-items: start;
          transition: background 0.4s ease;
        }
        .zone:hover {
          background: linear-gradient(
            90deg,
            rgba(224, 169, 109, 0.04),
            transparent 70%
          );
        }
        .left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .id {
          color: var(--biolum);
          font-size: 1.1rem;
          font-weight: 700;
        }
        .depth {
          color: var(--mist);
          font-size: 0.78rem;
        }
        .mid h3 {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
        }
        .common {
          color: var(--biolum);
          font-size: 0.9rem;
          margin: 0.2rem 0 0.9rem;
        }
        .body {
          color: var(--mist);
          max-width: 52ch;
          font-size: 0.98rem;
        }
        .right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .lightbar {
          width: 8px;
          height: 90px;
          background: rgba(224, 169, 109, 0.12);
          border-radius: 999px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .lightfill {
          width: 100%;
          background: linear-gradient(var(--biolum), var(--jelly));
          border-radius: 999px;
        }
        .pct {
          font-size: 0.8rem;
          color: var(--foam);
        }
        .lbl {
          font-size: 0.62rem;
          color: var(--mist);
          text-transform: uppercase;
        }
        @media (max-width: 720px) {
          .zone {
            grid-template-columns: 60px 1fr;
          }
          .right {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
