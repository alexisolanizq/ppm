import React, { useState } from 'react';
import { useProcedurePhaseService } from '@Services/phases/usePhaseService';
import useModal from '@Hooks/common/useModal';
import IconAdd from '@Component/common/icon/IconAdd';
import PhasesColumns from '@Pages/catalogs/phases/PhasesColumns';

const usePhases = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const { data: procedurePhases, isLoading } = useProcedurePhaseService();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = PhasesColumns({ onEdit });
  
  const actions = [<IconAdd onClick={openModal} />];

  return {
    row,
    isLoading,
    procedurePhases,

    columns,
    isOpen,
    onEdit,
    onCancel,
    actions
  };
};

export default usePhases;
