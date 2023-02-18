import React from 'react';
import Modal from '@Component/common/modal/Modal';
import { CREATE_CORRESPONDENCE, UPDATE_CORRESPONDENCE } from '@Const/catalogs';
import CorrespondenceForm from '@Pages/catalogs/correspondences/CorrespondenceForm';

const CorrespondenceModal = ({ isShow, onCancel, isUpdate, row, onEnd }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_CORRESPONDENCE : CREATE_CORRESPONDENCE}
  >
    <CorrespondenceForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default CorrespondenceModal;
