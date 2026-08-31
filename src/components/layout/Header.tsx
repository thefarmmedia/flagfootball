import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
  { label: 'Tournaments', href: '/tournaments' },
  { label: 'About', href: '/about' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Header({ hasAnnouncement = false }: { hasAnnouncement?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-[top] duration-200 ${
        hasAnnouncement ? 'top-[46px] sm:top-[52px]' : 'top-0'
      }`}
    >
      {/* Red top accent bar */}
      <div className="nfl-topbar" />

      {/* Nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-black/98 backdrop-blur-md shadow-xl shadow-black/50'
            : 'bg-black/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/logos/missouri-epic-logo.webp"
                alt={`${siteConfig.organization.name} Logo`}
                width="1000"
                height="1000"
                decoding="async"
                className="h-9 lg:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
              <div className="hidden sm:block border-l border-gray-700 pl-3">
                <div className="font-display font-black text-white text-base tracking-widest leading-none uppercase">
                  Missouri EPIC
                </div>
                <div className="text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                  Flag Football
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-gray-300 hover:text-white tracking-widest uppercase transition-colors">
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-1 w-52"
                        >
                          <div className="bg-black border border-gray-800 shadow-2xl overflow-hidden">
                            <div className="h-0.5 w-full bg-brand-red" />
                            {link.children.map((child) => (
                              <NavLink
                                key={child.href}
                                to={child.href}
                                className={({ isActive }) =>
                                  `block px-4 py-3 text-xs font-bold tracking-widest uppercase transition-colors ${
                                    isActive
                                      ? 'text-brand-red bg-brand-red/10'
                                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.href}
                    to={link.href!}
                    className={({ isActive }) =>
                      `px-3 py-2 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 ${
                        isActive
                          ? 'text-white border-brand-red'
                          : link.href === '/tournaments'
                          ? 'text-brand-gold hover:text-white border-transparent hover:border-brand-gold'
                          : 'text-gray-400 hover:text-white border-transparent hover:border-gray-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ),
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link to="/nfl-flag" className="btn-primary text-xs py-2.5 px-5">
                Register Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-black border-t border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-3 py-2">
                Programs
              </div>
              {[
                { label: 'NFL FLAG', href: '/nfl-flag' },
                { label: 'Girls Flag Football', href: '/girls-flag-football' },
                { label: '7v7 Competitive', href: '/7v7' },
              ].map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border-l-2 ${
                      isActive
                        ? 'border-brand-red text-white bg-brand-red/5'
                        : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="border-t border-gray-800 pt-3 mt-3 space-y-0.5">
                {[
                  { label: 'Tournaments', href: '/tournaments' },
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
                      `block px-3 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border-l-2 ${
                        isActive
                          ? 'border-brand-red text-white bg-brand-red/5'
                          : link.href === '/tournaments'
                          ? 'border-transparent text-brand-gold hover:text-white hover:bg-white/5'
                          : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="pt-3 pb-1">
                <Link
                  to="/nfl-flag"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
