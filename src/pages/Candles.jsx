import { useState, useEffect } from 'react'
import { CANDLES } from '../content/content.js'
import { getCandles, addCandle } from '../lib/supabase.js'
import './Candles.css'

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Candles() {
  const [candles, setCandles] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getCandles().then(data => {
      setCandles(data)
      setLoading(false)
    })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('אנא מלאו שם והודעה')
      return
    }
    setError('')
    setSending(true)
    const newCandle = await addCandle(name.trim(), message.trim())
    if (newCandle) {
      setCandles(prev => [newCandle, ...prev])
      setSuccess(true)
      setName('')
      setMessage('')
    } else {
      setError('שגיאה בשליחה — נסו שוב')
    }
    setSending(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="candles-hero section-navy" aria-label="נרות זיכרון">
        <div className="container">
          <div className="candles-hero-flames" aria-hidden="true">
            <span>🕯️</span><span className="big">🕯️</span><span>🕯️</span>
          </div>
          <h1 className="section-title">{CANDLES.title}</h1>
          <p className="section-subtitle" style={{ color: '#C8B896', marginBottom: 0 }}>{CANDLES.subtitle}</p>
        </div>
      </section>

      {/* Form */}
      <section className="candles-form-section" aria-label="הדלקת נר">
        <div className="container candles-form-wrap">
          <h2 className="candles-form-title">{CANDLES.formTitle}</h2>
          <p className="candles-form-sub">{CANDLES.formSubtitle}</p>

          {success ? (
            <div className="candles-success" role="status" aria-live="polite">
              <div className="candles-success-icon" aria-hidden="true">🕯️</div>
              <p>{CANDLES.successMessage}</p>
              <button
                className="btn-outline"
                onClick={() => setSuccess(false)}
              >
                הדליקו נר נוסף
              </button>
            </div>
          ) : (
            <form className="candle-form" onSubmit={handleSubmit} noValidate aria-label="טופס הדלקת נר">
              <div className="form-group">
                <label htmlFor="candle-name" className="form-label">שם</label>
                <input
                  id="candle-name"
                  type="text"
                  className="form-input"
                  placeholder={CANDLES.namePlaceholder}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  maxLength={80}
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="candle-message" className="form-label">הודעה</label>
                <textarea
                  id="candle-message"
                  className="form-input form-textarea"
                  placeholder={CANDLES.messagePlaceholder}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  maxLength={500}
                  required
                  aria-required="true"
                />
                <span className="form-count" aria-live="polite">{message.length}/500</span>
              </div>
              {error && (
                <p className="form-error" role="alert">{error}</p>
              )}
              <button
                type="submit"
                className="btn-primary candle-submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? 'שולח...' : CANDLES.submitButton}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Candles list */}
      <section className="candles-list-section section-navy" aria-label="נרות שהודלקו">
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--color-gold-light)' }}>
            נרות שהודלקו {candles.length > 0 && `(${candles.length})`}
          </h2>

          {loading ? (
            <p className="candles-loading" aria-live="polite">טוענות נרות...</p>
          ) : candles.length === 0 ? (
            <p className="candles-empty">היו הראשונים להדליק נר 🕯️</p>
          ) : (
            <div className="candles-grid" role="list">
              {candles.map(candle => (
                <article key={candle.id} className="candle-card" role="listitem">
                  <div className="candle-card-flame" aria-hidden="true">🕯️</div>
                  <div className="candle-card-body">
                    <p className="candle-card-message">"{candle.message}"</p>
                    <footer className="candle-card-meta">
                      <span className="candle-card-name">{candle.name}</span>
                      <span className="candle-card-date">{formatDate(candle.created_at)}</span>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          )}

          <p className="candles-bottom-text">{CANDLES.bottomText}</p>
        </div>
      </section>
    </>
  )
}
