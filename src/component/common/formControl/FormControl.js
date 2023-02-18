import React from 'react';
import FormControlUI from '@mui/material/FormControl';


const FormControl = ({ className = '', children }) => (
  <FormControlUI className={`mb-3 ${className}`} fullWidth>{children}</FormControlUI>
);

export default FormControl;
