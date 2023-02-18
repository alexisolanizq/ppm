import Modal from '@Component/common/modal/Modal';
import { CREATE_AREA, UPDATE_AREA } from '@Const/catalogs';
import React from 'react';
import AreasFormulario from './AreasFormulario';

const AreasModal = ({ isShow, onCancel, isUpdate, row, onEnd = () => {} }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_AREA : CREATE_AREA}
    
  >
    <AreasFormulario
      onEnd={onEnd}
      isUpdate={isUpdate}
      row={row}
      onCancel={onCancel}
    />
  </Modal>
);

export default AreasModal;
