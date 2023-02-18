import Modal from '@Component/common/modal/Modal';
import { CREATE_CURRENCY, UPDATE_CURRENCY } from '@Const/catalogs';
import React from 'react';
import CurrencyForm from './CurrencyForm';

const CurrencyModal = ({
  isShow,
  onCancel,
  isUpdate,
  row,
  onEnd = () => {}
}) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_CURRENCY : CREATE_CURRENCY}
  >
    <CurrencyForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default CurrencyModal;
