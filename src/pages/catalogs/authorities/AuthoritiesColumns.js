import React from 'react';

import IconEdit from '@Component/common/icon/IconEdit';

import { commonProperties } from '@Component/common/table/TableDataGrid';

const AuthoritiesColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'joaName',
    headerName: 'Area'
  },
  {
    ...commonProperties,
    field: 'autName',
    headerName: 'Nombre'
  },
  {
    field: 'autStatus',
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

export default AuthoritiesColumns;
