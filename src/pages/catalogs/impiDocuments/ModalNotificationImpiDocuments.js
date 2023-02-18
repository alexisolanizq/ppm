import React from 'react';
import { Button, Box, Dialog } from '@mui/material';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';
import TabNotification from './TabNotification';

function ModalNotificationImpiDocuments({
  modalNotificationShow,
  setmodalNotificationShow,
  handleNotificationData,
  createNotification,
  notificationData,
  addNotification,
  deleteNotification
}) {
  return (
    <Dialog
      open={modalNotificationShow}
      onClose={() => setmodalNotificationShow(false)}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="lg"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => setmodalNotificationShow(false)}
      >
        Configuración de notificaciones de oficio
      </BootstrapDialogTitle>
      <Box className="p-4">
        <TabNotification
          notificationData={notificationData}
          handleNotificationData={handleNotificationData}
          deleteNotification={deleteNotification}
          addNotification={addNotification}
        />
        <Box className="d-flex justifu-content-center mt-3">
          <Button
            variant="contained"
            onClick={() => setmodalNotificationShow(false)}
            className="mr-05"
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => createNotification()}
            className="ml-05"
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default ModalNotificationImpiDocuments;
