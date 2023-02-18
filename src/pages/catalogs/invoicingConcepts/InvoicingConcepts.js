import React from 'react';

import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';

import {
  CREATE_INVOICING_CONCEPT,
  UPDATE_INVOICING_CONCEPT,
  PAGE_TITLE_INVOICING_CONCEPTS
} from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';

import { isValid } from '@Utils/values';

import useInvoicingConcepts from '@Hooks/catalogs/useInvoicingConcepts';

import InvoicingConceptsForm from './InvoicingConceptsForm';

const InvoicingConcepts = () => {
  const {
    prevLinks,
    isLoading,
    columns,
    actions,
    invoicingConcepts,
    isOpen,
    onCancel,
    row
  } = useInvoicingConcepts();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_INVOICING_CONCEPTS}
        prevLinks={prevLinks}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={invoicingConcepts}
          rowId="id"
          sorting={sorting('nameSpanish')}
          filter={filterStatus('status')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={
          isValid(row) ? UPDATE_INVOICING_CONCEPT : CREATE_INVOICING_CONCEPT
        }
      >
        <InvoicingConceptsForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
    </>
  );
};

export default InvoicingConcepts;
