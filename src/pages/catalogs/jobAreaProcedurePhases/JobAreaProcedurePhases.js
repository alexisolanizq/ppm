import React from 'react';
import { isValid } from '@Utils/values';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import JobAreaProcedurePhasesForm from '@Pages/catalogs/jobAreaProcedurePhases/JobAreaProcedurePhasesForm';
import useJobAreProcedurePhase from '@Hooks/catalogs/useJobAreProcedurePhase';
import {
  CREATE_JOBAREA_PROCEDURE_PHASES,
  PAGE_TITLE_JOBAREA_PROCEDURE_PHASES,
  UPDATE_JOBAREA_PROCEDURE_PHASES
} from '@Const/catalogs';

const JobAreaProcedurePhases = () => {
  const {
    row,
    actions,
    columns,
    jobAreaProcedurePhases,

    onCancel,
    isOpen,
    isLoading
  } = useJobAreProcedurePhase();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_JOBAREA_PROCEDURE_PHASES}
        prevLinks={PREVLINK_CATALOG}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={jobAreaProcedurePhases}
          rowId="jappId"
          sorting={sorting('joaName')}
          filter={filterStatus('jappStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={
          isValid(row)
            ? UPDATE_JOBAREA_PROCEDURE_PHASES
            : CREATE_JOBAREA_PROCEDURE_PHASES
        }
      >
        <JobAreaProcedurePhasesForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
    </>
  );
};

export default JobAreaProcedurePhases;
