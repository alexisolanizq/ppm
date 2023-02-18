import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const AlertMessageLegalFigures = ({ alertMessage, setAlertMessage }) => {
  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertMessage({ ...alertMessage, isOpen: false });
  };
  return (
    <Snackbar
      open={alertMessage.isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Alert
        onClose={handleClose}
        severity={alertMessage.type}
        className="w-100"
      >
        {alertMessage.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessageLegalFigures;
