import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { PAGE_TITLE_CURRENCY } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import useCurrency from '@Hooks/catalogs/useCurrency';
import { isValid } from '@Utils/values';
import React from 'react';
import CurrencyModal from './CurrencyModal';

const Currency = () => {
  const { isOpen, onCancel, row, currencies, isLoading, columns, actions } =
    useCurrency();
  return (
    <>
      <GeneralLayout title={PAGE_TITLE_CURRENCY} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={currencies}
          rowId="currId"
          sorting={sorting('currName')}
          filter={filterStatus('currStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <CurrencyModal
        isShow={isOpen}
        onEnd={onCancel}
        isUpdate={isValid(row)}
        row={row}
        onCancel={onCancel}
      />
    </>
  );
};

export default Currency;
