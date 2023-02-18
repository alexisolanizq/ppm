import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import { useJobAreaProcedurePhaseService } from '@Services/phases/useJobAreaProcedurePhaseService';
import IconAdd from '@Component/common/icon/IconAdd';
import JobAreaProcedurePhasesColumns from '@Pages/catalogs/jobAreaProcedurePhases/JobAreaProcedurePhasesColumns';

const useJobAreProcedurePhase = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const { data: jobAreaProcedurePhases, isLoading } =
    useJobAreaProcedurePhaseService();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = JobAreaProcedurePhasesColumns({ onEdit });

  const actions = [<IconAdd onClick={openModal} />];

  return {
    row,
    isLoading,
    jobAreaProcedurePhases,

    columns,
    isOpen,
    onEdit,
    onCancel,
    actions
  };
};

export default useJobAreProcedurePhase;
