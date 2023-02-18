import React from 'react';
import { PREVLINK_CATALOG } from '@Const/links';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import useCorrespondences from '@Hooks/catalogs/useCorrespondences';
import CorrespondenceModal from '@Pages/catalogs/correspondences/CorrespondenceModal';
import { filterStatus, sorting } from '@Const/filter';
import { PAGE_TITLE_CORRESPONDENCES } from '@Const/catalogs';
import { isValid } from '@Utils/values';

const Correspondences = () => {
  const {
    isLoading,
    row,
    columns,
    correspondences,
    actions,
    isOpen,
    closeModal
  } = useCorrespondences();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_CORRESPONDENCES}
        prevLinks={PREVLINK_CATALOG}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={correspondences}
          rowId="cotiId"
          sorting={sorting('cotiName')}
          filter={filterStatus('cotiStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <CorrespondenceModal
        isShow={isOpen}
        onCancel={closeModal}
        onEnd={closeModal}
        row={row}
        isUpdate={isValid(row)}
      />
    </>
  );
};

export default Correspondences;
