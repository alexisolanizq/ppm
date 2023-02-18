import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const PhasesColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'prphName',
    headerName: 'Nombre'
  },
  {
    ...commonProperties,
    field: 'prphAcronym',
    headerName: 'Abreviatura'
  },
  {
    field: 'prphStatus',
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

export default PhasesColumns;
