import React from 'react'
import '../App.css'

const SpeedControl = ({ speed, setSpeed, onSkip, isSolving }) => {
  // Balik logika slider: Kanan (Besar) = Cepat, Kiri (Kecil) = Lambat
  // Speed di state adalah 'Delay' (ms), jadi makin kecil makin cepat
  const displayValue = speed === 0 ? 100 : (101 - speed)

  const handleChange = (e) => {
    const val = Number(e.target.value)
    // Kembalikan ke delay saat state diupdate
    setSpeed(101 - val)
  }

  return (
    <div className="playlist-container">
      <div className={`speed-control ${!isSolving ? 'disabled-state' : ''}`}>
        <span className="speed-label">Speed</span>
        <input 
          type="range" 
          min="1" 
          max="100"
          value={displayValue} 
          onChange={handleChange}
          className="speed-slider"
          disabled={!isSolving} 
        />
      </div>

      <button 
        className={`btn-skip ${!isSolving ? 'disabled-state' : ''}`}
        onClick={onSkip} 
        disabled={!isSolving}
      >
        ⏭
      </button>
    </div>
  )
}

export default SpeedControl
