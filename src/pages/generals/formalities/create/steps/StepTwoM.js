import React from 'react';
import {
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
} from '@mui/material';

const StepTwoM = ({
  errors,
  countries,
  getErrorValue,
  handleRegistrationData,
  registrationData,
  getHelperText
}) => (
  <>
    <FormControl
      fullWidth
      className="mb-3"
      error={getErrorValue(registrationData.country)}
    >
      <InputLabel id="area-label" color="success">
        País
      </InputLabel>
      <Select
      disabled={
        registrationData.procedureArea === 'P' ||
        registrationData.procedureArea === 'M'
      }
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={registrationData.country}
        label="País"
        onChange={(e) => handleRegistrationData('country', e.target.value)}
      >
        {countries &&
          countries.map((item) => (
            <MenuItem key={item.counId} value={item.counId}>
              {item.counNameSpa}
            </MenuItem>
          ))}
      </Select>
      {errors && registrationData.country === '' ? (
        <FormHelperText>lklk</FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
    <TextField
      id="notice-fase"
      label="Referencia relacionada"
      color="success"
      variant="outlined"
      helperText={getHelperText(registrationData.reference, 'lklk', '')}
      className="mb-3 w-100"
      error={getErrorValue(registrationData.reference)}
      value={registrationData.reference}
      onChange={(e) => handleRegistrationData('reference', e.target.value)}
    />
  </>
);

export default StepTwoM;
