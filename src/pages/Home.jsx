import { Link } from 'react-router-dom'
import { SITE, HOME } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Home.css'

const PHOTO_BASE = 'https://bsvmwnlyxetyjdppejmh.supabase.co/storage/v1/object/public/photos/'

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

const GALLERY_STRIP = [
  { file: 'batya-as-girl.jpeg',      caption: 'בתיה בנעוריה' },
  { file: 'family-portrait.jpeg',    caption: 'מהאלבום המשפחתי' },
  { file: 'batya-teen.jpeg',         caption: 'בתיה בגיל הנעורים' },
  { file: 'batya-purim-1.jpeg',      caption: 'מהאלבום המשפחתי' },
  { file: 'dorit-tzipi-young.jpeg',  caption: 'המשפחה' },
  { file: 'batya-young-woman.jpeg',  caption: 'בתיה כאישה צעירה' },
]

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-label="ברוכים הבאים">
        <div className="hero-bg-ornament hero-bg-ornament--tr" aria-hidden="true">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M180,10 Q80,80 120,180 Q160,270 100,290" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.25"/>
            <path d="M160,40 Q190,60 170,90 Q140,70 160,40Z" fill="#c9a84c" opacity="0.15"/>
            <path d="M140,100 Q170,115 155,145 Q125,130 140,100Z" fill="#c9a84c" opacity="0.15"/>
          </svg>
        </div>
        <div className="hero-bg-ornament hero-bg-ornament--bl" aria-hidden="true">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,290 Q120,220 80,120 Q40,30 100,10" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.25"/>
            <path d="M40,260 Q10,240 30,210 Q60,230 40,260Z" fill="#c9a84c" opacity="0.15"/>
          </svg>
        </div>

        <div className="container home-hero-inner">
          <div className="home-hero-image-col fade-up">
            <div className="hero-photo-frame">
              <CornerLeaf corner="tl" />
              <CornerLeaf corner="tr" />
              <CornerLeaf corner="bl" />
              <CornerLeaf corner="br" />
              <div className="hero-photo-inner">
                <img
                  src={`${PHOTO_BASE}dorit-tzipi-young.jpeg`}
                  alt="בתיה ואברהם ליבהבר עם בנותיהן"
                  className="hero-real-photo"
                  loading="eager"
                />
              </div>
              <div className="hero-frame-caption">בתיה ואברהם ליבהבר — ישראל</div>
            </div>
          </div>

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

      <section className="home-quote-section" aria-label="ציטוט בתיה">
        <div className="container home-quote-inner">
          <DividerLeaves />
          <blockquote className="home-main-quote">
            <div className="home-quote-mark" aria-hidden="true">"</div>
            <p className="home-quote-text">{SITE.mainQuote}</p>
            <footer className="home-quote-author">— {SITE.mainQuoteAuthor}</footer>
          </blockquote>
          <DividerLeaves />
        </div>
      </section>

      <section className="home-persons-section" aria-label="בתיה ואברהם">
        <div className="container">
          <div className="home-persons-grid">
            <article className="person-card card fade-up">
              <div className="person-card-photo-wrap">
                <img
                  src={`${PHOTO_BASE}batya-portrait.jpeg`}
                  alt="בתיה ליבהבר"
                  className="person-card-photo"
                  loading="lazy"
                />
                <div className="person-card-photo-overlay">
                  <span className="person-card-dates">1929 – 2024</span>
                </div>
              </div>
              <div className="person-card-body">
                <h2 className="person-card-name">בתיה ליבהבר</h2>
                <p className="person-card-text">{HOME.batyaCard.text}</p>
                <Link to="/batya" className="person-card-link">קראו את סיפורה ←</Link>
              </div>
            </article>

            <article className="person-card card fade-up">
              <div className="person-card-photo-wrap">
                <img
                  src={`${PHOTO_BASE}family-portrait.jpeg`}
                  alt="אברהם ליבהבר"
                  className="person-card-photo"
                  loading="lazy"
                />
                <div className="person-card-photo-overlay">
                  <span className="person-card-dates">1919 – 2008</span>
                </div>
              </div>
              <div className="person-card-body">
                <h2 className="person-card-name">אברהם ליבהבר</h2>
                <p className="person-card-text">{HOME.avrahamCard.text}</p>
                <Link to="/avraham" className="person-card-link">קראו את סיפורו ←</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-stats-section" aria-label="המשפחה">
        <div className="container">
          <div className="home-stats-header">
            <LeafOrnament />
            <h2 className="home-stats-title">המשפחה שהקימו</h2>
            <LeafOrnament />
          </div>
          <div className="home-stats-grid">
            {HOME.familyStats.map((stat, i) => (
              <div key={i} className="home-stat-item">
                <span className="home-stat-icon" aria-hidden="true">{stat.icon}</span>
                <span className="home-stat-number">{stat.number}</span>
                <span className="home-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="home-stats-sub">מווילנה וורשה — לישראל ולמשפחה גדולה ושמחה</p>
          <Link to="/family" className="btn-outline home-stats-btn">הכירו את המשפחה</Link>
        </div>
      </section>

      <section className="home-gallery-section" aria-label="תמונות מהאלבום">
        <div className="container">
          <div className="home-gallery-header">
            <h2 className="section-title">מהאלבום המשפחתי</h2>
            <p className="section-subtitle">תמונות נדירות שנשמרו לאורך הדורות</p>
          </div>
          <div className="home-gallery-strip">
            {GALLERY_STRIP.map((item, i) => (
              <Link key={i} to="/gallery" className="home-gallery-thumb" aria-label={item.caption}>
                <img
                  src={`${PHOTO_BASE}${item.file}`}
                  alt={item.caption}
                  loading="lazy"
                />
                <div className="home-gallery-thumb-caption">{item.caption}</div>
              </Link>
            ))}
          </div>
          <div className="home-gallery-cta">
            <Link to="/gallery" className="btn-outline">לגלריה המלאה</Link>
          </div>
        </div>
      </section>

      <section className="home-journey-section" aria-label="המסע לארץ">
        <div className="container home-journey-inner">
          <div className="home-journey-text">
            <div className="section-ornament"><span className="section-ornament-icon">⛴️</span></div>
            <h2 className="section-title">המסע לארץ ישראל</h2>
            <p className="home-journey-desc">
              בשנת 1958 יצאו בתיה ואברהם מאירופה — באוניה, לא במטוס.
              בתיה רצתה "לראות את העולם". עברו בוונציה, הגיעו לנמל חיפה ב-25 במרץ 1958.
            </p>
            <Link to="/journey" className="btn-primary">קראו את סיפור המסע</Link>
          </div>
          <div className="home-journey-map">
            <div className="home-journey-route">
              {['וילנה', 'ורשה', 'שצ׳צ׳ין', 'ונציה', 'חיפה'].map((city, i, arr) => (
                <div key={i} className="home-route-step">
                  <span className="home-route-city">{city}</span>
                  {i < arr.length - 1 && <span className="home-route-arrow" aria-hidden="true">←</span>}
                </div>
              ))}
            </div>
            <div className="home-journey-photo-wrap">
              <img
                src={`${PHOTO_BASE}family-old.jpeg`}
                alt="תמונה היסטורית של המשפחה"
                className="home-journey-photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CandleSection
        heading="הדליקו נר לזכרם"
        text={`"${SITE.mainQuote}" — ${SITE.mainQuoteAuthor}`}
      />
    </>
  )
}
