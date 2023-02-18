import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useModal from '@Hooks/common/useModal';
import InventorsColumns from '@Pages/generals/formalities/inventors/InventorsColumns';
import { useInventorService } from '@Services/procedure/inventors/useInventorService';
import IconAdd from '@Component/common/icon/IconAdd';

const useInventors = () => {
  const navigate = useNavigate();
  const { procedureParam } = useParams();
  const [formalitieById, setFormalitieById] = useState({});

  const { isOpen, openModal, closeModal } = useModal();
  const [row, setRow] = useState(null);

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const actions = [<IconAdd onClick={openModal} />];

  const { data: inventorsList, isLoading } = useInventorService(procedureParam);

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = InventorsColumns({ onEdit });

  return {
    navigate,
    inventorsList,
    formalitieById,
    setFormalitieById,
    columns,
    isOpen,
    onEdit,
    onCancel,
    isLoading,
    row,
    actions,
    procedureParam
  };
};

export default useInventors;
