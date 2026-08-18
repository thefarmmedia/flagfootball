import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Award, Star, Zap, Users, Globe } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import { sponsors, sponsorTiers } from '../data/sponsors'

const sponsorBenefits = [
  {
    icon: Users,
    title: 'Family Reach',
    description: 'Get your brand in front of hundreds of engaged Southwest Missouri families at every event.',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Show your community that your business invests in youth, sports, and local development.',
  },
  {
    icon: Award,
    title: 'Brand Visibility',
    description: 'Logo placement on jerseys, banners, website, and social media throughout the season.',
  },
  {
    icon: Globe,
    title: 'Digital Presence',
    description: 'Featured placement on our website and mentions across our growing social channels.',
  },
  {
    icon: Star,
    title: 'Event Exposure',
    description: 'Your brand front and center at games, tournaments, and special events.',
  },
  {
    icon: Zap,
    title: 'Announcements',
    description: 'Verbal recognition at games and events, reaching athletes and their families.',
  },
]

const tiers = [
  {
    key: 'title' as const,
    name: 'Title Sponsor',
    price: 'Contact for Pricing',
    color: 'from-brand-gold/20 to-transparent border-brand-gold/40',
    badge: 'bg-brand-gold/20 text-brand-gold border-brand-gold/40',
    perks: [
      'Name in organization title ("Presented by")',
      'Jersey front logo placement',
      'Website header feature',
      'All event signage',
      'Social media partnership',
      'Dedicated sponsor spotlight',
      'VIP event access',
    ],
  },
  {
    key: 'gold' as const,
    name: 'Gold Sponsor',
    price: 'Contact for Pricing',
    color: 'from-brand-gold/10 to-transparent border-brand-gold/20',
    badge: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
    perks: [
      'Website sponsor page feature',
      'Game banner placement',
      'Social media recognition',
      'Jersey sleeve logo',
      'Season announcement',
    ],
  },
  {
    key: 'silver' as const,
    name: 'Silver Sponsor',
    price: 'Contact for Pricing',
    color: 'from-gray-400/10 to-transparent border-gray-600/30',
    badge: 'bg-gray-700/30 text-gray-300 border-gray-600/30',
    perks: [
      'Website logo listing',
      'Event signage',
      'Social media thank you',
      'Season announcement',
    ],
  },
  {
    key: 'bronze' as const,
    name: 'Community Partner',
    price: 'Contact for Pricing',
    color: 'from-amber-700/10 to-transparent border-amber-700/20',
    badge: 'bg-amber-900/20 text-amber-500 border-amber-700/20',
    perks: [
      'Website logo listing',
      'Social media recognition',
    ],
  },
]

export default function Sponsors() {
  const groupedSponsors = tiers.reduce((acc, tier) => {
    acc[tier.key] = sponsors.filter((s) => s.tier === tier.key)
    return acc
  }, {} as Record<string, typeof sponsors>)

  const hasSponsors = sponsors.length > 0

  return (
    <>
      <PageMeta
        title="Sponsors & Partners"
        description="Support Missouri EPIC Flag Football by becoming a sponsor. Connect your brand with Southwest Missouri youth sports and help us build the next generation of athletes."
        path="/sponsors"
        ogTitle="Sponsors & Partners | Missouri EPIC"
        ogDescription="Become a sponsor of Missouri EPIC and get your brand in front of hundreds of Southwest Missouri families."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-gray-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Sponsors &<br />
              <span className="text-brand-gold">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Missouri EPIC is made possible by the generous support of local businesses and community partners who believe in youth athletics.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      {hasSponsors ? (
        <section className="py-16 lg:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Thank You"
              title="Our Amazing Sponsors"
              centered
            />
            <div className="mt-12 space-y-12">
              {tiers.map((tier) => {
                const tierSponsors = groupedSponsors[tier.key]
                if (!tierSponsors || tierSponsors.length === 0) return null
                const tierInfo = sponsorTiers[tier.key]
                return (
                  <div key={tier.key}>
                    <h3 className={`text-center font-bold text-lg mb-6 ${tierInfo.color}`}>
                      {tierInfo.label}
                    </h3>
                    <div className={`flex flex-wrap justify-center gap-6 ${tierInfo.size === 'large' ? 'items-center' : ''}`}>
                      {tierSponsors.map((sponsor) => (
                        <div key={sponsor.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center justify-center">
                          {sponsor.logo ? (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 w-auto object-contain" />
                          ) : (
                            <span className="text-white font-bold text-lg">{sponsor.name}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 bg-gray-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">
              <Heart size={36} className="text-brand-gold mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">Be Our First Sponsor</h2>
              <p className="text-gray-400 mb-6">
                We're actively seeking community partners for our upcoming season. Your support directly funds equipment, facilities, and scholarships for young athletes.
              </p>
              <Link to="/contact" className="btn-gold">
                Become a Sponsor
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Sponsor */}
      <section className="py-20 lg:py-28 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Sponsor"
            title="Invest in Your Community"
            subtitle="Sponsoring Missouri EPIC isn't just good marketing — it's a genuine investment in the youth of Southwest Missouri."
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <benefit.icon size={20} className="text-brand-gold mb-3" />
                <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sponsorship Opportunities"
            title="Find the Right Package"
            subtitle="We offer multiple sponsorship tiers to fit any budget. Contact us to customize a package for your business."
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-b ${tier.color} bg-gray-900 border rounded-2xl p-6`}
              >
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${tier.badge} mb-4 inline-block`}>
                  {tier.name}
                </span>
                <div className="text-white font-bold text-sm mb-4">{tier.price}</div>
                <ul className="space-y-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-brand-gold mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-gold">
              Inquire About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
