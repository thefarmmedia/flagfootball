import { Link } from 'react-router-dom'
import { sponsors } from '../../data/sponsors'

function TickerLine({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="tournament-ticker-line" aria-hidden={duplicate || undefined}>
      <Link to="/tournaments" className="tournament-ticker-message">
        🎃 HALLOWEEN FREAKY FOOTBALL BOWL — OCTOBER 31 AT BALLPARKS OF AMERICA — PRE-REGISTER NOW
      </Link>
      <span className="tournament-ticker-divider" aria-hidden="true" />

      {sponsors.map((sponsor) => {
        const logo = sponsor.logo
        if (!logo) return null

        const image = (
          <img
            src={logo}
            alt={duplicate ? '' : `${sponsor.name} logo`}
            width="180"
            height="56"
            loading="eager"
            decoding="async"
          />
        )

        return sponsor.website ? (
          <a
            key={sponsor.id}
            className="tournament-ticker-logo"
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={duplicate ? undefined : `Visit ${sponsor.name}`}
            tabIndex={duplicate ? -1 : 0}
          >
            {image}
          </a>
        ) : (
          <span key={sponsor.id} className="tournament-ticker-logo">
            {image}
          </span>
        )
      })}

      <span className="tournament-ticker-divider" aria-hidden="true" />
    </div>
  )
}

export default function TournamentTicker() {
  return (
    <aside className="tournament-ticker" aria-label="Halloween Freaky Football Bowl announcement and Missouri EPIC sponsors">
      <div className="tournament-ticker-marquee">
        <div className="tournament-ticker-track">
          <TickerLine />
          <TickerLine duplicate />
        </div>
      </div>

      <style>{`
        .tournament-ticker {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 70;
          height: 52px;
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 50%, rgba(255, 184, 28, .16), transparent 24%),
            linear-gradient(90deg, #090806 0%, #1b1005 48%, #090806 100%);
          border-bottom: 1px solid rgba(255, 184, 28, .4);
          box-shadow: 0 8px 24px rgba(0, 0, 0, .38);
        }
        .tournament-ticker-marquee {
          width: 100%;
          height: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%);
        }
        .tournament-ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          height: 100%;
          animation: tournamentTickerScroll 44s linear infinite;
          will-change: transform;
        }
        .tournament-ticker-marquee:hover .tournament-ticker-track {
          animation-play-state: paused;
        }
        .tournament-ticker-line {
          display: flex;
          align-items: center;
          flex: none;
          height: 100%;
          gap: 28px;
          padding-right: 28px;
          white-space: nowrap;
        }
        .tournament-ticker-message {
          display: inline-flex;
          align-items: center;
          height: 100%;
          color: #fff;
          text-decoration: none;
          font-family: Impact, 'Arial Narrow', system-ui, sans-serif;
          font-size: .83rem;
          font-weight: 900;
          letter-spacing: .075em;
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0,0,0,.75);
        }
        .tournament-ticker-message:hover,
        .tournament-ticker-message:focus-visible {
          color: #FFB81C;
        }
        .tournament-ticker-divider {
          width: 1px;
          height: 25px;
          flex: none;
          background: rgba(255,255,255,.24);
        }
        .tournament-ticker-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: none;
          height: 42px;
          min-width: 88px;
          padding: 6px 10px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 6px;
          opacity: .96;
          transition: opacity .2s ease, transform .2s ease, background .2s ease;
        }
        .tournament-ticker-logo:hover,
        .tournament-ticker-logo:focus-visible {
          opacity: 1;
          transform: scale(1.06);
          background: rgba(255,255,255,.13);
        }
        .tournament-ticker-logo img {
          width: auto;
          height: 29px;
          max-width: 138px;
          object-fit: contain;
        }
        @keyframes tournamentTickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .tournament-ticker { height: 46px; }
          .tournament-ticker-line { gap: 22px; padding-right: 22px; }
          .tournament-ticker-message { font-size: .68rem; letter-spacing: .055em; }
          .tournament-ticker-logo { height: 38px; min-width: 76px; padding: 5px 8px; }
          .tournament-ticker-logo img { height: 25px; max-width: 116px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tournament-ticker-marquee {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .tournament-ticker-track { animation: none; }
          .tournament-ticker-line[aria-hidden='true'] { display: none; }
        }
      `}</style>
    </aside>
  )
}
