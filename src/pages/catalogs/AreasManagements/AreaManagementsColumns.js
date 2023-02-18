import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const AreaManagementsColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'management',
    headerName: 'Nombre',
    valueGetter: ({row}) => row.impiAddress?.imadName
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
    field: 'jaiaStatus',
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

export default AreaManagementsColumns;
