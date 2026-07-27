"use client";

import { motion } from "framer-motion";

const creatures = [
  {
    name: "Hindu Kush Trekking",
    depth: "Adventure",
    glyph: "⛰️",
    tint: "var(--biolum)",
    note: "Ascend the legendary peaks of the Hindu Kush. A true mountaineering adventure through some of the most dramatic landscapes on Earth.",
  },
  {
    name: "Silk Road Heritage",
    depth: "Culture",
    glyph: "🏺",
    tint: "var(--jelly)",
    note: "Walk in the footsteps of ancient merchants. Explore historic caravanserais, ancient ruins, and centuries-old bazaars.",
  },
  {
    name: "Band-e-Amir Boating",
    depth: "Nature",
    glyph: "🛶",
    tint: "var(--biolum)",
    note: "Row gently across the mesmerizing lapis lazuli waters of Afghanistan's first national park, surrounded by red rock canyons.",
  },
  {
    name: "Local Hospitality",
    depth: "Immersion",
    glyph: "🫖",
    tint: "var(--jelly)",
    note: "Experience legendary Afghan hospitality. Share a meal of Qabili Palau and green tea with local families in traditional guesthouses.",
  },
  {
    name: "Buzkashi Matches",
    depth: "Tradition",
    glyph: "🐎",
    tint: "var(--biolum)",
    note: "Witness the fierce and ancient equestrian sport of Buzkashi. A thrilling display of horsemanship that defines northern Afghan culture.",
  },
  {
    name: "Artisan Workshops",
    depth: "Crafts",
    glyph: "🧶",
    tint: "var(--jelly)",
    note: "Watch master weavers create world-renowned Afghan carpets and see traditional lapis lazuli carving in local artisan markets.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Creatures() {
  return (
    <section id="life" className="life">
      <div className="container">
        <div className="head">
          <p className="eyebrow">Exclusive Experiences</p>
          <h2 className="display">
            Journeys that <span className="italic">transform you.</span>
          </h2>
          <p className="lede">
            Travel is more than the places you visit; it&apos;s the moments you collect. Hover over each experience to envision your next adventure.
          </p>
        </div>

        <div className="grid">
          {creatures.map((c, i) => (
            <motion.article
              key={c.name}
              className="card"
              variants={cardVariant}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
            >
              <div className="halo" style={{ background: c.tint }} />
              <span className="glyph" style={{ color: c.tint }}>
                {c.glyph}
              </span>
              <div className="meta">
                <h3>{c.name}</h3>
                <span className="mono depth">{c.depth}</span>
              </div>
              <p className="note">{c.note}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .life {
          padding: 8rem 0;
          background: var(--abyss);
        }
        .head {
          max-width: 640px;
          margin-bottom: 3.4rem;
        }
        .head h2 {
          font-size: clamp(1.9rem, 4.4vw, 3.2rem);
          margin-top: 1rem;
        }
        .italic {
          font-style: italic;
          color: var(--biolum);
        }
        .lede {
          color: var(--mist);
          margin-top: 1rem;
          max-width: 48ch;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.4rem;
        }
        .card {
          position: relative;
          overflow: hidden;
          padding: 2rem;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: linear-gradient(160deg, var(--card-grad-1), var(--card-grad-2));
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .card:hover {
          border-color: rgba(224, 169, 109, 0.4);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .halo {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.12;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .card:hover .halo {
          opacity: 0.4;
          transform: scale(1.2);
        }
        .glyph {
          font-size: 2.4rem;
          display: inline-block;
          animation: sway 6s ease-in-out infinite;
          text-shadow: 0 0 20px currentColor;
        }
        .meta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin: 1.2rem 0 0.6rem;
        }
        .meta h3 {
          font-size: 1.3rem;
          font-weight: 500;
        }
        .depth {
          font-size: 0.72rem;
          color: var(--mist);
        }
        .note {
          color: var(--mist);
          font-size: 0.92rem;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
