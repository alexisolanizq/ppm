import React from 'react'

const IconElement = ({ icon: IconHtml, color = '' }) => <IconHtml className={`icon-${color}`} />

export default IconElement