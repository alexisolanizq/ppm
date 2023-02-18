import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import Button from '@Component/common/button/Button';
import CloseIcon from '@mui/icons-material/Close';

import Icon from '../icon/Icon';
import Flex from '../flex/Flex';

const ConfirmationDialog = ({
  children,
  open = false,
  onClose = () => {},
  acctionOk = () => {}
}) => {
  const handleOk = () => {
    onClose();
    acctionOk();
  };

  return (
    <Dialog maxWidth="xs" open={open} keepMounted>
      <DialogTitle>
        <Icon className="modal__close" icon={CloseIcon} onClick={onClose} />
      </DialogTitle>
      <DialogContent className="py-3">{children}</DialogContent>
      <Flex className="mt-4 px-4 pb-3" justify="center" gap={24}>
        <Button className="buttonSmall" onClick={onClose} autoFocus isCancel>
          Cancelar
        </Button>
        <Button className="buttonSmall" onClick={handleOk}>
          Aceptar
        </Button>
      </Flex>
    </Dialog>
  );
};

export default ConfirmationDialog;
