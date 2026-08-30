import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Star, CheckCircle } from 'lucide-react'
import { siteConfig } from '../config/site'

const { season, registration } = siteConfig

const highlights = [
  { icon: Calendar, label: 'Season Dates', value: season.nflFlag.dates },
  { icon: Clock, label: 'Game Day', value: season.nflFlag.gameDay },
  { icon: Star, label: 'Duration', value: season.nflFlag.weeks },
  { icon: MapPin, label: 'Location', value: 'Ballparks of America\nBranson, MO' },
  { icon: Users, label: 'Age Groups', value: season.nflFlag.ageGroups.join(' · ') },
  { icon: CheckCircle, label: 'Open To', value: 'All Schools Welcome' },
]

export default function FallLeagueSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
      {/* background photo accent */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url("/images/photos/jpg/25.webp")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-brand-red" />
              <span className="text-brand-red font-bold text-xs uppercase tracking-[0.25em]">Now Open</span>
            </div>
            <h2 className="font-display font-black text-white uppercase tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.0 }}>
              Fall League<br />
              <span className="text-brand-gold">2026</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Join Missouri EPIC's Fall NFL FLAG League — six weeks of Tuesday Night football at the premier Ballparks of America complex in Branson. Every player receives an official NFL FLAG jersey and flag belt included with registration.
            </p>

            {/* Pricing */}
            <div className="bg-black/50 border border-gray-700 rounded-xl p-5 mb-8">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Registration Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-950/50 border border-green-800/50 rounded-lg p-4 text-center">
                  <div className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">Early Bird</div>
                  <div className="text-brand-gold font-black text-3xl font-display">${season.nflFlag.pricing.earlyBird}</div>
                  <div className="text-gray-400 text-xs mt-1">by {season.nflFlag.pricing.earlyBirdDeadline}</div>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">After Sept 4</div>
                  <div className="text-white font-black text-3xl font-display">${season.nflFlag.pricing.regular}</div>
                  <div className="text-gray-400 text-xs mt-1">thru {season.nflFlag.pricing.regularDeadline}</div>
                </div>
              </div>
              <p className="text-red-400 text-xs font-bold mt-3 text-center uppercase tracking-wide">
                ⚠ Registration closes {season.nflFlag.pricing.registrationCloses} — secure your spot now
              </p>
            </div>

            <a
              href={registration.nflFlag}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm px-8 py-4"
            >
              Register Now — $250 Early Bird
            </a>
          </motion.div>

          {/* Details grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-gray-950/80 border border-gray-800 rounded-xl p-5 hover:border-brand-red/40 transition-colors"
              >
                <item.icon size={16} className="text-brand-red mb-2" />
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-white font-bold text-sm leading-snug whitespace-pre-line">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Photo strip */}
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-5 gap-2 overflow-hidden rounded-xl">
          {[10, 20, 30, 40, 50].map((n) => (
            <div key={n} className="aspect-square overflow-hidden">
              <img
                src={`/images/photos/jpg/${n}.webp`}
                alt="Flag football action"
                width="1280"
                height="1280"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
