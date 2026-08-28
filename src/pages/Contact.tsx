import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import { siteConfig } from '../config/site'
import { trackEvent } from '../utils/analytics'

type FormType = 'general' | 'nfl-flag' | 'girls-flag' | '7v7' | 'sponsor'

const formOptions: { key: FormType; label: string; netlifyName: string; color: string }[] = [
  { key: 'general', label: 'General Contact', netlifyName: 'contact-general', color: 'border-gray-600 text-gray-300' },
  { key: 'nfl-flag', label: 'NFL FLAG Questions', netlifyName: 'contact-nfl-flag', color: 'border-brand-red/50 text-brand-red' },
  { key: 'girls-flag', label: 'Girls Flag Football', netlifyName: 'contact-girls-flag', color: 'border-blue-700/50 text-blue-400' },
  { key: '7v7', label: '7v7 Tryout Interest', netlifyName: 'contact-7v7', color: 'border-brand-gold/50 text-brand-gold' },
  { key: 'sponsor', label: 'Sponsorship Inquiry', netlifyName: 'contact-sponsor', color: 'border-purple-700/50 text-purple-400' },
]

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const defaultForm: FormState = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [activeForm, setActiveForm] = useState<FormType>('general')
  const [form, setForm] = useState<FormState>(defaultForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const currentForm = formOptions.find((f) => f.key === activeForm)!

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const body = new URLSearchParams({
        'form-name': currentForm.netlifyName,
        ...form,
      })

      const [netlifyResult, webhookResult] = await Promise.allSettled([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        }),
        fetch(siteConfig.integrations.leadWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formType: currentForm.label, ...form }),
        }),
      ])

      const netlifyOk = netlifyResult.status === 'fulfilled' && netlifyResult.value.ok
      const webhookOk = webhookResult.status === 'fulfilled' && webhookResult.value.ok

      if (!netlifyOk) {
        console.error(
          '[Contact] Netlify form submit failed:',
          netlifyResult.status === 'rejected' ? netlifyResult.reason : netlifyResult.value.status,
        )
      }
      if (!webhookOk) {
        console.error(
          '[Contact] lead webhook failed:',
          webhookResult.status === 'rejected' ? webhookResult.reason : webhookResult.value.status,
        )
      }

      // The lead webhook is the primary capture path — treat either succeeding as success.
      if (!netlifyOk && !webhookOk) {
        throw new Error('Both form submission and lead webhook failed')
      }

      setStatus('success')

      // Track conversion event
      const eventMap: Record<FormType, Parameters<typeof trackEvent>[0]> = {
        general: 'contact_submit',
        'nfl-flag': 'register_nfl_flag',
        'girls-flag': 'register_girls_flag',
        '7v7': 'seven_on_seven_inquiry',
        sponsor: 'sponsor_inquiry',
      }
      trackEvent(eventMap[activeForm])
      setForm(defaultForm)
    } catch (err) {
      console.error('[Contact] submit error:', err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Contact Missouri EPIC Flag Football — questions about NFL FLAG, Girls Flag Football, 7v7, sponsorships, or general inquiries. We respond promptly."
        path="/contact"
        ogTitle="Contact Missouri EPIC | Get in Touch"
        ogDescription="Questions about NFL FLAG, Girls Flag Football, 7v7, or sponsorships? Contact Missouri EPIC today."
      />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-4">
              Get in
              <br />
              <span className="text-brand-red">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Questions about our programs, registration, sponsorships, or anything else? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-extrabold text-white mb-6">Contact Information</h2>
              <div className="space-y-5">
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    onClick={() => trackEvent('phone_click')}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                      <Phone size={18} className="text-brand-red" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Phone</div>
                      <div className="text-white font-semibold group-hover:text-brand-gold transition-colors">
                        {siteConfig.contact.phone}
                      </div>
                    </div>
                  </a>
                )}
                {siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    onClick={() => trackEvent('email_click')}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                      <Mail size={18} className="text-brand-red" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Email</div>
                      <div className="text-white font-semibold group-hover:text-brand-gold transition-colors">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>
                )}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center">
                    <MapPin size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Location</div>
                    <div className="text-white font-semibold">{siteConfig.contact.address}</div>
                  </div>
                </div>
              </div>

              {(!siteConfig.contact.phone && !siteConfig.contact.email) && (
                <div className="mt-4 p-4 bg-gray-900 border border-gray-800 rounded-xl">
                  <p className="text-gray-400 text-sm">
                    Use the form to send us a message — we respond within 1–2 business days.
                  </p>
                </div>
              )}

              {/* Form type selector */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                  I'm contacting about:
                </h3>
                <div className="space-y-2">
                  {formOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setActiveForm(opt.key)
                        setStatus('idle')
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                        activeForm === opt.key
                          ? `${opt.color} bg-white/5`
                          : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-900 border border-green-800/50 rounded-2xl p-10 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-extrabold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thanks for reaching out. We'll get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-extrabold text-white">{currentForm.label}</h2>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${currentForm.color} bg-white/5`}>
                      {activeForm === 'sponsor' ? 'Partnership' : activeForm === '7v7' ? 'Tryout' : 'Inquiry'}
                    </span>
                  </div>

                  {/* Netlify form detection — required for static form discovery */}
                  <form name={currentForm.netlifyName} data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="tel" name="phone" />
                    <input type="text" name="subject" />
                    <textarea name="message" />
                  </form>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <div className="hidden">
                      <label>
                        Don't fill this out if you're human:
                        <input name="bot-field" />
                      </label>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1.5">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full bg-gray-800 border border-gray-700 focus:border-brand-red rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1.5">
                          Email Address <span className="text-brand-red">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full bg-gray-800 border border-gray-700 focus:border-brand-red rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(417) 555-0100"
                          className="w-full bg-gray-800 border border-gray-700 focus:border-brand-red rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-1.5">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder={
                            activeForm === 'nfl-flag'
                              ? 'NFL FLAG registration question'
                              : activeForm === 'girls-flag'
                              ? 'Girls Flag Football interest'
                              : activeForm === '7v7'
                              ? '7v7 tryout inquiry'
                              : activeForm === 'sponsor'
                              ? 'Sponsorship inquiry'
                              : 'Your subject'
                          }
                          className="w-full bg-gray-800 border border-gray-700 focus:border-brand-red rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Message <span className="text-brand-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={
                          activeForm === '7v7'
                            ? "Tell us about your athlete — age, position, football experience..."
                            : activeForm === 'sponsor'
                            ? "Tell us about your business and what you're looking for in a sponsorship..."
                            : "Tell us how we can help..."
                        }
                        className="w-full bg-gray-800 border border-gray-700 focus:border-brand-red rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-4 bg-red-950/50 border border-red-800/50 rounded-lg">
                        <AlertCircle size={16} className="text-red-400 shrink-0" />
                        <p className="text-red-400 text-sm">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      We typically respond within 1–2 business days.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
