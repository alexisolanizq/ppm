import React from 'react';

import { Link } from 'react-router-dom';

import { Form, Row, Col } from 'react-bootstrap';

import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

const MachoteDesignForm = ({
  //! Create
  legalFigures,
  languages,
  templateTypes,
  clients,
  holders,
  //! Variables
  listValiables,
  selectedVariables,
  handleChangeArea,
  //! useForm
  register,
  handleSubmit,
  errors,
  onSubmit
}) => (
  <Form noValidate onSubmit={handleSubmit(onSubmit)}>
    <Row className="mb-3">
      <Col>
        <FormControl
          fullWidth
          className="mb-4"
          error={Boolean(errors.legalFigure)}
        >
          <InputLabel id="legalFigure-label" color="success">
            Figura legal
          </InputLabel>
          <Select
            input={<OutlinedInput label="Figura legal" />}
            labelId="legalFigure-label"
            color="success"
            name="legalFigure"
            defaultValue=""
            {...register('legalFigure')}
          >
            <MenuItem value="" disabled>
              Elige una opción
            </MenuItem>
            {legalFigures.map((legalFigure) => (
              <MenuItem key={legalFigure.lefiId} value={legalFigure.lefiId}>
                {legalFigure.lefiSpanishName}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.legalFigure?.message}</FormHelperText>
        </FormControl>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col xs={6}>
        <FormControl
          fullWidth
          className="mb-4"
          error={Boolean(errors.language)}
        >
          <InputLabel id="language-label" color="success">
            * Idioma
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Idioma" />}
            labelId="language-label"
            color="success"
            name="language"
            defaultValue=""
            {...register('language', {
              required: 'Por favor, elige el idioma.'
            })}
          >
            <MenuItem value="" disabled>
              Elige una opción
            </MenuItem>
            {languages.map((language) => (
              <MenuItem key={language.lanId} value={language.lanId}>
                {language.lanName}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.language?.message}</FormHelperText>
        </FormControl>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col>
        <TextField
          placeholder="Nombre del machote"
          label="* Nombre del machote"
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
      </Col>
    </Row>

    <Row className="mb-3">
      <Col>
        <Stack
          className="mb-4"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>* Tipo de machote:</Typography>
          <FormControl className="mb-4" error={Boolean(errors.templateType)}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              {...register('templateType', {
                required: 'Por favor, selecciona el  tipo de machote.'
              })}
            >
              {templateTypes.map((templateType) => (
                <FormControlLabel
                  key={templateType.idOptionCatGeneric}
                  value={templateType.idOptionCatGeneric}
                  control={<Radio />}
                  label={templateType.description}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{errors.templateType?.message}</FormHelperText>
          </FormControl>
        </Stack>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col xs={6}>
        <FormControl fullWidth className="mb-4">
          <InputLabel id="client-label" color="success">
            Cliente
          </InputLabel>
          <Select
            input={<OutlinedInput label="Cliente" />}
            labelId="client-label"
            color="success"
            name="client"
            defaultValue=""
            {...register('client')}
          >
            <MenuItem value="" disabled>
              Elige una opción
            </MenuItem>
            {clients.map((client) => (
              <MenuItem key={client.ageId} value={client.ageId}>
                {`${client.ageName} ${client.ageFirstName} ${client.ageLastName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col xs={6}>
        <FormControl fullWidth className="mb-4">
          <InputLabel id="holder-label" color="success">
            Titular
          </InputLabel>
          <Select
            input={<OutlinedInput label="Titular" />}
            labelId="holder-label"
            color="success"
            name="holder"
            defaultValue=""
            {...register('holder')}
          >
            <MenuItem value="" disabled>
              Elige una opción
            </MenuItem>
            {holders.map((holder) => (
              <MenuItem key={holder.id} value={holder.id}>
                {`${holder.name} ${holder.firstName} ${holder.lastName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col xs={6}>
        <FormControl fullWidth className="mb-2">
          <InputLabel id="area-label" color="success">
            * Variables
          </InputLabel>
          <Select
            input={<OutlinedInput label="* Variables" />}
            labelId="area-label"
            color="success"
            name="area"
            multiple
            value={selectedVariables}
            onChange={handleChangeArea}
            renderValue={(selected) => selected.join(', ')}
          >
            <MenuItem value="" disabled>
              Elige una opción
            </MenuItem>
            {listValiables.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                <Checkbox checked={selectedVariables.indexOf(item.name) > -1} />
                <ListItemText primary={item.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Col>
    </Row>

    <div className="d-flex justify-content-around pb-3">
      <Link
        className="close btn-close-modal-app p-1 text-center text-decoration-none rounded"
        to="/catalogos/"
      >
        Cancelar
      </Link>

      <button type="submit" className="btn-primary-modal rounded">
        Guardar
      </button>
    </div>
  </Form>
);

export default MachoteDesignForm;
