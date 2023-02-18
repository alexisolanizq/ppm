import Modal from '@Component/common/modal/Modal';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { CREATE_AREA_REFERENCE, PAGE_TITLE_AREA_REFERENCE, UPDATE_AREA_REFERENCE } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import useAreasReference from '@Hooks/catalogs/useAreasReference';
import { isValid } from '@Utils/values';
import React from 'react';
import AreasReferenceForm from './AreasReferenceForm';

const AreasReferences = () => {
  const { isLoading, columns, areasReferences, actions, row, isOpen, onCancel } = useAreasReference()
  return (
    <>
      <GeneralLayout title={PAGE_TITLE_AREA_REFERENCE} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={areasReferences}
          rowId="jartId"
          sorting={sorting('joaName')}
          filter={filterStatus('jartStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal isShow={isOpen} onClose={onCancel} title={isValid(row) ? UPDATE_AREA_REFERENCE : CREATE_AREA_REFERENCE}>
        <AreasReferenceForm onEnd={onCancel} isUpdate={isValid(row)} row={row} onCancel={onCancel} />
      </Modal>
    </>
  );
};

export default AreasReferences;
