import React from 'react';
import usePhases from '@Hooks/catalogs/usePhases';
import { PAGE_TITLE_PHASES } from '@Const/catalogs';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { PREVLINK_CATALOG } from '@Const/links';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import { filterStatus, sorting } from '@Const/filter';
import { isValid } from '@Utils/values';
import PhasesModal from './PhasesModal';

const Phases = () => {
  const {
    row,
    actions,
    columns,
    procedurePhases,
    
    onCancel,
    isOpen,
    isLoading
  } = usePhases();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_PHASES} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={procedurePhases}
          rowId="prphId"
          sorting={sorting('prphName')}
          filter={filterStatus('prphStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <PhasesModal
        isShow={isOpen}
        onEnd={onCancel}
        isUpdate={isValid(row)}
        row={row}
        onCancel={onCancel}
      />
    </>
  );
};

export default Phases;
