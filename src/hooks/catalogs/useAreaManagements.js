import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import IconAdd from '@Component/common/icon/IconAdd';
import AreaManagementsColumns from '@Pages/catalogs/AreasManagements/AreaManagementsColumns';
import { useAreaManagementListService } from '@Services/areaManagements/useAreaManagementService';

const useAreaManagements = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const [row, setRow] = useState(null);
  const { data: areaManagements, isLoading } = useAreaManagementListService();
  const onEdit = (data) => {
    setRow(data);
    openModal();
  };
  const onCancel = () => {
    setRow();
    closeModal();
  };
  const actions = [<IconAdd onClick={openModal} />];
  const columns = AreaManagementsColumns({ onEdit });

  return {
    isOpen,
    closeModal,
    openModal,
    onCancel,
    row,
    areaManagements,
    isLoading,
    actions,
    columns
  };
};

export default useAreaManagements;
