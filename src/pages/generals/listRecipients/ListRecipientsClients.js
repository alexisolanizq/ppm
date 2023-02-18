import React from 'react';

import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';

import { PAGE_LIST_RECIPIENTS } from '@Const/generals';

import useListRecipientsClients from '@Hooks/generals/useListRecipientsClients';

import ListRecipients from './ListRecipients';
import ListRecipientsForm from './ListRecipientsForm';
import ListRecipientsProcedureForm from './ListRecipientsProcedureForm';

const ListRecipientsClients = () => {
  const {
    prevLinks,
    actionsToolbar,
    isLoading,
    listRecipients,
    isOpen,
    onCancel,
    isOpenTramite,
    onCancelTramite
  } = useListRecipientsClients();

  return (
    <>
      <GeneralLayout
        title={PAGE_LIST_RECIPIENTS}
        actions={actionsToolbar}
        isLoading={isLoading}
        prevLinks={prevLinks}
        isTitleFlex
      >
        <ListRecipients listRecipients={listRecipients} />
      </GeneralLayout>
      <Modal isShow={isOpen} onClose={onCancel} title="Agregar destinatario">
        <ListRecipientsForm />
      </Modal>
      <Modal
        isShow={isOpenTramite}
        onClose={onCancelTramite}
        title="Agregar destinatario"
      >
        <ListRecipientsProcedureForm />
      </Modal>
    </>
  );
};

export default ListRecipientsClients;
