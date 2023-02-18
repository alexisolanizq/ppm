import React, { useState } from 'react';

import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Icon from '@Component/common/icon/Icon';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { LINK_HOLDER } from '@Const/links';

import { isEmpty } from '@Utils/values';
import { filterValues } from '@Utils/array';
import { getAddressEntity, getNameEntity } from '@Utils/invoicingEntity';

import { setHolderInvoicingEntities } from '@Redux/generals/holderInvoicingEntitySlice';

import { useInvoicingEntitiesByHolder } from '@Services/invoicingentities/useInvoicingEntitiesService';

import FilterSearch from '@Component/common/filter/FilterSearch';
import FilterComponent from '@Component/common/filter/FilterComponent';
import InvoicingEntitiesFilters from '@Pages/generals/invoicingEntities/InvoicingEntitiesFilters';
import { TITLE_HOLDER } from '@Const/generals';

const useInvoicingEntitiesClients = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const invoicingEntities = useSelector(
    (state) => state.holderInvoicingEntities.holderInvoicingEntities
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

    dispatch(setHolderInvoicingEntities(response));
    setInvoicingEntitiesFilter(filterInvoicingEntities);
  };

  const { isFetching: isLoadingEntities } = useInvoicingEntitiesByHolder(
    id,
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
    { link: LINK_HOLDER, nombre: TITLE_HOLDER },
    { link: `${LINK_HOLDER}/${id}`, nombre: 'Example' }
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

  const isLoading = isLoadingEntities;

  return {
    actionsToolbar,
    prevLinks,
    isLoading,
    invoicingEntitiesFilter
  };
};

export default useInvoicingEntitiesClients;
