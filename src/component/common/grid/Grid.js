import React from 'react'
import '@Assets/styles/grid.css'

const Grid = ({ children, repeat = 3, gap = 0, className = '' }) => {
  const style = {
    gridTemplateColumns: `repeat(${repeat}, 1fr)`,
    gap,
  }
  return (
    <div className={`grid ${className}`} style={style}>{children}</div>
  )
}

export default Grid