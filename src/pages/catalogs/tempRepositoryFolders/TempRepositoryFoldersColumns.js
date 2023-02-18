import React from 'react';

import IconEdit from '@Component/common/icon/IconEdit';

import { commonProperties } from '@Component/common/table/TableDataGrid';

const TempRepositoryFoldersColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'area',
    headerName: 'Area',
    renderCell: ({ row }) => row.jobArea.joaName
  },
  {
    ...commonProperties,
    field: 'tmrfName',
    headerName: 'Nombre'
  },
  {
    field: 'tmrfStatus',
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

export default TempRepositoryFoldersColumns;
