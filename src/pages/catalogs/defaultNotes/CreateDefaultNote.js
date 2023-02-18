import React from 'react';
import { Form, Row } from 'react-bootstrap';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

const CreateDefaultNote = ({
  handleClose,
  register,
  handleSubmit,
  errors,
  priorities,
  onSubmit
}) => (
  <Form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Row className="mb-3">
      <TextField
        placeholder="Nombre de la nota"
        label="* Nombre de la nota"
        variant="outlined"
        fullWidth
        color="success"
        className="mb-4"
        name="name"
        {...register('name', {
          required: 'Por favor, ingresa el nombre de la nota.'
        })}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <TextField
        placeholder="Descripción predeterminada"
        label="* Descripción predeterminada"
        variant="outlined"
        multiline
        rows={5}
        fullWidth
        color="success"
        className="mb-4"
        name="description"
        {...register('description', {
          required: 'Por favor, ingresa la descripción predeterminada.'
        })}
        error={Boolean(errors.description)}
        helperText={errors.description?.message}
      />
      <FormControl fullWidth className="mb-4" error={Boolean(errors.priority)}>
        <InputLabel id="area-label" color="success">
          * Prioridad
        </InputLabel>
        <Select
          input={<OutlinedInput label="* Prioridad" />}
          labelId="area-label"
          color="success"
          name="priority"
          defaultValue=""
          {...register('priority', {
            required: 'Por favor, elige la prioridad.'
          })}
        >
          <MenuItem value="" disabled>
            Elige una opción
          </MenuItem>
          {priorities.map((priority) => (
            <MenuItem
              key={priority.idOptionCatGeneric}
              value={priority.idOptionCatGeneric}
            >
              {priority.description}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.priority?.message}</FormHelperText>
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

CreateDefaultNote.defaultProps = {
  priorities: []
};

export default CreateDefaultNote;
