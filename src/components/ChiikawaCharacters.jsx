import React, { useState } from 'react'
import '../App.css'

const quotes = {
  usagi: ["Urra!", "Haa?", "Yaha!", "Waaa!", "Puleya!", "Eeeh?"],
  momonga: ["Cute!", "Puji Aku!", "Momon...", "Sini!", "Lari!", "Lihat!"]
}

const ChiikawaCharacters = () => {
  const [activeBubble, setActiveBubble] = useState(null)

  const handleCharClick = (id) => {
    setActiveBubble(id)
    setTimeout(() => setActiveBubble(null), 2000)
  }

  const getQuote = (char) => quotes[char][Math.floor(Math.random() * quotes[char].length)]

  return (
    <div className="footer-mascot-container">
      {/* Character 1: Usagi */}
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

      {/* Character 2: Momonga */}
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