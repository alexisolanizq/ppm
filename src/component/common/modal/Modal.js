import { Dialog } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '@Assets/styles/modal.css'
import Icon from '../icon/Icon';
import TitlePage from '../text/TitlePage';

const Modal = ({
  isShow = false,
  onClose,
  isFullWidth = true,
  children,
  title = '',
  isNoPadding = false,
  classNameBody = ''
}) => (
  <Dialog
    open={isShow}
    onClose={onClose}
    fullWidth={isFullWidth}
    maxWidth='md'
  >
    <TitlePage className='py-3'>{title}</TitlePage>
    <Icon className='modal__close' icon={CloseIcon} onClick={onClose} />
    <div className={`modal__body ${classNameBody} ${isNoPadding ? 'modal__body--nopadding' : ''}`}>
      {children}
    </div>
  </Dialog>
);

export default Modal;
