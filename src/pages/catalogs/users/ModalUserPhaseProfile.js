import Modal from '@Component/common/modal/Modal';
import React from 'react';
import UserPhaseProfile from './UserPhaseProfile';

const ModalUserPhaseProfile = ({
  onClose,
  isShow,
  onCancel,
  onEnd,
  usrId
}) => (
  <Modal
    onClose={onClose}
    isShow={isShow}
    title="Registrar relación fase-usuario"
    isNoPadding
  >
    <UserPhaseProfile onEnd={onEnd} onCancel={onCancel} usrId={usrId} />
  </Modal>
);

export default ModalUserPhaseProfile;
