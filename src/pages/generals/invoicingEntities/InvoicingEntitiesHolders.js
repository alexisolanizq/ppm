import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';

import { PAGE_INVOICING_ENTITIES } from '@Const/generals';

import useInvoicingEntitiesHolders from '@Hooks/generals/useInvoicingEntitiesHolders';

import InvoicingEntitiesList from './InvoicingEntitiesList';

const InvoicingEntitiesHolders = () => {
  const { actionsToolbar, prevLinks, isLoading, invoicingEntitiesFilter } =
    useInvoicingEntitiesHolders();

  return (
    <GeneralLayout
      title={PAGE_INVOICING_ENTITIES}
      prevLinks={prevLinks}
      actions={actionsToolbar}
      isLoading={isLoading}
      isTitleFlex
    >
      <InvoicingEntitiesList invoicingEntities={invoicingEntitiesFilter} />
    </GeneralLayout>
  );
};

export default InvoicingEntitiesHolders;
