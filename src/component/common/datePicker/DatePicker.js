import React from 'react';
import { LocalizationProvider, DatePicker as DatePickerComponent } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { FormControl, TextField } from '@mui/material';
import TextError from '../text/TextError';

const DatePicker = ({
  label,
  value,
  onChange,
  error,
  ...props
}) => (
  <FormControl className='mb-4'>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePickerComponent
        label={label}
        value={value ?? null}
        onChange={onChange}
        renderInput={(params) => <TextField className="w-100" {...params} />}
        {...props}
      />
      {error && <TextError message={error.message} />}
    </LocalizationProvider>
  </FormControl>
);

export default DatePicker;
