import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Heart, Users, Shield } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../sections/CTASection'
import { siteConfig } from '../config/site'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We hold our athletes, coaches, and programs to the highest standard. Good enough is never good enough at Missouri EPIC.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'We are a Southwest Missouri organization. Our players, families, and coaches make up a tight-knit community that supports each other.',
  },
  {
    icon: Users,
    title: 'Inclusion',
    description: 'We believe every kid deserves to play. Our programs serve athletes of all skill levels, backgrounds, and abilities.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We teach our athletes to compete with honor, treat opponents with respect, and win with humility.',
  },
]

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Missouri EPIC Flag Football — who we are, what we stand for, and why we're Southwest Missouri's premier flag football organization."
        path="/about"
        ogTitle="About Missouri EPIC | Our Story & Mission"
        ogDescription="Southwest Missouri's premier flag football organization offering NFL FLAG, Girls Flag, and 7v7 programs for youth athletes."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/photos/jpg/30.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-red text-xs font-bold tracking-widest uppercase">
                Est. {siteConfig.organization.founded} · Southwest Missouri
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
              About
              <br />
              <span className="text-brand-red">Missouri EPIC</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We're more than a flag football organization. We're a community committed to developing the next generation of athletes, leaders, and champions across Southwest Missouri.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Terri */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
                <video
                  src="/videos/highlight2.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/photos/jpg/30.jpg"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-brand-gold" />
                <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.25em]">Meet the Founder</span>
              </div>
              <h2 className="font-display font-black text-white uppercase tracking-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.0 }}>
                Terri Crisler
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Missouri EPIC was built by Terri Crisler — a Southwest Missouri mom on a mission to bring world-class flag football to local kids. What started as a passion for youth athletics has grown into the region's most exciting flag football organization, partnered with NFL FLAG and rooted in community.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                "This is bigger than football — we're building a community around our kids." Terri's vision drives everything at Missouri EPIC: excellence on the field, character off it, and a league where every athlete belongs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:417-559-0669"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:opacity-80 transition-opacity"
                >
                  📞 417-559-0669
                </a>
                <a
                  href="mailto:missouriepic@aol.com"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:opacity-80 transition-opacity"
                >
                  ✉ missouriepic@aol.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Promotional cards / graphics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {[
              '61acd584-8564-45e1-91e0-66ded0120596.jfif',
              '8585a9a0-c17b-4a2c-be44-18e87937e3d7.jfif',
              'a3e86873-7d81-44c2-b53c-36a8209c999e.jfif',
              'd488ebb4-496a-4085-a534-851903a1c015.jfif',
              'e32938ed-daf2-4a10-9f61-c16ca2c08e78.jfif',
            ].map((file) => (
              <div key={file} className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
                <img
                  src={`/images/photos/jpg/${file}`}
                  alt="Missouri EPIC promotional graphic"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                eyebrow="Our Mission"
                title="Developing Champions <span class='gradient-text'>On and Off the Field</span>"
              />
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Missouri EPIC was founded with a simple belief: every young athlete in Southwest Missouri deserves access to high-quality, competitive flag football in a safe and positive environment.
                </p>
                <p>
                  We partner with the NFL FLAG program to bring the highest standard of youth flag football to our region, while also running a dedicated Girls Flag Football league and an elite 7v7 competitive program.
                </p>
                <p>
                  Our coaches are more than football instructors — they're mentors who invest in the development of each athlete as a person, teaching lessons that go far beyond the field.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >
              <img
                src="/images/logos/missouri-epic-logo.png"
                alt="Missouri EPIC"
                className="w-48 mx-auto mb-8 opacity-90"
              />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Programs', value: '3' },
                  { label: 'Age Groups', value: '6–17' },
                  { label: 'Location', value: 'SW Missouri' },
                  { label: 'Season', value: siteConfig.season.current },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-brand-gold mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="These values guide everything we do at Missouri EPIC — from how we coach to how we compete."
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={22} className="text-brand-red" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Our Programs"
            title="Three Paths to the Field"
            subtitle="Every athlete's journey is different. We offer three distinct programs so every player can find their place."
            centered
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { label: 'NFL FLAG Football', href: '/nfl-flag', color: 'bg-brand-red text-white' },
              { label: 'Girls Flag Football', href: '/girls-flag-football', color: 'bg-brand-navy text-white' },
              { label: '7v7 Competitive', href: '/7v7', color: 'bg-brand-gold text-gray-900' },
            ].map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className={`${p.color} font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity`}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
