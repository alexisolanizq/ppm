import Modal from '@Component/common/modal/Modal';
import { ADD_LANGUAGE, UPDATE_LANGUAGE } from '@Const/catalogs';
import React from 'react';
import LanguageForm from './LanguageForm';

const LanguageModal = ({
  isShow,
  onCancel,
  isUpdate,
  row,
  onEnd = () => {}
}) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_LANGUAGE : ADD_LANGUAGE}
  >
    <LanguageForm
      isUpdate={isUpdate}
      onCancel={onCancel}
      row={row}
      onEnd={onEnd}
    />
  </Modal>
);

export default LanguageModal;
