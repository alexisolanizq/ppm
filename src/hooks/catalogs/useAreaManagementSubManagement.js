import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import IconAdd from '@Component/common/icon/IconAdd';
import { useAreaManagementSubManagementListService } from '@Services/areaManagementSubManagements/useAreaManagementSubManagementService';
import AreaManagementSubManagementColumns from '@Pages/catalogs/areaMaganementSubManagements/AreaManagementSubManagementsColumns';

const useAreaManagementSubManagement = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const [row, setRow] = useState(null);
  const { data: areaManagementSubManagements, isLoading } = useAreaManagementSubManagementListService();
  const onEdit = (data) => {
    setRow(data);
    openModal();
  };
  const onCancel = () => {
    setRow();
    closeModal();
  };
  const actions = [<IconAdd onClick={openModal} />];
  const columns = AreaManagementSubManagementColumns({ onEdit });

  return {
    isOpen,
    closeModal,
    openModal,
    onCancel,
    row,
    areaManagementSubManagements,
    isLoading,
    actions,
    columns
  };
};

export default useAreaManagementSubManagement;
