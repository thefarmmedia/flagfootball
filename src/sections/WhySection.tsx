import { motion } from 'framer-motion'
import { Shield, Award, Users, Zap, Heart, Globe } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const stats = [
  { number: '32', label: 'NFL Teams Backing Us' },
  { number: '3', label: 'Programs for Every Athlete' },
  { number: '6–17', label: 'Ages Welcome' },
  { number: '#1', label: 'SW Missouri Flag Org' },
]

const reasons = [
  {
    icon: Shield,
    title: 'Safe & Competitive',
    description: 'Flag football removes the contact but keeps every bit of the competition. Your athlete learns real football skills in a safer environment.',
  },
  {
    icon: Award,
    title: 'NFL-Backed Program',
    description: 'We run the official NFL FLAG program — the most widely played youth flag football league in America, backed by all 32 NFL teams.',
  },
  {
    icon: Users,
    title: 'For Everyone',
    description: 'Coed NFL FLAG, girls-only competition, and elite 7v7. From first-timers to elite athletes, there\'s a place for every player.',
  },
  {
    icon: Zap,
    title: 'Elite Coaching',
    description: 'Our coaches are certified, experienced, and passionate about developing young athletes — both on the field and as people.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We\'re a Southwest Missouri organization built for Southwest Missouri families. Your community. Your team.',
  },
  {
    icon: Globe,
    title: 'Pathway to More',
    description: 'NFL FLAG opens doors. Girls Flag is one of the fastest-growing paths to high school and collegiate football. 7v7 builds elite recruits.',
  },
]

export default function WhySection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-16 border border-gray-800 divide-x divide-gray-800 divide-y lg:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center justify-center py-8 px-4 bg-gray-900/60 hover:bg-gray-900 transition-colors text-center"
            >
              <span
                className="font-display font-black text-brand-red leading-none mb-1"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {stat.number}
              </span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mb-12 lg:mb-16">
          <SectionHeader
            eyebrow="Why Missouri EPIC"
            title="Built for <span class='gradient-text'>Champions</span>"
            subtitle="We don't just run leagues — we develop athletes, build character, and create lasting memories for families across Southwest Missouri."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="bg-gray-950 hover:bg-gray-900 p-8 transition-colors group border-b border-gray-800 lg:border-b-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-brand-red shrink-0" />
                <reason.icon size={18} className="text-brand-red" />
              </div>
              <h3 className="font-display font-black text-white uppercase tracking-wide text-xl mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
