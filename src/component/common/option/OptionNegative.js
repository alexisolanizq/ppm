import { COLORS, SIZES } from '@Const/styles'
import React from 'react'
import CircleColor from '../circle/CircleColor'
import Flex from '../flex/Flex'
import Text from '../text/Text'

const OptionNegative = ({ text = 'Moroso' }) => (
  <Flex gap={SIZES.FOUR}>
    <CircleColor color={COLORS.RED}/>
    <Text className='color-red'>{text}</Text>
  </Flex>
)

export default OptionNegative