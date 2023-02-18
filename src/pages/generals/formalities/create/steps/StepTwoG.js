import React from 'react';
import {
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  FormGroup,
  Typography,
  Select,
  Stack,
  Switch,
  FormHelperText
} from '@mui/material';

const StepTwoG = ({
  errors,
  areasList,
  getErrorValue,
  handleRegistrationData,
  registrationData,
  getHelperText
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
    <FormGroup className="mb-3 ml-05 w-100 d-flex flex-row align-items-center lh-1 h-fit">
      <Typography className="form-labe mr-05">
        ¿Generar subreferencia?
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>No</Typography>
        <Switch
          inputProps={{ 'aria-label': 'ant design' }}
          value={registrationData.isSubreference}
          onChange={(e) =>
            handleRegistrationData('isSubreference', e.target.checked)
          }
        />
        <Typography>Sí</Typography>
      </Stack>
    </FormGroup>
  </>
);

export default StepTwoG;
