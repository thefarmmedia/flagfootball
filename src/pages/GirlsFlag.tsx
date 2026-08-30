import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, ExternalLink } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../sections/CTASection'
import { programs } from '../data/programs'
import { siteConfig } from '../config/site'

const program = programs.find((p) => p.id === 'girls-flag')!

export default function GirlsFlag() {
  return (
    <>
      <PageMeta
        title="Girls Flag Football"
        description="Missouri EPIC Girls Flag Football — a dedicated competitive league for girls ages 8–14 in Southwest Missouri. One of the fastest-growing youth sports programs in America."
        path="/girls-flag-football"
        ogTitle="Girls Flag Football | Missouri EPIC"
        ogDescription="Her game. Her field. Her time. Girls-only flag football competition for ages 8–14 in Southwest Missouri."
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/images/photos/jpg/60.webp")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                Girls Only · Ages {program.ageRange}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
              Girls Flag
              <br />
              <span className="text-blue-400">Football</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {program.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {siteConfig.registration.girlsFlag ? (
                <a
                  href={siteConfig.registration.girlsFlag}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-base"
                >
                  Register Now <ExternalLink size={16} />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-base"
                >
                  Get Registration Updates <ArrowRight size={16} />
                </Link>
              )}
              <Link to="/contact" className="btn-secondary text-base px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="What We Offer"
                title="A League Built <span class='text-blue-400'>For Her</span>"
                subtitle="Girls Flag Football at Missouri EPIC is more than a sport — it's a movement. Here's what your athlete gets:"
              />

              <ul className="mt-8 space-y-4">
                {program.features.map((feature) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-800/40 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/photos/jpg/64.webp"
                  alt="Girls flag football action"
                  width="1280"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover object-center"
                />
              </motion.div>
              {program.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-900/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-400 font-black text-sm">{i + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white text-center mb-8">Age Group Divisions</h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {siteConfig.season.girlsFlag.ageGroups.map((group) => (
              <div
                key={group}
                className="bg-gray-900 border border-blue-800/40 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-black text-blue-400 mb-1">{group}</div>
                <div className="text-xs text-gray-400 font-medium">Ages</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Girls Flag Football"
        subtitle="Be part of the fastest-growing girls sport in America. Missouri EPIC is leading the way in Southwest Missouri."
        primaryLabel="Register Now"
        primaryHref={siteConfig.registration.girlsFlag || '/contact'}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
