import React from 'react';
import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';

const AreaManagementSubManagementColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'management',
    headerName: 'Dirección',
    valueGetter: ({ row }) => row.impiAddress?.imadName
  },
  {
    ...commonProperties,
    field: 'impiSubaddress',
    headerName: 'Subdirección',
    valueGetter: ({row}) => row.impiSubaddress?.imsuName
  },
  {
    ...commonProperties,
    field: 'area',
    headerName: 'Área',
    valueGetter: ({ row }) => row.jobArea?.joaName
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'jaiasStatus',
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

export default AreaManagementSubManagementColumns;
