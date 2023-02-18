import React from 'react';
import { DialogContent } from '@mui/material';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const GeneralModal = ({ title, children, handleOpen, handleClose, width }) => {
  const { BootstrapDialog, BootstrapDialogTitle } = CustomBootstrapDialog();
  return (
    <BootstrapDialog
      open={handleOpen}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      xs={{ width: {width} }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        className="text-center green-color fw-bold fs-5"
        onClose={handleClose}
      >
        {title}
      </BootstrapDialogTitle>

      <DialogContent>{children}</DialogContent>
    </BootstrapDialog>
  );
};

export default GeneralModal;
