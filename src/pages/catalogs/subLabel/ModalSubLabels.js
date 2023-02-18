import React from 'react';
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
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';

const ModalSubLabels = ({
  errors,
  modalShow,
  referenceTypes,
  setmodalShow,
  subLabel,
  handleSubLabel,
  createSubLabel,
  editSubLabel,
  update,
  subtagTypes,
  areasList,
  getHelperText,
  getErrorValue
}) => (
  <Dialog
    open={modalShow}
    onClose={() => setmodalShow(false)}
    aria-labelledby="customized-dialog-title"
    fullWidth={Boolean(true)}
    maxWidth="md"
  >
    <BootstrapDialogTitle
      id="customized-dialog-title"
      onClose={() => setmodalShow(false)}
    >
      {update ? 'Modificar ' : 'Alta de '}subetiquetas del Evirtual
    </BootstrapDialogTitle>
    <p>{subLabel.idSubTag}</p>
    <Box className="p-3">
      <FormControl
        fullWidth
        className="w-50 mb-3"
        error={Boolean(errors && subLabel.subtagType === '')}
      >
        <InputLabel id="demo-simple-select-label">
          Tipo de subetiqueta
        </InputLabel>
        <Select
          color="success"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subLabel.subtagType}
          label="Tipo de subetiqueta"
          onChange={(e) => {
            handleSubLabel('subtagType', e.target.value);
          }}
        >
          {subtagTypes &&
            subtagTypes.map((item) => (
              <MenuItem
                key={item.idOptionCatGeneric}
                value={item.idOptionCatGeneric}
              >
                {item.description}
              </MenuItem>
            ))}
        </Select>
        {errors && subLabel.subtagType === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <FormControl
        fullWidth
        sx={{
          width: 'calc(100% / 2)',
          display: 'flex',
          flexWrap: 'nowrap',
          marginBottom: '1rem'
        }}
        error={Boolean(errors && subLabel.jobArea === '')}
      >
        <InputLabel id="demo-simple-select-label">Área</InputLabel>
        <Select
          color="success"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subLabel.jobArea}
          label="Tipo de subetiqueta"
          onChange={(e) => handleSubLabel('jobArea', e.target.value)}
        >
          {areasList &&
            areasList.map((item) => (
              <MenuItem key={item.joaId} value={item.joaId}>
                {item.joaName}
              </MenuItem>
            ))}
        </Select>
        {errors && subLabel.jobArea === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <FormControl
        fullWidth
        sx={{
          width: 'calc(100% / 2)',
          display: 'flex',
          flexWrap: 'nowrap',
          marginBottom: '1rem'
        }}
        error={Boolean(errors && subLabel.jobAreaReference === '')}
      >
        <InputLabel id="demo-simple-select-label"> *Referencia</InputLabel>
        <Select
          color="success"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subLabel.jobAreaReference}
          label="Tipo de subetiqueta"
          onChange={(e) => handleSubLabel('jobAreaReference', e.target.value)}
        >
          {referenceTypes &&
            referenceTypes.map((item) => (
              <MenuItem key={item.retyId} value={item.retyId}>
                {item.retyName}
              </MenuItem>
            ))}
        </Select>
        {errors && subLabel.jobAreaReference === '' ? (
          <FormHelperText>lklk</FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <TextField
        id="subLabel-name-english"
        label="Nombre de la subetiqueta"
        color="success"
        variant="outlined"
        helperText={getHelperText(subLabel.name, 'lklk', '')}
        error={getErrorValue(subLabel.name)}
        sx={{
          width: 'calc(100% / 2)',
          display: 'flex',
          flexWrap: 'nowrap',
          marginBottom: '1rem'
        }}
        value={subLabel.name}
        onChange={(e) => handleSubLabel('name', e.target.value)}
      />
      {update && (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
            color="success"
            sx={{
              width: 'calc(100% / 2)',
              display: 'flex',
              flexWrap: 'nowrap',
              marginBottom: '1rem'
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subLabel.status}
            label="Estado"
            onChange={(e) => handleSubLabel('status', e)}
          >
            <MenuItem value={Boolean(true)}>Activo</MenuItem>
            <MenuItem value={Boolean(false)}>Inactivo</MenuItem>
          </Select>
        </FormControl>
      )}
      <Box className="d-flex justify-content-center">
        <Button
          variant="contained"
          onClick={() => setmodalShow(false)}
          className="mr-05"
        >
          Cancelar
        </Button>
        {!update ? (
          <Button
            variant="contained"
            onClick={() => createSubLabel()}
            sx={{ marginLeft: '0.5rem' }}
          >
            Guardar
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => editSubLabel()}
            sx={{ marginLeft: '0.5rem' }}
          >
            Guardar
          </Button>
        )}
      </Box>
    </Box>
  </Dialog>
);

export default ModalSubLabels;
