import React, { useState } from 'react'
import '../App.css'
import TeamModal from './TeamModal'

const Header = () => {
  // State modal team
  const [showTeamModal, setShowTeamModal] = useState(false)

  return (
    <div className="header">
      {/* Karakter Kiri (Statis) */}
      <div className="char-wrapper pos-left">
        <img src="/Chiikawa.svg" className="character-img" alt="Chiikawa" />
      </div>

      <h1 className="title">SUDOKAWA</h1>
      
      {/* Tombol Team (Klik) */}
      <button 
        className="team-icon-btn" 
        onClick={() => setShowTeamModal(true)}
        data-tooltip="Meet the Team!"
      >
        <img 
          src="/chiikawaa.svg" 
          className="character-button" 
          style={{ width: '130px' }} 
          alt="Team button icon" 
        />
      </button>

      {/* Karakter Kanan (Statis) */}
      <div className="char-wrapper pos-right">
        <img src="/Hachikaware.svg" className="character-img" alt="Hachikaware" />
      </div>

      {showTeamModal && <TeamModal onClose={() => setShowTeamModal(false)} />}
    </div>
  )
}

export default Header
