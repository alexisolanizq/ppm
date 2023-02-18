import React from 'react';
import Modal from '@Component/common/modal/Modal';
import {
  CREATE_AREA_MANAGEMENT_SUBMANAGEMENT,
  UPDATE_AREA_MANAGEMENT_SUBMANAGEMENT
} from '@Const/catalogs';
import AreaManagementSubManagementForm from '@Pages/catalogs/areaMaganementSubManagements/AreaManagementSubManagementsForm';

const AreaManagementSubManagementsModal = ({
  isShow,
  onCancel,
  isUpdate,
  row,
  onEnd
}) => (
  <Modal
    isShow={isShow}
    onClose={onCancel}
    title={
      isUpdate
        ? UPDATE_AREA_MANAGEMENT_SUBMANAGEMENT
        : CREATE_AREA_MANAGEMENT_SUBMANAGEMENT
    }
  >
    <AreaManagementSubManagementForm
      row={row}
      onEnd={onEnd}
      onCancel={onCancel}
      isUpdate={isUpdate}
    />
  </Modal>
);

export default AreaManagementSubManagementsModal;
