import React from 'react'
import Flex from '../flex/Flex';
import IconEdit from '../icon/IconEdit';
import IconRemove from '../icon/IconRemove';

export const InvoicingHeaders = ['Nombre', 'RFC', 'Facturación Principal', 'Acciones'];
export const InvoicingColumns = ({ onEdit, onRemove, nameMain }) => [
  {
    field: 'nombre',
    render: (item) =>
      `${item.billingEntity.bienName} ${item.billingEntity.bienLastName}`
  },
  {
    field: 'bienRfc',
    render: (item) => item.billingEntity.bienRfc
  },
  {
    field: 'facturacionPrincipal',
    render: (item) => item[nameMain] ? 'Sí' : 'No'
  },
  {
    field: 'acciones',
    render: (_item, index) => (
      <Flex justify="center" gap={8}>
        <IconEdit onClick={() => onEdit(index)} />
        <IconRemove onClick={() => onRemove(index)} />
      </Flex>
    )
  }
];
