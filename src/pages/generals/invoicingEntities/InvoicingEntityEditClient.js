import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';
import InvoicingEntityForm from '@Component/common/invoicingEntities/InvoicingEntityForm';

import { PAGE_TITLE_UPDATE_INVOICING_ENTITY } from '@Const/generals';

import useInvoicingEntityEditClient from '@Hooks/generals/useInvoicingEntityEditClient';

import { WIDTH } from '@Const/styles';

const InvoicingEntityEditClient = () => {
  const {
    onSubmit,
    onCancel,
    prevLinks,
    isLoading,
    isLoadingMutation,
    invoicingEntity
  } = useInvoicingEntityEditClient();

  if (!invoicingEntity) return null;

  return (
    <GeneralLayout
      isLoading={isLoading}
      prevLinks={prevLinks}
      maxWidth={WIDTH.form}
      title={PAGE_TITLE_UPDATE_INVOICING_ENTITY}
    >
      <InvoicingEntityForm
        isUpdate
        onCancel={onCancel}
        onSubmit={onSubmit}
        row={invoicingEntity}
        isLoading={isLoadingMutation}
        fromCurrentPage
      />
    </GeneralLayout>
  );
};

export default InvoicingEntityEditClient;
