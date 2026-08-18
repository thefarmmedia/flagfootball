import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, ExternalLink, Calendar, MapPin, Clock, Users, Shield } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../sections/CTASection'
import { programs } from '../data/programs'
import { siteConfig } from '../config/site'

const program = programs.find((p) => p.id === 'nfl-flag')!
const { season } = siteConfig

export default function NFLFlag() {
  return (
    <>
      <PageMeta
        title="NFL FLAG Football"
        description={`Missouri EPIC NFL FLAG Fall League — Tuesday Nights ${season.nflFlag.dates} at ${season.nflFlag.location}. Ages ${season.nflFlag.ageGroups.join(', ')}. Registration open!`}
        path="/nfl-flag"
        ogTitle="NFL FLAG Football | Missouri EPIC"
        ogDescription={`NFL FLAG Fall League in Branson, MO. ${season.nflFlag.dates}, Tuesday Nights. Ages 8U–17U. Registration open now!`}
      />

      {/* Page Hero with photo background */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/images/photos/2.png")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-950/80 border border-green-700/50 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
                Registration Open · Coed · Ages {season.nflFlag.ageGroups.join(' · ')}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4">
              NFL FLAG
              <br />
              <span className="text-brand-red">Football</span>
            </h1>

            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl">
              {program.longDescription}
            </p>

            {/* Season quick facts */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Calendar, text: season.nflFlag.dates },
                { icon: Clock,    text: season.nflFlag.gameDay },
                { icon: Shield,   text: season.nflFlag.weeks },
                { icon: MapPin,   text: season.nflFlag.location },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 font-medium">
                  <Icon size={13} className="text-brand-red shrink-0" />
                  {text}
                </div>
              ))}
            </div>

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

      {/* Age Divisions */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Users size={20} className="text-brand-gold" />
            <h2 className="text-xl font-extrabold text-white">Age Divisions</h2>
            <span className="text-xs text-gray-500 font-medium ml-1">— {season.nflFlag.coedGroups.join(' & ')} are coed; all others open to all</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {season.nflFlag.ageGroups.map((age) => {
              const isCoed = season.nflFlag.coedGroups.includes(age)
              return (
                <div
                  key={age}
                  className={`flex flex-col items-center px-6 py-4 rounded-xl border font-bold ${
                    isCoed
                      ? 'bg-brand-navy/30 border-blue-700/40 text-blue-300'
                      : 'bg-brand-red/10 border-brand-red/30 text-white'
                  }`}
                >
                  <span className="text-2xl">{age}</span>
                  {isCoed && <span className="text-xs text-blue-400 font-semibold mt-0.5">Coed</span>}
                </div>
              )
            })}
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
                {season.nflFlag.flagsIncluded && (
                  <motion.li
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-brand-red" />
                    </div>
                    Flags Included — no extra gear needed
                  </motion.li>
                )}
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
                  src="/images/photos/5.png"
                  alt="Flag football action"
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

      <CTASection
        title="Ready to Play NFL FLAG?"
        subtitle={`Fall League runs ${season.nflFlag.dates}, ${season.nflFlag.gameDay} at ${season.nflFlag.location}. Spots fill fast.`}
        primaryLabel="Register for NFL FLAG"
        primaryHref={siteConfig.registration.nflFlag || '/contact'}
        secondaryLabel="Have Questions?"
        secondaryHref="/contact"
      />
    </>
  )
}
