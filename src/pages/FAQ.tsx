import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import { faqs } from '../data/faqs'

type Category = 'all' | 'general' | 'nfl-flag' | 'girls-flag' | '7v7' | 'registration'

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Questions' },
  { key: 'general', label: 'General' },
  { key: 'nfl-flag', label: 'NFL FLAG' },
  { key: 'girls-flag', label: 'Girls Flag' },
  { key: '7v7', label: '7v7' },
  { key: 'registration', label: 'Registration' },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-800 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 bg-gray-900 hover:bg-gray-800/80 text-left transition-colors"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-sm sm:text-base leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 bg-gray-900 border-t border-gray-800">
              <p className="text-gray-400 text-sm leading-relaxed pt-4">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered = faqs.filter(
    (faq) => activeCategory === 'all' || faq.category === activeCategory,
  )

  return (
    <>
      <PageMeta
        title="FAQ"
        description="Frequently asked questions about Missouri EPIC Flag Football — programs, registration, age groups, equipment, and more."
        path="/faq"
        ogTitle="FAQ | Missouri EPIC Flag Football"
        ogDescription="Got questions about NFL FLAG, Girls Flag Football, or 7v7? Find answers here."
      />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-4">
              Frequently Asked
              <br />
              <span className="text-brand-red">Questions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Got questions? We've got answers. Can't find what you're looking for?{' '}
              <Link to="/contact" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === cat.key
                    ? 'bg-brand-red border-brand-red text-white'
                    : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 lg:py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <FAQItem key={faq.id} faq={faq} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">No questions found for this category.</div>
          )}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="Still Have Questions?"
            title="We're Here to Help"
            subtitle="Can't find the answer you're looking for? Reach out directly — we respond promptly."
            centered
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link
              to="/nfl-flag"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-semibold transition-colors py-3"
            >
              <LinkIcon size={16} />
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
