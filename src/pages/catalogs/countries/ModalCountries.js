import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Dialog,
  Box
} from '@mui/material';
import BootstrapDialogTitle from '../../../component/common/dialogs/BootstrapDialogTitle';

const ModalCountries = ({
  modalShow,
  setmodalShow,
  country,
  handleCountry,
  createCountry,
  editCountry,
  update,
  cleanCountry,
  getErrorValue,
  getHelperText
}) => {
  const {
    counNameSpa,
    counNameEng,
    counShortAbbreviation,
    counLargeAbbreviation,
    counStatus
  } = country;
  return (
    <Dialog
      open={modalShow}
      onClose={() => {
        setmodalShow(false);
        cleanCountry();
      }}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="md"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => {
          setmodalShow(false);
          cleanCountry();
        }}
      >
        {update ? 'Modificar ' : 'Alta del '}país
      </BootstrapDialogTitle>
      <Box className="p-4">
        <TextField
          id="country-name"
          label="Nombre del País"
          variant="outlined"
          className="mb-3 w-100 mr-05"
          helperText={getHelperText(counNameSpa, 'lklk', '')}
          error={getErrorValue(counNameSpa)}
          value={counNameSpa}
          onChange={(e) => handleCountry('counNameSpa', e.target.value)}
        />
        <TextField
          id="country-name-english"
          label="Nombre del País en ingles"
          variant="outlined"
          className="mb-3 w-100 mr-05"
          helperText={getHelperText(counNameEng, 'lklk', '')}
          error={getErrorValue(counNameEng)}
          value={counNameEng}
          onChange={(e) => handleCountry('counNameEng', e.target.value)}
        />
        <TextField
          id="country-large-abbreviation"
          label="Abreviatura larga del País"
          variant="outlined"
          className="mb-3 w-100 mr-05"
          helperText={getHelperText(counLargeAbbreviation, 'lklk', '')}
          error={getErrorValue(counLargeAbbreviation)}
          value={counLargeAbbreviation}
          inputProps={{ maxLength: 3 }}
          onChange={(e) =>
            handleCountry('counLargeAbbreviation', e.target.value)
          }
        />
        <TextField
          id="country-name"
          label="Abreviatura corta del País"
          variant="outlined"
          className="mb-3 w-100 mr-05"
          helperText={getHelperText(counShortAbbreviation, 'lklk', '')}
          error={getErrorValue(counShortAbbreviation)}
          value={counShortAbbreviation}
          inputProps={{ maxLength: 2 }}
          onChange={(e) =>
            handleCountry('counShortAbbreviation', e.target.value)
          }
        />
        {update && (
          <FormControl fullWidth className="w-50 mb-3">
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={counStatus}
              label="Estado"
              onChange={(e) => handleCountry('counStatus', e.target.value)}
            >
              <MenuItem value={Boolean(true)}>Activo</MenuItem>
              <MenuItem value={false}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        )}
        <Box className="d-flex justify-content-center">
          <button
            variant="contained"
            type="button"
            className="btn btn-secondary px-5 mx-4 mr-05"
            onClick={() => {
              setmodalShow(false);
              cleanCountry();
            }}
          >
            Cancelar
          </button>
          {!update ? (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => createCountry()}
            >
              Guardar
            </button>
          ) : (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => editCountry()}
            >
              Guardar
            </button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalCountries;
