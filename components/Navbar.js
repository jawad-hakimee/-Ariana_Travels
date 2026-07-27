"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Destinations", href: "#zones" },
  { label: "Experiences", href: "#life" },
  { label: "Insights", href: "#data" },
  { label: "Reviews", href: "#logs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // on mount, read from document
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className={`nav ${scrolled ? "solid" : ""}`}
    >
      <div className="inner container">
        <a href="#top" className="brand">
          <span className="dot" />
          <span className="display">Ariana Travels</span>
        </a>

        <div className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <a href="#join" className="btn btn-primary cta">
          Book Journey
        </a>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: background 0.4s ease, backdrop-filter 0.4s ease,
            border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .nav.solid {
          background: var(--nav-bg);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--line);
        }
        .inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 0;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.35rem;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--biolum);
          box-shadow: 0 0 16px var(--glow-cyan);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .links {
          display: flex;
          gap: 2rem;
          font-size: 0.9rem;
          color: var(--mist);
        }
        .links a {
          position: relative;
          transition: color 0.3s ease;
        }
        .links a:hover {
          color: var(--foam);
        }
        .links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 1px;
          width: 0;
          background: var(--biolum);
          transition: width 0.3s ease;
        }
        .links a:hover::after {
          width: 100%;
        }
        .theme-toggle {
          background: none;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          color: var(--mist);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .theme-toggle:hover {
          color: var(--foam);
          transform: scale(1.1);
        }
        .cta {
          padding: 0.6rem 1.2rem;
          font-size: 0.82rem;
        }
        @media (max-width: 820px) {
          .links {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
}
