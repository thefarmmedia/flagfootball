import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Program } from '../../data/programs'

interface ProgramCardProps {
  program: Program
  index?: number
}

const photoMap: Record<string, string> = {
  'nfl-flag': '/images/photos/jpg/25.webp',
  'girls-flag': '/images/photos/jpg/63.webp',
  '7v7': '/images/photos/jpg/40.webp',
}

const accentMap: Record<string, { bar: string; badge: string; badgeText: string }> = {
  'brand-red': { bar: 'bg-brand-red', badge: 'bg-brand-red', badgeText: 'text-white' },
  'brand-navy': { bar: 'bg-brand-navy', badge: 'bg-brand-navy', badgeText: 'text-white' },
  'brand-gold': { bar: 'bg-brand-gold', badge: 'bg-brand-gold', badgeText: 'text-gray-900' },
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  const photo = photoMap[program.id]
  const accent = accentMap[program.color] ?? accentMap['brand-red']

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/${program.slug}`}
        className="block relative overflow-hidden h-[420px] lg:h-[460px] bg-gray-900"
        style={{ clipPath: 'inset(0)' }}
      >
        {/* Photo background */}
        {photo && (
          <img
            src={photo}
            alt={program.name}
            width="1280"
            height="1280"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        {/* Accent color bar at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${accent.bar} z-10`} />

        {/* Badge top-left */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`${accent.badge} ${accent.badgeText} text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1`}>
            {program.gender} · Ages {program.ageRange}
          </span>
        </div>

        {/* Content bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">
            {program.tagline}
          </p>
          <h3 className="font-display font-black text-white uppercase tracking-tight mb-3 leading-none"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {program.shortName}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
            {program.description}
          </p>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand-gold transition-colors duration-200">
            Learn More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
