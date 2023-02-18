import React from 'react';
import Flex from '../flex/Flex';
import Text from '../text/Text';

const IconText = ({
  icon: Icon,
  colorIcon = 'primary',
  text = '',
  ...props
}) => (
  <Flex gap={4} {...props}>
    <Icon width={20} className={`icon-${colorIcon}`} />
    <Text isPrimary>{text}</Text>
  </Flex>
);

export default IconText;
