import Modal from '@Component/common/modal/Modal';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { CREATE_PAYMENT_RIGHTS, PAGE_TITLE_PAYMENT_RIGHTS, UPDATE_PAYMENT_RIGHTS } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import usePaymentRights from '@Hooks/catalogs/usePaymentRights';
import { isValid } from '@Utils/values';
import React from 'react';
import PaymentRightsForm from './PaymentRightsForm';

const PaymentRights = () => {
  const { isLoading, data, columns, actions, addModal, row, onCancel } =
    usePaymentRights();
  return (
    <>
      <GeneralLayout
        isTitleFlex
        prevLinks={PREVLINK_CATALOG}
        title={PAGE_TITLE_PAYMENT_RIGHTS}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={data}
          rowId="pariId"
          sorting={sorting('pariArticleName')}
          filter={filterStatus('pariStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={addModal.isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_PAYMENT_RIGHTS : CREATE_PAYMENT_RIGHTS}
      >
        <PaymentRightsForm 
          onEnd={onCancel}
          isUpdate={isValid(row)}
          row={row}
          onCancel={onCancel}
        />
      </Modal>
    </>
  );
};

export default PaymentRights;
