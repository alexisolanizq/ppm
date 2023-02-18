import React from 'react';

import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';

import {
  PAGE_TITLE_SIGNATORIES,
  CREATE_SIGNATORIES,
  UPDATE_SIGNATORIES
} from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';

import { isValid } from '@Utils/values';

import useSignatories from '@Hooks/catalogs/useSignatories';

import SignatoriesForm from './SignatoriesForm';
import SignatoriesInfo from './SignatoriesInfo';

const Signatories = () => {
  const {
    prevLinks,
    isLoading,
    columns,
    actions,
    signatories,
    isOpen,
    onCancel,
    row,
    isOpenInfo,
    onCancelInfo
  } = useSignatories();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_SIGNATORIES} prevLinks={prevLinks}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={signatories}
          rowId="signId"
          sorting={sorting('signName')}
          filter={filterStatus('signStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_SIGNATORIES : CREATE_SIGNATORIES}
      >
        <SignatoriesForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
      <Modal isShow={isOpenInfo} onClose={onCancelInfo} title="Ver firmante">
        <SignatoriesInfo row={row} />
      </Modal>
    </>
  );
};

export default Signatories;
