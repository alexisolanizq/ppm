import React, { useState } from 'react';

import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Icon from '@Component/common/icon/Icon';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { LINK_CLIENT } from '@Const/links';

import { isEmpty } from '@Utils/values';
import { filterValues } from '@Utils/array';
import { getNameClient } from '@Utils/client';
import { getAddressEntity, getNameEntity } from '@Utils/invoicingEntity';

import {
  setAgentInvoicingEntities,
  setLoadInvoicingEntities
} from '@Redux/generals/agentInvoicingEntitySlice';

import { useRowClientService } from '@Services/client/useClientService';
import { useInvoicingEntitiesByAgent } from '@Services/invoicingentities/useInvoicingEntitiesService';

import FilterSearch from '@Component/common/filter/FilterSearch';
import FilterComponent from '@Component/common/filter/FilterComponent';
import InvoicingEntitiesFilters from '@Pages/generals/invoicingEntities/InvoicingEntitiesFilters';
import { TITLE_CLIENT } from '@Const/generals';

const useInvoicingEntitiesClients = () => {
  const dispatch = useDispatch();
  const { clientId } = useParams();

  const invoicingEntities = useSelector(
    (state) => state.agentInvoicingEntities.agentInvoicingEntities
  );

  const [invoicingEntitiesFilter, setInvoicingEntitiesFilter] = useState([]);
  const [stateFilters, setStateFilters] = useState(null);

  const filterParameters = {
    status: {
      propertyOne: 'billingEntity',
      propertyTwo: 'bienStatus'
    },
    typePerson: {
      propertyOne: 'billingEntity',
      propertyTwo: 'typePerson',
      propertyThree: 'opcgId'
    },
    regime: {
      propertyOne: 'billingEntity',
      propertyTwo: 'regime',
      propertyThree: 'opcgId'
    },
    cfdi: {
      propertyOne: 'billingEntity',
      propertyTwo: 'cfdi',
      propertyThree: 'opcgId'
    }
  };

  // functions
  const onSuccess = async (response) => {
    const filterInvoicingEntities = response.filter(
      (item) => item.billingEntity.bienStatus
    );

    dispatch(setAgentInvoicingEntities(response));
    dispatch(setLoadInvoicingEntities(true));
    setInvoicingEntitiesFilter(filterInvoicingEntities);
  };

  const { data: agent, isLoading: isLoadingAgent } =
    useRowClientService(clientId);
  const { isFetching: isLoadingEntities } = useInvoicingEntitiesByAgent(
    clientId,
    onSuccess
  );

  const onFilter = (filtersValues) => {
    setStateFilters(filtersValues);

    let arrayFinal = invoicingEntities;

    const keysObjectFilter = Object.keys(filtersValues);

    keysObjectFilter.forEach((name) => {
      if (!isEmpty(filtersValues[name])) {
        const resultFilters = filterValues({
          items: arrayFinal,
          value: filtersValues[name],
          ...filterParameters[name]
        });

        arrayFinal = resultFilters ?? arrayFinal;
      }
    });

    setInvoicingEntitiesFilter(arrayFinal);
  };

  const onClear = () => {
    setInvoicingEntitiesFilter(invoicingEntities);
  };

  const onSearch = (value) => {
    if (value === '') {
      if (stateFilters) onFilter(stateFilters);
      return;
    }

    const itemsToDisplay = invoicingEntitiesFilter.filter(
      ({ billingEntity }) => {
        const name = getNameEntity(billingEntity);
        const address = getAddressEntity(billingEntity);

        return (
          name.toLowerCase().includes(value.toLowerCase()) ||
          billingEntity.bienRfc.toLowerCase().includes(value.toLowerCase()) ||
          address.toLowerCase().includes(value.toLowerCase())
        );
      }
    );

    setInvoicingEntitiesFilter(itemsToDisplay);
  };

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const actionsToolbar = [
    <FilterSearch onSearch={onSearch} />,
    <FilterComponent
      onFilter={onFilter}
      onClear={onClear}
      component={<InvoicingEntitiesFilters />}
    />,
    <Icon icon={AddCircleOutlineIcon} to="agregar" />
  ];

  const isLoading = isLoadingAgent || isLoadingEntities;

  return {
    actionsToolbar,
    prevLinks,
    isLoading,
    invoicingEntitiesFilter
  };
};

export default useInvoicingEntitiesClients;
