import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { User, Award } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../sections/CTASection'
import { coaches } from '../data/coaches'

export default function Coaches() {
  return (
    <>
      <PageMeta
        title="Our Coaches"
        description="Meet the Missouri EPIC coaching staff — experienced, certified coaches dedicated to developing young athletes in NFL FLAG, Girls Flag Football, and 7v7."
        path="/coaches"
        ogTitle="Meet Our Coaches | Missouri EPIC"
        ogDescription="Experienced, certified coaches dedicated to developing young athletes in Southwest Missouri."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/photos/6.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Meet Our
              <br />
              <span className="text-brand-red">Coaching Staff</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our coaches bring football expertise and a passion for youth development. They're more than coaches — they're mentors who invest in every athlete.
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16 lg:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {coaches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coaches.map((coach, i) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
                >
                  {/* Coach Image or Placeholder */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-square flex items-center justify-center">
                    {coach.image ? (
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-gray-700">
                        <User size={48} />
                        <span className="text-xs font-semibold tracking-wider">PHOTO COMING SOON</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold text-brand-red tracking-widest uppercase mb-1">
                      {coach.program}
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-0.5">{coach.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{coach.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{coach.bio}</p>
                    {coach.certifications && coach.certifications.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {coach.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="inline-flex items-center gap-1 text-xs bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full px-2.5 py-1"
                          >
                            <Award size={10} />
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <User size={32} className="text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Coaching Staff Coming Soon</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                We're assembling an incredible coaching staff. Check back soon or contact us to learn more about our coaches.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Join the Team"
            title="Interested in Coaching?"
            subtitle="We're always looking for passionate coaches and volunteers. Football experience is helpful but not required — we'll train you."
            centered
          />
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Apply to Coach
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
