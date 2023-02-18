import React, { useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Form, Row, Col } from 'react-bootstrap';

import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import Typography from '@mui/material/Typography';

const CreateMachoteDesign = ({
  handleClose,
  register,
  handleSubmit,
  errors,
  legalFigures,
  languages,
  templateTypes,
  clients,
  holders,
  onSubmit
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorstate) => {
    setEditorState(editorstate);
  };
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
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
              <MenuItem key={legalFigure.id} value={legalFigure.id}>
                {legalFigure.spanishName}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.legalFigure?.message}</FormHelperText>
        </FormControl>
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
              <MenuItem key={language.id} value={language.id}>
                {language.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.language?.message}</FormHelperText>
        </FormControl>
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
              <MenuItem key={client.id} value={client.id}>
                {`${client.name} ${client.firstName} ${client.lastName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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

        <Col sm={12}>
          <Editor
            editorState={editorState}
            editorClassName="demo-editor"
            wrapperClassName="demo-wrapper"
            toolbarClassName="toolbarClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </Col>

        <textarea
          className="w-full h-auto"
          rows="10"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
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

CreateMachoteDesign.defaultProps = {
  legalFigures: []
};

export default CreateMachoteDesign;
