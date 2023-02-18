import React from 'react';

import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';

import {
  PAGE_TITLE_AUTHORITIES,
  CREATE_AUTHORITY,
  UPDATE_AUTHORITY
} from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';

import { isValid } from '@Utils/values';

import useAuthorities from '@Hooks/catalogs/useAuthorities';

import AuthoritiesForm from './AuthoritiesForm';

const Authorities = () => {
  const {
    prevLinks,
    isLoading,
    columns,
    actions,
    authorities,
    isOpen,
    onCancel,
    row
  } = useAuthorities();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_AUTHORITIES} prevLinks={prevLinks}>
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={authorities}
          rowId="autId"
          sorting={sorting('joaName')}
          filter={filterStatus('autStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_AUTHORITY : CREATE_AUTHORITY}
      >
        <AuthoritiesForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
    </>
  );
};

export default Authorities;
