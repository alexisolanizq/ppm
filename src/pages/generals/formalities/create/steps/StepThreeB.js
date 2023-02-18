import React from 'react';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
  FormHelperText,
  ListItemText,
  OutlinedInput
} from '@mui/material';
import Dropzone from '@Component/common/dropzone/DropzoneBox';

const StepThreeB = ({
  errors,
  handleRegistrationData,
  registrationData,
  onDropAccepted,
  onDropRejected,
  classes,
  searchJobs,
  legalFiguresList,
  getErrorValue,
  getHelperText
}) => (
  <Grid
    item
    xs={8}
    className="my-0 mx-auto d-flex flex-column align-content-center"
  >
      <Box className="mb-3">
        <p>Busqueda de: </p>
        <FormControlLabel
          className="w-fit"
          control={
            <Checkbox
              checked={registrationData.searchOf === 'patentes'}
              onClick={() => handleRegistrationData('searchOf', 'patentes')}
            />
          }
          label="Pantentes"
        />
        <FormControlLabel
          className="w-fit"
          control={
            <Checkbox
              checked={registrationData.searchOf === 'diseños'}
              onClick={() => handleRegistrationData('searchOf', 'diseños')}
            />
          }
          label="Diseños"
        />
      </Box>
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
    {(registrationData.areaId === 9 || registrationData.areaId === 10) && (
      <FormControl
        fullWidth
        className="mb-3"
        error={getErrorValue(registrationData.clases)}
      >
        <InputLabel id="demo-multiple-checkbox-label">Clase</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={registrationData.clases}
          onChange={(e) => handleRegistrationData('clases', e.target.value)}
          input={<OutlinedInput label="Clase" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {classes.map((item) => (
            <MenuItem key={item} value={item.cltyId}>
              <Checkbox
                checked={registrationData.clases.indexOf(item.cltyId) > -1}
              />
              <ListItemText primary={item.cltyName} />
            </MenuItem>
          ))}
        </Select>
        {errors && registrationData.clases === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
    )}
    <TextField
      id="notice-fase"
      label="Nombre del titular del derecho de autor/ título/autor de la obra "
      color="success"
      variant="outlined"
      helperText={getHelperText(
        registrationData.titleProcedurePantentEn,
        'lklk',
        ''
      )}
      error={getErrorValue(registrationData.titleProcedurePantentEn)}
      className="mb-3"
      value={registrationData.titleProcedurePantentEn}
      onChange={(e) =>
        handleRegistrationData('titleProcedurePantentEn', e.target.value)
      }
    />
    <FormControl
      fullWidth
      className="mb-3"
      error={getErrorValue(registrationData.typeSearch)}
    >
      <InputLabel id="demo-simple-select-label">* Tipo de busqueda</InputLabel>
      <Select
        color="success"
        varian="filled"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={registrationData.typeSearch}
        label="* Tipo de busqueda"
        onChange={(e) => handleRegistrationData('typeSearch', e.target.value)}
      >
        {searchJobs.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
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
      label="* Titulo"
      color="success"
      variant="outlined"
      helperText={getHelperText(
        registrationData.titleProcedureSearch,
        'lklk',
        ''
      )}
      className="mb-3"
      error={getErrorValue(registrationData.titleProcedureSearch)}
      value={registrationData.titleProcedureSearch}
      onChange={(e) =>
        handleRegistrationData('titleProcedureSearch', e.target.value)
      }
    />
    {(registrationData.areaId === 9 || registrationData.areaId === 10) && (
      <TextField
        id="notice-fase"
        label={
          registrationData.searchOf === 'patentes'
            ? 'Patentes'
            : 'Clase de diseño del HAYA'
        }
        color="success"
        variant="outlined"
        helperText={getHelperText(registrationData.desingClass, 'lklk', '')}
        error={getErrorValue(registrationData.desingClass)}
        className="mb-3"
        value={registrationData.desingClass}
        onChange={(e) => handleRegistrationData('desingClass', e.target.value)}
      />
    )}
    <Dropzone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected} />
  </Grid>
);

export default StepThreeB;
