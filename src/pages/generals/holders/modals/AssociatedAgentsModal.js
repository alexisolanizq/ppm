import React from 'react';
import { CONTACTS } from '@Const/lists';
import { HOLDER_AGENT } from '@Const/generals';
import AssociatedAgentsForm from '@Pages/generals/holders/forms/AssociatedAgentsForm';
import Modal from '@Component/common/modal/Modal';

const AssociatedAgentsModal = ({
  associatedAgentsModalShow,
  handleSubmit,
  handleAssociatedAgents,
  handleAssociatedAgentsSubmit,
  control
}) => (
    <Modal
      title={HOLDER_AGENT}
      isShow={associatedAgentsModalShow}
      onClose={handleAssociatedAgents}
      maxWidth="md"
    >
      <AssociatedAgentsForm
        control={control}
        contacts={CONTACTS}
        handleSubmit={handleSubmit}
        handleAssociatedAgents={handleAssociatedAgents}
        handleAssociatedAgentsSubmit={handleAssociatedAgentsSubmit}
      />
    </Modal>
  );

export default AssociatedAgentsModal;
