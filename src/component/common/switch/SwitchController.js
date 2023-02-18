import { VALUE_NO, VALUE_YES } from '@Const/const'
import { FormLabel, Switch } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import Flex from '../flex/Flex'
import Text from '../text/Text'
import TextError from '../text/TextError'
import FormControl from '../formControl/FormControl';

const SwitchController = ({
  name,
  control,
  label,
  textNegative = VALUE_NO,
  textPositive = VALUE_YES,
  rules = {},
  width = 200,
  ...props
}) => (
    <Controller name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value = false }, fieldState: { error } }) => (
      <FormControl>
        <Flex gap={5}>
          <div style={{ width }}>
            <FormLabel className='color-primary mr-3' id={`switch-label-${name}`}>{label}</FormLabel>
          </div>
          <Flex gap={5}>
            <Text isRegular>{textNegative}</Text>
            <Switch
              inputProps={{ 'aria-label': 'ant design' }}
              checked={value}
              onChange={() => onChange(!value)}
              {...props}
            />
            <Text isRegular>{textPositive}</Text>
          </Flex>
        </Flex>
        {error && <TextError message={error.message}/>}
      </FormControl>
    )}/>
  )

export default SwitchController