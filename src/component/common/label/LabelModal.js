import React from 'react';
import { Visibility } from '@mui/icons-material';
import Modal from '@Component/common/modal/Modal';
import { FIELDS_LABELS } from '@Const/formsFields';
import LabelDetail from '@Component/common/label/LabelDetail';
import IconText from '../icon/IconText';

const LabelModal = ({
  openModal,
  isOpen,
  closeModal,
  labels,
  isUpdate,
  onSearch,
  text = '',
  withSearch
}) => (
  <>
    <IconText
      text={text}
      className="mb-4"
      icon={Visibility}
      onClick={openModal}
    />
    <Modal isShow={isOpen} title={FIELDS_LABELS} onClose={closeModal}>
      <LabelDetail
        withSearch={withSearch}
        onSearch={onSearch}
        isUpdate={isUpdate}
        labels={labels}
      />
    </Modal>
  </>
);

export default LabelModal;
