import IconEdit from '@Component/common/icon/IconEdit'
import { commonProperties, statusProperties } from '@Component/common/table/TableDataGrid'
import React from 'react'

const CountryLanguagesColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'country',
    headerName: 'País',
    valueGetter: ({row}) => row.country?.counNameSpa
  },
  {
    ...commonProperties,
    field: 'language',
    headerName: 'Nombre',
    valueGetter: ({row}) => row.language?.lanName
  },
  statusProperties(),
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

export default CountryLanguagesColumns