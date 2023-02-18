import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react'

const AreasReferencesColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'joaName',
    headerName: 'Área'
  },
  {
    ...commonProperties,
    field: 'retyName',
    headerName: 'Tipo de referencia',
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'jartStatus',
    hide: true
  },
  {
    ...commonProperties,
    field: 'actions',
    headerName: 'Modificar',
    maxWidth: 100,
    type: 'actions',
    getActions: ({ row }) => [
      <IconEdit onClick={() => onEdit(row)}/>
    ]
  }
];

export default AreasReferencesColumns