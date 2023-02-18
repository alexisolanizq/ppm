import React from 'react';
import { Controller } from 'react-hook-form';
import Select from './Select';

const SelectController = ({
  control,
  label,
  rules,
  name = '',
  options = [],
  optionId = 'id',
  optionName = 'name',
  optionValue = null,
  onChange = () => {},
  render,
  placeholder,
  componentAdd,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange: onChangeController, value },
      fieldState: { error }
    }) => (
      <Select
        label={label}
        name={name}
        value={value}
        onChange={(event) => {
          onChangeController(event);
          onChange(event);
        }}
        errorMessage={error && error.message}
        error={!!error}
        options={options}
        optionId={optionId}
        optionName={optionName}
        optionValue={optionValue}
        render={render}
        placeholder={placeholder}
        componentAdd={componentAdd}
        {...props}
      />
    )}
  />
);

export default SelectController;
