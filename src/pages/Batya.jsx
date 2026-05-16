import { BATYA, SITE } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './PersonPage.css'

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
          <div className="page-hero-media fade-up">
            <div className="img-placeholder page-hero-img photo-frame">
              <span aria-hidden="true">👩</span>
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
                  <span className="timeline-line" />
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
