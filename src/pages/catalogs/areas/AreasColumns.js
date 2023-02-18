import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties, statusProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const AreasColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'joaName',
    headerName: 'Área',
  },
  {
    ...commonProperties,
    field: 'joaAbbreviation',
    headerName: 'Abreviatura'
  },
  statusProperties('joaStatus'),
  {
    ...commonProperties,
    field: 'actions',
    headerName: 'Modificar',
    maxWidth: 100,
    type: 'actions',
    getActions: ({ row }) => [<IconEdit onClick={() => onEdit(row)} />]
  },
];

export default AreasColumns;
