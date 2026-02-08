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
    <>
      {/* Footer 1: Usagi */}
      <div 
        className="char-wrapper pos-footer1" 
        onClick={() => handleCharClick('footer1')}
      >
        <img src="/Usagi.svg" className="character-img" />
        {activeBubble === 'footer1' && (
          <div className="speech-bubble" style={{ bottom: '110%', right: '0' }}>
            {getQuote()}
          </div>
        )}
      </div>

      {/* Footer 2: Momonga */}
      <div 
        className="char-wrapper pos-footer2" 
        onClick={() => handleCharClick('footer2')}
      >
        <img src="/Momonga.svg" className="character-img" />
        {activeBubble === 'footer2' && (
          <div className="speech-bubble" style={{ bottom: '110%', right: '0' }}>
            {getQuote()}
          </div>
        )}
      </div>
    </>
  )
}

export default ChiikawaCharacters