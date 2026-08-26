import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { trackEvent } from '../utils/analytics'

const { contact } = siteConfig

export default function ContactBannerSection() {
  return (
    <section className="py-16 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">

          {/* Label */}
          <div>
            <div className="w-8 h-1 bg-brand-red mb-3" />
            <h2 className="font-display font-black text-white uppercase text-2xl leading-tight">
              Questions?<br />
              <span className="text-brand-red">We're Here.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">{contact.ownerName}, Owner</p>
          </div>

          {/* Phone */}
          <a
            href={`tel:${contact.phone}`}
            onClick={() => trackEvent('phone_click')}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors shrink-0">
              <Phone size={20} className="text-brand-red" />
            </div>
            <div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Call or Text</div>
              <div className="text-white font-black text-lg group-hover:text-brand-gold transition-colors">{contact.phone}</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            onClick={() => trackEvent('email_click')}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors shrink-0">
              <Mail size={20} className="text-brand-red" />
            </div>
            <div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Email</div>
              <div className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">{contact.email}</div>
            </div>
          </a>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="btn-secondary text-sm text-center px-6 py-3">
              Send a Message
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <MapPin size={12} className="text-brand-red shrink-0" />
              {contact.address}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
