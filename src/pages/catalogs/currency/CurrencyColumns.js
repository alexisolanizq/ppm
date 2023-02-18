import React from 'react';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import IconEdit from '@Component/common/icon/IconEdit';

const CurrencyColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'currName',
    headerName: 'Nombre'
  },
  {
    ...commonProperties,
    field: 'currAbbreviation',
    headerName: 'Abreviación'
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'currStatus',
    hide: true
  },
  {
    ...commonProperties,
    field: 'actions',
    headerName: 'Modificar',
    maxWidth: 100,
    type: 'actions',
    getActions: ({ row }) => [<IconEdit onClick={() => onEdit(row)} />]
  }
];

export default CurrencyColumns;
