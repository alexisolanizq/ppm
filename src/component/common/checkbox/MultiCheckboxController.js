import React from 'react';
import { Controller } from 'react-hook-form';
import MultipleCheckbox from './MultiCheckbox';

const MultiCheckboxController = ({ name, control, rules, options }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value } }) => (
      <MultipleCheckbox onChange={onChange} options={options} value={value}/>
    )}
  />
);

export default MultiCheckboxController;
