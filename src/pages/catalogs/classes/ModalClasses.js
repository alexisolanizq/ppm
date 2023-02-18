import React from 'react';
import {
  InputLabel,
  FormGroup,
  Switch,
  Stack,
  Typography,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Dialog,
  Button,
  Box,
  FormHelperText
} from '@mui/material';
import BootstrapDialogTitle from '../../../component/common/dialogs/BootstrapDialogTitle';

function ModalClasses({
  errors,
  modalShow,
  classe,
  handleClasse,
  createClasse,
  editClasse,
  update,
  areasList,
  references,
  getReferenceTypes,
  getErrorValue,
  getHelperText,
  clearFormulario
}) {
  return (
    <Dialog
      open={modalShow}
      onClose={clearFormulario}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="md"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={clearFormulario}
      >
        {update ? 'Modificar ' : 'Dar alta '}clase
      </BootstrapDialogTitle>
      <Box className="p-3">
        <FormControl
          fullWidth
          error={getErrorValue(classe.jobArea)}
          className="w-50 d-flex mb-3"
        >
          <InputLabel id="demo-simple-select-label">*Área</InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={classe.jobArea}
            label="Tipo de subetiqueta"
            onChange={(e) => {
              getReferenceTypes(e.target.value);
              handleClasse('jobArea', e.target.value);
            }}
          >
            {areasList &&
              areasList.map((area) => (
                <MenuItem key={`jobArea${area.joaId}`} value={area.joaId}>
                  {area.joaName}
                </MenuItem>
              ))}
          </Select>
          {errors && classe.jobArea === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl
          fullWidth
          error={getErrorValue(classe.jobAreaReference)}
          className="w-50 d-flex flex-nowrap mb-3"
        >
          <InputLabel id="demo-simple-select-label">
            *Tipo de refencia
          </InputLabel>
          <Select
            color="success"
            disabled={classe.jobArea === ''}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={classe.jobAreaReference}
            label="Tipo de referencia"
            onChange={(e) => {
              handleClasse('jobAreaReference', e.target.value);
            }}
          >
            {references &&
              references.map((area) => (
                <MenuItem
                  key={`jobAreaReference${area.retyId}`}
                  value={area.retyId}
                >
                  {area.retyName}
                </MenuItem>
              ))}
          </Select>
          {errors && classe.jobAreaReference === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormGroup className="mb-3 d-flex flex-row">
          <Typography className="form-label mr-3">¿Tipo de clase?</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Productos</Typography>
            <Switch
              checked={classe.typeClasse}
              inputProps={{ 'aria-label': 'ant design' }}
              value={classe.typeClasse}
              onChange={(e) => handleClasse('typeClasse', e.target.checked)}
            />
            <Typography>Servicios</Typography>
          </Stack>
        </FormGroup>
        <FormControl
          fullWidth
          error={getErrorValue(classe.numberClass)}
          className="w-100 mb-3"
        >
          <InputLabel id="demo-simple-select-label">
            *Número de clase
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={classe.numberClass}
            label="Número de clase"
            onChange={(e) => {
              handleClasse('numberClass', e.target.value);
            }}
          >
            {classe.typeClasse
              ? [...Array(35).keys()].slice(1).map((area) => (
                  <MenuItem key={`numberClass${area}`} value={area}>
                    {area}
                  </MenuItem>
                ))
              : [...Array(46).keys()].slice(35).map((area) => (
                  <MenuItem key={`numberClass${area}`} value={area}>
                    {area}
                  </MenuItem>
                ))}
          </Select>
          {errors && classe.numberClass === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <TextField
          id="classe-name"
          label="Descripción"
          color="success"
          variant="outlined"
          helperText={getHelperText(classe.description, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(classe.description)}
          value={classe.description}
          onChange={(e) => handleClasse('description', e.target.value)}
        />
        {update && (
          <FormControl fullWidth className="mb-3 w-50">
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              color="success"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={classe.status}
              label="Estado"
              onChange={(e) => handleClasse('status', e)}
            >
              <MenuItem value={Boolean(true)}>Activo</MenuItem>
              <MenuItem value={Boolean(false)}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        )}
        <Box className="d-flex justify-content-center">
          <Button
            variant="contained"
            onClick={clearFormulario}
            className="mr-05"
          >
            Cancelar
          </Button>
          {!update ? (
            <Button
              variant="contained"
              onClick={() => createClasse()}
              className="ml-05"
            >
              Guardar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => editClasse()}
              className="ml-05"
            >
              Guardar
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}

export default ModalClasses;
