import React from 'react';
import DivWidth from '../div/DivWidth';
import Flex from '../flex/Flex';
import Text from './Text';

const TitleValue = ({ widthContent = 200, isHalf = false, title = '', children, isBlack = false }) => (
  <Flex align="start" className="mb-3">
    <DivWidth px={150} porcentage={isHalf ? 50 : null}>
      <Text isPrimary={!isBlack} isBold>
        {title}
      </Text>
    </DivWidth>
    <DivWidth px={widthContent} porcentage={isHalf ? 50 : null}>
      <Text isGray>{children}</Text>
    </DivWidth>
  </Flex>
);

export default TitleValue;
