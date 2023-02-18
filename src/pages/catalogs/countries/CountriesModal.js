import Modal from '@Component/common/modal/Modal';
import { CREATE_COUNTRY, UPDATE_COUNTRY } from '@Const/catalogs';
import React from 'react';
import CountriesForm from './CountriesForm';

const CountriesModal = ({ isShow, isUpdate, onCancel, row, onEnd }) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={isUpdate ? UPDATE_COUNTRY : CREATE_COUNTRY}
  >
    <CountriesForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default CountriesModal;
