import { MenuItem } from '@mui/material';
import SelectMaterial from '@mui/material/Select';
import { isUndefined } from '@Utils/values';
import React from 'react';
import FormControl from '../formControl/FormControl';
import Label from '../label/Label';
import TextError from '../text/TextError';

const Select = ({
  label,
  name,
  value,
  placeholder,
  render,
  variant = 'outlined',
  options = [],
  optionId = 'id',
  optionName = 'name',
  optionValue = null,
  componentAdd = null,
  errorMessage,
  isLoading = false,
  className = '',
  isValueObject = false,
  isDefaultValue = false,
  ...props
}) => {
  const propValue = isDefaultValue
    ? {
      defaultValue: ''
    }
    : {
        value: value ?? ''
      };

  return (
    <FormControl>
      {label && <Label id={`select-label-${name}`}>{label}</Label>}
      <SelectMaterial
        color="success"
        labelId={`select-label-${name}`}
        id={`select-${name}`}
        variant={variant}
        label={label}
        displayEmpty
        className={`${componentAdd ? 'selectComponentAdd' : ''} ${className}`}
        {...propValue}
        {...props}
      >
        {placeholder && (
          <MenuItem value="" selected disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((item, index) => (
          <MenuItem
            key={`menuItem${name}${isUndefined(item[optionId]) ? index : item[optionId]}`}
            // eslint-disable-next-line no-nested-ternary
            value={isValueObject ? item : !optionValue ? item[optionId] : item[optionValue]
            }
          >
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <div>{render ? render(item) : item[optionName]}</div>
            )}
          </MenuItem>
        ))}
        {componentAdd && componentAdd}
      </SelectMaterial>
      {errorMessage && <TextError message={errorMessage} />}
      {!label && <div style={{ height: 5 }} />}
    </FormControl>
  );
};

export default Select;
