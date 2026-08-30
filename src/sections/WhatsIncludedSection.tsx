import { motion } from 'framer-motion'
import { Shirt, Shield, Trophy, Users, Star, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'

const { registration } = siteConfig

const included = [
  {
    icon: Shirt,
    title: 'Official NFL FLAG Jersey',
    description: 'Your player keeps their authentic NFL FLAG jersey — officially licensed, their team\'s NFL colors.',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    icon: Shield,
    title: 'Flag Belt & Equipment',
    description: 'Official NFL FLAG belt and flags included — everything your player needs to hit the field.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
  },
  {
    icon: Trophy,
    title: '6 Weeks of Games',
    description: 'Full six-week season of Tuesday Night games at Ballparks of America — real NFL-style competition.',
    color: 'text-blue-400',
    bg: 'bg-blue-900/20',
  },
  {
    icon: Users,
    title: 'Coached & Organized',
    description: 'Experienced coaches, certified referees, and professional game organization every night.',
    color: 'text-green-400',
    bg: 'bg-green-900/20',
  },
  {
    icon: Star,
    title: 'NFL-Backed Program',
    description: 'Backed by all 32 NFL teams. The most widely played youth flag football league in America.',
    color: 'text-purple-400',
    bg: 'bg-purple-900/20',
  },
  {
    icon: ArrowRight,
    title: 'All Schools Welcome',
    description: 'No school affiliation required. Register individually and we\'ll place you on a team — or bring your whole school squad.',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
]

export default function WhatsIncludedSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red font-bold text-xs uppercase tracking-[0.25em]">Everything Included</span>
            <div className="w-8 h-px bg-brand-red" />
          </div>
          <h2 className="font-display font-black text-white uppercase tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.0 }}>
            What's in Your<br />
            <span className="text-brand-gold">Registration</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            One flat fee. No hidden costs. Your player walks on the field ready to play.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group"
            >
              <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                <item.icon size={20} className={item.color} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Two-column photo + how to register */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-3">
            {[5, 15, 35, 45].map((n) => (
              <div key={n} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={`/images/photos/jpg/${n}.webp`}
                  alt="Flag football"
                  width="1280"
                  height="1280"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display font-black text-white uppercase text-3xl mb-6">
              How Registration<br /><span className="text-brand-red">Works</span>
            </h3>
            <ol className="space-y-4">
              {[
                { step: '01', title: 'Click Register Now', desc: 'Hit the button below and you\'ll go directly to our PlayMetrics registration portal.' },
                { step: '02', title: 'Choose Your Player\'s Division', desc: 'Select the right age group: 8U, 10U, 12U, 14U, or 17U.' },
                { step: '03', title: 'Name a Coach or Teammates (Optional)', desc: 'Request a specific coach or teammates — we\'ll do our best to accommodate.' },
                { step: '04', title: 'Pay & You\'re In', desc: '$250 by Sept 4 (early bird) or $300 Sept 5–11. Registration closes September 11.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-display font-black text-brand-red text-2xl shrink-0 w-10">{item.step}</span>
                  <div>
                    <div className="text-white font-bold mb-0.5">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <a
                href={registration.nflFlag}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm px-8 py-4"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
