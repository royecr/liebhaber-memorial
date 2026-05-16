import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Batya from './pages/Batya.jsx'
import Avraham from './pages/Avraham.jsx'
import Journey from './pages/Journey.jsx'
import Milestones from './pages/Milestones.jsx'
import Family from './pages/Family.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import Candles from './pages/Candles.jsx'
import Admin from './pages/Admin.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-nav">דלג לתוכן הראשי</a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batya" element={<Batya />} />
          <Route path="/avraham" element={<Avraham />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/family" element={<Family />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
