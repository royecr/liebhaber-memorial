import { JOURNEY } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Journey.css'

export default function Journey() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-label="המסע לארץ">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">⛴️</span></div>
          <h1 className="section-title">{JOURNEY.title}</h1>
          <p className="section-subtitle">{JOURNEY.subtitle}</p>
        </div>
      </section>

      {/* Narrative */}
      <section className="journey-narrative" aria-label="סיפור המסע">
        <div className="container journey-narrative-inner">
          <div className="journey-narrative-text">
            <h2>המסע — בלי לטוס</h2>
            <p>{JOURNEY.description}</p>
            <p>{JOURNEY.narrative}</p>
          </div>
          <aside className="journey-venice-box">
            <div className="journey-venice-icon" aria-hidden="true">🇮🇹</div>
            <h3>הסיפור מוונציה</h3>
            <p>{JOURNEY.veniceStory}</p>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="journey-map-section" aria-label="מפת המסע">
        <div className="container">
          <h2 className="section-title">מפת המסע</h2>
          <p className="section-subtitle">מאירופה לארץ ישראל — 1958</p>
          <div className="journey-map-placeholder" role="img" aria-label="מפה סטטית של מסלול הנסיעה">
            <div className="journey-map-inner">
              <span aria-hidden="true">🗺️</span>
              <p>מפת מסלול הנסיעה</p>
              <p className="journey-map-route">וילנה → ורשה → שצ׳צ׳ין → ונציה → חיפה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stops */}
      <section className="journey-stops" aria-label="תחנות המסע">
        <div className="container">
          <h2 className="section-title">תחנות המסע</h2>
          <div className="journey-stops-grid">
            {JOURNEY.stops.map(stop => (
              <article key={stop.number} className="journey-stop card">
                <div className="journey-stop-number" aria-hidden="true">{stop.number}</div>
                <h3 className="journey-stop-name">{stop.name}</h3>
                <p className="journey-stop-desc">{stop.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CandleSection
        heading="המסע הסתיים — הבית התחיל"
        text="בתיה ואברהם הגיעו לארץ וייסדו כאן בית חם ומשפחה. הדליקו נר לזכרם."
      />
    </>
  )
}
