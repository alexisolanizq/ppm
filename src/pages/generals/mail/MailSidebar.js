import React from 'react';

import { Box, Button } from '@mui/material';

const MailSidebar = ({ onHandleService, service, setOpenCompose }) => (
  <Box className="m-3 ml-0 d-flex flex-column justify-content-start align-items-center">
    <Button
      variant="outlined"
      className="w-fit mb-3"
      onClick={() => setOpenCompose(true)}
    >
      Redactar
    </Button>
    <Box className="d-flex flex-column">
      <Button
        variant="text"
        className={
          service === 'inbox'
            ? 'btn-sidebar-mail-fill'
            : 'btn-sidebar-mail-transparent'
        }
        // sx={{ background: service == 'inbox' ? '#f0f0f0' : 'transparent' }}
        onClick={() => onHandleService('inbox')}
      >
        Bandeja de entrada
      </Button>
      <Button
        variant="text"
        className={
          service === 'send'
            ? 'btn-sidebar-mail-fill'
            : 'btn-sidebar-mail-transparent'
        }
        onClick={() => onHandleService('send')}
      >
        Enviados
      </Button>
      <Button
        variant="text"
        className={
          service === 'draft'
            ? 'btn-sidebar-mail-fill'
            : 'btn-sidebar-mail-transparent'
        }
        onClick={() => onHandleService('draft')}
      >
        Borradores
      </Button>
    </Box>
  </Box>
);
export default MailSidebar;
