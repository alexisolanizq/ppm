import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from './DatePicker';

const DatePickerController = ({
  name = '',
  label = '',
  control,
  rules,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <DatePicker
        error={error}
        label={label}
        onChange={onChange}
        value={value}
        {...props}
      />
    )}
  />
);

export default DatePickerController;
