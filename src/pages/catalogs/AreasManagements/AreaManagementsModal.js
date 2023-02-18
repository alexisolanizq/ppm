import React from 'react';
import Modal from '@Component/common/modal/Modal';
import AreaManagementsForm from './AreaManagementsForm';

const AreaManagementsModal = ({ isShow, onCancel, isUpdate, row, onEnd }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? 'Modificar área - dirección' : 'Dar de alta área - dirección'}
  >
    <AreaManagementsForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default AreaManagementsModal;
