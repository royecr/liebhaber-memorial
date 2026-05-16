import { AVRAHAM } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './PersonPage.css'

export default function Avraham() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-label="כותרת עמוד אברהם">
        <div className="container page-hero-inner">
          <div className="page-hero-text fade-up">
            <div className="section-ornament">
              <span className="section-ornament-icon">✦</span>
            </div>
            <h1>{AVRAHAM.heroTitle.split('\n').map((l, i) => (
              <span key={i}>{l}{i === 0 && <br />}</span>
            ))}</h1>
            <p className="page-hero-subtitle">{AVRAHAM.heroSubtitle}</p>
          </div>
          <div className="page-hero-media fade-up">
            <div className="img-placeholder page-hero-img photo-frame">
              <span aria-hidden="true">👨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="person-intro-section" aria-label="הקדמה">
        <div className="container person-intro-inner">
          <div className="person-intro-text">
            <p className="person-intro-lead">{AVRAHAM.intro}</p>
          </div>
          <aside className="person-intro-quote">
            <blockquote className="quote-block">
              <p className="quote-text">"ברח לבדו. משפחתו נותרה מאחור ונרצחה כולה. הוא נשא את הכאב הזה כל חייו, ובחר להמשיך."</p>
              <footer className="quote-author">— מתוך סיפור חייו</footer>
            </blockquote>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="person-timeline-section" aria-label="תחנות בחייו של אברהם">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">✦</span></div>
          <h2 className="section-title">תחנות בחייו</h2>
          <div className="timeline" role="list">
            {AVRAHAM.milestones.map((m, i) => (
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
        heading="הדליקו נר לזכר אברהם"
        text="אברהם ברח לבדו, שרד בגבורה, ובחר לבנות חיים של נתינה ואהבה. הדליקו נר לזכרו."
      />
    </>
  )
}
