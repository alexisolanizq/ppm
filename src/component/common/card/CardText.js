import React from 'react'
import Text from '../text/Text'

const CardText = ({ title = '', value = '', className = '', ...props }) => (
  <div className={className} {...props}>
    <Text isBold>{title}</Text>
    <Text isPrimaryText>{value}</Text>
  </div>
)

export default CardText