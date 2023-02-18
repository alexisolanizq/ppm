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
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const StepTwoB = ({
  errors,
  areasList,
  countries,
  handleRegistrationData,
  registrationData,
  getErrorValue,
  getErrorValueNull,
}) => (
  <>
    <FormControl
      fullWidth
      className="w-100 d-flex flex-nowrap mb-3"
      error={getErrorValue(registrationData.areaId)}
    >
      <InputLabel id="area-label" color="success">
        * Area
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={registrationData.areaId}
        label="* Area"
        onChange={(e) => handleRegistrationData('areaId', e.target.value)}
      >
        {areasList &&
          areasList.map((item) => (
            <MenuItem key={item.joaId} value={item.joaId}>
              {item.joaName}
            </MenuItem>
          ))}
      </Select>
      {errors && registrationData.areaId === '' ? (
        <FormHelperText>lklk</FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
    {(registrationData.areaId === 9 || registrationData.areaId === 10) && (
      <FormControl
        fullWidth
        className="w-100 d-flex flex-nowrap mb-3"
        error={getErrorValue(registrationData.country)}
      >
        <InputLabel id="area-label" color="success">
          * Pais
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={registrationData.country}
          label="Figura legal"
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
    )}
    <TextField
      id="notice-fase"
      label="Referencia relacionada"
      color="success"
      variant="outlined"
      className="w-100 d-flex flex-nowrap mb-3"
      value={registrationData.reference}
      onChange={(e) => handleRegistrationData('reference', e.target.value)}
    />
    <FormGroup className="mb-3 ml-05 w-100 d-flex flex-row align-items-center lh-1 h-fit">
      <Typography className="form-labe mr-05">
        ¿Control de vencimiento?
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>No</Typography>
        <Switch
          inputProps={{ 'aria-label': 'ant design' }}
          value={registrationData.isExpiration}
          onChange={(e) =>
            handleRegistrationData('isExpiration', e.target.checked)
          }
        />
        <Typography>Sí</Typography>
      </Stack>
    </FormGroup>
    {registrationData.isExpiration && (
      <Stack className="w-100 pr-3" spacing={3}>
        <DesktopDatePicker
          label="Fecha de vencimiento"
          format="MM/DD/YYYY"
          value={registrationData.expirationDate}
          onChange={(e) =>
            handleRegistrationData(
              'expirationDate',
              moment(e).format('MM-DD-YYYY')
            )
          }
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={
                errors && registrationData.expirationDate === null ? 'lklk' : ''
              }
              color="success"
              error={getErrorValueNull(registrationData.expirationDate)}
            />
          )}
        />
      </Stack>
    )}
    {(registrationData.areaId === 9 || registrationData.areaId === 10) && (
      <>
        <FormGroup className="mb-3 ml-05 w-100 d-flex flex-row align-items-center lh-1 h-fit">
          <Typography className="form-labe mr-05">
            ¿Control de vencimiento asociado?
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>No</Typography>
            <Switch
              inputProps={{ 'aria-label': 'ant design' }}
              value={registrationData.isExpirationAssociated}
              onChange={(e) =>
                handleRegistrationData('isExpirationAssociated', e.target.checked)
              }
            />
            <Typography>Sí</Typography>
          </Stack>
        </FormGroup>
        {registrationData.isExpirationAssociated && (
          <Stack className="w-100 pr-3" spacing={3}>
            <DesktopDatePicker
              label="Fecha de vencimiento asociada"
              format="MM/DD/YYYY"
              value={registrationData.expirationDateAssociated}
              onChange={(e) =>
                handleRegistrationData(
                  'expirationDateAssociated',
                  moment(e).format('MM-DD-YYYY')
                )
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={
                    errors && registrationData.expirationDateAssociated === null
                      ? 'lklk'
                      : ''
                  }
                  color="success"
                  error={getErrorValueNull(
                    registrationData.expirationDateAssociated
                  )}
                />
              )}
            />
          </Stack>
        )}
      </>
    )}
  </>
);

export default StepTwoB;
