import { motion } from 'framer-motion'
import { ShoppingBag, Tag, ExternalLink } from 'lucide-react'
import { siteConfig } from '../config/site'

const { merchandise } = siteConfig

export default function MerchandiseSection() {
  return (
    <section className="py-16 lg:py-20 bg-black border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-brand-gold" />
              <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.25em]">Official Gear</span>
            </div>
            <h2 className="font-display font-black text-white uppercase tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.0 }}>
              NFL FLAG<br />
              <span className="text-brand-gold">Merchandise</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Gear up with official NFL FLAG merchandise. Shop cleats, gloves, training gear, and more — and save with Missouri EPIC's exclusive discount code.
            </p>

            {/* Promo code */}
            <div className="bg-gray-900 border border-brand-gold/30 rounded-xl p-5 mb-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <Tag size={18} className="text-brand-gold" />
              </div>
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Missouri EPIC Discount Code</div>
                <div className="text-brand-gold font-black text-2xl font-display tracking-widest">{merchandise.discountCode}</div>
                <div className="text-gray-500 text-xs">Use at checkout on the NFL FLAG Shop</div>
              </div>
            </div>

            <a
              href={merchandise.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 text-sm px-8 py-4"
            >
              <ShoppingBag size={16} />
              Shop NFL FLAG Gear
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {[6, 16, 26, 36].map((n) => (
              <div key={n} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={`/images/photos/jpg/${n}.jpg`}
                  alt="NFL FLAG gear"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
