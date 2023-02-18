import FilterLayout from '@Component/common/filter/FilterLayout';
import SelectController from '@Component/common/select/SelectController';
import useUserFilters from '@Hooks/catalogs/useUserFilters';
import React from 'react';

const UserFilters = ({ control }) => {
  const { isLoading, areas } = useUserFilters();
  return (
    <FilterLayout isLoading={isLoading}>
      <SelectController
        name="joaId"
        control={control}
        label="Área principal"
        optionId="joaId"
        optionName="joaName"
        options={areas}
      />
    </FilterLayout>
  );
};

export default UserFilters;
