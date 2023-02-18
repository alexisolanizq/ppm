import { useState } from 'react';

import { LINK_CATALOGS } from '@Const/links';

import { useCountriesLiestadoService } from '@Services/countries/useCountriesService';

import useModal from '@Hooks/common/useModal';
import CountriesColumns from '@Pages/catalogs/countries/CountriesColumns';
import { TITLE_CATALOGS } from '@Const/catalogs';

const useCountries = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  // api
  const { data: countries, isLoading } = useCountriesLiestadoService();

  const prevLinks = [{ link: LINK_CATALOGS, nombre: TITLE_CATALOGS }];

  // functions
  const onEdit = (selectedRow) => {
    setRow(selectedRow);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = CountriesColumns({ onEdit });

  return {
    isLoading,
    prevLinks,
    countries,
    columns,
    isOpen,
    onCancel,
    row
  };
};

export default useCountries;
