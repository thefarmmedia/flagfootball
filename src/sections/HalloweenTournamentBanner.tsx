import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, MapPin, Trophy } from 'lucide-react'

export default function HalloweenTournamentBanner() {
  return (
    <section className="relative overflow-hidden border-y border-orange-500/30 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.24),transparent_28%),radial-gradient(circle_at_85%_60%,rgba(85,255,0,0.12),transparent_30%),linear-gradient(135deg,#080705_0%,#160b03_45%,#050505_100%)]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 18px, rgba(255,255,255,.06) 18px 19px)' }} />
      <div className="absolute -left-12 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 px-3 py-1.5 text-xs font-black tracking-[.2em] uppercase text-orange-300 mb-5">
              <Trophy size={15} /> Missouri EPIC Tournaments Presents
            </div>

            <h2 className="font-display font-black uppercase leading-[.88] tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl text-shadow-xl">
              Halloween
              <span className="block text-orange-400">Freaky Football Bowl</span>
            </h2>

            <p className="mt-5 max-w-3xl text-lg sm:text-xl text-gray-200 font-semibold">
              One day. One field. One freaky EPIC experience. Flag football, costumes, prizes, music and Halloween in Branson.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold uppercase tracking-wider text-gray-200">
              <span className="inline-flex items-center gap-2"><CalendarDays size={17} className="text-orange-400" /> October 31</span>
              <span className="inline-flex items-center gap-2"><MapPin size={17} className="text-lime-400" /> Ballparks of America — Branson, MO</span>
            </div>
          </div>

          <div className="lg:text-right">
            <div className="inline-block w-full max-w-md lg:max-w-sm border border-white/15 bg-black/55 backdrop-blur-sm p-5 shadow-2xl">
              <div className="text-xs font-black uppercase tracking-[.2em] text-orange-300">Pre-registration is open</div>
              <div className="mt-2 text-2xl font-black uppercase text-white">Be first in line when registration opens.</div>
              <p className="mt-3 text-sm text-gray-400">Send us your team information now and Missouri EPIC will follow up with official registration details.</p>
              <Link to="/tournaments#pre-register" className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-wider px-5 py-3.5 transition-colors">
                Tournament Details & Pre-Register <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
