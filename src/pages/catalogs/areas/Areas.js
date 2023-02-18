import Modal from '@Component/common/modal/Modal';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { CREATE_AREA, PAGE_TITLE_LIST_AREA, UPDATE_AREA } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import useAreas from '@Hooks/catalogs/useAreas';
import { isValid } from '@Utils/values';
import React from 'react';

const Areas = () => {
  const { areas, isLoading, columns, actions, isOpen, onCancel, row, areasFormulario } =
    useAreas();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_LIST_AREA} prevLinks={PREVLINK_CATALOG}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={areas}
          rowId="joaId"
          sorting={sorting('joaName')}
          filter={filterStatus('joaStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_AREA : CREATE_AREA}
        >             
          {areasFormulario()}
        </Modal>

    </>
  );
};

export default Areas;
