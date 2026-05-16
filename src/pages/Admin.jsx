import { useState, useEffect } from 'react'
import { getPhotos, uploadPhoto, deletePhoto, getCandles, deleteCandle } from '../lib/supabase.js'
import { GALLERY } from '../content/content.js'
import './Admin.css'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'liebhaber2024'

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [tab, setTab] = useState('photos')

  // Photos state
  const [photos, setPhotos] = useState([])
  const [photosLoading, setPhotosLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadCategory, setUploadCategory] = useState('family')
  const [uploadCaption, setUploadCaption] = useState('')
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadError, setUploadError] = useState('')

  // Candles state
  const [candles, setCandlesState] = useState([])
  const [candlesLoading, setCandlesLoading] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
      setPwError(false)
    } else {
      setPwError(true)
    }
  }

  useEffect(() => {
    if (!authed) return
    if (tab === 'photos') {
      setPhotosLoading(true)
      getPhotos().then(data => { setPhotos(data); setPhotosLoading(false) })
    }
    if (tab === 'candles') {
      setCandlesLoading(true)
      getCandles().then(data => { setCandlesState(data); setCandlesLoading(false) })
    }
  }, [authed, tab])

  async function handleUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadError('')
    setUploading(true)
    const metadata = {
      title: uploadTitle || file.name,
      caption: uploadCaption,
      category: uploadCategory,
    }
    const result = await uploadPhoto(file, metadata)
    if (result) {
      setPhotos(prev => [result, ...prev])
      setUploadCaption('')
      setUploadTitle('')
      e.target.value = ''
    } else {
      setUploadError('שגיאה בהעלאה — נסה שנית')
    }
    setUploading(false)
  }

  async function handleDeletePhoto(photo) {
    if (!window.confirm(`למחוק את התמונה "${photo.title || photo.caption || ''}"?`)) return
    await deletePhoto(photo.id, photo.storage_path)
    setPhotos(prev => prev.filter(p => p.id !== photo.id))
  }

  async function handleDeleteCandle(candle) {
    if (!window.confirm(`למחוק את הנר של "${candle.name}"?`)) return
    await deleteCandle(candle.id)
    setCandlesState(prev => prev.filter(c => c.id !== candle.id))
  }

  // Login screen
  if (!authed) {
    return (
      <div className="admin-login">
        <form className="admin-login-form card" onSubmit={handleLogin} aria-label="כניסת מנהל">
          <h1>כניסת מנהל</h1>
          <p>גישה לניהול תמונות ונרות זיכרון</p>
          <div className="form-group">
            <label htmlFor="admin-pw" className="form-label">סיסמה</label>
            <input
              id="admin-pw"
              type="password"
              className={`form-input${pwError ? ' form-input--error' : ''}`}
              value={pw}
              onChange={e => setPw(e.target.value)}
              autoFocus
              aria-required="true"
              aria-invalid={pwError}
            />
            {pwError && (
              <p className="form-error" role="alert">סיסמה שגויה</p>
            )}
          </div>
          <button type="submit" className="btn-primary">כניסה</button>
        </form>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="container">
        <header className="admin-header">
          <h1>ניהול האתר</h1>
          <button className="btn-outline admin-logout" onClick={() => setAuthed(false)}>יציאה</button>
        </header>

        {/* Tabs */}
        <div className="admin-tabs" role="tablist" aria-label="ניהול">
          <button
            role="tab"
            className={`admin-tab${tab === 'photos' ? ' active' : ''}`}
            aria-selected={tab === 'photos'}
            onClick={() => setTab('photos')}
          >
            תמונות ({photos.length})
          </button>
          <button
            role="tab"
            className={`admin-tab${tab === 'candles' ? ' active' : ''}`}
            aria-selected={tab === 'candles'}
            onClick={() => setTab('candles')}
          >
            נרות ({candles.length})
          </button>
        </div>

        {/* Photos tab */}
        {tab === 'photos' && (
          <div role="tabpanel" aria-label="ניהול תמונות">
            {/* Upload form */}
            <div className="admin-upload-form card">
              <h2>העלאת תמונה</h2>
              <div className="admin-upload-fields">
                <div className="form-group">
                  <label htmlFor="upload-title" className="form-label">כותרת</label>
                  <input
                    id="upload-title"
                    type="text"
                    className="form-input"
                    value={uploadTitle}
                    onChange={e => setUploadTitle(e.target.value)}
                    placeholder="כותרת לתמונה"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="upload-caption" className="form-label">כיתוב</label>
                  <input
                    id="upload-caption"
                    type="text"
                    className="form-input"
                    value={uploadCaption}
                    onChange={e => setUploadCaption(e.target.value)}
                    placeholder="תיאור קצר"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="upload-cat" className="form-label">קטגוריה</label>
                  <select
                    id="upload-cat"
                    className="form-input"
                    value={uploadCategory}
                    onChange={e => setUploadCategory(e.target.value)}
                  >
                    {GALLERY.categories.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="upload-file" className="form-label">קובץ</label>
                  <input
                    id="upload-file"
                    type="file"
                    accept="image/*"
                    className="form-input"
                    onChange={handleUpload}
                    disabled={uploading}
                    aria-describedby={uploadError ? 'upload-error' : undefined}
                  />
                  {uploading && <p className="admin-uploading">מעלה...</p>}
                  {uploadError && <p id="upload-error" className="form-error" role="alert">{uploadError}</p>}
                </div>
              </div>
            </div>

            {/* Photos list */}
            {photosLoading ? (
              <p className="admin-loading">טוענות תמונות...</p>
            ) : (
              <div className="admin-photos-grid">
                {photos.map(photo => (
                  <div key={photo.id} className="admin-photo-card card">
                    <img src={photo.url} alt={photo.caption || photo.title || ''} className="admin-photo-img" />
                    <div className="admin-photo-info">
                      <p className="admin-photo-title">{photo.title || '—'}</p>
                      <p className="admin-photo-meta">{photo.category} · {formatDate(photo.created_at)}</p>
                    </div>
                    <button
                      className="admin-delete-btn"
                      onClick={() => handleDeletePhoto(photo)}
                      aria-label={`מחק תמונה: ${photo.title || ''}`}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Candles tab */}
        {tab === 'candles' && (
          <div role="tabpanel" aria-label="ניהול נרות">
            {candlesLoading ? (
              <p className="admin-loading">טוענות נרות...</p>
            ) : candles.length === 0 ? (
              <p className="admin-empty">אין נרות עדיין</p>
            ) : (
              <div className="admin-candles-list">
                {candles.map(candle => (
                  <div key={candle.id} className="admin-candle-row card">
                    <div className="admin-candle-info">
                      <span className="admin-candle-name">{candle.name}</span>
                      <span className="admin-candle-date">{formatDate(candle.created_at)}</span>
                      <p className="admin-candle-msg">"{candle.message}"</p>
                    </div>
                    <button
                      className="admin-delete-btn"
                      onClick={() => handleDeleteCandle(candle)}
                      aria-label={`מחק נר של ${candle.name}`}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
