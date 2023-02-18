import { DialogContent } from '@mui/material';
import React from 'react';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const NotificationModal = ({
  modalShow,
  handleModalShow,
  notificationData
}) => {
  const { BootstrapDialog, BootstrapDialogTitle } = CustomBootstrapDialog();
  return (
    <BootstrapDialog
      open={modalShow}
      onClose={() => handleModalShow(false)}
      sx={{ padding: 0 }}
    >
      <BootstrapDialogTitle
        onClose={() => handleModalShow(false)}
        className="text-center green-color fw-bold fs-5"
      >
        Notificación
      </BootstrapDialogTitle>
      <DialogContent sx={{ marginY: 1 }}>
        <p className="fw-bold fs-5 text-center text-capitalize mb-2">
          {notificationData.acnoName}
        </p>
        <p className="fs-6 text-decoration-underline green-color text-center">
          {notificationData.procedureManagementActionDTO?.name}
        </p>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default NotificationModal;
