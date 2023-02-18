import React from 'react';
import { isValid } from '@Utils/values';
import { PREVLINK_CATALOG } from '@Const/links';
import { filterStatus, sorting } from '@Const/filter';
import { PAGE_TITLE_AREA_MANAGEMENTS } from '@Const/catalogs';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import useAreaManagements from '@Hooks/catalogs/useAreaManagements';
import AreaManagementsModal from '@Pages/catalogs/AreasManagements/AreaManagementsModal';

const AreaManagements = () => {
  const { isOpen, onCancel, row, isLoading, columns, actions, areaManagements } =
    useAreaManagements();
  return (
    <>
      <GeneralLayout title={PAGE_TITLE_AREA_MANAGEMENTS} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isRandomId
          actions={actions}
          columns={columns}
          isLoading={isLoading}
          data={areaManagements}
          sorting={sorting('management')}
          filter={filterStatus('jaiaStatus')}
        />
      </GeneralLayout>
      <AreaManagementsModal
        isShow={isOpen}
        onEnd={onCancel}
        isUpdate={isValid(row)}
        row={row}
        onCancel={onCancel}
      />
    </>
  );
};

export default AreaManagements;
