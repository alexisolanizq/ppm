import React from 'react';
import Modal from '@Component/common/modal/Modal';
import ManagementForm from './ManagementForm';

const ManagementModal = ({ isShow, onCancel, isUpdate, row, onEnd }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? 'Modificar dirección' : 'Dar de alta dirección'}
  >
    <ManagementForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default ManagementModal;
