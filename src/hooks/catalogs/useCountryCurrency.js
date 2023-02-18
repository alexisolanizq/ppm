import React, { useState } from 'react';
import { useCurrencyCountryList } from '@Services/currencyCountry/useCurrencyCountryService';
import IconAdd from '@Component/common/icon/IconAdd';
import useModal from '@Hooks/common/useModal';
import CurrencyCountryColumns from '@Pages/catalogs/currencyCountry/CurrencyCountryColumns';

const useCountryCurrency = () => {
  const { data: countryCurrency, isLoading } = useCurrencyCountryList();

  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const onEdit = (data) => {
    setRow(data);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const actions = [<IconAdd onClick={openModal} />];

  const columns = CurrencyCountryColumns({ onEdit });

  return {
    row,
    isLoading,
    countryCurrency,
    isOpen,
    actions,
    columns,
    onCancel
  };
};

export default useCountryCurrency;
