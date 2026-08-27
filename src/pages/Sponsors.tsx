import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Award, Star, Zap, Users, Globe, ExternalLink } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import { sponsors } from '../data/sponsors'

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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-brand-gold" />
              <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.25em]">2026 Season</span>
            </div>
            <h1 className="font-display font-black text-white uppercase tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.0 }}>
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
      {sponsors.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Thank You"
              title="Our 2026 Sponsors"
              subtitle="These businesses believe in Southwest Missouri youth and make Missouri EPIC possible."
              centered
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor, i) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-gray-900 border border-gray-800 hover:border-brand-gold/40 rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col"
                >
                  {/* Logo area */}
                  <div className="flex-1 flex items-center justify-center p-8 bg-white rounded-t-2xl min-h-[180px]">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-36 max-w-full w-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-gray-700 font-bold text-xl text-center">{sponsor.name}</span>
                    )}
                  </div>

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between px-5 py-4 border-t border-gray-800">
                    <div>
                      <div className="text-white font-bold text-sm">{sponsor.name}</div>
                      <div className="text-xs uppercase tracking-widest text-brand-gold font-bold mt-0.5">
                        Missouri EPIC Partner
                      </div>
                    </div>
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-brand-gold transition-colors uppercase tracking-wider"
                        aria-label={`Visit ${sponsor.name} website`}
                      >
                        Visit <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  {/* Brand accent bar */}
                  <div className="h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-navy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Become a Sponsor CTA */}
      <section className="py-16 bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gray-950 border border-brand-gold/30 rounded-2xl p-10">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
              <Heart size={28} className="text-brand-gold" />
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              Become a Sponsor
            </h2>
            <p className="text-gray-400 mb-6">
              Join our community of local business partners and get your brand in front of hundreds of Southwest Missouri families every Tuesday night.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-400 text-gray-900 font-black uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:scale-105 text-sm">
              Inquire About Sponsorship
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 lg:py-28 bg-gray-950">
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
      <section className="py-20 lg:py-28 bg-gray-900/30 border-t border-gray-800">
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
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-400 text-gray-900 font-black uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:scale-105 text-sm">
              Inquire About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
