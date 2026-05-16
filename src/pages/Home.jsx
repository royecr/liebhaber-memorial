import { Link } from 'react-router-dom'
import { SITE, HOME, BATYA, AVRAHAM } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero" aria-label="ברוכים הבאים">
        <div className="container home-hero-inner">
          <div className="home-hero-text fade-up">
            <div className="section-ornament">
              <span className="section-ornament-icon">✦</span>
            </div>
            <h1 className="home-hero-title">
              {HOME.heroTitle.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="home-hero-subtitle">{HOME.heroSubtitle}</p>
            <p className="home-hero-desc">{HOME.heroText}</p>
            <div className="home-hero-actions">
              <Link to="/batya" className="btn-primary">סיפורה של בתיה</Link>
              <Link to="/avraham" className="btn-outline">סיפורו של אברהם</Link>
            </div>
          </div>
          <div className="home-hero-quote fade-up">
            <blockquote className="quote-block home-main-quote">
              <p className="quote-text">{SITE.mainQuote}</p>
              <footer className="quote-author">— {SITE.mainQuoteAuthor}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats" aria-label="המשפחה במספרים">
        <div className="container home-stats-inner">
          {HOME.familyStats.map(stat => (
            <div key={stat.label} className="home-stat-item">
              <span className="home-stat-icon" aria-hidden="true">{stat.icon}</span>
              <span className="home-stat-number">{stat.number}</span>
              <span className="home-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Person cards */}
      <section className="home-people" aria-label="בתיה ואברהם">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">✦</span></div>
          <h2 className="section-title">הכירו אותם</h2>
          <p className="section-subtitle">שתי נשמות שמצאו זו את זה לאחר כל הזוועות, ובחרו בחיים</p>

          <div className="home-people-grid">
            <article className="home-person-card card">
              <div className="home-person-img img-placeholder">
                <span aria-hidden="true">👩</span>
              </div>
              <div className="home-person-body">
                <h3>{HOME.batyaCard.title}</h3>
                <p className="home-person-dates">5.2.1929 — 2024</p>
                <p>{HOME.batyaCard.text}</p>
                <Link to="/batya" className="btn-outline home-person-link">קראו עוד</Link>
              </div>
            </article>

            <article className="home-person-card card">
              <div className="home-person-img img-placeholder">
                <span aria-hidden="true">👨</span>
              </div>
              <div className="home-person-body">
                <h3>{HOME.avrahamCard.title}</h3>
                <p className="home-person-dates">1.9.1919 — 2008</p>
                <p>{HOME.avrahamCard.text}</p>
                <Link to="/avraham" className="btn-outline home-person-link">קראו עוד</Link>
              </div>
            </article>

            <article className="home-family-card card">
              <div className="home-person-body">
                <span className="home-family-icon" aria-hidden="true">🏠</span>
                <h3>{HOME.familyCard.title}</h3>
                <p>{HOME.familyCard.text}</p>
                <Link to="/family" className="btn-outline home-person-link">עץ המשפחה</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline preview */}
      <section className="home-timeline-preview" aria-label="תחנות מרכזיות">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">✦</span></div>
          <h2 className="section-title">תחנות בחייהם</h2>
          <p className="section-subtitle">מלידה בפולין ועד הקמת הבית בישראל</p>

          <div className="home-preview-timeline">
            <div className="home-preview-item">
              <span className="home-preview-year">1919</span>
              <span className="home-preview-dot" aria-hidden="true" />
              <span className="home-preview-event">לידת אברהם בורשה</span>
            </div>
            <div className="home-preview-item">
              <span className="home-preview-year">1929</span>
              <span className="home-preview-dot" aria-hidden="true" />
              <span className="home-preview-event">לידת בתיה בווילנה</span>
            </div>
            <div className="home-preview-item">
              <span className="home-preview-year">1957</span>
              <span className="home-preview-dot home-preview-dot--gold" aria-hidden="true" />
              <span className="home-preview-event">נישואי בתיה ואברהם</span>
            </div>
            <div className="home-preview-item">
              <span className="home-preview-year">1958</span>
              <span className="home-preview-dot" aria-hidden="true" />
              <span className="home-preview-event">עלייה לארץ ישראל</span>
            </div>
            <div className="home-preview-item">
              <span className="home-preview-year">היום</span>
              <span className="home-preview-dot home-preview-dot--gold" aria-hidden="true" />
              <span className="home-preview-event">9 נינים ונינות</span>
            </div>
          </div>

          <div className="home-preview-cta">
            <Link to="/milestones" className="btn-primary">לציר הזמן המלא</Link>
          </div>
        </div>
      </section>

      {/* Candle CTA */}
      <CandleSection />
    </>
  )
}
