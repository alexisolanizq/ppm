import React from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from './Checkbox';

const CheckboxController = ({ name, control, rules, label }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { value, onChange } }) => (
      <Checkbox 
        value={value}
        onChange={onChange}
        label={label}
      />
    )}
  />
);

export default CheckboxController;
