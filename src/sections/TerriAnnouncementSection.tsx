import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function TerriAnnouncementSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-950 border border-gray-700 shadow-2xl">
              <video
                src="/videos/terri.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/images/photos/jpg/25.jpg"
                className="w-full aspect-video object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-brand-red" />
              <span className="text-brand-red font-bold text-xs uppercase tracking-[0.25em]">From the Founder</span>
            </div>
            <h2 className="font-display font-black text-white uppercase tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.0 }}>
              A Message<br />
              <span className="text-brand-gold">from Terri</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hear directly from Terri Crisler — founder of Missouri EPIC — with an important announcement about Fall League 2025 and what makes this season special for Southwest Missouri families.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 italic">
              "This is bigger than football — we're building a community around our kids."
            </p>
            <a
              href={siteConfig.registration.nflFlag}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-black uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:scale-105 text-sm"
            >
              Register Now <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
