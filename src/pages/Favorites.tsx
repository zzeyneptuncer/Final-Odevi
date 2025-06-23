import React, { useState } from 'react'
import { useFavoriteStore } from '../store/useFavoritesStore'

const siteOptions = [
  'Adidas',
  'Bershka',
  'Chanel',
  'DeFacto',
  'Dior',
  'GAP',
  'H&M',
  'Hummel',
  'LCWaikiki',
  'Louis Vuitton',
  'Mango',
  'Mavi',
  'Nike',
  'Oysho',
  'Pull & Bear',
  'Puma',
  'Stradivarius',
  'Trendyol',
  'Under Armour',
  'Zara'
]


const Favorites = () => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore()

  const [form, setForm] = useState({
    siteName: siteOptions[0],
    note: '',
    url: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.url || !form.siteName) return alert('Site adı ve URL zorunlu!')
    addFavorite(form)
    setForm({ siteName: siteOptions[0], note: '', url: '' })
  }

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorilerim</h2>

      <form onSubmit={handleSubmit} className="favorites-form">
        <label className="favorites-label">
          Site Adı:
          <select name="siteName" value={form.siteName} onChange={handleChange} className="favorites-select">
            {siteOptions.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </select>
        </label>

        <label className="favorites-label">
          Not:
          <input
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Not ekle..."
            className="favorites-input"
          />
        </label>

        <label className="favorites-label">
          Link:
          <input
            name="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://example.com"
            className="favorites-input favorites-url-input"
          />
        </label>

        <button type="submit" className="favorites-button">Ekle</button>
      </form>

      <ul className="favorites-list">
        {favorites.map(({ id, siteName, note, url }) => (
          <li key={id} className="favorites-item">
            <strong>{siteName}</strong> -{' '}
            <a href={url} target="_blank" rel="noopener noreferrer" className="favorites-link">
              {url}
            </a>
            <br />
            <em>{note}</em>
            <br />
            <button onClick={() => removeFavorite(id)} className="favorites-delete-button">Sil</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
