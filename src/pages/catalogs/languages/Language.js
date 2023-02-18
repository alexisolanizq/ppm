import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { PAGE_TITLE_LANGUAGES } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import useLanguage from '@Hooks/catalogs/useLanguage';
import { isValid } from '@Utils/values';
import React from 'react';
import LanguageModal from './LanguageModal';

const Language = () => {
  const { data, isLoading, columns, actions, modalAdd, onCancel, row } =
    useLanguage();
  return (
    <>
      <GeneralLayout title={PAGE_TITLE_LANGUAGES} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={data}
          rowId="lanId"
          filter={filterStatus('lanStatus')}
          sorting={sorting('lanName')}
          actions={actions}
        />
      </GeneralLayout>
      <LanguageModal
        isShow={modalAdd.isOpen}
        onCancel={onCancel}
        row={row}
        isUpdate={isValid(row)}
        onEnd={onCancel}
      />
    </>
  );
};

export default Language;
