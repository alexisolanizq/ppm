import React from 'react';
import { styled } from '@mui/material/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  InputLabel,
  FormGroup,
  FormControl,
  Select,
  FormControlLabel,
  Checkbox,
  Dialog,
  MenuItem,
  Box,
  TextField
} from '@mui/material';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
function Index({
  modalShow,
  typeHeader,
  setmodalShow,
  handleTypeHeader,
  clients,
  officeFiltered,
  holders,
  handleMailHeader,
  mailHeader,
  handleClientData,
  clientData,
  headerMailNull,
  getClientHeader,
  getOfficesHeader,
  getHoldersHeader,
  setHolderEmailHeaders,
  setClientEmailHeaders,
  setOfficeEmailHeaders,
  setPersonalizedEmailHeaders,
  setClientData,
  setCancel
}) {
  return (
    <BootstrapDialog
      open={modalShow}
      onClose={() => setmodalShow(false)}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => setmodalShow(false)}
      >
        Encabezado de Correo
      </BootstrapDialogTitle>
      <Box className="d-flex flex-column w-100 h-100 justify-content-center aling-content-center m-3">
        <FormGroup className="d-flex flex-row justify-content-center mb-3">
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => handleTypeHeader('client')}
                checked={Boolean(typeHeader === 'client')}
              />
            }
            label="Cliente"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => handleTypeHeader('holder')}
                checked={Boolean(typeHeader === 'holder')}
              />
            }
            label="Titular"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => handleTypeHeader('custom')}
                checked={Boolean(typeHeader === 'custom')}
              />
            }
            label="Personalizado"
          />
        </FormGroup>
        <Box className="d-flex flex-column">
          {typeHeader === 'client' && (
            <>
              <FormControl fullWidth className="d-flex flex-nowrap mb-3">
                <InputLabel id="area-label" color="success">
                  Cliente
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clientData.client}
                  label="Acción en la gestion del trámite"
                  onChange={(e) => {
                    setClientData({
                      client: e.target.value,
                      office: '',
                      holder: ''
                    });
                    getClientHeader(e.target.value);
                  }}
                >
                  {clients &&
                    clients.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="d-flex flex-nowrap mb-3">
                <InputLabel id="area-label" color="success">
                  Oficina
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  disabled={Boolean(officeFiltered.length === 0)}
                  value={clientData.office}
                  label="Acción en la gestion del trámite"
                  onChange={(e) => {
                    handleClientData('office', e.target.value);
                    getOfficesHeader(e.target.value);
                  }}
                >
                  {officeFiltered.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              {headerMailNull && (
                <Box className="my-3 w-100 text-center">
                  <h5>No hay cabeceras de correo agregadas</h5>
                </Box>
              )}
              {mailHeader.subject !== '' && (
                <>
                  <TextField
                    id="notice-fase"
                    label="*Asunto"
                    color="success"
                    variant="outlined"
                    className="mb-3"
                    disabled={Boolean(typeHeader !== 'custom')}
                    value={mailHeader.subject}
                    onChange={(e) =>
                      handleMailHeader('subject', e.target.value)
                    }
                  />
                  <ReactQuill
                    readOnly={Boolean(true)}
                    className="mb-3"
                    theme="snow"
                    value={mailHeader.body}
                    onChange={(e) => handleMailHeader('body', e)}
                  />
                </>
              )}
            </>
          )}
          {typeHeader === 'holder' && (
            <>
              <FormControl fullWidth className="mb-3">
                <InputLabel id="area-label" color="success">
                  Titular
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clientData.holder}
                  label="Acción en la gestion del trámite"
                  onChange={(e) => {
                    handleClientData('holder', e.target.value);
                    getHoldersHeader(e.target.value);
                  }}
                >
                  {holders.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              {clientData.holder !== '' && (
                <>
                  <TextField
                    id="notice-fase"
                    label="*Asunto"
                    color="success"
                    variant="outlined"
                    className='mb-3'
                    disabled={Boolean(typeHeader !== 'custom')}
                    value={mailHeader.subject}
                    onChange={(e) =>
                      handleMailHeader('subject', e.target.value)
                    }
                  />
                  <ReactQuill
                    readOnly={Boolean(true)}
                    className="mb-3"
                    theme="snow"
                    value={mailHeader.body}
                    onChange={(e) => handleMailHeader('body', e)}
                  />
                </>
              )}
            </>
          )}
          {typeHeader === 'custom' && (
            <>
              <TextField
                id="notice-fase"
                label="*Asunto"
                color="success"
                variant="outlined"
                className='mb-3'
                disabled={Boolean(typeHeader !== 'custom')}
                value={mailHeader.subject}
                onChange={(e) => handleMailHeader('subject', e.target.value)}
              />

              <ReactQuill
                 className='mb-3'
                theme="snow"
                value={mailHeader.body}
                onChange={(e) => handleMailHeader('body', e)}
              />
            </>
          )}
        </Box>
        <Box className="d-flex justify-content-center mr-05">
          <button
            variant="contained"
            type="button"
            className="btn btn-secondary px-5 mx-4"
            onClick={() => setCancel()}
          >
            Cancelar
          </button>
          {typeHeader === 'holder' && (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => setHolderEmailHeaders()}
              disabled={Boolean(
                mailHeader.subject === '' || mailHeader.body === ''
              )}
            >
              Guardar H
            </button>
          )}
          {typeHeader === 'custom' && (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => setPersonalizedEmailHeaders()}
              disabled={Boolean(
                mailHeader.subject === '' || mailHeader.body === ''
              )}
            >
              Guardar C
            </button>
          )}
          {typeHeader === 'client' &&
            (clientData.office === '' ? (
              <button
                variant="contained"
                type="button"
                className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
                onClick={() => setClientEmailHeaders()}
                disabled={Boolean(
                  mailHeader.subject === '' || mailHeader.body === ''
                )}
              >
                Guardar C
              </button>
            ) : (
              <button
                variant="contained"
                type="button"
                className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
                onClick={() => setOfficeEmailHeaders()}
                disabled={Boolean(
                  mailHeader.subject === '' || mailHeader.body === ''
                )}
              >
                Guardar O
              </button>
            ))}
        </Box>
      </Box>
    </BootstrapDialog>
  );
}

export default Index;
