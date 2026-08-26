import { motion } from 'framer-motion'
import { School, Award, Flag, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: School,
    title: 'Schools',
    headline: 'Build Your School\'s Team',
    description: 'Coaches and parents — organize your school\'s players, register together, and compete as a unit. Open to every school in Southwest Missouri. No affiliation required.',
    cta: 'Register Your School',
    ctaHref: '/nfl-flag',
    color: 'border-brand-red/50',
    accent: 'text-brand-red',
    photo: '/images/photos/jpg/60.jpg',
  },
  {
    icon: Award,
    title: 'Coaches',
    headline: 'Volunteer to Coach',
    description: 'Help shape the next generation of athletes. We need passionate volunteer coaches for all age groups. No prior coaching experience required — we\'ll train you.',
    cta: 'Become a Coach',
    ctaHref: '/contact',
    color: 'border-brand-gold/50',
    accent: 'text-brand-gold',
    photo: '/images/photos/jpg/65.jpg',
  },
  {
    icon: Flag,
    title: 'Referees',
    headline: 'Officiate the Game',
    description: 'Referees needed for Tuesday Night games. A great opportunity to stay involved in the sport and earn extra income while supporting youth athletics.',
    cta: 'Apply to Referee',
    ctaHref: '/contact',
    color: 'border-blue-600/50',
    accent: 'text-blue-400',
    photo: '/images/photos/jpg/70.jpg',
  },
]

export default function CommunitySection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900/40 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.25em]">Community</span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-display font-black text-white uppercase tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.0 }}>
            Bigger Than Football
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            We're building a community around our kids. Missouri EPIC is a place for every school, every family, and every person who wants to invest in Southwest Missouri youth.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart size={16} className="text-brand-red" />
            <span className="text-brand-red font-bold text-sm italic">
              "This is bigger than football — we're building a community around our kids."
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gray-950 border ${pillar.color} rounded-2xl overflow-hidden group hover:scale-[1.01] transition-transform`}
            >
              {/* Photo */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={pillar.photo}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <pillar.icon size={16} className={pillar.accent} />
                  <span className={`font-display font-black uppercase tracking-widest text-xs ${pillar.accent}`}>{pillar.title}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-black text-xl mb-3">{pillar.headline}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{pillar.description}</p>
                <Link
                  to={pillar.ctaHref}
                  className={`text-xs font-bold uppercase tracking-widest ${pillar.accent} hover:opacity-80 transition-opacity flex items-center gap-1`}
                >
                  {pillar.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
