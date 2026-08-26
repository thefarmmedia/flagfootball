import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready to Join Missouri EPIC?',
  subtitle = "Registration is open now. Spots are limited — secure your athlete's place in the best flag football program in Southwest Missouri.",
  primaryLabel = 'Register Now',
  primaryHref: _primaryHref = '/nfl-flag',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTASectionProps) {
  const hasRegistration =
    siteConfig.registration.nflFlag ||
    siteConfig.registration.girlsFlag ||
    siteConfig.registration.sevenOnSeven

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-brand-red" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.08) 20px,
            rgba(0,0,0,0.08) 40px
          )`,
        }}
      />
      {/* Top slant */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gray-950"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />
      {/* Bottom slant */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-950"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
      />
      {/* Gold glow accent */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[400px] bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-black text-white uppercase tracking-tight text-shadow-xl mb-5"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.0 }}
          >
            {title}
          </h2>
          <p className="text-lg text-red-100/80 mb-10 max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {hasRegistration ? (
              <a
                href={siteConfig.registration.nflFlag}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-red font-black uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:scale-105 shadow-xl text-sm"
              >
                {primaryLabel} <ArrowRight size={16} />
              </a>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-red font-black uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:scale-105 shadow-xl text-sm"
              >
                Get Notified When Registration Opens <ArrowRight size={16} />
              </Link>
            )}
            <Link
              to={secondaryHref}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-black uppercase tracking-widest px-8 py-4 border-2 border-white/60 hover:border-white transition-all duration-200 text-sm"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
