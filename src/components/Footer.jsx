import { Link } from 'react-router-dom'
import { FOOTER, NAV } from '../content/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{FOOTER.familyName}</p>
          <p className="footer-tagline">{FOOTER.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="ניווט תחתון">
          <ul role="list">
            {NAV.links.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="footer-link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-candle">
          <Link to="/candles" className="btn-navy footer-candle-btn">
            🕯️ {FOOTER.candleBtn}
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">{FOOTER.copyright}</p>
          <p className="footer-privacy">
            {FOOTER.privacyText}{' '}
            <a href={`mailto:${FOOTER.privacyEmail}`} className="footer-email">
              {FOOTER.privacyEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
