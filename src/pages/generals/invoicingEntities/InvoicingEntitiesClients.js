import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';

import { PAGE_INVOICING_ENTITIES } from '@Const/generals';

import useInvoicingEntitiesClients from '@Hooks/generals/useInvoicingEntitiesClients';

import InvoicingEntitiesList from './InvoicingEntitiesList';

const InvoicingEntitiesClients = () => {
  const { actionsToolbar, prevLinks, isLoading, invoicingEntitiesFilter } =
    useInvoicingEntitiesClients();

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

export default InvoicingEntitiesClients;
