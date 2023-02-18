import React, { useState } from 'react';
import { Box, Chip, TextField } from '@mui/material';

const InputMails = ({ label, emails, setEmails }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const isInList = (email) => emails.includes(email);

  const isEmail = (email) => /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);

  const isValid = (email) => {
    let err = null;
    if (isInList(email)) {
      err = `${email} ya ha sido agregado.`;
    }
    if (!isEmail(email)) {
      err = `${email} no es una dirección de correo electrónico válida.`;
    }
    if (err) {
      setError(err);
      return false;
    }
    return true;
  };
  const handleKeyDown = (e) => {
    if (['Enter', 'Tab', ','].includes(e.key)) {
      e.preventDefault();

      const valu = value.trim();

      if (valu && isValid(valu)) {
        setEmails([...emails, valu]);
        setValue('');
      }
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    setError(null);
  };
  const handleDelete = (item) => {
    setEmails(emails.filter((i) => i !== item));
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    const mails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);
    if (mails) {
      const toBeAdded = mails.filter((email) => !isInList(email));
      setEmails([...emails, ...toBeAdded]);
    }
  };
  return (
    <Box
    className='d-flex flex-column w-100 mb-3'
    >
      {emails.length > 0 && (<Box
      className='d-flex flex-wrap w-fit mb-3'
      >
        {emails.map((item) => (
          <Chip
            key={item}
            label={item}
            onDelete={() => handleDelete(item)}
            className="mr-05"
          />
        ))}
      </Box>)}
      <Box className="d-flex flex-column">
        <TextField
          label={label}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onPaste={handlePaste}
          className="w-100"
        />
      </Box>
      {error && <p className="error">{error}</p>}
    </Box>
  );
};

export default InputMails;
