import { FormHelperText } from '@mui/material';
import React from 'react';

const TextError = ({ message, className = '' }) => (
  <FormHelperText className={`Mui-error ${className}`}>{message}</FormHelperText>
);

export default TextError;