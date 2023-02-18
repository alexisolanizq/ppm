import React from 'react';
import { styled } from '@mui/material/styles';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  FormHelperText,
  Dialog,
  Button,
  Box,
  Grid
} from '@mui/material';
import BootstrapDialogTitle from '../../../component/common/dialogs/BootstrapDialogTitle';
import { getHelperText } from '../../../utils/formulario';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

function ModalLegalFigures({
  errors,
  modalShow,
  legalFiguresList,
  legalFigure,
  procedureTypesFilter,
  handleLegalFigure,
  createLegalFigure,
  updateLegalFigure,
  update,
  getErrorValue,
  onChangeFigureLegal,
  clearFormulario
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
        {update ? 'Modificar ' : 'Dar alta de '}figura legal - tipo de trámite
      </BootstrapDialogTitle>
      <Box className="p-4">
        <FormControl
          fullWidth
          className="w-100 mb-3"
          error={getErrorValue(legalFigure.figureLegalID)}
        >
          <InputLabel id="figureLegalID-select-label">
            Nombre de figura legal
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="figureLegalID-select"
            value={legalFigure.figureLegalID}
            label="Nombre de figura legal"
            onChange={(e) => {
              onChangeFigureLegal(e.target.value);
            }}
          >
            {legalFiguresList &&
              legalFiguresList.map((item) => (
                <MenuItem
                  key={`figureLegalID${item.lefiId}`}
                  value={item.lefiId}
                >
                  {item.lefiSpanishName}
                </MenuItem>
              ))}
          </Select>
          {errors && legalFigure.figureLegalID === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl
          fullWidth
          className="mb-3"
          error={getErrorValue(legalFigure.typeId)}
        >
          <InputLabel id="demo-simple-select-label">Tipo de tramite</InputLabel>
          <Select
            color="success"
            disabled={legalFigure.figureLegalID === ''}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={legalFigure.typeId}
            label="Nombre de figura legal"
            onChange={(e) => {
              handleLegalFigure('typeId', e.target.value);
            }}
          >
            {procedureTypesFilter &&
              procedureTypesFilter.map((item) => (
                <MenuItem key={`typeId${item.prtyId}`} value={item.prtyId}>
                  {item.prtyName}
                </MenuItem>
              ))}
          </Select>
          {errors && legalFigure.typeId === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <TextField
              fullWidth
              id="nameSpanish-Field"
              label="Nombre de figura legal (español)"
              color="success"
              variant="outlined"
              helperText={getHelperText(legalFigure.nameSpanish, 'lklk', '')}
              className="mb-3"
              inputProps={{ readOnly: true }}
              error={getErrorValue(legalFigure.nameSpanish)}
              value={legalFigure.nameSpanish}
              onChange={(e) => handleLegalFigure('nameSpanish', e.target.value)}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              fullWidth
              id="nameEnglish-Field"
              label="Nombre de figura legal (inglés)"
              color="success"
              variant="outlined"
              inputProps={{ readOnly: true }}
              helperText={getHelperText(legalFigure.nameEnglish, 'lklk', '')}
              className="mb-3"
              error={getErrorValue(legalFigure.nameEnglish)}
              value={legalFigure.nameEnglish}
              onChange={(e) => handleLegalFigure('nameEnglish', e.target.value)}
            />
          </Grid>
        </Grid>
        {update && (
          <FormControl fullWidth className="w-50 mb-3">
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={legalFigure.status}
              label="Estado"
              onChange={(e) => handleLegalFigure('status', e)}
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
              onClick={() => createLegalFigure()}
              className="ml-05"
            >
              Guardar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => updateLegalFigure()}
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

export default ModalLegalFigures;
