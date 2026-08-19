import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '../../config/site'

export default function Footer() {
  const { organization, social, contact } = siteConfig

  return (
    <footer className="bg-black border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/images/logos/missouri-epic-logo.png"
                alt={`${organization.name} Logo`}
                className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="font-display font-black text-white uppercase tracking-wide text-xl leading-tight mb-1">
              Missouri EPIC
            </p>
            <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Flag Football
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {organization.tagline} Building champions on and off the field.
            </p>
            <div className="flex items-center gap-2">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-brand-red flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-brand-red flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
              )}
              {!social.facebook && !social.instagram && (
                <p className="text-xs text-gray-700">Social links coming soon</p>
              )}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-black text-white uppercase tracking-widest text-sm mb-5 border-b border-gray-800 pb-3">
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'NFL FLAG Football', href: '/nfl-flag' },
                { label: 'Girls Flag Football', href: '/girls-flag-football' },
                { label: '7v7 Competitive', href: '/7v7' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-red rounded-full group-hover:w-2 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-display font-black text-white uppercase tracking-widest text-sm mb-5 border-b border-gray-800 pb-3">
              Organization
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Coaches', href: '/coaches' },
                { label: 'Sponsors', href: '/sponsors' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-red rounded-full group-hover:w-2 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-black text-white uppercase tracking-widest text-sm mb-5 border-b border-gray-800 pb-3">
              Contact
            </h3>
            <ul className="space-y-4">
              {contact.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2.5 text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    <Phone size={14} className="shrink-0 text-brand-red" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    <Mail size={14} className="shrink-0 text-brand-red" />
                    {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                <MapPin size={14} className="shrink-0 text-brand-red mt-0.5" />
                {contact.address}
              </li>
              {!contact.phone && !contact.email && (
                <li>
                  <Link
                    to="/contact"
                    className="text-brand-red hover:text-brand-red-light text-sm font-bold uppercase tracking-wider transition-colors"
                  >
                    Send us a message →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} {organization.fullName}. All rights reserved.
          </p>
          <p className="text-gray-800 text-xs">
            NFL FLAG® is a registered trademark of NFL Properties LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
