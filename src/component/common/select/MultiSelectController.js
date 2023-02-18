import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import Label from '../label/Label';
import TextError from '../text/TextError';

const MultiSelectController = ({
  control,
  label,
  rules,
  name = '',
  options = [],
  optionId = 'id',
  optionName = 'name',
  optionValue = null,
  onChange = () => {},
  placeholder,
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
      <FormControl fullWidth>
        {label && <Label id={`select-label-${name}`}>{label}</Label>}
        <Select
          color="success"
          labelId={`select-label-${name}`}
          id={`select-${name}`}
          multiple
          value={value ?? []}
          onChange={(event) => {
            onChangeController(event);
            onChange(event);
          }}
          className="mb-4"
          fullWidth
          variant="outlined"
          label={label}
          displayEmpty
          error={!!error}
          renderValue={(selected) =>
            options
              .filter((f) => selected.indexOf(f[optionId]) > -1)
              .map((m) => m[optionName])
              .join(', ')
          }
          {...props}
        >
          {placeholder && (
            <MenuItem value="" selected disabled>
              {placeholder}
            </MenuItem>
          )}
          {options.map((item) => (
            <MenuItem
              key={`menuItem${name}${item[optionId]}`}
              value={!optionValue ? item[optionId] : item[optionValue]}
            >
              <Checkbox checked={value && value.indexOf(item[optionId]) > -1} />
              <ListItemText primary={item[optionName]} />
            </MenuItem>
          ))}
        </Select>
        {error && <TextError message={error.message} />}
        {!label && <div style={{ height: 5 }} />}
      </FormControl>
    )}
  />
);

export default MultiSelectController;
