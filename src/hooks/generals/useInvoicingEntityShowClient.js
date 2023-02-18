import React from 'react';

import { useParams } from 'react-router';

import Portrait from '@mui/icons-material/Portrait';

import IconTextAction from '@Component/common/icon/IconTextAction';

import { getNameClient } from '@Utils/client';
import { showToastError, showToastSuccess } from '@Utils/toast';

import { LINK_CLIENT } from '@Const/links';
import { MESSAGE_UPDATE_ENTITY_BILLING } from '@Const/const';

import useModal from '@Hooks/common/useModal';
import { useRowClientService } from '@Services/client/useClientService';
import { useRowInvoicingEntitieService } from '@Services/invoicingentities/useInvoicingEntitiesService';
import { useInvoicingEntityDefault } from './useInvoicingEntitiesCommon';

const useInvoicingEntityShowClient = () => {
  const { clientId, invoicingEntityId } = useParams();

  const { isOpen, closeModal, openModal } = useModal();

  const { data: agent, isLoading: isLoadingAgent } =
    useRowClientService(clientId);

  const { removeEntityDefault, updateEntityDefault } =
    useInvoicingEntityDefault();

  const {
    data: currentInvoicingEntity,
    isSuccess,
    isFetching: isFetchingInvoicing
  } = useRowInvoicingEntitieService(invoicingEntityId, clientId);

  const prevLinks = [
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const toggleDefault = async () => {
    if (!currentInvoicingEntity) return;

    if (currentInvoicingEntity.agbeMain) {
      showToastError('La entidad de facturación ya es la principal');
      return;
    }

    const isDeleted = await removeEntityDefault(clientId);

    if (isDeleted) {
      await updateEntityDefault(invoicingEntityId, clientId, true);
      currentInvoicingEntity.agbeMain = true;
    }

    showToastSuccess(MESSAGE_UPDATE_ENTITY_BILLING);
  };

  const actionsToolbar = [
    <IconTextAction
      icon={Portrait}
      text="Definir como predeterminado"
      onClick={openModal}
    />
  ];

  const isLoading = isLoadingAgent || isFetchingInvoicing;

  return {
    currentInvoicingEntity,
    isLoading,
    prevLinks,
    isSuccess,
    actionsToolbar,
    isOpen,
    closeModal,
    toggleDefault
  };
};

export default useInvoicingEntityShowClient;
