import React from 'react';

import IconEdit from '@Component/common/icon/IconEdit';

import { commonProperties } from '@Component/common/table/TableDataGrid';

const BanksColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'ppbaName',
    headerName: 'Nombre'
  },
  {
    ...commonProperties,
    field: 'ppbaAbbreviation',
    headerName: 'Abreviatura'
  },
  {
    field: 'ppbaStatus',
    headerName: 'Estatus',
    type: 'boolean',
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

export default BanksColumns;
