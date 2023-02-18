import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import ManagementColumns from '@Pages/catalogs/managements/ManagementColumns';
import { useManagementListService } from '@Services/managements/useManagementService';
import IconAdd from '@Component/common/icon/IconAdd';

const useManagement = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const [row, setRow] = useState(null);
  const { data: managements, isLoading } = useManagementListService();
  const onEdit = (data) => {
    setRow(data);
    openModal();
  };
  const onCancel = () => {
    setRow();
    closeModal();
  };
  const actions = [<IconAdd onClick={openModal} />];
  const columns = ManagementColumns({ onEdit });

  return {
    isOpen,
    closeModal,
    openModal,
    onCancel,
    row,
    managements,
    isLoading,
    actions,
    columns
  };
};

export default useManagement;
