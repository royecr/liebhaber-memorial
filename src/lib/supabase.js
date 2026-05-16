import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// --- Gallery helpers ---
export async function getPhotos(category = 'all') {
  let query = supabase
    .from('photos')
    .select('*')
    .order('created_at', { ascending: false })

  if (category && category !== 'all') {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  if (error) console.error('Error fetching photos:', error)
  return data || []
}

export async function uploadPhoto(file, metadata) {
  const ext = file.name.split('.').pop()
  const fileName = `${Date.now()}.${ext}`
  const { data: storageData, error: storageError } = await supabase.storage
    .from('photos')
    .upload(fileName, file)

  if (storageError) {
    console.error('Upload error:', storageError)
    return null
  }

  const { data: { publicUrl } } = supabase.storage
    .from('photos')
    .getPublicUrl(fileName)

  const { data, error } = await supabase.from('photos').insert([{
    url: publicUrl,
    storage_path: fileName,
    ...metadata
  }]).select().single()

  if (error) console.error('Insert error:', error)
  return data
}

export async function deletePhoto(id, storagePath) {
  await supabase.storage.from('photos').remove([storagePath])
  const { error } = await supabase.from('photos').delete().eq('id', id)
  if (error) console.error('Delete error:', error)
}

export async function updatePhoto(id, updates) {
  const { data, error } = await supabase.from('photos').update(updates).eq('id', id).select().single()
  if (error) console.error('Update error:', error)
  return data
}

// --- Candles helpers ---
export async function getCandles() {
  const { data, error } = await supabase
    .from('candles')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) console.error('Error fetching candles:', error)
  return data || []
}

export async function addCandle(name, message) {
  const { data, error } = await supabase.from('candles').insert([{
    name,
    message,
    created_at: new Date().toISOString()
  }]).select().single()
  if (error) console.error('Add candle error:', error)
  return data
}

export async function deleteCandle(id) {
  const { error } = await supabase.from('candles').delete().eq('id', id)
  if (error) console.error('Delete candle error:', error)
}
