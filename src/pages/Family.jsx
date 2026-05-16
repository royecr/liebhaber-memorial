import { FAMILY } from '../content/content.js'
import CandleSection from '../components/CandleSection.jsx'
import './Family.css'

export default function Family() {
  const { tree } = FAMILY

  return (
    <>
      <section className="page-hero" aria-label="המשפחה">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">🌳</span></div>
          <h1 className="section-title">{FAMILY.title}</h1>
          <p className="section-subtitle">{FAMILY.subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="family-intro" aria-label="תיאור המשפחה">
        <div className="container family-intro-inner">
          <p className="family-desc">{FAMILY.description}</p>
        </div>
      </section>

      {/* Family Tree */}
      <section className="family-tree-section" aria-label="עץ המשפחה">
        <div className="container">
          <h2 className="section-title">עץ המשפחה</h2>
          <p className="section-subtitle">ארבעה דורות — שורשים ופארות</p>

          {/* Roots — Generation 1 */}
          <div className="ft-gen ft-gen-1">
            <div className="ft-root-card card" role="group" aria-label="בתיה ואברהם ליבהבר — הדור הראשון">
              <div className="ft-root-icon" aria-hidden="true">🌳</div>
              <h3 className="ft-name">{tree.roots.name}</h3>
              <p className="ft-years">{tree.roots.years}</p>
            </div>
          </div>

          <div className="ft-connector" aria-hidden="true"><div className="ft-line-v" /><div className="ft-line-h" /></div>

          {/* Daughters — Generation 2 */}
          <div className="ft-gen ft-gen-2" role="list" aria-label="הדור השני — הבנות">
            {tree.daughters.map((daughter, di) => (
              <div key={di} className="ft-branch" role="listitem">
                <div className="ft-person-card card">
                  <div className="ft-person-icon" aria-hidden="true">👩</div>
                  <h3 className="ft-name">{daughter.name}</h3>
                  {daughter.note && <p className="ft-note">{daughter.note}</p>}
                  {daughter.married && <p className="ft-married">נשואה ל: {daughter.married}</p>}
                </div>

                <div className="ft-connector-small" aria-hidden="true"><div className="ft-line-v-sm" /></div>

                {/* Grandchildren — Generation 3 */}
                <div className="ft-grandchildren" role="list" aria-label={`ילדי ${daughter.name}`}>
                  {daughter.children.map((child, ci) => (
                    <div key={ci} className="ft-gc-branch" role="listitem">
                      <div className="ft-gc-card card">
                        <div className="ft-gc-icon" aria-hidden="true">👤</div>
                        <h4 className="ft-gc-name">{child.name}</h4>
                        {child.spouse && <p className="ft-gc-spouse">⚭ {child.spouse}</p>}
                        {child.grandchildren && child.grandchildren.length > 0 && (
                          <div className="ft-gg-list" aria-label={`ילדי ${child.name}`}>
                            <p className="ft-gg-label">ילדים:</p>
                            <ul>
                              {child.grandchildren.map(gg => (
                                <li key={gg}>{gg}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CandleSection
        heading="המשפחה ממשיכה לגדול"
        text="כל ילד וילדה שנולד הוא עוד פרק בסיפורם של בתיה ואברהם. הדליקו נר לזכרם."
      />
    </>
  )
}
