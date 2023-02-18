import React from 'react';
import { isValid } from '@Utils/values';
import { PREVLINK_CATALOG } from '@Const/links';
import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import useCountryCurrency from '@Hooks/catalogs/useCountryCurrency';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import CurrencyCountryForm from '@Pages/catalogs/currencyCountry/CurrencyCountryForm';
import {
  CREATE_COUNTRY_CURRENCY,
  PAGE_TITLE_COUNTRY_CURRENCY,
  UPDATE_COUNTRY_CURRENCY
} from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';

const CurrencyCountry = () => {
  const {
    isLoading,
    countryCurrency,
    row,
    isOpen,
    actions,
    columns,
    onCancel
  } = useCountryCurrency();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_COUNTRY_CURRENCY}
        prevLinks={PREVLINK_CATALOG}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={countryCurrency}
          rowId="cocuId"
          sorting={sorting('counId')}
          filter={filterStatus('cocuStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_COUNTRY_CURRENCY : CREATE_COUNTRY_CURRENCY}
      >
        <CurrencyCountryForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
    </>
  );
};

export default CurrencyCountry;
