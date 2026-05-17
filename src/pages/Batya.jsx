import { BATYA, SITE } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './PersonPage.css'

const PHOTO_BASE = 'https://bsvmwnlyxetyjdppejmh.supabase.co/storage/v1/object/public/photos/'

/* Photo gallery for Batya's page */
const BATYA_PHOTOS = [
  { file: 'batya-young-child.jpeg',  caption: 'בתיה בילדותה' },
  { file: 'batya-as-girl.jpeg',      caption: 'בתיה בנעוריה' },
  { file: 'batya-teen.jpeg',         caption: 'בתיה בגיל הנעורים' },
  { file: 'batya-young-woman.jpeg',  caption: 'בתיה כאישה צעירה' },
  { file: 'batya-purim-1.jpeg',      caption: 'בתיה בפורים' },
  { file: 'batya-purim-2.jpeg',      caption: 'בתיה בתחפושת' },
]

export default function Batya() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-label="כותרת עמוד בתיה">
        <div className="container page-hero-inner">
          <div className="page-hero-text fade-up">
            <div className="section-ornament">
              <span className="section-ornament-icon">✦</span>
            </div>
            <h1>{BATYA.heroTitle.split('\n').map((l, i) => (
              <span key={i}>{l}{i === 0 && <br />}</span>
            ))}</h1>
            <p className="page-hero-subtitle">{BATYA.heroSubtitle}</p>
          </div>

          {/* Real portrait photo */}
          <div className="page-hero-media fade-up">
            <div className="person-portrait-frame">
              <img
                src={`${PHOTO_BASE}batya-portrait.jpeg`}
                alt="בתיה ליבהבר — דיוקן"
                className="person-portrait-img"
                loading="eager"
              />
              <div className="person-portrait-caption">בתיה ליבהבר · 1929–2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Quote */}
      <section className="person-intro-section" aria-label="הקדמה">
        <div className="container person-intro-inner">
          <div className="person-intro-text">
            <p className="person-intro-lead">{BATYA.intro}</p>
          </div>
          <aside className="person-intro-quote">
            <blockquote className="quote-block">
              <p className="quote-text">{SITE.mainQuote}</p>
              <footer className="quote-author">— {SITE.mainQuoteAuthor}</footer>
            </blockquote>
          </aside>
        </div>
      </section>

      {/* Photo gallery strip */}
      <section className="person-photos-section" aria-label="תמונות בתיה">
        <div className="container">
          <h2 className="section-title">תמונות מחיי בתיה</h2>
          <div className="person-photos-strip">
            {BATYA_PHOTOS.map((photo, i) => (
              <div key={i} className="person-photo-card">
                <img
                  src={`${PHOTO_BASE}${photo.file}`}
                  alt={photo.caption}
                  loading="lazy"
                />
                <div className="person-photo-card-caption">{photo.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="person-timeline-section" aria-label="תחנות בחייה של בתיה">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">✦</span></div>
          <h2 className="section-title">תחנות בחייה</h2>
          <div className="timeline" role="list">
            {BATYA.milestones.map((m, i) => (
              <article
                key={i}
                className={`timeline-item timeline-item--${m.side}${m.warning ? ' timeline-item--sensitive' : ''}`}
                role="listitem"
              >
                <div className="timeline-connector" aria-hidden="true">
                  <span className="timeline-dot">{m.number}</span>
                </div>
                <div className="timeline-card card">
                  <div className="timeline-date">{m.date}</div>
                  <h3 className="timeline-title">{m.title}</h3>
                  <p className="timeline-text">{m.text}</p>
                  {m.warning && (
                    <p className="timeline-sensitive-note">תוכן רגיש — שואה ואובדן</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CandleSection
        heading="הדליקו נר לזכר בתיה"
        text="בתיה לא הייתה רק ניצולת — הייתה אמא, סבתא, ונשמה שבחרה בחיים. הדליקו נר לזכרה."
      />
    </>
  )
}
