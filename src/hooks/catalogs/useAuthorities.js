import React, { useState } from 'react';

import IconAdd from '@Component/common/icon/IconAdd';

import { LINK_CATALOGS } from '@Const/links';

import AuthoritiesColumns from '@Pages/catalogs/authorities/AuthoritiesColumns';

import { useAuthorityService } from '@Services/authorities/useAuthorityService';

import useModal from '@Hooks/common/useModal';
import { TITLE_CATALOGS } from '@Const/catalogs';

const useAuthorities = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  // api
  const { data: authorities, isLoading } = useAuthorityService();

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

  const columns = AuthoritiesColumns({ onEdit });

  return {
    isLoading,
    prevLinks,
    authorities,
    columns,
    actions,
    isOpen,
    onCancel,
    row
  };
};

export default useAuthorities;
