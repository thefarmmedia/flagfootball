import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '../../config/site'

export default function Footer() {
  const { organization, social, contact } = siteConfig

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src="/images/logos/missouri-epic-logo.png"
                alt={`${organization.name} Logo`}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {organization.tagline}. Building champions on and off the field.
            </p>
            <div className="flex items-center gap-3">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-red flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-red flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {!social.facebook && !social.instagram && (
                <p className="text-xs text-gray-600">Social links coming soon</p>
              )}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'NFL FLAG Football', href: '/nfl-flag' },
                { label: 'Girls Flag Football', href: '/girls-flag-football' },
                { label: '7v7 Competitive', href: '/7v7' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5">
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
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {contact.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2.5 text-gray-400 hover:text-brand-gold text-sm transition-colors"
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
                    className="flex items-center gap-2.5 text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    <Mail size={14} className="shrink-0 text-brand-red" />
                    {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin size={14} className="shrink-0 text-brand-red" />
                {contact.address}
              </li>
              {!contact.phone && !contact.email && (
                <li>
                  <Link
                    to="/contact"
                    className="text-brand-gold hover:text-brand-gold-light text-sm transition-colors"
                  >
                    Send us a message →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {organization.fullName}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            NFL FLAG is a registered trademark of NFL Properties LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
