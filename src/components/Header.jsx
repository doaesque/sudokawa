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
      {/* Karakter Kiri (Diperkecil) */}
      <div 
        className="char-wrapper pos-left" 
        onClick={() => handleCharClick('char2')}
      >
        <img src="/Chiikawa.svg" className="character-img" alt="Chiikawa Character" />
        {activeBubble === 'char2' && (
          <div className="speech-bubble bubble-down" style={{ top: '100%', marginTop: '10px', left: '-50%' }}>
            {getQuote()}
          </div>
        )}
      </div>

      <h1 className="title">SUDOKAWA</h1>

      {/* Button Meet Team (Diperbesar) */}
      <button 
        className="team-icon-btn" 
        onClick={onShowTeam}
        data-tooltip="Meet the Team!" 
      >
        {/* REVISI: Ukuran jadi 130px */}
        <img src="/chiikawaa.svg" className="character-button" style={{width: '130px'}} alt="Team button icon" />
      </button>

      {/* Karakter Kanan (Diperkecil) */}
      <div 
        className="char-wrapper pos-right" 
        onClick={() => handleCharClick('char3')}
      >
        <img src="/Hachikaware.svg" className="character-img" alt="Hachikaware Character" />
        {activeBubble === 'char3' && (
          <div className="speech-bubble bubble-down" style={{ top: '100%', marginTop: '10px', left: '10px' }}>
            {getQuote()}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header