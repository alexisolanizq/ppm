import React from 'react';
import { Form, Row } from 'react-bootstrap';

import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

const UpdatePPMDocument = ({
  handleClose,
  register,
  handleSubmit,
  errors,
  currentPPMDocument,
  onUpdate
}) => {
  if (!currentPPMDocument) return null;

  return (
    <Form noValidate onSubmit={handleSubmit(onUpdate)}>
      <Row className="mb-3">
        <FormControl fullWidth className="mb-4">
          <InputLabel id="area-label" color="success">
            * Área
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Área" />}
            labelId="area-label"
            color="success"
            name="area"
            defaultValue="0"
            disabled
            readOnly
          >
            <MenuItem value="0" disabled>
              {
                currentPPMDocument.procedureManagementAction
                  .jobAreaProcedurePhase.joaName
              }
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="mb-4">
          <InputLabel id="fase-label" color="success">
            * Fase
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Fase" />}
            labelId="fase-label"
            color="success"
            name="fase"
            defaultValue="0"
            disabled
            readOnly
          >
            <MenuItem value="0" disabled>
              {
                currentPPMDocument.procedureManagementAction
                  .jobAreaProcedurePhase.prphName
              }
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="mb-4">
          <InputLabel id="action-label" color="success">
            * Acción de la gestión de trámite
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Acción de la gestión de trámite" />}
            labelId="action-label"
            color="success"
            name="action"
            defaultValue="0"
            disabled
            readOnly
          >
            <MenuItem value="0" disabled>
              {currentPPMDocument.procedureManagementAction.prmaName}
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="mb-4">
          <InputLabel id="documentType-label" color="success">
            * Tipo de documento
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Tipo de documento" />}
            labelId="documentType-label"
            color="success"
            name="documentType"
            defaultValue="0"
            disabled
            readOnly
          >
            <MenuItem value="0" disabled>
              {currentPPMDocument.typeDocument.tydoName}
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          placeholder="Nombre del documento"
          label="* Nombre del documento"
          variant="outlined"
          fullWidth
          color="success"
          className="mb-4"
          name="name"
          defaultValue={currentPPMDocument.ppmdName}
          {...register('name', {
            required: 'Por favor, ingresa el nombre del documento.'
          })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />
        <FormControl fullWidth className="mb-4">
          <InputLabel id="letterType-label" color="success">
            * Tipo de carta cliente
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Tipo de carta cliente" />}
            labelId="letterType-label"
            color="success"
            name="letterType"
            defaultValue="0"
            disabled
            readOnly
          >
            <MenuItem value="0" disabled>
              {currentPPMDocument.customerLetterType.typeDocument.tydoName}
            </MenuItem>
          </Select>
        </FormControl>
        <Stack
          className="mb-4"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>* ¿Con factura?</Typography>
          <Stack direction="row" alignItems="center">
            <Typography className="px-2">No</Typography>
            <Switch
              defaultChecked={currentPPMDocument.ppmdInvoice}
              {...register('invoice')}
            />
            <Typography>Sí</Typography>
          </Stack>
        </Stack>
        <FormControl fullWidth className="mb-4" error={Boolean(errors.status)}>
          <InputLabel id="status-label" color="success">
            * Estado del documento
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Estado del documento" />}
            labelId="status-label"
            defaultValue={currentPPMDocument.ppmdStatus}
            color="success"
            name="status"
            {...register('status', {
              required: 'Por favor, elige el estado del documento.'
            })}
          >
            <MenuItem value="" disabled>
              Elige una opción
            </MenuItem>
            <MenuItem value="true">Activo</MenuItem>
            <MenuItem value="false">Inactivo</MenuItem>
          </Select>
          <FormHelperText>{errors.status?.message}</FormHelperText>
        </FormControl>
      </Row>

      <div className="d-flex justify-content-around">
        <button
          type="button"
          className="close btn-close-modal-app rounded"
          onClick={handleClose}
        >
          Cancelar
        </button>
        <button type="submit" className="btn-primary-modal rounded">
          Guardar
        </button>
      </div>
    </Form>
  );
};

export default UpdatePPMDocument;
