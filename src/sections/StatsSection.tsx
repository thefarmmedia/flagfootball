import { motion } from 'framer-motion'
import { Users, Trophy, Star, Zap } from 'lucide-react'

const stats = [
  { icon: Users, value: '500K+', label: 'NFL FLAG Players Nationwide', color: 'text-brand-red' },
  { icon: Trophy, value: 'All 32', label: 'NFL Teams Represented', color: 'text-brand-gold' },
  { icon: Star, value: '#1', label: 'Fastest Growing Girls Sport', color: 'text-blue-400' },
  { icon: Zap, value: 'Elite', label: '7v7 Competition Level', color: 'text-brand-gold' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <stat.icon size={28} className={`${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl lg:text-4xl font-black ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
