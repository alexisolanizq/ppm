import React from 'react';
import { styled } from '@mui/material/styles';
import {
  InputLabel,
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
function ModalCoordinations({
  errors,
  modalShow,
  coordination,
  handleCoordination,
  createCoordination,
  editCoordination,
  update,
  areasList,
  managementsList,
  subManagementsList,
  getErrorValue,
  clearFormulario,
  getHelperText
}) {
  return (
    <BootstrapDialog
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
        {update ? 'Modificar ' : 'Dar de alta '}coordinación
      </BootstrapDialogTitle>
      <Box className="padding-3">
        <FormControl
          fullWidth
          className="w-50 d-flex flex-nowrap mb-3"
          error={getErrorValue(coordination.jobArea)}
        >
          <InputLabel id="demo-simple-select-label" color="success">
            *Área
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coordination.jobArea}
            label="*Área"
            onChange={(e) => {
              handleCoordination('jobArea', e.target.value);
            }}
          >
            {areasList &&
              areasList.map((area) => (
                <MenuItem key={`jobArea${area.joaId}`} value={area.joaId}>
                  {area.joaName}
                </MenuItem>
              ))}
          </Select>
          {errors && coordination.jobArea === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl
          className="w-50 mb-3"
          error={getErrorValue(coordination.managment)}
        >
          <InputLabel id="demo-simple-select-label" color="success">
            *Dirección
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coordination.managment}
            label="Tipo de subetiqueta"
            onChange={(e) => {
              handleCoordination('managment', e.target.value);
            }}
          >
            {managementsList &&
              managementsList.map((area) => (
                <MenuItem key={`managment${area.imadId}`} value={area.imadId}>
                  {area.imadName}
                </MenuItem>
              ))}
          </Select>
          {errors && coordination.managment === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl
          fullWidth
          className="mb-3"
          error={getErrorValue(coordination.subManagment)}
        >
          <InputLabel id="demo-simple-select-label" color="success">
            *Subdirección
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coordination.subManagment}
            label="Tipo de subetiqueta"
            onChange={(e) => {
              handleCoordination('subManagment', e.target.value);
            }}
          >
            {subManagementsList &&
              subManagementsList.map((area) => (
                <MenuItem
                  key={`subManagment${area.imsuId}`}
                  value={area.imsuId}
                >
                  {area.imsuName}
                </MenuItem>
              ))}
          </Select>
          {errors && coordination.subManagment === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <TextField
          id="coordination-name"
          label="Nombre de la coordinación"
          color="success"
          variant="outlined"
          helperText={getHelperText(coordination.name, 'lklk', '')}
          error={getErrorValue(coordination.name)}
          className="w-100 mb-3"
          value={coordination.name}
          onChange={(e) => handleCoordination('name', e.target.value)}
        />
        {update && (
          <FormControl fullWidth className="w-50 mb-3">
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={coordination.status}
              label="Estado"
              onChange={(e) => handleCoordination('status', e.target.value)}
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
              className="ml-05"
              onClick={() => createCoordination()}
            >
              Guardar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => editCoordination()}
              className="ml-05"
            >
              Guardar
            </Button>
          )}
        </Box>
      </Box>
    </BootstrapDialog>
  );
}

export default ModalCoordinations;
