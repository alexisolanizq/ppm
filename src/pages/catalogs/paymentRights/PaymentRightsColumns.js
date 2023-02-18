import IconEdit from '@Component/common/icon/IconEdit'
import { commonProperties, statusProperties } from '@Component/common/table/TableDataGrid'
import React from 'react'

const PaymentRightsColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'jobArea',
    headerName: 'Área',
    valueGetter: (params) => params.row.jobArea?.joaName
  },
  {
    ...commonProperties,
    field: 'pariArticleNumber',
    headerName: 'Número de artículo',
  },
  {
    ...commonProperties,
    field: 'pariArticleName',
    headerName: 'Nombre del artículo',
  },
  {
    ...commonProperties,
    field: 'pariPrice',
    headerName: 'Costo',
  },
  {
    ...commonProperties,
    field: 'currency',
    headerName: 'Moneda',
    valueGetter: (params) => params.row.currency?.currName
  },
  {
    ...commonProperties,
    field: 'multipleRecord',
    align: 'center',
    headerName: 'Múltiples registros',
    valueGetter: (params) => params.row.pariMultipleRecord ? 'Si' : 'No'
  },
  {
    ...commonProperties,
    field: 'discount',
    headerName: 'Descuentos',
    valueGetter: (params) => params.row.pariDiscount ? 'Si' : 'No'
  },
  statusProperties('pariStatus'),
  {
    ...commonProperties,
    field: 'actions',
    headerName: 'Modificar',
    maxWidth: 100,
    type: 'actions',
    getActions: ({ row }) => [<IconEdit onClick={() => onEdit(row)} />]
  }
]

export default PaymentRightsColumns