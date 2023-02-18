import React, { useState } from 'react';

import IconAdd from '@Component/common/icon/IconAdd';

import { LINK_CATALOGS } from '@Const/links';

import SignatoriesColumns from '@Pages/catalogs/signatories/SignatoriesColumns';

import { useSignatoryService } from '@Services/signatories/useSignatoriesService';
import useFiles from '@Hooks/catalogs/useFiles';

import useModal from '@Hooks/common/useModal';
import { FILES_SOURCE_SIGNATORY } from '@Const/files';

const useSignatories = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isOpenInfo,
    openModal: openInfoModal,
    closeModal: closeInfoModal
  } = useModal();
  const { getPhoto } = useFiles({ fileSource: FILES_SOURCE_SIGNATORY });

  // api
  const { data: signatories, isLoading } = useSignatoryService();

  const prevLinks = [{ link: LINK_CATALOGS, nombre: 'Cátalogos' }];

  const actions = [<IconAdd onClick={openModal} />];

  // functions
  const onEdit = async (selectedRow) => {
    const signature = await getPhoto(selectedRow?.signId);
    setRow({ ...selectedRow, signature });
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const onShow = (selectedRow) => {
    setRow(selectedRow);
    openInfoModal();
  };

  const onCancelInfo = () => {
    setRow(null);
    closeInfoModal();
  };

  const columns = SignatoriesColumns({ onShow, onEdit });

  return {
    isLoading,
    prevLinks,
    signatories,
    columns,
    actions,
    isOpen,
    onCancel,
    row,
    isOpenInfo,
    onCancelInfo
  };
};

export default useSignatories;
