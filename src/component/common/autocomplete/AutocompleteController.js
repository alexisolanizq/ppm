import React from 'react';
import { Autocomplete, Paper, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const AutocompleteController = ({
  name = '',
  control,
  options,
  label = '',
  optionId = 'id',
  optionName = 'name',
  extraOptionName = null,
  placeholder = null,
  className = '',
  rules = {},
  disabled = false,
  componentAdd = null,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <Autocomplete
        value={value ? options.find((f) => f[optionId] === value) : null}
        options={options}
        onChange={(_event, data) =>
          data ? onChange(data[optionId]) : onChange(null)
        }
        // eslint-disable-next-line react/no-unstable-nested-components
        PaperComponent={({
          className: classNamePaper,
          children,
          ...propsPaper
        }) => (
          <Paper
            className={`${
              componentAdd ? 'componentAdd' : ''
            } ${classNamePaper}`}
            {...propsPaper}
          >
            {children}
            {componentAdd && componentAdd}
          </Paper>
        )}
        getOptionLabel={(option) =>
          extraOptionName
            ? `${option[extraOptionName]} | ${option[optionName]}`
            : option[optionName] || ''
        }
        isOptionEqualToValue={(option) => option[optionId] === value}
        sx={{ width: '100%' }}
        id={`combo-box-${name}`}
        disabled={disabled}
        className={className}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            error={!!error}
            color="success"
            className={`mb-4 ${className}`}
            placeholder={placeholder}
            helperText={error && error.message}
            disabled={disabled}
          />
        )}
        {...props}
      />
    )}
  />
);

export default AutocompleteController;
