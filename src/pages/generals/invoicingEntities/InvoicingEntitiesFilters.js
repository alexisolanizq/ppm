import React from 'react';

import SelectController from '@Component/common/select/SelectController';

import useInvoicingEntitiesFilters from '@Hooks/generals/useInvoicingEntitiesFilters';
import FilterLayout from '@Component/common/filter/FilterLayout';

const InvoicingEntitiesFilters = ({ control }) => {
  const { isLoading, personTypes, regimes, cfdis } =
    useInvoicingEntitiesFilters();

  return (
    <FilterLayout isLoading={isLoading}>
      <SelectController
        name="typePerson"
        control={control}
        label="Tipo de persona"
        optionId="idOptionCatGeneric"
        optionName="description"
        options={personTypes}
      />
      <SelectController
        name="regime"
        control={control}
        label="Régimen"
        optionId="idOptionCatGeneric"
        optionName="description"
        options={regimes}
      />
      <SelectController
        name="cfdi"
        control={control}
        label="Uso de CFDI"
        optionId="idOptionCatGeneric"
        optionName="description"
        options={cfdis}
      />
    </FilterLayout>
  );
};

export default InvoicingEntitiesFilters;
