import React from 'react';
import {
  Paper,
  FormGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Box,
  Divider
} from '@mui/material';
import InputMails from '../inputMails';

const FormRecipients = ({
  handleRecipent,
  typeRecipent,
  emails,
  emailsCC,
  emailsCCO,
  setEmails,
  setEmailsCC,
  setEmailsCCO,
}) => (
  <Paper elevation={3} className="w-100">
    <p className="green-title fs-5 fw-bold m-2 text-center">Destinatarios</p>
    <Divider />
    <FormGroup className="d-flex flex-row justify-content-center mb-3">
      <FormControlLabel
        control={
          <Checkbox
            onClick={() => handleRecipent('client')}
            checked={Boolean(typeRecipent === 'client')}
          />
        }
        label="Cliente"
      />
      <FormControlLabel
        control={
          <Checkbox
            onClick={() => handleRecipent('holder')}
            checked={Boolean(typeRecipent === 'holder')}
          />
        }
        label="Titular"
      />
      <FormControlLabel
        control={
          <Checkbox
            onClick={() => handleRecipent('custom')}
            checked={Boolean(typeRecipent === 'custom')}
          />
        }
        label="Personalizado"
      />
    </FormGroup>
    <Box className='mx-3'>
      {typeRecipent !== 'custom' && (
        <FormControl
          fullWidth
          className='w-100 d-flex flex-wrap mb-3'
        >
          <InputLabel id="area-label" color="success">
            * Listo de destinatarios
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="* Listo de destinatarios"
          >
            <MenuItem value="test">test</MenuItem>
          </Select>
        </FormControl>
      )}
      <InputMails label="Contacto" emails={emails} setEmails={setEmails} />
      <InputMails label="Con copia" emails={emailsCC} setEmails={setEmailsCC} />
      <InputMails
        label="Con copia oculta"
        emails={emailsCCO}
        setEmails={setEmailsCCO}
      />
    </Box>
  </Paper>
);

export default FormRecipients;
