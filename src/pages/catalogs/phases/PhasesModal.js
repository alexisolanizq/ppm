import Modal from '@Component/common/modal/Modal';
import { CREATE_PHASES, UPDATE_PHASES } from '@Const/catalogs';
import React from 'react';
import PhasesForm from './PhasesForm';

const PhasesModal = ({ isShow, onCancel, isUpdate, row, onEnd = () => {} }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_PHASES : CREATE_PHASES}
  >
    <PhasesForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default PhasesModal;
