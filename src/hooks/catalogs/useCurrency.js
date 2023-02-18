import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import CurrencyColumns from '@Pages/catalogs/currency/CurrencyColumns';
import IconAdd from '@Component/common/icon/IconAdd';
import { useCurrencyService } from '@Services/currency/useCurrencyService';

const useCurrency = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const { data: currencies, isLoading } = useCurrencyService();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onCancel = () => {
    setRow();
    closeModal();
  };

  const actions = [<IconAdd onClick={openModal} />];

  const columns = CurrencyColumns({ onEdit });

  return {
    row,
    currencies,
    isLoading,

    onEdit,
    isOpen,
    actions,
    columns,
    onCancel
  };
};

export default useCurrency;
