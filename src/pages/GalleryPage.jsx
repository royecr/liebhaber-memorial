import { useState, useEffect, useCallback } from 'react'
import { GALLERY } from '../content/content.js'
import { getPhotos } from '../lib/supabase.js'
import './GalleryPage.css'

export default function GalleryPage() {
  const [photos, setPhotos] = useState([])
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState(null) // { url, caption }

  useEffect(() => {
    setLoading(true)
    getPhotos(category).then(data => {
      setPhotos(data)
      setLoading(false)
    })
  }, [category])

  const openLightbox = useCallback((photo) => {
    setLightbox({ url: photo.url, caption: photo.caption || photo.title || '' })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  // Keyboard support for lightbox
  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox])

  return (
    <>
      <section className="page-hero" aria-label="גלריה">
        <div className="container">
          <div className="section-ornament"><span className="section-ornament-icon">📷</span></div>
          <h1 className="section-title">{GALLERY.title}</h1>
          <p className="section-subtitle">{GALLERY.subtitle}</p>
        </div>
      </section>

      {/* Category filter */}
      <section className="gallery-section" aria-label="תמונות">
        <div className="container">
          <nav className="gallery-filter" aria-label="סינון לפי קטגוריה" role="tablist">
            {GALLERY.categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={category === cat.id}
                className={`gallery-filter-btn${category === cat.id ? ' active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {loading ? (
            <div className="gallery-loading" aria-live="polite" aria-busy="true">
              <p>טוענות תמונות...</p>
            </div>
          ) : photos.length === 0 ? (
            <div className="gallery-empty" aria-live="polite">
              <div className="gallery-empty-icon" aria-hidden="true">📷</div>
              <p>תמונות יתווספו בקרוב</p>
              <p className="gallery-empty-sub">בינתיים, תוכלו לחזור לעמוד הזה בהמשך.</p>
            </div>
          ) : (
            <div className="gallery-grid" role="list" aria-label={`${photos.length} תמונות`}>
              {photos.map(photo => (
                <button
                  key={photo.id}
                  className="gallery-item"
                  role="listitem"
                  onClick={() => openLightbox(photo)}
                  aria-label={`פתח תמונה: ${photo.caption || photo.title || 'ללא כיתוב'}`}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption || photo.title || ''}
                    className="gallery-img"
                    loading="lazy"
                  />
                  {photo.caption && (
                    <div className="gallery-caption">{photo.caption}</div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="תצוגת תמונה מוגדלת"
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="סגור תמונה"
          >
            ✕
          </button>
          <img
            src={lightbox.url}
            alt={lightbox.caption}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          {lightbox.caption && (
            <p className="lightbox-caption">{lightbox.caption}</p>
          )}
        </div>
      )}
    </>
  )
}
