import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import TournamentTicker from '../ui/TournamentTicker'

export default function Layout() {
  const location = useLocation()
  const showTournamentTicker = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      {showTournamentTicker && <TournamentTicker />}
      <Header hasAnnouncement={showTournamentTicker} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
