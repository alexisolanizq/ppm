import React from 'react'
import Text from './Text';

const TitleRol = ({ title = '' }) => (
  <Text isBig isBold className="mb-4">
    {title}
  </Text>
);

export default TitleRol