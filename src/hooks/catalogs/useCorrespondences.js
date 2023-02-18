import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import IconAdd from '@Component/common/icon/IconAdd';
import CorrespondenceColumn from '@Pages/catalogs/correspondences/CorrespondenceColumn';
import { useCorrespondencesListService } from '@Services/correspondences/useCorrespondenceService';

const useCorrespondences = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const [row, setRow] = useState(null);
  const {data: correspondences, isLoading} = useCorrespondencesListService()
  const onEdit = (data) => {
    setRow(data);
    openModal();
  };
  const onCancel = () => {
    setRow();
    closeModal();
  };
  const actions = [<IconAdd onClick={openModal} />];
  const columns = CorrespondenceColumn({ onEdit });

  return {
    isOpen,
    closeModal,
    openModal,
    row,
    onCancel,
    actions,
    columns,
    correspondences,
    isLoading
  };
};

export default useCorrespondences;
