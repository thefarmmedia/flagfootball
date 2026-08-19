import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Calendar, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '../config/site'

const { season, organization } = siteConfig

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/photos/3.png")' }}
      />

      {/* Layered dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />

      {/* Subtle diagonal grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Red left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mb-3 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-brand-gold" />
          <span className="font-display font-black text-brand-gold tracking-[0.2em] uppercase text-lg sm:text-xl">
            {organization.tagline}
          </span>
          <span className="font-display font-black text-brand-red tracking-[0.2em] uppercase text-lg sm:text-xl">
            {organization.subTagline}
          </span>
          <div className="h-px w-12 bg-brand-gold" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-display font-black text-white uppercase text-shadow-xl mb-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.0, letterSpacing: '-0.01em' }}
        >
          Southwest Missouri's<br />
          <span className="text-brand-red">Premier Flag Football</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-base text-gray-400 max-w-lg mx-auto mb-8 font-sans"
        >
          NFL FLAG · Girls Flag Football · 7v7 Competitive — ages 6–17 at Ballparks of America, Branson, MO.
        </motion.p>

        {/* Season info bar */}
        {season.nflFlag.registrationOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex flex-wrap justify-center gap-x-6 gap-y-3 bg-black/70 backdrop-blur-md border border-brand-gold/30 px-6 py-4 mb-8 mx-auto"
          >
            <div className="flex items-center gap-2 text-green-400 font-bold text-xs uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Registration Open
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold">
              <Calendar size={12} className="text-brand-gold" />
              {season.nflFlag.name} · {season.nflFlag.dates}
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold">
              <Clock size={12} className="text-brand-gold" />
              {season.nflFlag.gameDay} · {season.nflFlag.weeks}
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold">
              <MapPin size={12} className="text-brand-gold" />
              {season.nflFlag.location}
            </div>
          </motion.div>
        )}

        {/* Age group badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {season.nflFlag.ageGroups.map((age) => (
            <span
              key={age}
              className="bg-white/8 border border-white/15 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-widest backdrop-blur-sm"
            >
              {age}{season.nflFlag.coedGroups.includes(age) ? ' · Coed' : ''}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="/nfl-flag" className="btn-primary text-sm px-10 py-4 shadow-2xl shadow-brand-red/40">
            Register Now <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn-secondary text-sm px-10 py-4">
            Learn More
          </Link>
        </motion.div>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'All Schools Welcome', color: 'border-white/20 text-gray-400' },
            { label: 'Flags Included', color: 'border-brand-red/40 text-brand-red' },
            { label: 'Woman Owned & Operated', color: 'border-brand-gold/40 text-brand-gold' },
            { label: 'Sponsorships Open', color: 'border-purple-700/40 text-purple-300' },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`${badge.color} border text-[10px] font-black uppercase tracking-widest px-4 py-1.5 backdrop-blur-sm`}
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
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
