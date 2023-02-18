import React from 'react';
import { Grid, TextField, Stack, Box } from '@mui/material';
import moment from 'moment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Dropzone from '@Component/common/dropzones/DropzoneBox';

const StepThreeL = ({
  errors,
  handleRegistrationData,
  registrationData,
  onDropAccepted,
  onDropRejected,
  getErrorValue,
  getErrorValueNull,
  getHelperText,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Grid
      item
      xs={8}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TextField
        id="notice-fase"
        label="Numero Registro"
        color="success"
        variant="outlined"
        helperText={getHelperText(registrationData.numberPCT, 'lklk', '')}
        className="mb-3"
        error={getErrorValue(registrationData.numberPCT)}
        value={registrationData.numberPCT}
        onChange={(e) => handleRegistrationData('numberPCT', e.target.value)}
      />
      <TextField
        id="notice-fase"
        label="Titulo Ingles"
        color="success"
        variant="outlined"
        helperText={getHelperText(registrationData.titleProcedurePantentEn, 'lklk', '')}
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
        helperText={
          errors && registrationData.titleProcedurePantentEs === '' ? 'lklk' : ''
        }
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
      xs={8}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TextField
        id="outlined-multiline-static"
        label="Caso"
        multiline
        color="success"
        helperText={getHelperText(registrationData.case, 'lklk', '')}
        value={registrationData.case}
        rows={4}
        className="mb-3"
        error={getErrorValue(registrationData.case)}
        onChange={(e) => handleRegistrationData('case', e.target.value)}
      />
      <Box
        className="d-flex justify-content-between mb-3"
      >
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
                helperText={getHelperText(registrationData.filingDate, 'lklk', '')}
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
                helperText={getHelperText(registrationData.expirationDate, 'lklk',  '')}
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
  </LocalizationProvider>
);

export default StepThreeL;
