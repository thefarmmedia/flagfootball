import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { siteConfig } from '../../config/site'

const navLinks = [
  {
    label: 'Programs',
    children: [
      { label: 'NFL FLAG', href: '/nfl-flag' },
      { label: 'Girls Flag Football', href: '/girls-flag-football' },
      { label: '7v7 Competitive', href: '/7v7' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/logos/missouri-epic-logo.png"
              alt={`${siteConfig.organization.name} Logo`}
              className="h-10 lg:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <div className="hidden sm:block">
              <div className="text-white font-extrabold text-sm tracking-wide leading-tight">
                MISSOURI EPIC
              </div>
              <div className="text-brand-gold text-xs font-semibold tracking-widest">
                FLAG FOOTBALL
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {programsOpen && (
                    <div className="absolute top-full left-0 pt-2 w-52">
                      <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-xl overflow-hidden">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive }) =>
                              `block px-4 py-3 text-sm font-medium transition-colors hover:bg-brand-red hover:text-white ${
                                isActive ? 'text-brand-red bg-brand-red/10' : 'text-gray-300'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href!}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'text-brand-red bg-brand-red/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/nfl-flag"
              className="btn-primary text-sm py-2 px-5"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3 py-2">
              Programs
            </div>
            <NavLink
              to="/nfl-flag"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              NFL FLAG
            </NavLink>
            <NavLink
              to="/girls-flag-football"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Girls Flag Football
            </NavLink>
            <NavLink
              to="/7v7"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              7v7 Competitive
            </NavLink>
            <div className="border-t border-gray-800 pt-3 mt-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Coaches', href: '/coaches' },
                { label: 'Sponsors', href: '/sponsors' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="pt-3">
              <Link
                to="/nfl-flag"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
