import React from 'react';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  FormHelperText,
  FormGroup,
  Typography,
  Stack,
  Switch,
  TextField
} from '@mui/material';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TablePriorityData from './TablePriorityData';

const StepThreeG = ({
  errors,
  prioritiesData,
  handlePriorities,
  removePriorities,
  addPriorities,
  handleRegistrationData,
  registrationData,
  legalFiguresList,
  getErrorValue,
  variablesList,
  getHelperText,
  countries,
  getErrorValueNull
}) => (
  <Grid
    item
    xs={8}
    className="my-0 mx-auto d-flex flex-column align-content-center"
  >
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
      <Stack className="w-100 mb-3" spacing={3}>
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
              error={getErrorValue(registrationData.expirationDate)}
            />
          )}
        />
      </Stack>
    )}
    <FormControl
      fullWidth
      className="mb-3"
      error={getErrorValue(registrationData.legalFigure)}
    >
      <InputLabel id="demo-simple-select-label">* Figura Legal</InputLabel>
      <Select
        color="success"
        varian="filled"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={registrationData.legalFigure}
        label="* Tipo de busqueda"
        onChange={(e) => handleRegistrationData('legalFigure', e.target.value)}
      >
        {legalFiguresList &&
          legalFiguresList.map((item) => (
            <MenuItem key={item.lefiId} value={item.lefiId}>
              {item.lefiSpanishName}
            </MenuItem>
          ))}
      </Select>
      {errors && registrationData.legalFigure === '' ? (
        <FormHelperText>lklk</FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
    <TextField
      id="notice-fase"
      label="Titulo"
      color="success"
      variant="outlined"
      helperText={getHelperText(
        registrationData.titleProcedureBrand,
        'lklk',
        ''
      )}
      className="mb-3"
      error={getErrorValue(registrationData.titleProcedureBrand)}
      value={registrationData.titleProcedureBrand}
      onChange={(e) =>
        handleRegistrationData('titleProcedureBrand', e.target.value)
      }
    />
    {registrationData.isSubreference && (
      <FormControl
        fullWidth
        className="mb-3"
        error={getErrorValue(registrationData.variable)}
      >
        <InputLabel id="demo-simple-select-label">* Variables</InputLabel>
        <Select
          color="success"
          varian="filled"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={registrationData.variable}
          label="* Tipo de busqueda"
          onChange={(e) => handleRegistrationData('variable', e.target.value)}
        >
          {variablesList &&
            variablesList.map((item) => (
              <MenuItem key={item.lefiId} value={item.lefiId}>
                {item.lefiSpanishName}
              </MenuItem>
            ))}
        </Select>
        {errors && registrationData.variable === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
    )}
    <TablePriorityData
      showItems={Boolean(false)}
      countries={countries}
      getErrorValue={getErrorValue}
      getErrorValueNull={getErrorValueNull}
      errors={errors}
      prioritiesData={prioritiesData}
      handlePriorities={handlePriorities}
      removePriorities={removePriorities}
      addPriorities={addPriorities}
    />
  </Grid>
);

export default StepThreeG;
