import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const CorrespondenceColumn = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'lenguage',
    headerName: 'Idioma',
    valueGetter: (params) => params.row.language?.lanName
  },
  {
    ...commonProperties,
    field: 'cotiName',
    headerName: 'Nombre del título de correspondencia',
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'cotiStatus',
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

export default CorrespondenceColumn;
