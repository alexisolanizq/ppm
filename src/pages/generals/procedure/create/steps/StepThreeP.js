import React from 'react';
import {
  Grid,
  TextField,
  Stack,
  Box,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem
} from '@mui/material';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Dropzone from '@Component/common/dropzones/DropzoneBox';
import TablePriorityData from './TablePriorityData';

const StepThreeP = ({
  errors,
  handleRegistrationData,
  registrationData,
  prioritiesData,
  countries,
  handlePriorities,
  removePriorities,
  addPriorities,
  onDropAccepted,
  onDropRejected,
  legalFiguresList,
  getErrorValue,
  getErrorValueNull,
  getHelperText
}) => (
  <>
    <Grid
      item
      xs={8}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      {registrationData.isDivisional && (
        <div className='d-flex'>
          <TextField
            id="notice-fase"
            label="Referencia madre"
            color="success"
            variant="outlined"
            disabled={Boolean(true)}
            helperText={getHelperText(
              registrationData.motherReference,
              'lklk',
              ''
            )}
            className="mb-3 w-50 pr-05"
            error={getErrorValue(registrationData.motherReference)}
            value={registrationData.motherReference}
            onChange={(e) =>
              handleRegistrationData('motherReference', e.target.value)
            }
          />
          <TextField
            id="notice-fase"
            label="Referencia divisional"
            color="success"
            variant="outlined"
            helperText={getHelperText(registrationData.referenceDivisional, 'lklk', '')}
            className="mb-3 w-50 pl-05"
            error={getErrorValue(registrationData.referenceDivisional)}
            value={registrationData.referenceDivisional}
            onChange={(e) =>
              handleRegistrationData('referenceDivisional', e.target.value)
            }
          />
        </div>
      )}
      <FormControl
        fullWidth
        className="mb-3"
        error={getErrorValue(registrationData.typeSearch)}
      >
        <InputLabel id="demo-simple-select-label">* Figura Legal</InputLabel>
        <Select
          color="success"
          varian="filled"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={registrationData.typeSearch}
          label="* Tipo de busqueda"
          onChange={(e) => handleRegistrationData('typeSearch', e.target.value)}
        >
          {legalFiguresList &&
            legalFiguresList.map((item) => (
              <MenuItem key={item.lefiId} value={item.lefiId}>
                {item.lefiSpanishName}
              </MenuItem>
            ))}
        </Select>
        {errors && registrationData.typeSearch === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>

      <TextField
        id="notice-fase"
        label="Numero PCT"
        color="success"
        variant="outlined"
        helperText={getHelperText(registrationData.numberPCT, 'lklk', '')}
        className="mb-3"
        error={getErrorValue(registrationData.numberPCT44)}
        value={registrationData.numberPCT}
        onChange={(e) => handleRegistrationData('numberPCT', e.target.value)}
      />

      <TextField
        id="notice-fase"
        label="Titulo Ingles"
        color="success"
        variant="outlined"
        helperText={getHelperText(
          registrationData.titleProcedurePantentEn,
          'lklk',
          ''
        )}
        className="mb-3"
        error={getErrorValue(registrationData.titleProcedurePantentEn)}
        value={registrationData.titleProcedurePantentEn}
        onChange={(e) =>
          handleRegistrationData('titleProcedurePantentEn', e.target.value)
        }
      />
      <TextField
        id="notice-fase"
        label="Titulo Español"
        color="success"
        variant="outlined"
        helperText={getHelperText(
          registrationData.titleProcedurePantentEs,
          'lklk',
          ''
        )}
        className="mb-3"
        error={getErrorValue(registrationData.titleProcedurePantentEs)}
        value={registrationData.titleProcedurePantentEs}
        onChange={(e) =>
          handleRegistrationData('titleProcedurePantentEs', e.target.value)
        }
      />
    </Grid>
    <Grid
      item
      xs={12}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TablePriorityData
        error={errors}
        showItems={Boolean(true)}
        countries={countries}
        prioritiesData={prioritiesData}
        handlePriorities={handlePriorities}
        removePriorities={removePriorities}
        addPriorities={addPriorities}
      />
    </Grid>
    <Grid
      item
      xs={8}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TextField
        id="outlined-multiline-static"
        label="Inventores"
        multiline
        color="success"
        helperText={getHelperText(registrationData.inventors, 'lklk', '')}
        value={registrationData.inventors}
        rows={4}
        className="mb-3"
        error={getErrorValue(registrationData.inventors)}
        onChange={(e) => handleRegistrationData('inventors', e.target.value)}
      />
      <Box className="d-flex flex-row justify-content-between mb-3">
        <Stack className="w-100 pr-3" spacing={3}>
          <DesktopDatePicker
            label="Fecha objetivo de presentación"
            format="MM/DD/YYYY"
            value={registrationData.filingDate}
            onChange={(e) =>
              handleRegistrationData(
                'filingDate',
                moment(e).format('MM-DD-YYYY')
              )
            }
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={getHelperText(
                  registrationData.filingDate,
                  'lklk',
                  ''
                )}
                color="success"
                error={getErrorValueNull(registrationData.filingDate)}
              />
            )}
          />
        </Stack>
        <Stack className="w-100 pr-3" spacing={3}>
          <DesktopDatePicker
            label="Fecha de vencimiento de presentación en base a la prioridad"
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
                helperText={getHelperText(
                  registrationData.expirationDate,
                  'lklk',
                  ''
                )}
                color="success"
                error={getErrorValueNull(registrationData.expirationDate)}
              />
            )}
          />
        </Stack>
      </Box>
      <Dropzone
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
      />
    </Grid>
  </>
);

export default StepThreeP;
