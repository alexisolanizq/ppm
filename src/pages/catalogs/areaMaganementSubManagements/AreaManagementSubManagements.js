import React from 'react';
import { isValid } from '@Utils/values';
import { PREVLINK_CATALOG } from '@Const/links';
import { filterStatus, sorting } from '@Const/filter';
import { PAGE_TITLE_AREA_MANAGEMENT_SUBMANAGEMENT } from '@Const/catalogs';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import AreaManagementSubManagementModal from '@Pages/catalogs/areaMaganementSubManagements/AreaManagementSubManagementsModal';
import useAreaManagementSubManagement from '@Hooks/catalogs/useAreaManagementSubManagement';

const AreaManagementSubManagements = () => {
  const { isOpen, onCancel, row, isLoading, columns, actions, areaManagementSubManagements } =
    useAreaManagementSubManagement();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_AREA_MANAGEMENT_SUBMANAGEMENT}
        prevLinks={PREVLINK_CATALOG}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={areaManagementSubManagements}
          isRandomId
          sorting={sorting('imsuName')}
          filter={filterStatus('imsuStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <AreaManagementSubManagementModal
        isShow={isOpen}
        onEnd={onCancel}
        isUpdate={isValid(row)}
        onCancel={onCancel}
      />
    </>
  );
};

export default AreaManagementSubManagements;
