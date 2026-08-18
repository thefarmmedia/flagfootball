import { motion } from 'framer-motion'
import { Shield, Award, Users, Zap, Heart, Globe } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

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
        <div className="mb-12 lg:mb-16">
          <SectionHeader
            eyebrow="Why Missouri EPIC"
            title="Built for <span class='gradient-text'>Champions</span>"
            subtitle="We don't just run leagues — we develop athletes, build character, and create lasting memories for families across Southwest Missouri."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <reason.icon size={20} className="text-brand-red" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
