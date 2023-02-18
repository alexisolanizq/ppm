import React from 'react';
import { Controller } from 'react-hook-form';
import AddressComponent from './AddressComponent';

const AddressController = ({ control, name, rules, nameMain= '', isPrincipal = false}) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { value, onChange } }) => (
      <AddressComponent
        value={value}
        onChange={onChange}
        nameMain={nameMain}
        isPrincipal={isPrincipal}
      />
    )}
  />
);

export default AddressController;
