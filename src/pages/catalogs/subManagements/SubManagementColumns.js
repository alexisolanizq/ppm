import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const SubManagementColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'imsuName',
    headerName: 'Subdirección',
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'imsuStatus',
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

export default SubManagementColumns;
