import FilterLayout from '@Component/common/filter/FilterLayout';
import SelectController from '@Component/common/select/SelectController';
import useOfficeFilters from '@Hooks/generals/useOfficeFilters';
import React from 'react';

const OfficeFilters = ({ control }) => {
  const { regimes, isLoading, cfdis } = useOfficeFilters();

  return (
    <FilterLayout isLoading={isLoading}>
      <SelectController
        name='regime'
        control={control}
        label="Régimen"
        optionId="idOptionCatGeneric"
        optionName="description"
        options={regimes}
      />
      <SelectController
        name='cfdi'
        control={control}
        label="Uso de CFDI"
        optionId="idOptionCatGeneric"
        optionName="description"
        options={cfdis}
      />
      
    </FilterLayout>
  );
};

export default OfficeFilters;
