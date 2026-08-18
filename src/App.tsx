import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import NFLFlag from './pages/NFLFlag'
import GirlsFlag from './pages/GirlsFlag'
import SevenOnSeven from './pages/SevenOnSeven'
import About from './pages/About'
import Coaches from './pages/Coaches'
import Sponsors from './pages/Sponsors'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
