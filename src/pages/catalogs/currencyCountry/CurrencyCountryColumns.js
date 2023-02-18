import React from 'react';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import IconEdit from '@Component/common/icon/IconEdit';

const CurrencyCountryColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'counId',
    headerName: 'País',
    align: 'center',
    valueGetter: (params) => params.row.country?.counNameSpa
  },
  {
    ...commonProperties,
    field: 'currId',
    headerName: 'Nombre',
    align: 'center',
    valueGetter: (params) =>
      `${params.row.currency?.currAbbreviation} ${params.row.currency?.currName}`
  },
  {
    headerName: 'Estatus',
    type: 'boolean',
    field: 'cocuStatus',
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

export default CurrencyCountryColumns;
