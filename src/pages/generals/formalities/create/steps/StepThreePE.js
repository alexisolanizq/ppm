import React from 'react';
import {
  Grid,
  TextField,
  Stack,
  Box
} from '@mui/material';
import moment from 'moment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Dropzone from '@Component/common/dropzones/DropzoneBox';
import TablePriorityData from './TablePriorityData';

const StepThreePE = ({
  handleRegistrationData,
  registrationData,
  prioritiesData,
  countries,
  handlePriorities,
  removePriorities,
  addPriorities,
  onDropAccepted,
  onDropRejected,
  getErrorValue,
  getHelperText
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Grid
      item
      xs={8}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TextField
        id="notice-fase"
        label="Numero PCT"
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
        helperText={getHelperText(registrationData.titleProcedurePantentEs, 'lklk', '')}
        error={getErrorValue(registrationData.titleProcedurePantentEs)}
        className="mb-3"
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
        helperText={getHelperText(registrationData.inventors, 'lklk', '')}
        error={getErrorValue(registrationData.inventors)}
        value={registrationData.inventors}
        rows={4}
        className="mb-3"
        onChange={(e) => handleRegistrationData('inventors', e.target.value)}
      />
      <Box
        className="d-flex flex-row justify-content-between mb-3"
      >
        <Stack spacing={3}>
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
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Stack spacing={3}>
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
            renderInput={(params) => <TextField {...params} />}
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

export default StepThreePE;
