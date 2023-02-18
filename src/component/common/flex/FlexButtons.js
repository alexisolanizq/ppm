import React from 'react';
import Flex from './Flex';

const FlexButtons = ({ children, noMarginTop = false }) => (
  <Flex className={`${noMarginTop ? '' : 'mt-5'}`} justify="center" gap={24}>
    {children}
  </Flex>
);

export default FlexButtons;
