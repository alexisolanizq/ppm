import Modal from '@Component/common/modal/Modal';
import { CREATE_SUBMANAGEMENT, UPDATE_SUBMANAGEMENT } from '@Const/catalogs';
import React from 'react';
import SubManagementForm from './SubManagementForm';

const SubManagementModal = ({ isShow, onCancel, isUpdate, row, onEnd }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_SUBMANAGEMENT : CREATE_SUBMANAGEMENT}
  >
    <SubManagementForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default SubManagementModal;
