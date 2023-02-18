import IconAdd from '@Component/common/icon/IconAdd';
import { LINK_CLIENT } from '@Const/links';
import { useRowClientService } from '@Services/client/useClientService';
import { useOfficesByAgentService } from '@Services/office/useOfficeService';
import { getNameClient } from '@Utils/client';
import { useParams } from 'react-router';
import React from 'react'
import FilterSearch from '@Component/common/filter/FilterSearch';
import FilterComponent from '@Component/common/filter/FilterComponent';
import OfficeFilters from '@Pages/generals/office/OfficeFilters';
import { TITLE_CLIENT } from '@Const/generals';

const useOfficesClient = () => {
  const { clientId } = useParams();
  const { data: agent, isLoading: isLoadingAgent } = useRowClientService(clientId);
  const { data: offices, isFetching: isLoadingOffices } = useOfficesByAgentService(clientId);

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const onSearch = (value) => {
    console.log(value)
  }

  const onFilter = ({ cfdi, regime, status }) => {
    console.log(status)
  }

  const actionsToolbar = [
    <FilterSearch onSearch={onSearch}/>,
    <FilterComponent onFilter={onFilter} component={<OfficeFilters />}/>,
    <IconAdd to="agregar"/>
  ];

  const isLoading = isLoadingAgent || isLoadingOffices

  return {
    prevLinks,
    offices,
    isLoading,
    actionsToolbar
  }
}

export default useOfficesClient