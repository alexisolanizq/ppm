import React from 'react';
import {
  Grid,
  FormControl,
  Switch,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
  FormGroup,
  Typography,
  Stack,
  Box
} from '@mui/material';
import moment from 'moment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Dropzone from '@Component/common/dropzones/DropzoneBox';
import TablePriorityData from './TablePriorityData';

const StepThreeME = ({
  error,
  legalFiguresList,
  handleRegistrationData,
  registrationData,
  prioritiesData,
  classes,
  countries,
  handlePriorities,
  removePriorities,
  addPriorities,
  onDropAccepted,
  onDropRejected,
  getErrorValue
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Grid
      item
      xs={8}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TextField
        id="notice-fase"
        label="Titulo"
        color="success"
        variant="outlined"
        helperText={
          error && registrationData.titleProcedureBrand === '' ? 'lklk' : ''
        }
        className="mb-3"
        error={getErrorValue(registrationData.titleProcedureBrand)}
        value={registrationData.titleProcedureBrand}
        onChange={(e) =>
          handleRegistrationData('titleProcedureBrand', e.target.value)
        }
      />
      <FormGroup className="mb-3 ml-05 d-flex flex-row w-100 align-items-center lh-1 h-fit ">
        <Typography className="form-label mr-3">
          ¿Tiene RI?
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>No</Typography>
          <Switch
            inputProps={{ 'aria-label': 'ant design' }}
            value={registrationData.isRI}
            onChange={(e) => handleRegistrationData('isRI', e.target.checked)}
          />
          <Typography>Sí</Typography>
        </Stack>
      </FormGroup>
      {registrationData.isRI && (
        <>
          <TextField
            id="notice-fase"
            label="Numero RI"
            color="success"
            variant="outlined"
            helperText={error && registrationData.titlePE === '' ? 'lklk' : ''}
            className="mb-3"
            error={getErrorValue(registrationData.titlePE)}
            value={registrationData.titlePE}
            onChange={(e) => handleRegistrationData('titlePE', e.target.value)}
          />
          <Box className="d-flex justify-content-between">
            <Stack spacing={3}>
              <DesktopDatePicker
                label="* Fecha"
                format="MM/DD/YYYY"
                value={registrationData.dateRI}
                onChange={(e) =>
                  handleRegistrationData(
                    'dateRI',
                    moment(e).format('MM-DD-YYYY')
                  )
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="* Fecha de renovación RI"
                format="MM/DD/YYYY"
                value={registrationData.dateRIRenovation}
                onChange={(e) =>
                  handleRegistrationData(
                    'dateRIRenovation',
                    moment(e).format('MM-DD-YYYY')
                  )
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </Box>
        </>
      )}
    </Grid>
    <Grid
      item
      xs={12}
      className="my-0 mx-auto d-flex flex-column align-content-center"
    >
      <TablePriorityData
        showItems={Boolean(false)}
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">* Clase</InputLabel>
        <Select
          varian="filled"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={registrationData.class}
          label="* Clase"
          className='mb-3'
          onChange={(e) => handleRegistrationData('class', e.target.value)}
        >
          {classes &&
            classes.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.ppmClass.description}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-multiline-static"
        label="Descripción"
        multiline
        value={registrationData.description}
        rows={4}
        className="mb-3"
        onChange={(e) => handleRegistrationData('description', e.target.value)}
      />
      <FormControl
        fullWidth
        className="mb-3"
        error={getErrorValue(registrationData.legalFigure)}
      >
        <InputLabel id="area-label" color="success">
          Marcas Relacionadas
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={registrationData.relatedBrands}
          label="Marcas Relacionadas"
          onChange={(e) =>
            handleRegistrationData('relatedBrands', e.target.value)
          }
        >
          {legalFiguresList &&
            legalFiguresList.map((item) => (
              <MenuItem key={item.lefiId} value={item.lefiId}>
                {item.lefiSpanishName}
              </MenuItem>
            ))}
        </Select>
        {error && registrationData.relatedBrands === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <Box className="d-flex flex-row justify-content-between mb-3">
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

export default StepThreeME;
