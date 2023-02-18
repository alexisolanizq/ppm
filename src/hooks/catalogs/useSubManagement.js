import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import { useSubManagementListService } from '@Services/submanagements/useSubManagementService';
import IconAdd from '@Component/common/icon/IconAdd';
import SubManagementColumns from '@Pages/catalogs/subManagements/SubManagementColumns';

const useSubManagement = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const [row, setRow] = useState(null);
  const { data: subManagements, isLoading } = useSubManagementListService();
  const onEdit = (data) => {
    setRow(data);
    openModal();
  };
  const onCancel = () => {
    setRow();
    closeModal();
  };
  const actions = [<IconAdd onClick={openModal} />];
  const columns = SubManagementColumns({ onEdit });

  return {
    isOpen,
    closeModal,
    openModal,
    onCancel,
    row,
    subManagements,
    isLoading,
    actions,
    columns
  };
};

export default useSubManagement;
