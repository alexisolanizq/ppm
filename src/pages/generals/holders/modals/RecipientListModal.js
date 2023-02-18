import React from 'react';
import { CONTACTS } from '@Const/lists';
import { RECIPIENTS } from '@Const/generals';
import RecipientListForm from '@Pages/generals/holders/forms/RecipientListForm';
import Modal from '@Component/common/modal/Modal';

const RecipientListModal = ({
  control,
  handleSubmit,
  handleRecipientList,
  recipientListModalShow,
}) => (
    <Modal
      title={RECIPIENTS}
      isShow={recipientListModalShow}
      onClose={handleRecipientList}
      maxWidth="md"
    >
      <RecipientListForm
        control={control}
        options={CONTACTS}
        handleSubmit={handleSubmit}
        handleRecipientList={handleRecipientList}
      />
    </Modal>
  );

export default RecipientListModal;
