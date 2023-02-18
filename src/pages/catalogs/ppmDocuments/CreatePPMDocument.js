import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Row } from 'react-bootstrap';

import Box from '@mui/material/Box';
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const CreatePPMDocument = ({
  handleClose,
  register,
  handleSubmit,
  errors,
  areas,
  phases,
  actions,
  documentType,
  customerLetterType,
  handdleAreaCombo,
  handdlePhaseCombo,
  onSubmit
}) => (
  <Form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Row>
      <FormControl fullWidth className="mb-4" error={Boolean(errors.area)}>
        <InputLabel id="area-label" color="success">
          * Área
        </InputLabel>
        <Select
          input={<OutlinedInput label="* Área" />}
          labelId="area-label"
          color="success"
          name="area"
          defaultValue=""
          {...register('area', {
            required: 'Por favor, elige la área.'
          })}
          onChange={handdleAreaCombo}
        >
          <MenuItem value="" disabled>
            Elige una opción
          </MenuItem>
          {areas.map((area) => (
            <MenuItem key={area.joaId} value={area.joaId}>
              {area.joaName}
            </MenuItem>
          ))}
          <Link to="/catalogos/areas">
            <button type="button" className="addFixed">
              <div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>Registrar nueva área</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="iconGreenToolbar"
                    />
                  </div>
                </Box>
              </div>
            </button>
          </Link>
        </Select>
        <FormHelperText>{errors.area?.message}</FormHelperText>
      </FormControl>
      <FormControl fullWidth className="mb-4" error={Boolean(errors.phase)}>
        <InputLabel id="phase-label" color="success">
          * Fase
        </InputLabel>
        <Select
          input={<OutlinedInput label="* Fase" />}
          labelId="phase-label"
          color="success"
          name="phase"
          defaultValue=""
          {...register('phase', {
            required: 'Por favor, elige la fase.'
          })}
          onChange={handdlePhaseCombo}
        >
          <MenuItem value="" disabled>
            Elige una opción
          </MenuItem>
          {phases.map((phase) => (
            <MenuItem key={phase.prphId} value={phase.prphId}>
              {phase.prphName}
            </MenuItem>
          ))}
          <Link to="/catalogos/fases-tramites">
            <button type="button" className="addFixed">
              <div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>Registrar nueva fase</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="iconGreenToolbar"
                    />
                  </div>
                </Box>
              </div>
            </button>
          </Link>
        </Select>
        <FormHelperText>{errors.phase?.message}</FormHelperText>
      </FormControl>
      <FormControl fullWidth className="mb-4" error={Boolean(errors.action)}>
        <InputLabel id="action-label" color="success">
          * Acción de la gestión de trámite
        </InputLabel>
        <Select
          input={<OutlinedInput label="* Acción de la gestión de trámite" />}
          labelId="action-label"
          color="success"
          name="action"
          defaultValue=""
          {...register('action', {
            required: 'Por favor, elige la acción de la gestión de trámite.'
          })}
        >
          <MenuItem value="" disabled>
            Elige una opción
          </MenuItem>
          {actions.map((action) => (
            <MenuItem key={action.prmaId} value={action.prmaId}>
              {action.prmaName}
            </MenuItem>
          ))}
          <Link to="/catalogos/gestion-tramite">
            <button type="button" className="addFixed">
              <div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>Registrar nueva acción de la gestión de trámite</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="iconGreenToolbar"
                    />
                  </div>
                </Box>
              </div>
            </button>
          </Link>
        </Select>
        <FormHelperText>{errors.action?.message}</FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        className="mb-4"
        error={Boolean(errors.documentType)}
      >
        <InputLabel id="documentType-label" color="success">
          * Tipo de documento
        </InputLabel>
        <Select
          input={<OutlinedInput label="* Tipo de documento" />}
          labelId="documentType-label"
          color="success"
          name="documentType"
          defaultValue=""
          {...register('documentType', {
            required: 'Por favor, elige el tipo de documento.'
          })}
        >
          <MenuItem value="" disabled>
            Elige una opción
          </MenuItem>
          {documentType.map((docType) => (
            <MenuItem key={docType.tydoId} value={docType.tydoId}>
              {docType.tydoName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.documentType?.message}</FormHelperText>
      </FormControl>
      <TextField
        placeholder="Nombre del documento"
        label="* Nombre del documento"
        variant="outlined"
        fullWidth
        color="success"
        className="mb-4"
        name="name"
        {...register('name', {
          required: 'Por favor, ingresa el nombre del documento.'
        })}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <FormControl
        fullWidth
        className="mb-4"
        error={Boolean(errors.letterType)}
      >
        <InputLabel id="letterType-label" color="success">
          * Tipo de carta cliente
        </InputLabel>
        <Select
          input={<OutlinedInput label="* Tipo de carta cliente" />}
          labelId="letterType-label"
          color="success"
          name="letterType"
          defaultValue=""
          {...register('letterType', {
            required: 'Por favor, elige el tipo de carta cliente.'
          })}
        >
          <MenuItem value="" disabled>
            Elige una opción
          </MenuItem>
          {customerLetterType.map((custLetType) => (
            <MenuItem key={custLetType.cultId} value={custLetType.cultId}>
              {custLetType.cultName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.letterType?.message}</FormHelperText>
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
          <Switch {...register('invoice')} />
          <Typography>Sí</Typography>
        </Stack>
      </Stack>
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

CreatePPMDocument.defaultProps = {
  areas: [],
  phases: [],
  actions: [],
  documentType: [],
  customerLetterType: []
};

export default CreatePPMDocument;
