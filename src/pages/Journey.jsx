import { JOURNEY } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Journey.css'

const PHOTO_BASE = 'https://bsvmwnlyxetyjdppejmh.supabase.co/storage/v1/object/public/photos/'

/* Icon for each stop */
const STOP_ICONS = ['🏙️', '🏛️', '⚓', '🇮🇹', '⛵', '🏠']

export default function Journey() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="journey-hero page-hero" aria-label="המסע לארץ">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">⛴️</span></div>
          <h1 className="section-title">{JOURNEY.title}</h1>
          <p className="section-subtitle">{JOURNEY.subtitle}</p>
        </div>
      </section>

      {/* ═══════ STORY + PHOTO ═══════ */}
      <section className="journey-story-section" aria-label="סיפור המסע">
        <div className="container journey-story-inner">
          <div className="journey-story-text">
            <h2 className="journey-section-heading">המסע — בלי לטוס</h2>
            <p>{JOURNEY.description}</p>
            <p>{JOURNEY.narrative}</p>
          </div>
          <div className="journey-story-aside">
            <div className="journey-photo-wrap">
              <img
                src={`${PHOTO_BASE}family-old.jpeg`}
                alt="תמונה היסטורית של המשפחה"
                className="journey-main-photo"
                loading="lazy"
              />
            </div>
            <div className="journey-venice-box">
              <div className="journey-venice-icon" aria-hidden="true">🇮🇹</div>
              <h3>הסיפור מוונציה</h3>
              <p>{JOURNEY.veniceStory}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ROUTE MAP ═══════ */}
      <section className="journey-route-section" aria-label="מסלול המסע">
        <div className="container">
          <h2 className="journey-section-heading text-center">מסלול המסע</h2>
          <p className="journey-route-subtitle">מאירופה לארץ ישראל — 1958</p>
          <div className="journey-route-visual">
            {JOURNEY.stops.map((stop, i) => (
              <div key={stop.number} className="journey-route-stop">
                <div className="journey-route-icon">{STOP_ICONS[i] || '📍'}</div>
                <div className="journey-route-name">{stop.name}</div>
                {i < JOURNEY.stops.length - 1 && (
                  <div className="journey-route-connector" aria-hidden="true">
                    <span className="journey-route-line" />
                    <span className="journey-route-ship">⛴</span>
                  </div>
 