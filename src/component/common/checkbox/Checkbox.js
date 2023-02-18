import { CheckBoxOutlineBlank } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FormControlLabel } from '@mui/material';
import CheckBoxMaterial from '@mui/material/Checkbox';
import React from 'react';

const Checkbox = ({  value, label = '', onChange, ...props }) => (
  <FormControlLabel
    control={
      <CheckBoxMaterial
        color="success"
        checked={value}
        icon={<CheckBoxOutlineBlank />}
        checkedIcon={<CheckBoxIcon />}
        onChange={() => onChange(!value)}
        {...props}
      />
    }
    label={label}
  />
);

export default Checkbox;
