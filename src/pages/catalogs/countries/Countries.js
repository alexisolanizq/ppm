import React from 'react';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import { PAGE_TITLE_COUNTRIES } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { isValid } from '@Utils/values';
import useCountries from '@Hooks/catalogs/useCountries';
import CountriesModal from './CountriesModal';

const Countries = () => {
  const { prevLinks, isLoading, columns, countries, isOpen, onCancel, row } =
    useCountries();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_COUNTRIES} prevLinks={prevLinks}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={countries}
          rowId="counId"
          sorting={sorting('counNameSpa')}
          filter={filterStatus('counStatus')}
        />
      </GeneralLayout>
      <CountriesModal
        isShow={isOpen}
        isUpdate={isValid(row)}
        onCancel={onCancel}
        onEnd={onCancel}
        row={row}
      />
    </>
  );
};

export default Countries;
