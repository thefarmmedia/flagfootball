import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Calendar, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '../config/site'

const { season, organization } = siteConfig

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background photo — Unsplash football action */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/images/photos/3.png")',
        }}
      />

      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 flex justify-center"
        >
          <img
            src="/images/logos/missouri-epic-logo.png"
            alt="Missouri EPIC NFL FLAG"
            className="h-56 sm:h-72 lg:h-96 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-brand-gold font-black text-xl sm:text-2xl lg:text-3xl tracking-wide drop-shadow-lg">
            {organization.tagline}
          </span>{' '}
          <span className="text-brand-red font-black text-xl sm:text-2xl lg:text-3xl tracking-wide">
            {organization.subTagline}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-shadow-lg mb-4 text-white"
        >
          Southwest Missouri's Premier<br />
          <span className="text-brand-red">Flag Football</span> Organization
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-xl mx-auto mb-8"
        >
          NFL FLAG · Girls Flag Football · 7v7 Competitive — for athletes ages 6–17 at Ballparks of America in Branson, MO.
        </motion.p>

        {/* Season info bar */}
        {season.nflFlag.registrationOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="inline-flex flex-wrap justify-center gap-x-6 gap-y-3 bg-black/50 backdrop-blur-md border border-brand-gold/40 rounded-2xl px-6 py-4 mb-8 mx-auto"
          >
            <div className="flex items-center gap-2 text-brand-gold font-bold text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 uppercase tracking-wider text-xs">Registration Open</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <Calendar size={14} className="text-brand-gold" />
              {season.nflFlag.name} · {season.nflFlag.dates}
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <Clock size={14} className="text-brand-gold" />
              {season.nflFlag.gameDay} · {season.nflFlag.weeks}
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <MapPin size={14} className="text-brand-gold" />
              {season.nflFlag.location}
            </div>
          </motion.div>
        )}

        {/* Age groups */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {season.nflFlag.ageGroups.map((age) => (
            <span
              key={age}
              className="bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
            >
              {age} {season.nflFlag.coedGroups.includes(age) ? '· Coed' : ''}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link to="/nfl-flag" className="btn-primary text-base px-8 py-4 shadow-xl shadow-brand-red/30">
            Register Now <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn-secondary text-base px-8 py-4">
            Learn More
          </Link>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'All Schools Welcome', color: 'bg-white/10 border-white/20 text-gray-300' },
            { label: 'Flags Included', color: 'bg-brand-red/20 border-brand-red/40 text-brand-red' },
            { label: 'Woman Owned & Operated', color: 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold' },
            { label: 'Sponsorships Open', color: 'bg-purple-900/30 border-purple-700/40 text-purple-300' },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`${badge.color} border rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-sm`}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
