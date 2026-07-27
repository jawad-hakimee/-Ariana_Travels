"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Particles from "./Particles";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (email.includes("@")) setSent(true);
  };

  return (
    <section id="join" className="cta">
      <Particles count={28} />
      <motion.div
        className="container inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">Your Journey Awaits</p>
        <h2 className="display">
          Start planning today.
        </h2>
        <p className="lede">
          Our travel concierges are ready to craft your bespoke itinerary. Leave your email below and we will send you exclusive offers and destination dossiers.
        </p>

        {!sent ? (
          <div className="form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address"
              onKeyDown={(e) => e.key === "Enter" && submit()}
            />
            <button className="btn btn-primary" onClick={submit}>
              Request Brochure →
            </button>
          </div>
        ) : (
          <motion.p
            className="thanks mono"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ◆ Request received. Watch your inbox for your personalized dossier.
          </motion.p>
        )}
      </motion.div>

      <style jsx>{`
        .cta {
          position: relative;
          overflow: hidden;
          padding: 9rem 0;
          text-align: center;
          background: radial-gradient(
            80% 120% at 50% 120%,
            var(--hero-grad-1) 0%,
            var(--abyss) 60%
          );
        }
        .inner {
          position: relative;
          z-index: 2;
          max-width: 640px;
        }
        .cta h2 {
          font-size: clamp(2.4rem, 6vw, 4.4rem);
          margin: 1rem 0;
        }
        .lede {
          color: var(--mist);
          margin: 0 auto 2.4rem;
          max-width: 46ch;
        }
        .form {
          display: flex;
          gap: 0.6rem;
          max-width: 460px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }
        input {
          flex: 1;
          min-width: 220px;
          padding: 0.9rem 1.2rem;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: var(--input-bg);
          color: var(--foam);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        input:focus {
          border-color: var(--biolum);
          box-shadow: 0 0 0 3px rgba(224, 169, 109, 0.12);
        }
        .thanks {
          color: var(--biolum);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
