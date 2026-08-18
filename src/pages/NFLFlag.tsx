import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, ExternalLink } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../sections/CTASection'
import { programs } from '../data/programs'
import { siteConfig } from '../config/site'

const program = programs.find((p) => p.id === 'nfl-flag')!

export default function NFLFlag() {
  return (
    <>
      <PageMeta
        title="NFL FLAG Football"
        description="Join Missouri EPIC's NFL FLAG program — the official youth flag football of the NFL. Coed leagues for ages 6–14 in Southwest Missouri."
        path="/nfl-flag"
        ogTitle="NFL FLAG Football | Missouri EPIC"
        ogDescription="Join the official NFL youth flag football program. Coed leagues for ages 6–14 in Southwest Missouri."
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-gray-950 to-gray-950" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
                Official NFL Program · Coed · Ages {program.ageRange}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
              NFL FLAG
              <br />
              <span className="text-brand-red">Football</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {program.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {siteConfig.registration.nflFlag ? (
                <a
                  href={siteConfig.registration.nflFlag}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-8 py-4"
                >
                  Register Now <ExternalLink size={16} />
                </a>
              ) : (
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Get Registration Updates <ArrowRight size={16} />
                </Link>
              )}
              <a
                href={siteConfig.registration.nflFlagFinder}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                Find Local Games <ExternalLink size={16} />
              </a>
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
                title="Everything Your Athlete Needs to <span class='text-brand-red'>Succeed</span>"
                subtitle="The NFL FLAG experience is unlike any other youth sports program. Here's what's included:"
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
                    <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-brand-red" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {program.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-red/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-red font-black text-sm">{i + 1}</span>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {siteConfig.season.nflFlag.ageGroups.map((group) => (
              <div
                key={group}
                className="bg-gray-900 border border-brand-red/30 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-black text-brand-red mb-1">{group}</div>
                <div className="text-xs text-gray-400 font-medium">Ages</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Play NFL FLAG?"
        subtitle="Join hundreds of young athletes already competing in Missouri EPIC's NFL FLAG program. Spots fill fast — register today."
        primaryLabel="Register for NFL FLAG"
        primaryHref={siteConfig.registration.nflFlag || '/contact'}
        secondaryLabel="Have Questions?"
        secondaryHref="/contact"
      />
    </>
  )
}
