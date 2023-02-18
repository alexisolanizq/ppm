import React from 'react'
import '@Assets/styles/badge.css'

const Badge = ({ children, style }) => (
  <div className={`badgee ${style}`}>{children}</div>
)

export default Badge