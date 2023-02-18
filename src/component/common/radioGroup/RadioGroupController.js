import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import Flex from '../flex/Flex';
import TextError from '../text/TextError';
import FormControl from '../formControl/FormControl';
import Label from '../label/Label';

const RadioGroupController = ({
  name,
  control,
  rules,
  options = [],
  label = '',
  isString = false,
  optionId = 'id',
  optionName = 'name',
  optionValue = null,
  isHorizontal = false,
  disabled = false,
  ...props
}) => <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <FormControl>
        <Flex align={isHorizontal && 'center'} isVertical={!isHorizontal} gap={isHorizontal ? 16 : 0}>
          <Label isFormLabel id={`radiogroup-label-${name}`}>{label}</Label>
          <RadioGroup
            row={ !!isHorizontal }
            color="black"
            aria-labelledby={`radiogroup-label-${name}`}
            name={name}
            onChange={(_e, valueChange) => {
              if (valueChange === 'true' || valueChange === 'false') {
                onChange(valueChange === 'true')
              } else {
                onChange(isString ? valueChange : parseInt(valueChange, 10))
              }
            }}
            value={value}
            {...props}
          >
            {options.map((item) => (
              <FormControlLabel
                disabled={disabled}
                key={`radioOptions${name}${item[optionId]}`}
                value={optionValue ? item[optionValue] : item[optionId]}
                control={<Radio color="success" size="small" />}
                label={item[optionName]}
              />
            ))}
          </RadioGroup>
        </Flex>

        {error && <TextError message={error.message} />}
      </FormControl>
    )}
  />;

export default RadioGroupController;
