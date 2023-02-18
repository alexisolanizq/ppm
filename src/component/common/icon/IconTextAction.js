import React from 'react';

import Icon from './Icon';
import Flex from '../flex/Flex';
import Text from '../text/Text';

const IconTextAction = ({
  icon: IconElement,
  onClick = () => {},
  colorIcon = 'primary',
  text = '',
  className = '',
  ...props
}) => (
  <Flex onClick={onClick} gap={4} className={`pointer ${className}`} {...props}>
    <Icon
      icon={IconElement}
      width={20}
      className={`icon-${colorIcon}`}
    />
    <Text isPrimary>{text}</Text>
  </Flex>
);

export default IconTextAction;
