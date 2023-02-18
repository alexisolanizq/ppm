import React, { useState } from 'react';

import IconAdd from '@Component/common/icon/IconAdd';

import { LINK_CATALOGS } from '@Const/links';

import TempRepositoryFoldersColumns from '@Pages/catalogs/tempRepositoryFolders/TempRepositoryFoldersColumns';

import { useTempRepositoryFolderService } from '@Services/tempRepositoryFolders/useTempRepositoryFolderService';

import useModal from '@Hooks/common/useModal';

const useTempRepositoryFolders = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  // api
  const { data: tempRepositoryFolders, isLoading } =
    useTempRepositoryFolderService();

  const prevLinks = [{ link: LINK_CATALOGS, nombre: 'Cátalogos' }];

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

  const columns = TempRepositoryFoldersColumns({ onEdit });

  return {
    isLoading,
    prevLinks,
    tempRepositoryFolders,
    columns,
    actions,
    isOpen,
    onCancel,
    row
  };
};

export default useTempRepositoryFolders;
