import IconEdit from "@Component/common/icon/IconEdit"
import { commonProperties } from "@Component/common/table/TableDataGrid"
import React from 'react'

const LanguageColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'lanName',
    headerName: 'Nombre',
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'lanStatus',
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
]

export default LanguageColumns