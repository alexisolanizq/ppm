import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { PAGE_TITLE_MANAGEMENT } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import useManagement from '@Hooks/catalogs/useManagement';
import { isValid } from '@Utils/values';
import React from 'react';
import ManagementModal from './ManagementModal';

const Managements = () => {
  const { isOpen, onCancel, row, isLoading, columns, actions, managements } =
    useManagement();
  return (
    <>
      <GeneralLayout title={PAGE_TITLE_MANAGEMENT} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={managements}
          rowId="imadId"
          sorting={sorting('imadName')}
          filter={filterStatus('imadStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <ManagementModal
        isShow={isOpen}
        onEnd={onCancel}
        isUpdate={isValid(row)}
        row={row}
        onCancel={onCancel}
      />
    </>
  );
};

export default Managements;
