import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';
import { DialogTitle, Box, IconButton, Tooltip } from '@mui/material';

const BootstrapDialogTitle = (props) => {
  const { children, onClose, onReply, onFoward, modalMail, ...other } = props;

  return (
    <DialogTitle className="m-0  p-3 text-center" {...other}>
      {children}
      {onClose ? (
        <Box className="position-absolute right-1 top-1 color-grey">
          {modalMail && (
            <>
              <Tooltip title="Responder">
                <IconButton aria-label="close" onClick={onReply}>
                  <ReplyIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Reenviar">
                <IconButton aria-label="close" onClick={onFoward}>
                  <ForwardIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
          <Tooltip title="Cerrar">
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ) : null}
    </DialogTitle>
  );
};
export default BootstrapDialogTitle;
