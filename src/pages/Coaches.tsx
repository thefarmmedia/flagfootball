import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, HandHeart, CalendarClock, ExternalLink } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import CTASection from '../sections/CTASection'

export default function Coaches() {
  return (
    <>
      <PageMeta
        title="Coaches"
        description="Missouri EPIC coaches resources — official NFL FLAG rule book, volunteer sign up, and info on our upcoming coaches & officials meeting."
        path="/coaches"
        ogTitle="Coaches | Missouri EPIC"
        ogDescription="Rule book, volunteer sign up, and coaches & officials meeting info for Missouri EPIC Flag Football."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/photos/jpg/60.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Coaches &<br />
              <span className="text-brand-red">Officials</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything our coaches and volunteers need — rules, sign up, and season meeting details.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches/Officials Meeting Notice */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy/20 border border-brand-navy/40 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
              <CalendarClock size={28} className="text-brand-gold" />
            </div>
            <div>
              <div className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">
                Mark Your Calendar
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                Coaches & Officials Meeting — September
              </h2>
              <p className="text-gray-300">
                We'll be hosting a coaches and officials meeting in September ahead of Fall League 2026. Date, time, and location are TBD — check back here or contact us for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rule Book + Volunteer */}
      <section className="py-4 pb-16 lg:pb-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Rule Book */}
            <motion.a
              href="https://nflflag.com/coaches/flag-football-rules"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gray-900 border border-gray-800 hover:border-brand-red/40 rounded-2xl p-8 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center mb-5">
                <BookOpen size={26} className="text-brand-red" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">NFL FLAG Rule Book</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Review the official NFL FLAG football rules covering gameplay, safety, and league guidelines.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red uppercase tracking-widest group-hover:text-red-400 transition-colors">
                View Rule Book <ExternalLink size={12} />
              </span>
            </motion.a>

            {/* Volunteer Sign Up */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-gray-900 border border-gray-800 hover:border-brand-gold/40 rounded-2xl p-8 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5">
                <HandHeart size={26} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">Volunteer Sign Up</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Interested in coaching or officiating? Football experience is helpful but not required — we'll train you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold uppercase tracking-widest hover:text-yellow-400 transition-colors"
              >
                Sign Up to Volunteer <ExternalLink size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
