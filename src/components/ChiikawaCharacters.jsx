import React, { useState } from 'react'
import '../App.css'

const quotes = ["Usagi!", "Hah??", "Yaha!", "Urra!", "Momon...", "Cute!", "Purr...", "Lari!"]

const ChiikawaCharacters = () => {
  const [activeBubble, setActiveBubble] = useState(null)

  const handleCharClick = (id) => {
    setActiveBubble(id)
    setTimeout(() => setActiveBubble(null), 2000)
  }

  const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="footer-mascot-container">
      {/* Character 1: Usagi */}
      <div 
        className="char-wrapper" 
        onClick={() => handleCharClick('char1')}
      >
        <img src="/Usagi.svg" alt="Usagi" className="character-img" />
        {activeBubble === 'char1' && (
          <div className="speech-bubble bubble-char">
            {getQuote()}
          </div>
        )}
      </div>

      {/* Character 2: Momonga */}
      <div
        className="char-wrapper" 
        onClick={() => handleCharClick('char2')}
      >
        <img src="/Momonga.svg" alt="Momonga" className="character-img" />
        {activeBubble === 'char2' && (
          <div className="speech-bubble bubble-char">
            {getQuote()}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChiikawaCharacters