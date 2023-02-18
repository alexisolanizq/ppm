import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import CircularLoading from '../loader/CircularLoading';

const TextFieldController = ({
  name = '',
  label = '',
  control,
  rules = {},
  defaultValue,
  className = 'mb-4',
  onEnterChange = () => {},
  onChange = () => {},
  isLoading = false,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue={defaultValue}
    render={({
      field: { onChange: onChangeField, value, onBlur },
      fieldState: { error },
    }) => (
      <div className="textfieldCustom">
        <TextField
          id={`textfield-${name}`}
          label={label}
          color="success"
          variant="outlined"
          helperText={error && error.message}
          fullWidth
          className={className}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              onEnterChange(event.target.value);
            }
          }}
          onBlur={onBlur}
          onChange={(event) => {
            onChangeField(event.target.value);
            onChange(event.target.value);
          }}
          value={value ?? ''}
          error={!!error}
          {...props}
        />
        {isLoading && <CircularLoading  size={25}/>}
      </div>
    )}
  />
);

export default TextFieldController;
