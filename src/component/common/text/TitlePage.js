import React from 'react'

const TitlePage = ({children, className = ''}) => (
    <h1 className={`titlePage ${className}`}>{children}</h1>
  )

export default TitlePage