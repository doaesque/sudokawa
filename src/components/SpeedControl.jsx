import React from 'react'
import '../App.css'

const SpeedControl = ({ speed, setSpeed, onSkip, isSolving }) => {
  const displayValue = speed === 0 ? 100 : (101 - speed)

  const handleChange = (e) => {
    const val = Number(e.target.value)
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
