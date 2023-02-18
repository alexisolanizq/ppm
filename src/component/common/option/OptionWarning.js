import { COLORS, SIZES } from '@Const/styles';
import React from 'react';
import CircleColor from '@Component/common/circle/CircleColor';
import Flex from '@Component/common/flex/Flex';
import Text from '@Component/common/text/Text';

const OptionWarning = ({text = 'Suspenso'}) => (
  <Flex gap={SIZES.FOUR}>
    <CircleColor color={COLORS.ORANGE_HEX} />
    <Text className="color-warning">{text}</Text>
  </Flex>
);

export default OptionWarning;
