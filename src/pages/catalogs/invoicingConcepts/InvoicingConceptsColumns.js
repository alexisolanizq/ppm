import React from 'react';

import IconEdit from '@Component/common/icon/IconEdit';

import { commonProperties } from '@Component/common/table/TableDataGrid';

const InvoicingConceptsColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'jobArea',
    headerName: 'Area',
    renderCell: ({ row }) => row.jobArea.name
  },
  {
    ...commonProperties,
    field: 'nameSpanish',
    headerName: 'Concepto de facturación'
  },
  {
    ...commonProperties,
    field: 'nameEnglish',
    headerName: 'Concepto de facturación en ingles'
  },
  {
    ...commonProperties,
    field: 'description',
    headerName: 'Descripción'
  },
  {
    ...commonProperties,
    field: 'paymentRight',
    headerName: 'Derecho de pago',
    renderCell: ({ row }) => row.paymentRight.name
  },
  {
    ...commonProperties,
    field: 'multiple',
    headerName: '¿Múltiple?',
    renderCell: ({ row }) => row.multiple ? 'S' : 'N'
  },
  {
    ...commonProperties,
    field: 'article',
    headerName: 'Tipo de artículo',
    renderCell: ({ row }) => row.article.name
  },
  {
    ...commonProperties,
    field: 'feePeso',
    headerName: 'Honorarios MXN'
  },
  {
    ...commonProperties,
    field: 'feeDollar',
    headerName: 'Honorarios USD'
  },
  {
    ...commonProperties,
    field: 'uniqKey',
    headerName: 'Clave única',
    renderCell: ({ row }) => row.uniqKey.name
  },
  {
    ...commonProperties,
    field: 'agent',
    headerName: 'Cliente'
  },
  {
    ...commonProperties,
    field: 'holder',
    headerName: 'Titular'
  },
  {
    ...commonProperties,
    field: 'concept',
    headerName: 'Tipo de concepto',
    renderCell: ({ row }) => row.concept.name
  },
  {
    field: 'status',
    headerName: 'Estatus',
    type: 'boolean',
    hide: true
  },
  {
    ...commonProperties,
    field: 'prepayment',
    headerName: '¿Se puede adelantar?',
    renderCell: ({ row }) => row.prepayment ? 'Si' : 'No'
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

export default InvoicingConceptsColumns;
