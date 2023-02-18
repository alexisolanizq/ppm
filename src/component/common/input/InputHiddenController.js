import React from 'react';
import { Controller } from 'react-hook-form';
import InputHidden from './InputHidden';

const InputHiddenController = ({ name = '', control }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value } }) => <InputHidden value={value} />}
  />
);

export default InputHiddenController;
