import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, Star, Zap, type LucideProps } from 'lucide-react'
import type { Program } from '../../data/programs'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>

const icons: Record<string, LucideIcon> = {
  trophy: Trophy,
  star: Star,
  zap: Zap,
}

interface ProgramCardProps {
  program: Program
  index?: number
}

const colorMap: Record<string, string> = {
  'brand-red': 'from-brand-red/20 to-transparent border-brand-red/30 hover:border-brand-red/60',
  'brand-navy': 'from-brand-navy/30 to-transparent border-brand-navy/30 hover:border-brand-navy/60',
  'brand-gold': 'from-brand-gold/20 to-transparent border-brand-gold/30 hover:border-brand-gold/60',
}

const iconColorMap: Record<string, string> = {
  'brand-red': 'bg-brand-red/20 text-brand-red',
  'brand-navy': 'bg-brand-navy/40 text-blue-400',
  'brand-gold': 'bg-brand-gold/20 text-brand-gold',
}

const badgeColorMap: Record<string, string> = {
  'brand-red': 'bg-brand-red/20 text-brand-red border-brand-red/30',
  'brand-navy': 'bg-brand-navy/40 text-blue-400 border-blue-800/50',
  'brand-gold': 'bg-brand-gold/20 text-brand-gold border-brand-gold/30',
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  const Icon: LucideIcon = icons[program.icon] ?? Trophy

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/${program.slug}`}
        className={`block bg-gradient-to-b ${colorMap[program.color]} bg-gray-900 border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group h-full`}
      >
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl ${iconColorMap[program.color]} flex items-center justify-center`}>
            <Icon size={22} />
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColorMap[program.color]}`}>
            {program.gender} · Ages {program.ageRange}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-white mb-2">{program.name}</h3>
        <p className="text-sm font-semibold text-gray-400 mb-3">{program.tagline}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{program.description}</p>

        <ul className="space-y-2 mb-6">
          {program.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
              <div className={`w-1.5 h-1.5 rounded-full ${program.color === 'brand-gold' ? 'bg-brand-gold' : program.color === 'brand-navy' ? 'bg-blue-400' : 'bg-brand-red'}`} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
          Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}
