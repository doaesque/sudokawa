import React, { useState } from 'react'
import '../App.css'

const quotes = {
  usagi: ["Urra!", "Haa?", "Yaha!", "Waaa!", "Puleya!", "Eeeh?"],
  momonga: ["Cute!", "Puji Aku!", "Momon...", "Sini!", "Lari!", "Lihat!"]
}

const ChiikawaCharacters = () => {
  // State untuk bubble chat yang aktif
  const [activeBubble, setActiveBubble] = useState(null)

  // Handler klik karakter: tampilkan bubble 2 detik
  const handleCharClick = (id) => {
    setActiveBubble(id)
    setTimeout(() => setActiveBubble(null), 2000)
  }

  // Helper ambil quote acak
  const getQuote = (char) => quotes[char][Math.floor(Math.random() * quotes[char].length)]

  return (
    <div className="footer-mascot-container">
      {/* Karakter 1: Usagi */}
      <div 
        className="char-wrapper" 
        onClick={() => handleCharClick('usagi')}
        style={{ cursor: 'pointer', pointerEvents: 'auto' }}
      >
        <img src="/Usagi.svg" alt="Usagi" className="character-img" />
        {activeBubble === 'usagi' && (
          <div className="speech-bubble bubble-char">
            {getQuote('usagi')}
          </div>
        )}
      </div>

      {/* Karakter 2: Momonga */}
      <div
        className="char-wrapper" 
        onClick={() => handleCharClick('momonga')}
        style={{ cursor: 'pointer', pointerEvents: 'auto' }}
      >
        <img src="/Momonga.svg" alt="Momonga" className="character-img" />
        {activeBubble === 'momonga' && (
          <div className="speech-bubble bubble-char">
            {getQuote('momonga')}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChiikawaCharacters
