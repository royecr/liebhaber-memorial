import { Link } from 'react-router-dom'
import { SITE, HOME } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Home.css'

/* ── SVG decorators ── */
const LeafOrnament = ({ className = '' }) => (
  <svg className={`leaf-ornament ${className}`} viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10,20 Q30,5 60,20 Q90,35 110,20" stroke="#c9a84c" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    <path d="M25,14 Q35,8 45,14 Q35,20 25,14Z" fill="#c9a84c" opacity="0.55"/>
    <path d="M75,26 Q85,20 95,26 Q85,32 75,26Z" fill="#c9a84c" opacity="0.55"/>
    <circle cx="60" cy="20" r="2.5" fill="#c9a84c" opacity="0.8"/>
  </svg>
)

const DividerLeaves = () => (
  <div className="divider-leaves" aria-hidden="true">
    <svg viewBox="0 0 320 30" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="15" x2="120" y2="15" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
      <path d="M128,15 Q138,7 148,15 Q138,23 128,15Z" fill="#c9a84c" opacity="0.7"/>
      <circle cx="160" cy="15" r="3" fill="#c9a84c"/>
      <path d="M172,15 Q182,7 192,15 Q182,23 172,15Z" fill="#c9a84c" opacity="0.7"/>
      <line x1="200" y1="15" x2="320" y2="15" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
    </svg>
  </div>
)

const CornerLeaf = ({ corner = 'tl' }) => (
  <svg className={`corner-leaf corner-leaf--${corner}`} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5,55 Q5,5 55,5" stroke="#c9a84c" strokeWidth="1.2" fill="none" opacity="0.6"/>
    <path d="M5,35 Q20,25 30,30 Q20,40 5,35Z" fill="#c9a84c" opacity="0.4"/>
    <path d="M25,10 Q35,20 30,30 Q20,20 25,10Z" fill="#c9a84c" opacity="0.4"/>
  </svg>
)

/* Family members for the stats section */
const FAMILY_NAMES = {
  daughters: ['דורית', 'ציפי'],
  grandchildren: ['רועי', 'נעמה', 'שני', 'נטלי', 'נועה'],
  greatgrandchildren: ['אפרת', 'טמיר', 'קרן', 'גאיה', 'נועם', 'רז', 'עידו', 'שירה', 'יואב'],
}

/* Gallery strip images (CSS placeholders - photos to be uploaded) */
const GALLERY_ITEMS = [
  { id: 1, label: 'בתיה צעירה', category: 'batya' },
  { id: 2, label: 'אברהם', category: 'avraham' },
  { id: 3, label: 'החתונה', category: 'family' },
  { id: 4, label: 'העלייה לארץ', category: 'journey' },
  { id: 5, label: 'המשפחה', category: 'family' },
  { id: 6, label: 'רגעים יקרים', category: 'family' },
]

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════
          HERO — 2-column layout
          ═══════════════════════════════════ */}
      <section className="home-hero" aria-label="ברוכים הבאים">
        {/* Botanical background decoration */}
        <div className="hero-bg-ornament hero-bg-ornament--tr" aria-hidden="true">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M180,10 Q80,80 120,180 Q160,270 100,290" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.25"/>
            <path d="M160,40 Q190,60 170,90 Q140,70 160,40Z" fill="#c9a84c" opacity="0.15"/>
            <path d="M140,100 Q170,115 155,145 Q125,130 140,100Z" fill="#c9a84c" opacity="0.15"/>
            <path d="M130,170 Q160,180 148,210 Q118,200 130,170Z" fill="#c9a84c" opacity="0.12"/>
          </svg>
        </div>
        <div className="hero-bg-ornament hero-bg-ornament--bl" aria-hidden="true">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,290 Q120,220 80,120 Q40,30 100,10" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.25"/>
            <path d="M40,260 Q10,240 30,210 Q60,230 40,260Z" fill="#c9a84c" opacity="0.15"/>
            <path d="M60,200 Q30,185 45,155 Q75,170 60,200Z" fill="#c9a84c" opacity="0.15"/>
          </svg>
        </div>

        <div className="container home-hero-inner">
          {/* LEFT: Vintage photo frame */}
          <div className="home-hero-image-col fade-up">
            <div className="hero-photo-frame">
              <CornerLeaf corner="tl" />
              <CornerLeaf corner="tr" />
              <CornerLeaf corner="bl" />
              <CornerLeaf corner="br" />
              <div className="hero-photo-inner">
                <div className="hero-photo-placeholder">
                  <div className="hero-photo-texture" />
                  <div className="hero-photo-overlay-text">
                    <span className="hero-photo-label">תמונת משפחה</span>
                    <span className="hero-photo-year">~1960</span>
                  </div>
                </div>
              </div>
              <div className="hero-frame-caption">בתיה ואברהם ליבהבר — ישראל</div>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="home-hero-text-col fade-up">
            <div className="hero-eyebrow">
              <LeafOrnament />
              <span>לזכרם</span>
              <LeafOrnament />
            </div>

            <h1 className="home-hero-title">
              {HOME.heroTitle.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'hero-title-line2' : ''}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p className="home-hero-subtitle">{HOME.heroSubtitle}</p>

            <p className="home-hero-desc">{HOME.heroText}</p>

            <div className="home-hero-dates">
              <span className="hero-date-badge">בתיה ׳ 1929–2024</span>
              <span className="hero-date-sep">·</span>
              <span className="hero-date-badge">אברהם ׳ 1919–2008</span>
            </div>

            <div className="home-hero-actions">
              <Link to="/batya" className="btn-primary">סיפורה של בתיה</Link>
              <Link to="/avraham" className="btn-outline">סיפורו של אברהם</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════�