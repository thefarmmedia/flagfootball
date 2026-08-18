import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <div className="text-brand-red font-bold text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2
        className={`section-title ${light ? 'text-white' : 'text-white'}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className={`section-subtitle mt-4 ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-400' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
