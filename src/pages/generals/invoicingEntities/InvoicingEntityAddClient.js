import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';
import InvoicingEntityForm from '@Component/common/invoicingEntities/InvoicingEntityForm';

import { PAGE_TITLE_ADD_INVOICING_ENTITY } from '@Const/generals';

import useInvoicingEntityAddClient from '@Hooks/generals/useInvoicingEntityAddClient';

import { WIDTH } from '@Const/styles';

const InvoicingEntityAddClient = () => {
  const { onSubmit, onCancel, prevLinks, isLoading, isLoadingMutation } =
    useInvoicingEntityAddClient();
  return (
    <GeneralLayout
      isLoading={isLoading}
      prevLinks={prevLinks}
      title={PAGE_TITLE_ADD_INVOICING_ENTITY}
      maxWidth={WIDTH.form}
    >
      <InvoicingEntityForm
        onCancel={onCancel}
        onSubmit={onSubmit}
        isLoading={isLoadingMutation}
      />
    </GeneralLayout>
  );
};

export default InvoicingEntityAddClient;
