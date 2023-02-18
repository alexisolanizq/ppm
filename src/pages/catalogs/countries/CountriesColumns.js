import React from 'react';

import IconEdit from '@Component/common/icon/IconEdit';

import { commonProperties } from '@Component/common/table/TableDataGrid';

const CountriesColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'counNameSpa',
    headerName: 'Nombre del país'
  },
  {
    ...commonProperties,
    field: 'counNameEng',
    headerName: 'Nombre del país en inglés'
  },
  {
    ...commonProperties,
    field: 'nationality',
    headerName: 'Nacionalidad',
    renderCell: ({ row }) => row.countryAlpha2.name
  },
  {
    ...commonProperties,
    field: 'shortAbbreviation',
    headerName: 'Abreviatura corta',
    renderCell: ({ row }) => row.countryAlpha2.abbreviation
  },
  {
    ...commonProperties,
    field: 'largeAbbreviation',
    headerName: 'Abreviatura larga',
    renderCell: ({ row }) => row.countryAlpha3.abbreviation
  },
  {
    field: 'counStatus',
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

export default CountriesColumns;
