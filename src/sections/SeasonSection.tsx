import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, Shield, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'

const { season } = siteConfig

export default function SeasonSection() {
  if (!season.nflFlag.registrationOpen) return null

  return (
    <section className="py-16 lg:py-20 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-950/60 border border-green-700/50 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
              Registration Now Open
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {season.nflFlag.name} <span className="text-brand-gold">{season.current}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Calendar, label: 'Dates', value: season.nflFlag.dates },
            { icon: Clock,    label: 'Game Day', value: season.nflFlag.gameDay },
            { icon: Shield,   label: 'Season', value: season.nflFlag.weeks },
            { icon: MapPin,   label: 'Location', value: season.nflFlag.location },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 text-center"
            >
              <Icon size={20} className="text-brand-red mx-auto mb-2" />
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{label}</div>
              <div className="text-white font-bold text-sm leading-snug">{value}</div>
            </motion.div>
          ))}
        </div>

        {/* Age divisions */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-5">
            <Users size={18} className="text-brand-gold" />
            <h3 className="text-white font-extrabold text-lg">Age Divisions</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {season.nflFlag.ageGroups.map((age) => {
              const isCoed = season.nflFlag.coedGroups.includes(age)
              return (
                <div
                  key={age}
                  className={`flex flex-col items-center px-5 py-3 rounded-xl border font-bold ${
                    isCoed
                      ? 'bg-brand-navy/30 border-blue-700/40 text-blue-300'
                      : 'bg-brand-red/10 border-brand-red/30 text-white'
                  }`}
                >
                  <span className="text-xl">{age}</span>
                  {isCoed && (
                    <span className="text-xs text-blue-400 font-semibold mt-0.5">Coed</span>
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-gray-500 text-xs mt-3">
            {season.nflFlag.coedGroups.join(' & ')} divisions are coed. All other divisions are open to all athletes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          {siteConfig.registration.nflFlag ? (
            <a href={siteConfig.registration.nflFlag} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4">
              Register Now <ArrowRight size={16} />
            </a>
          ) : (
            <Link to="/contact" className="btn-primary px-8 py-4">
              Sign Up for Registration Updates <ArrowRight size={16} />
            </Link>
          )}
          <Link to="/nfl-flag" className="btn-secondary px-6 py-4">
            Learn About NFL FLAG
          </Link>
        </div>

        {season.nflFlag.openToAllSchools && (
          <p className="text-center text-gray-500 text-xs mt-5">
            All Schools Invited · Open to All Athletes Regardless of School
          </p>
        )}
      </div>
    </section>
  )
}
