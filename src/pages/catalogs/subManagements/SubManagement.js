import React from 'react';
import { isValid } from '@Utils/values';
import { PREVLINK_CATALOG } from '@Const/links';
import { filterStatus, sorting } from '@Const/filter';
import { PAGE_TITLE_SUBMANAGEMENT } from '@Const/catalogs';
import GeneralLayout from '@Component/layout/GeneralLayout';
import useSubManagement from '@Hooks/catalogs/useSubManagement';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import SubManagementModal from './SubManagementModal';

const SubManagement = () => {
  const { isOpen, onCancel, row, isLoading, columns, actions, subManagements } =
    useSubManagement();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_SUBMANAGEMENT}
        prevLinks={PREVLINK_CATALOG}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={subManagements}
          rowId="imsuId"
          sorting={sorting('imsuName')}
          filter={filterStatus('imsuStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <SubManagementModal
        row={row}
        isShow={isOpen}
        onEnd={onCancel}
        isUpdate={isValid(row)}
        onCancel={onCancel}
      />
    </>
  );
};

export default SubManagement;
