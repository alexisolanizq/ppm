import React from 'react';

import FilterLayout from '@Component/common/filter/FilterLayout';
import SelectController from '@Component/common/select/SelectController';

import useListRecipientsFilters from '@Hooks/generals/useListRecipientsFilters';

const ListRecipientsFilters = ({ control }) => {
  const { isLoading, areasList } = useListRecipientsFilters();

  return (
    <FilterLayout isLoading={isLoading}>
      <SelectController
        name="area"
        control={control}
        label="Área"
        optionId="joaId"
        optionName="joaName"
        options={areasList}
      />
    </FilterLayout>
  );
};

export default ListRecipientsFilters;
