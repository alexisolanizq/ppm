import React from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';

const SelectMenuItems = ({
  label,
  name,
  defaultValue,
  properties,
  register,
  items,
  idValue,
  property
}) => (
  <Select
    input={<OutlinedInput label={label} />}
    labelId={`${name}-label`}
    color="success"
    name={name}
    defaultValue={defaultValue}
    {...register(name, properties)}
  >
    <MenuItem value="" disabled>
      Elige una opción
    </MenuItem>
    {items.map((item) => (
      <MenuItem key={item[idValue]} value={item[idValue]}>
        {item[property]}
      </MenuItem>
    ))}
  </Select>
);

const propsAreEqual = (prevProps, nextProps) =>
  prevProps.label === nextProps.label &&
  prevProps.name === nextProps.name &&
  prevProps.defaultValue === nextProps.defaultValue &&
  prevProps.properties === nextProps.properties &&
  prevProps.items === nextProps.items &&
  prevProps.idValue === nextProps.idValue &&
  prevProps.property === nextProps.property;

export default React.memo(SelectMenuItems, propsAreEqual);
