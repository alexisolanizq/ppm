import GeneralLayout from '@Component/layout/GeneralLayout';
import { ADD_USER } from '@Const/catalogs';
import { WIDTH } from '@Const/styles';
import useUserAdd from '@Hooks/catalogs/useUserAdd';
import React from 'react';
import ModalUserPhaseProfile from './ModalUserPhaseProfile';
import UserForm from './UserForm';

const UserAdd = () => {
  const { isLoading, prevLinks, row, user, modalPhases, onEndPhases, onEnd } = useUserAdd();
  return (
    <>
      <ModalUserPhaseProfile
        usrId={user?.usrId}
        isShow={modalPhases.isOpen}
        onCancel={modalPhases.closeModal}
        onClose={modalPhases.closeModal}
        onEnd={onEndPhases}
      />
      <GeneralLayout
        maxWidth={WIDTH.small}
        isLoading={isLoading}
        prevLinks={prevLinks}
        title={ADD_USER}
      >
        <UserForm row={row} onEnd={onEnd} onCancel={onEndPhases} />
      </GeneralLayout>
    </>
  );
};

export default UserAdd;
