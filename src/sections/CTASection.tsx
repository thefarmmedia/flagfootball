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
  primaryHref = '/nfl-flag',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTASectionProps) {
  const hasRegistration =
    siteConfig.registration.nflFlag ||
    siteConfig.registration.girlsFlag ||
    siteConfig.registration.sevenOnSeven

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red-dark to-gray-950" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 text-shadow">
            {title}
          </h2>
          <p className="text-lg text-red-100/80 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {hasRegistration ? (
              <Link
                to={primaryHref}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-red font-black px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl text-base"
              >
                {primaryLabel} <ArrowRight size={18} />
              </Link>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-red font-black px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl text-base"
              >
                Get Notified When Registration Opens <ArrowRight size={18} />
              </Link>
            )}
            <Link
              to={secondaryHref}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-200 text-base backdrop-blur-sm"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
