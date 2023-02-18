import React, { useState } from 'react';

import IconAdd from '@Component/common/icon/IconAdd';

import { LINK_CATALOGS } from '@Const/links';

import { useBankService } from '@Services/banks/useBankService';

import useModal from '@Hooks/common/useModal';
import BanksColumns from '@Pages/catalogs/banks/BanksColumns';
import { TITLE_CATALOGS } from '@Const/catalogs';

const useBanks = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  // api
  const { data: banks, isLoading } = useBankService();

  const prevLinks = [{ link: LINK_CATALOGS, nombre: TITLE_CATALOGS }];

  const actions = [<IconAdd onClick={openModal} />];

  // functions
  const onEdit = (selectedRow) => {
    setRow(selectedRow);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = BanksColumns({ onEdit });

  return {
    isLoading,
    prevLinks,
    banks,
    columns,
    actions,
    isOpen,
    onCancel,
    row
  };
};

export default useBanks;
