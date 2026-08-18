import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-navy/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/images/logos/missouri-epic-logo.png"
            alt="Missouri EPIC NFL FLAG"
            className="h-56 sm:h-72 lg:h-96 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-1.5 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
            Southwest Missouri's Premier Flag Football
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-shadow-lg mb-6"
        >
          <span className="text-white">Play.</span>{' '}
          <span className="text-brand-red">Compete.</span>{' '}
          <span className="text-brand-gold">Win.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.organization.name} offers NFL FLAG, Girls Flag Football, and elite 7v7 programs
          for athletes ages 6–17 across Southwest Missouri.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link to="/nfl-flag" className="btn-primary text-base px-8 py-4">
            Register Now <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn-secondary text-base px-8 py-4">
            Learn More
          </Link>
        </motion.div>

        {/* Program badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {[
            { label: 'NFL FLAG', color: 'bg-brand-red/20 border-brand-red/40 text-brand-red', href: '/nfl-flag' },
            { label: 'Girls Flag Football', color: 'bg-brand-navy/40 border-blue-700/40 text-blue-400', href: '/girls-flag-football' },
            { label: '7v7 Competitive', color: 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold', href: '/7v7' },
          ].map((badge) => (
            <Link
              key={badge.label}
              to={badge.href}
              className={`inline-flex items-center gap-2 ${badge.color} border rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-transform`}
            >
              {badge.label}
            </Link>
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
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
