import React, { useState } from 'react'
import '../App.css'

const quotes = ["Ngantuk...", "Susah ya?", "Semangat!", "Mau yupi...", "Hah?", "Wkwkwk", "Lapar..", "Zzz..."]

const Header = ({ onShowTeam }) => {
  const [activeBubble, setActiveBubble] = useState(null)

  const handleCharClick = (id) => {
    setActiveBubble(id)
    setTimeout(() => setActiveBubble(null), 2000)
  }

  const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="header">
      {/* Container Flex untuk Judul & Karakter */}
      <div className="header-content">
        
        {/* Karakter Kiri (Chiikawa) */}
        <div className="char-container" onClick={() => handleCharClick('char2')}>
          <img src="/Chiikawa.svg" className="character-img" alt="Chiikawa" />
          {activeBubble === 'char2' && (
            <div className="speech-bubble bubble-down">
              {getQuote()}
            </div>
          )}
        </div>

        <h1 className="title">SUDOKAWA</h1>

        {/* Karakter Kanan (Hachikaware) */}
        <div className="char-container" onClick={() => handleCharClick('char3')}>
          <img src="/Hachikaware.svg" className="character-img" alt="Hachikaware" />
          {activeBubble === 'char3' && (
            <div className="speech-bubble bubble-down">
              {getQuote()}
            </div>
          )}
        </div>
      </div>

      {/* Tombol Meet Team (Absolut di Kanan) */}
      <button 
        className="team-icon-btn" 
        onClick={onShowTeam}
        data-tooltip="Meet the Team!"
      >
        <img src="/chiikawaa.svg" className="character-button" alt="Team" />
      </button>
    </div>
  )
}

export default Header