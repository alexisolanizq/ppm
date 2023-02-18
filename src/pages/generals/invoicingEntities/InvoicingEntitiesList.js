import React from 'react';

import { CardInvoicingEntity } from '@Component/common/card';
import GridLayout from '@Component/common/grid/GridLayout';

const InvoicingEntitiesList = ({ invoicingEntities = [] }) => (
  <GridLayout isEmpty={invoicingEntities.length === 0}>
    {invoicingEntities.map((invoicingEntity) => (
      <CardInvoicingEntity
        key={`card-entity-${invoicingEntity.billingEntity.bienId}`}
        invoicingEntity={invoicingEntity.billingEntity}
        invoicingEntityDefault={invoicingEntity.agbeMain}
      />
    ))}
  </GridLayout>
);

export default InvoicingEntitiesList;
