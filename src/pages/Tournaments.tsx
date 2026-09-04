import { CalendarDays, Clock3, MapPin, PartyPopper, Trophy } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'

const zortsRegistrationUrl = 'https://www.zortssports.com/join/tournament/27681?plain=true'

export default function Tournaments() {
  return (
    <>
      <PageMeta
        title="Halloween Freaky Football Bowl | Missouri EPIC Tournaments"
        description="Register for the Halloween Freaky Football Bowl on October 31 at Ballparks of America in Branson, Missouri. A one-day Missouri EPIC flag football tournament with costumes, prizes and Halloween fun."
        path="/tournaments"
        ogTitle="Halloween Freaky Football Bowl — Branson, MO"
        ogDescription="One day. One field. One freaky EPIC experience. October 31 at Ballparks of America in Branson. Register your team now."
      />

      <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,.23),transparent_28%),radial-gradient(circle_at_85%_60%,rgba(80,255,0,.10),transparent_32%),linear-gradient(145deg,#050505,#190d04_48%,#050505)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 px-3 py-1.5 text-xs font-black tracking-[.2em] uppercase text-orange-300 mb-5">
              <Trophy size={15} /> Missouri EPIC Tournaments
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[.84] font-black uppercase text-white text-shadow-xl">
              Halloween
              <span className="block text-orange-400">Freaky Football Bowl</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-300 font-semibold">
              One day. One field. One freaky EPIC experience — flag football, Halloween costumes, prizes, music and more in Branson.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3 items-center text-left">
                <CalendarDays className="text-orange-400 shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Date</div><div className="font-black text-white">October 31</div></div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3 items-center text-left">
                <MapPin className="text-lime-400 shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Location</div><div className="font-black text-white">Ballparks of America, Branson</div></div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3 items-center text-left">
                <Clock3 className="text-brand-gold shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Format</div><div className="font-black text-white">One-Day Tournament</div></div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3 items-center text-left">
                <PartyPopper className="text-brand-red shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Experience</div><div className="font-black text-white">Football + Halloween Fun</div></div>
              </div>
            </div>

            <a
              href={zortsRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-black px-7 py-4 font-black uppercase tracking-wider transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/images/tournaments/halloween-freaky-football-bowl-flyer-v2.webp"
            alt="Halloween Freaky Football Bowl flyer — Friday, October 31 at Ballparks of America, Branson, Missouri. 5v5 flag for boys and girls, 7v7 boys, 7v7 flag girls, adult divisions available. Early bird pricing $295/team before October 2, $325/team October 2–23. Spectator gate fee $15/person. Team costume contest, prizes, food, music. Registration is open now. Presented by Missouri EPIC Tournaments."
            width="1086"
            height="1448"
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-orange-500/20 shadow-2xl"
          />
          <a
            href={zortsRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-black px-7 py-4 font-black uppercase tracking-wider transition-colors"
          >
            Register Now
          </a>
        </div>
      </section>

      <section className="bg-gray-950 py-16 lg:py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center flex flex-col items-center">
              <div className="text-orange-400 font-black uppercase tracking-widest text-xs mb-3">Tournament Play</div>
              <h2 className="text-2xl font-black text-white">Pool Play + Bracket</h2>
              <p className="mt-3 text-gray-400">Two pool games followed by a single-elimination bracket, with 25-minute games.</p>
            </div>
            <div className="card p-6 text-center flex flex-col items-center">
              <div className="text-lime-400 font-black uppercase tracking-widest text-xs mb-3">Halloween</div>
              <h2 className="text-2xl font-black text-white">Team Costume Contest</h2>
              <p className="mt-3 text-gray-400">Bring the energy. Team costumes, Halloween atmosphere, fun prizes and more throughout the event.</p>
            </div>
            <div className="card p-6 text-center flex flex-col items-center">
              <div className="text-brand-gold font-black uppercase tracking-widest text-xs mb-3">Team Pricing</div>
              <h2 className="text-2xl font-black text-white">$295 Early Bird</h2>
              <p className="mt-3 text-gray-400">$295 per team before October 2 and $325 per team for regular registration through October 23.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
