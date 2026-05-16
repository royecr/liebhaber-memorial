import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV, SITE } from '../content/content.js'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        <NavLink to="/" className="header-logo" aria-label="עמוד הבית">
          <span className="header-logo-he">{SITE.titleShort}</span>
          <span className="header-logo-dates">{SITE.subtitleDates}</span>
        </NavLink>

        <nav className="header-nav" aria-label="ניווט ראשי">
          <ul className="header-nav-list" role="list">
            {NAV.links.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 'header-nav-link' + (isActive ? ' active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header-burger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="ניווט נייד">
          <ul role="list">
            {NAV.links.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 'mobile-nav-link' + (isActive ? ' active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
