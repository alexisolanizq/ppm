import { FormLabel, InputLabel } from '@mui/material';
import React from 'react';

const Label = ({
  id = '',
  children,
  isFormLabel = false,
  isPrimary,
  className = ''
}) => {
  const Element = isFormLabel ? FormLabel : InputLabel;
  const classPrimary = isPrimary ? 'label-primary' : '';
  return (
    <Element className={`${classPrimary} ${className}`} color="success" id={id}>
      {children}
    </Element>
  );
};

export default Label;
