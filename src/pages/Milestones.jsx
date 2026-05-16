import { MILESTONES } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Milestones.css'

export default function Milestones() {
  return (
    <>
      <section className="page-hero" aria-label="תחנות מרכזיות">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">✦</span></div>
          <h1 className="section-title">{MILESTONES.title}</h1>
          <p className="section-subtitle">{MILESTONES.subtitle}</p>
        </div>
      </section>

      <section className="milestones-section" aria-label="ציר הזמן">
        <div className="container">
          <div className="milestones-timeline" role="list">
            {MILESTONES.items.map((item, i) => (
              <article
                key={i}
                className={`ms-item ms-item--${item.side}${item.highlight ? ' ms-item--highlight' : ''}`}
                role="listitem"
              >
                <div className="ms-center" aria-hidden="true">
                  <div className="ms-dot">
                    <span className="ms-icon">{item.icon}</span>
                  </div>
                  <div className="ms-line" />
                </div>
                <div className="ms-card card">
                  <div className="ms-date">{item.date}</div>
                  <h3 className="ms-title">{item.title}</h3>
                  <p className="ms-text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CandleSection />
    </>
  )
}
