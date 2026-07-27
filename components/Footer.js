"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container inner">
        <div className="brand">
          <span className="dot" />
          <span className="display">Ariana Travels</span>
        </div>

        <div className="cols">
          <div>
            <span className="mono head">Explore</span>
            <a href="#zones">Destinations</a>
            <a href="#life">Experiences</a>
            <a href="#data">Impact</a>
          </div>
          <div>
            <span className="mono head">Journey</span>
            <a href="#logs">Client Reviews</a>
            <a href="#join">Plan a trip</a>
            <a href="#top">Back to top</a>
          </div>
          <div>
            <span className="mono head">Connect</span>
            <a href="#join">Newsletter</a>
            <a href="#top">Press Kit</a>
            <a href="#top">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="track display">
          <span>curated bespoke journeys ·&nbsp;</span>
          <span>curated bespoke journeys ·&nbsp;</span>
          <span>curated bespoke journeys ·&nbsp;</span>
        </div>
      </div>

      <div className="container bottom">
        <span className="mono">© {new Date().getFullYear()} Ariana Travels</span>
        <span className="mono">Designed for the ultimate adventurer.</span>
      </div>

      <style jsx>{`
        .footer {
          background: var(--abyss);
          border-top: 1px solid var(--line);
          padding-top: 4rem;
        }
        .inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          padding-bottom: 3rem;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.5rem;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--biolum);
          box-shadow: 0 0 16px var(--glow-cyan);
        }
        .cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .cols div {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .head {
          color: var(--biolum);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
        }
        .cols a {
          color: var(--mist);
          font-size: 0.92rem;
          transition: color 0.3s ease;
        }
        .cols a:hover {
          color: var(--foam);
        }
        .marquee {
          overflow: hidden;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 1.4rem 0;
          white-space: nowrap;
        }
        .track {
          display: inline-flex;
          font-size: 2.4rem;
          color: rgba(224, 169, 109, 0.35);
          animation: scroll-x 24s linear infinite;
        }
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          padding: 1.6rem 0;
          font-size: 0.74rem;
          color: var(--mist);
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        @media (max-width: 720px) {
          .inner {
            grid-template-columns: 1fr;
          }
          .cols {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </footer>
  );
}
