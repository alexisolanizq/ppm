import React from 'react';
import {
  TextField,
  Box
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Dropzone from '../dropzones/Dropzone';

const FormContact = ({
  // errors,
  contactData,
  agentTelephonesContact,
  update,
  file,
  onDropRejected,
  onDropAccepted,
  editContact,
  handleInputPhonesAgentContact,
  handleContact,
  createContact,
  addInputPhonesAgentContact,
  getHelperText,
  getErrorValue
}) => {
  const { label, name, firstLastName, secondLastName, email, fax } =
  contactData;
  return (
    <Box>
      <Dropzone
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        file={file}
      />
      <Box>
        <TextField
          id="notice-fase"
          label="*Etiqueta"
          color="success"
          variant="outlined"
          helperText={getHelperText(label, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(label)}
          value={label}
          onChange={(e) => handleContact('label', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="*Nombre(s)"
          color="success"
          variant="outlined"
          helperText={getHelperText(name, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(name)}
          value={name}
          onChange={(e) => handleContact('name', e.target.value)}
        />
        <Box className="d-flex flex-row">
          <TextField
            id="notice-fase"
            label="Apellido paterno"
            color="success"
            variant="outlined"
            helperText={getHelperText(firstLastName, 'lklk', '')}
            error={getErrorValue(firstLastName)}
            className="mb-3 w-50 mr-05"
            value={firstLastName}
            onChange={(e) => handleContact('firstLastName', e.target.value)}
          />
          <TextField
            id="notice-fase"
            label="Apellido materno"
            color="success"
            variant="outlined"
            helperText={getHelperText(secondLastName, 'lklk', '')}
            error={getErrorValue(secondLastName)}
            className="mb-3 w-50 ml-05"
            value={secondLastName}
            onChange={(e) => handleContact('secondLastName', e.target.value)}
          />
        </Box>
        <Box className="d-flex flex-row flex-align-items-center flex-wrap">
          {agentTelephonesContact.map((item, index) => (
            <TextField
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}aa`}
              id="notice-fase"
              label="*Telefono"
              color="success"
              variant="outlined"
              helperText={getHelperText(item.number, 'lklk', '')}
              className="d-flex flex-row flex-align-items-center mr-07 mb-3"
              error={getErrorValue(item.number === '')}
              value={item.number}
              onChange={(e) =>
                handleInputPhonesAgentContact('number', e.target.value, index)
              }
            />
          ))}
          <AddCircleOutlineIcon
            className="mb-3"
            onClick={() => addInputPhonesAgentContact()}
          />
        </Box>
        <TextField
          id="notice-fase"
          label="*Correo Electronico"
          color="success"
          variant="outlined"
          helperText={getHelperText(email, 'lklk', '')}
          className="mb-3 w-50 mr-05"
          error={getErrorValue(email)}
          value={email}
          onChange={(e) => handleContact('email', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="*Fax"
          color="success"
          variant="outlined"
          helperText={getHelperText(fax, 'lklk', '')}
          className="mb-3 w-50"
          error={getErrorValue(fax)}
          value={fax}
          onChange={(e) => handleContact('fax', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="*Fax"
          color="success"
          variant="outlined"
          helperText={getHelperText(fax, 'lklk', '')}
          className="mb-3 w-50"
          error={getErrorValue(fax)}
          value={fax}
          onChange={(e) => handleContact('fax', e.target.value)}
        />
      </Box>
      <Box className="d-flex justify-content-center">
        <button
          variant="contained"
          type="button"
          className="btn btn-secondary px-5 mx-4 mr-05"
        >
          Cancelar
        </button>
        {!update ? (
          <button
            variant="contained"
            type="button"
            className="btn bg-primary-green btn-secondary px-5 mx-4 mr-05"
            onClick={() => createContact()}
          >
            Guardar
          </button>
        ) : (
          <button
            variant="contained"
            type="button"
            className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
            onClick={() => editContact()}
          >
            Guardar
          </button>
        )}
      </Box>
    </Box>
  );
};

export default FormContact;
