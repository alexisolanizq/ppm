import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';

import { filterStatus, sorting } from '@Const/filter';
import { CREATE_BANKS, PAGE_TITLE_BANKS, UPDATE_BANKS } from '@Const/catalogs';

import { isValid } from '@Utils/values';

import useBanks from '@Hooks/catalogs/useBanks';

import TableDataGrid from '@Component/common/table/TableDataGrid';
import Modal from '@Component/common/modal/Modal';
import BanksForm from './BanksForm';

const Banks = () => {
  const {
    prevLinks,
    isLoading,
    columns,
    actions,
    banks,
    isOpen,
    onCancel,
    row
  } = useBanks();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_BANKS} prevLinks={prevLinks}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={banks}
          rowId="ppbaId"
          sorting={sorting('ppbaName')}
          filter={filterStatus('ppbaStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        maxWidth="md"
        isShow={isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_BANKS : CREATE_BANKS}
      >
        <BanksForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
    </>
  );
};

export default Banks;
