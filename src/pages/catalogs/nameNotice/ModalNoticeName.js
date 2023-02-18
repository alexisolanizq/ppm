import React from 'react';
import {
  InputLabel,
  FormGroup,
  FormHelperText,
  Typography,
  Switch,
  Stack,
  MenuItem,
  FormControl,
  FormLabel,
  Select,
  TextField,
  Dialog,
  Box,
  ListItemText
} from '@mui/material';
import { FIELDS_REQUIRED } from '@Const/const';
import BootstrapDialogTitle from '../../../component/common/dialogs/BootstrapDialogTitle';

export default function ModalNoticeName({
  modalShow,
  notice,
  areasList,
  handleNotice,
  clearFormulario,
  createNotice,
  editNotice,
  update,
  errors,
  userList,
  invoiceConcepts,
  getHelperText,
  getErrorValue
}) {
  const { jobArea, status, name, responsable, charge, invoiceConcept } = notice;
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
        {update ? 'Modificar ' : 'Dar alta de '}nombre de aviso
      </BootstrapDialogTitle>
      <Box sx={{ padding: '2.5rem' }}>
        <FormLabel className="text-danger mb-4">{FIELDS_REQUIRED}</FormLabel>
        <FormControl
          fullWidth
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          error={getErrorValue(jobArea)}
        >
          <InputLabel id="area-label" color="success">
            *Área
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jobArea}
            label="*Área"
            onChange={(e) => {
              handleNotice('jobArea', e.target.value);
            }}
          >
            {areasList &&
              areasList.map((area) => (
                <MenuItem key={`jobArea${area.joaId}`} value={area.joaId}>
                  {area.joaName}
                </MenuItem>
              ))}
          </Select>
          {errors && jobArea === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <TextField
          id="notice-fase"
          label="*Nombre del aviso"
          color="success"
          variant="outlined"
          helperText={getHelperText(name, 'lklk', '')}
          sx={{
            marginBottom: '1rem',
            width: 'calc(100% - 20px)',
            marginRight: '5px'
          }}
          error={getErrorValue(name)}
          value={name}
          onChange={(e) => handleNotice('name', e.target.value)}
        />
        <FormControl
          fullWidth
          error={getErrorValue(jobArea)}
          sx={{
            width: 'calc(100% / 2)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
        >
          <InputLabel id="demo-simple-select-label">*Responsable</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={responsable}
            label="*Responsable"
            onChange={(e) => {
              handleNotice('responsable', e.target.value);
            }}
          >
            {userList &&
              userList.map((user) => (
                <MenuItem key={user.joauId} value={user.joauId}>
                  <ListItemText primary={user.user.usrName} />
                </MenuItem>
              ))}
          </Select>
          {errors && responsable === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>

        <FormGroup
          sx={{
            margin: '0 0 1rem 5px',
            display: 'flex',
            flexDirection: 'row ',
            width: 'calc(100% - 20px)',
            alignItems: 'center',
            lineHeight: 1,
            height: 'fit-content'
          }}
        >
          <Typography className="form-label" sx={{ marginRight: '1.5rem' }}>
            ¿Detona cobro?
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>No</Typography>
            <Switch
              defaultChecked={charge}
              inputProps={{ 'aria-label': 'ant design' }}
              value={charge}
              onChange={(e) => handleNotice('charge', e.target.checked)}
            />
            <Typography>Sí</Typography>
          </Stack>
        </FormGroup>
        {charge && (
          <FormControl
            fullWidth
            sx={{
              width: 'calc((100% / 2) - 10px)',
              display: 'flex',
              flexWrap: 'nowrap',
              marginBottom: '1rem'
            }}
            error={getErrorValue(invoiceConcept)}
          >
            <InputLabel id="area-label" color="success">
              *Concepto de facturación
            </InputLabel>
            <Select
              color="success"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={invoiceConcept}
              label="*Concepto de facturación"
              onChange={(e) => {
                handleNotice('invoiceConcept', e.target.value);
              }}
            >
              {invoiceConcepts &&
                invoiceConcepts.map((invoice) => (
                  <MenuItem
                    key={`invoiceConcepto${invoice.incoId}`}
                    value={invoice.incoId}
                  >
                    {invoice.incoNameSpa}
                  </MenuItem>
                ))}
            </Select>
            {errors && invoiceConcept === '' ? (
              <FormHelperText>lklk</FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
        )}
        {update && (
          <FormControl fullWidth>
            <InputLabel id="area-label" color="success">
              Estado
            </InputLabel>
            <Select
              sx={{
                width: 'calc(100% / 2)',
                display: 'flex',
                flexWrap: 'nowrap',
                marginBottom: '1rem'
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Estado"
              onChange={(e) => handleNotice('status', e.target.value)}
            >
              <MenuItem value={Boolean(true)}>Activo</MenuItem>
              <MenuItem value={Boolean(false)}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        )}
        <Box className="d-flex justify-content-center">
          <button
            variant="contained"
            type="button"
            className="btn btn-secondary px-5 mx-4 mr-05"
            onClick={clearFormulario}
          >
            Cancelar
          </button>
          {!update ? (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => createNotice()}
            >
              Guardar
            </button>
          ) : (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4"
              onClick={() => editNotice()}
            >
              Guardar
            </button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
