import { useState } from 'react'
import { AlertCircle, CalendarDays, CheckCircle, Clock3, MapPin, PartyPopper, Trophy } from 'lucide-react'
import PageMeta from '../components/ui/PageMeta'
import { trackEvent } from '../utils/analytics'

type FormState = {
  coachName: string
  teamName: string
  email: string
  phone: string
  division: string
  cityState: string
  notes: string
}

const initialForm: FormState = {
  coachName: '',
  teamName: '',
  email: '',
  phone: '',
  division: '',
  cityState: '',
  notes: '',
}

const tournamentWebhookUrl = 'https://services.leadconnectorhq.com/hooks/qqwYX3OhtMdj6AoCfpXC/webhook-trigger/5113b4dc-ff8c-492d-a0aa-249d5a779091'

export default function Tournaments() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const payload = {
      formType: 'Halloween Freaky Football Bowl Pre-Registration',
      event: 'Halloween Freaky Football Bowl',
      eventDate: 'October 31',
      ...form,
    }

    try {
      const netlifyBody = new URLSearchParams({
        'form-name': 'halloween-freaky-football-pre-register',
        ...form,
      })

      const [netlifyResult, webhookResult] = await Promise.allSettled([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyBody.toString(),
        }),
        fetch(tournamentWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
      ])

      const netlifyOk = netlifyResult.status === 'fulfilled' && netlifyResult.value.ok
      const webhookOk = webhookResult.status === 'fulfilled' && webhookResult.value.ok
      if (!netlifyOk && !webhookOk) throw new Error('Pre-registration submission failed')

      trackEvent('tournament_pre_register', { event: 'Halloween Freaky Football Bowl' })
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      console.error('[Tournament] pre-registration error:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <PageMeta
        title="Halloween Freaky Football Bowl | Missouri EPIC Tournaments"
        description="Pre-register for the Halloween Freaky Football Bowl on October 31 at Ballparks of America in Branson, Missouri. A one-day Missouri EPIC flag football tournament with costumes, prizes and Halloween fun."
        path="/tournaments"
        ogTitle="Halloween Freaky Football Bowl — Branson, MO"
        ogDescription="One day. One field. One freaky EPIC experience. October 31 at Ballparks of America in Branson. Pre-register your team now."
      />

      <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,.23),transparent_28%),radial-gradient(circle_at_85%_60%,rgba(80,255,0,.10),transparent_32%),linear-gradient(145deg,#050505,#190d04_48%,#050505)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-orange-400/40 bg-orange-500/10 px-3 py-1.5 text-xs font-black tracking-[.2em] uppercase text-orange-300 mb-5">
              <Trophy size={15} /> Missouri EPIC Tournaments
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[.84] font-black uppercase text-white text-shadow-xl">
              Halloween
              <span className="block text-orange-400">Freaky Football Bowl</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-300 font-semibold">
              One day. One field. One freaky EPIC experience — flag football, Halloween costumes, prizes, music and more in Branson.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                <CalendarDays className="text-orange-400 shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Date</div><div className="font-black text-white">October 31</div></div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                <MapPin className="text-lime-400 shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Location</div><div className="font-black text-white">Ballparks of America, Branson</div></div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                <Clock3 className="text-brand-gold shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Format</div><div className="font-black text-white">One-Day Tournament</div></div>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 flex gap-3">
                <PartyPopper className="text-brand-red shrink-0" />
                <div><div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Experience</div><div className="font-black text-white">Football + Halloween Fun</div></div>
              </div>
            </div>

            <a href="#pre-register" className="mt-8 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-black px-7 py-4 font-black uppercase tracking-wider transition-colors">
              Pre-Register Your Team
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/tournaments/halloween-freaky-football-bowl-flyer.webp"
            alt="Halloween Freaky Football Bowl flyer — Friday, October 31 at Ballparks of America, Branson, Missouri. 3v3 flag and 7v7 divisions for all ages, early bird pricing $295/team before October 2, $325/team October 2–23. Team costume contest, prizes, food, music. Presented by Missouri EPIC Tournaments."
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-orange-500/20 shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-gray-950 py-16 lg:py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="text-orange-400 font-black uppercase tracking-widest text-xs mb-3">Tournament Play</div>
              <h2 className="text-2xl font-black text-white">Pool Play + Bracket</h2>
              <p className="mt-3 text-gray-400">Two pool games followed by a single-elimination bracket, with 25-minute games.</p>
            </div>
            <div className="card p-6">
              <div className="text-lime-400 font-black uppercase tracking-widest text-xs mb-3">Halloween</div>
              <h2 className="text-2xl font-black text-white">Team Costume Contest</h2>
              <p className="mt-3 text-gray-400">Bring the energy. Team costumes, Halloween atmosphere, fun prizes and more throughout the event.</p>
            </div>
            <div className="card p-6">
              <div className="text-brand-gold font-black uppercase tracking-widest text-xs mb-3">Team Pricing</div>
              <h2 className="text-2xl font-black text-white">$295 Early Bird</h2>
              <p className="mt-3 text-gray-400">$295 per team before October 2 and $325 per team for regular registration through October 23.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pre-register" className="relative bg-black py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-orange-400 text-xs font-black uppercase tracking-[.22em]">Pre-Registration</div>
            <h2 className="section-title mt-3">Get Your Team on the List</h2>
            <p className="section-subtitle mx-auto mt-4">This is a simple interest form, not payment or final registration. Missouri EPIC will follow up with the official registration link and tournament details.</p>
          </div>

          {status === 'success' ? (
            <div className="max-w-2xl mx-auto border border-green-700/50 bg-green-950/30 p-8 text-center">
              <CheckCircle size={50} className="mx-auto text-green-400 mb-4" />
              <h3 className="text-3xl font-black text-white uppercase">You're on the list!</h3>
              <p className="mt-3 text-gray-300">We received your team information. Missouri EPIC will follow up when official tournament registration is ready.</p>
              <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">Pre-Register Another Team</button>
            </div>
          ) : (
            <div className="border border-gray-800 bg-gray-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
              <form name="halloween-freaky-football-pre-register" data-netlify="true" hidden>
                <input name="coachName" />
                <input name="teamName" />
                <input name="email" />
                <input name="phone" />
                <input name="division" />
                <input name="cityState" />
                <textarea name="notes" />
              </form>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block text-sm font-bold text-gray-300">Coach / Contact Name <span className="text-brand-red">*</span>
                    <input name="coachName" required value={form.coachName} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="Coach name" />
                  </label>
                  <label className="block text-sm font-bold text-gray-300">Team Name <span className="text-brand-red">*</span>
                    <input name="teamName" required value={form.teamName} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="Team / organization" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block text-sm font-bold text-gray-300">Email <span className="text-brand-red">*</span>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="coach@example.com" />
                  </label>
                  <label className="block text-sm font-bold text-gray-300">Phone <span className="text-brand-red">*</span>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="(417) 555-0100" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block text-sm font-bold text-gray-300">Division / Program <span className="text-brand-red">*</span>
                    <select name="division" required value={form.division} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400">
                      <option value="">Select one</option>
                      <option value="5v5 Flag">5v5 Flag</option>
                      <option value="7v7 Boys">7v7 Boys</option>
                      <option value="7v7 Girls Flag">7v7 Girls Flag</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>
                  <label className="block text-sm font-bold text-gray-300">City / State
                    <input name="cityState" value={form.cityState} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400" placeholder="Springfield, MO" />
                  </label>
                </div>

                <label className="block text-sm font-bold text-gray-300">Age Group / Notes
                  <textarea name="notes" rows={4} value={form.notes} onChange={handleChange} className="mt-2 w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-orange-400 resize-none" placeholder="Age group, number of teams, questions, etc." />
                </label>

                {status === 'error' && (
                  <div className="flex items-center gap-2 border border-red-800/50 bg-red-950/40 p-4 text-red-300 text-sm">
                    <AlertCircle size={18} /> We couldn't submit the form. Please try again or contact Missouri EPIC directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'} className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-black font-black uppercase tracking-wider px-6 py-4 transition-colors">
                  {status === 'submitting' ? 'Sending...' : 'Pre-Register My Team'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
