import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const ManagementColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'imadName',
    headerName: 'Nombre'
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'imadStatus',
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

export default ManagementColumns;
