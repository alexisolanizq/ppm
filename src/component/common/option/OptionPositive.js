import { COLORS, SIZES } from '@Const/styles'
import React from 'react'
import CircleColor from '../circle/CircleColor'
import Flex from '../flex/Flex'
import Text from '../text/Text'

const OptionPositive = ({ text = 'Cumplido' }) => (
  <Flex gap={SIZES.FOUR}>
    <CircleColor color={COLORS.PRIMARY_HEX}/>
    <Text className='color-primary'>{text}</Text>
  </Flex>
)

export default OptionPositive