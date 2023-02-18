import React from 'react';

import { useParams } from 'react-router';

import { LINK_CLIENT } from '@Const/links';

import { useRowClientService } from '@Services/client/useClientService';

import useModal from '@Hooks/common/useModal';
import IconAdd from '@Component/common/icon/IconAdd';
import FilterSearch from '@Component/common/filter/FilterSearch';
import FilterComponent from '@Component/common/filter/FilterComponent';
import ListRecipientsFilters from '@Pages/generals/listRecipients/ListRecipientsFilters';
import { TITLE_CLIENT } from '@Const/generals';
import { getNameClient } from '@Utils/client';

const useListRecipientsClients = () => {
  const { clientId } = useParams();

  const listRecipients = [
    { id: 1, name: 'Ejemplo 1' },
    { id: 2, name: 'Ejemplo 2' }
  ];

  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isOpenTramite,
    openModal: openModalTramite,
    closeModal: closeModalTramite
  } = useModal();

  // api
  const { data: agent, isLoadingAgent } = useRowClientService(clientId);

  // functions
  const onCancel = () => {
    closeModal();
  };
  const onCancelTramite = () => {
    closeModalTramite();
  };

  const onSearch = (value) => {
    console.log('🚀 ~ onSearch ~ value', value);
  };

  const onFilter = (filtersValues) => {
    console.log('🚀 ~ onFilter ~ filtersValues', filtersValues);
  };

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const actionsToolbar = [
    <FilterSearch onSearch={onSearch} />,
    <FilterComponent
      onFilter={onFilter}
      component={<ListRecipientsFilters />}
    />,
    <IconAdd onClick={clientId ? openModal : openModalTramite} />
  ];

  const isLoading = isLoadingAgent;

  return {
    agent,
    actionsToolbar,
    isLoading,
    listRecipients,
    prevLinks,
    isOpen,
    onCancel,
    isOpenTramite,
    onCancelTramite
  };
};

export default useListRecipientsClients;
