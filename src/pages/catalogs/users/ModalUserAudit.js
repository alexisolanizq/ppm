import Modal from '@Component/common/modal/Modal';
import React from 'react';
import UserAudit from './UserAudit';

const ModalUserAudit = ({
  isShow,
  onClose,
  usrId
}) => (
  <Modal
    isShow={isShow}
    title="Actualizaciones en el sistema"
    onClose={onClose}
    isNoPadding
  >
    <UserAudit usrId={usrId}/>
  </Modal>
);

export default ModalUserAudit;
