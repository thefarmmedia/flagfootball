import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../sections/CTASection'
import { programs } from '../data/programs'
import { siteConfig } from '../config/site'

const program = programs.find((p) => p.id === '7v7')!

export default function SevenOnSeven() {
  return (
    <>
      <PageMeta
        title="7v7 Competitive Football"
        description="Missouri EPIC 7v7 — elite competitive flag football for athletes ages 12–17 in Southwest Missouri. Year-round training, regional and national tournaments."
        path="/7v7"
        ogTitle="7v7 Competitive Football | Missouri EPIC"
        ogDescription="Elite. Fast. Competitive. Missouri EPIC 7v7 develops the best athletes in Southwest Missouri and competes at the highest level."
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/images/photos/jpg/40.webp")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                Competitive · Select Team · Ages {program.ageRange}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
              7v7
              <br />
              <span className="text-brand-gold">Competitive</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {program.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {siteConfig.season.sevenOnSeven.tryoutDate ? (
                <div className="btn-gold text-base px-8 py-4">
                  Tryouts: {siteConfig.season.sevenOnSeven.tryoutDate}
                </div>
              ) : (
                <Link to="/contact" className="btn-gold text-base px-8 py-4">
                  Tryout Interest Form <ArrowRight size={16} />
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
                eyebrow="The 7v7 Program"
                title="Elite Football <span class='text-brand-gold'>Development</span>"
                subtitle="This isn't a recreational league. Our 7v7 program is built for athletes who are serious about football and want to compete at the highest level."
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
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-brand-gold" />
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
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-gold font-black text-sm">{i + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tryout Info */}
      <section className="py-16 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">How to Join</h2>
          <p className="text-gray-400 mb-8">
            Our 7v7 teams are built through a competitive tryout process. Here's how to get on the radar:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '01', title: 'Submit Interest', desc: 'Fill out the tryout interest form so we can contact you with dates.' },
              { step: '02', title: 'Attend Tryout', desc: 'Show up ready to compete. We evaluate skill, football IQ, and coachability.' },
              { step: '03', title: 'Earn Your Spot', desc: 'Selected athletes join the team and begin training immediately.' },
            ].map((item) => (
              <div key={item.step} className="bg-gray-900 border border-brand-gold/20 rounded-xl p-5 text-left">
                <div className="text-brand-gold font-black text-3xl mb-2">{item.step}</div>
                <div className="text-white font-bold mb-2">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Compete at the Highest Level?"
        subtitle="Missouri EPIC 7v7 is for athletes who want more. Submit your tryout interest today."
        primaryLabel="Submit Tryout Interest"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
      />
    </>
  )
}
