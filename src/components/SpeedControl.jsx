import React from 'react'
import '../App.css'

const SpeedControl = ({ speed, setSpeed, onSkip, isSolving }) => {
  return (
    <div className="playlist-container">
      {/* Tambahkan class 'disabled-state' jika isSolving false */}
      <div className={`speed-control ${!isSolving ? 'disabled-state' : ''}`}>
        <span className="speed-label">Speed</span>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={speed} 
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="speed-slider"
          disabled={!isSolving} 
          /* PASTIKAN TIDAK ADA TITLE DI SINI */
        />
      </div>

      <button 
        className={`btn-skip ${!isSolving ? 'disabled-state' : ''}`}
        onClick={onSkip} 
        disabled={!isSolving}
        /* PASTIKAN TIDAK ADA TITLE DI SINI */
      >
        ⏭
      </button>
    </div>
  )
}

export default SpeedControl