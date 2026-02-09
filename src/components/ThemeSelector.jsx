import React, { useState } from 'react'

const themes = [
  { id: 'chiikawa', emoji: '🌸', name: 'Chiikawa' },
  { id: 'hachikaware', emoji: '❄️', name: 'Hachikaware' },
  { id: 'usagi', emoji: '🌻', name: 'Usagi' },
  { id: 'momonga', emoji: '🪻', name: 'Momonga' },
]

const ThemeSelector = ({ currentTheme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (id) => {
    setTheme(id)
    setIsOpen(false)
  }

  const active = themes.find(t => t.id === currentTheme) || themes[0]

  return (
    <div className="theme-selector-wrapper">
      <button 
        className="theme-btn" 
        onClick={() => setIsOpen(!isOpen)}
        title="Ganti Tema"
      >
        {/* Bungkus konten agar bisa diatur layout-nya */}
        <div className="theme-btn-content">
          <span className="theme-emoji">{active.emoji}</span>
          <span className="theme-text">{active.name}</span>
        </div>
        <span className="theme-arrow">▼</span>
      </button>

      {isOpen && (
        <ul className="theme-dropdown">
          {themes.map((t) => (
            <li
              key={t.id}
              onClick={() => handleSelect(t.id)}
              className={`theme-item ${currentTheme === t.id ? 'active' : ''}`}
            >
              <span className="theme-emoji">{t.emoji}</span>
              <span className="theme-text">{t.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ThemeSelector
