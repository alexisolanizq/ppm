import React from 'react';
import {
  FormControl,
  Switch,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
  FormGroup,
  Typography,
  Stack
} from '@mui/material';


const StepTwoPE = ({
  error,
  countries,
  divisional,
  handleRegistrationData,
  registrationData,
  getErrorValue
}) => (
  <>
    <FormControl
      fullWidth
      className='mb-3'
      error={getErrorValue(registrationData.country)}
    >
      <InputLabel id="area-label" color="success">
        País
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={registrationData.country}
        label="País"
        onChange={(e) => handleRegistrationData('county', e.target.value)}
      >
        {countries &&
          countries.map((item) => (
            <MenuItem key={item.counId} value={item.counId}>
              {item.counNameSpa}
            </MenuItem>
          ))}
      </Select>
      {error && registrationData.country === '' ? (
        <FormHelperText>lklk</FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
    <FormGroup
      className='mb-3 ml-05 w-100 d-flex flex-row align-items-center lh-1 h-fit'
    >
      <Typography className="form-label mr-3">
        ¿Es divisional?
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>No</Typography>
        <Switch
          inputProps={{ 'aria-label': 'ant design' }}
          value={registrationData.isDivisional}
          onChange={(e) =>
            handleRegistrationData('isDivisional', e.target.checked)
          }
        />
        <Typography>Sí</Typography>
      </Stack>
    </FormGroup>
    {registrationData.isDivisional ? (
      <>
        <TextField
          id="notice-fase"
          label="Referencia madre"
          color="success"
          variant="outlined"
          helperText={
            error && registrationData.motherReference === '' ? 'lklk' : ''
          }
          className="mb-3"
          error={getErrorValue(registrationData.motherReference)}
          value={registrationData.motherReference}
          onChange={(e) =>
            handleRegistrationData('motherReference', e.target.value)
          }
        />
        <FormControl
          fullWidth
          className="mb-3"
          error={getErrorValue(registrationData.divisional)}
        >
          <InputLabel id="area-label" color="success">
            Divisionales
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={registrationData.divisional}
            label="Divisionales"
            onChange={(e) =>
              handleRegistrationData('divisional', e.target.value)
            }
          >
            {divisional.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          {error && registrationData.country === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
      </>
    ) : (
      <TextField
        id="notice-fase"
        label="Referencia relacionada"
        color="success"
        variant="outlined"
        helperText={error && registrationData.reference === '' ? 'lklk' : ''}
        className="mb-3"
        error={getErrorValue(registrationData.reference)}
        value={registrationData.reference}
        onChange={(e) => handleRegistrationData('reference', e.target.value)}
      />
    )}
  </>
);

export default StepTwoPE;
