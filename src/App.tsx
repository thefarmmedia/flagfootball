import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const NFLFlag = lazy(() => import('./pages/NFLFlag'))
const GirlsFlag = lazy(() => import('./pages/GirlsFlag'))
const SevenOnSeven = lazy(() => import('./pages/SevenOnSeven'))
const About = lazy(() => import('./pages/About'))
const Coaches = lazy(() => import('./pages/Coaches'))
const Sponsors = lazy(() => import('./pages/Sponsors'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-gray-950" aria-label="Loading page" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nfl-flag" element={<NFLFlag />} />
            <Route path="/girls-flag-football" element={<GirlsFlag />} />
            <Route path="/7v7" element={<SevenOnSeven />} />
            <Route path="/about" element={<About />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
