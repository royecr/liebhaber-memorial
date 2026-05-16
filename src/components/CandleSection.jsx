import { Link } from 'react-router-dom'
import './CandleSection.css'

/**
 * Reusable candle CTA section — appears at the bottom of most pages.
 * Pass a custom heading/text or use defaults.
 */
export default function CandleSection({
  heading = 'הדליקו נר לזכרם',
  text = 'כתבו כמה מילים לזכר בתיה ואברהם ליבהבר, והדליקו נר דיגיטלי שיישאר כאן לנצח.',
  btnLabel = 'הדליקו נר 🕯️',
}) {
  return (
    <section className="candle-cta section-navy" aria-label="הדלקת נר זיכרון">
      <div className="container candle-cta-inner">
        <div className="candle-cta-flames" aria-hidden="true">
          <span className="candle-flame">🕯️</span>
          <span className="candle-flame candle-flame--big">🕯️</span>
          <span className="candle-flame">🕯️</span>
        </div>
        <h2 className="candle-cta-heading">{heading}</h2>
        <p className="candle-cta-text">{text}</p>
        <Link to="/candles" className="btn-navy candle-cta-btn">
          {btnLabel}
        </Link>
      </div>
    </section>
  )
}
