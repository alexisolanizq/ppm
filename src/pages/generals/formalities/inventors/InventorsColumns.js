import IconEdit from '@Component/common/icon/IconEdit';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import React from 'react';

const InventorsColumns = ({ onEdit }) => [
    {
        ...commonProperties,
        field: 'inveName',
        headerName: 'Nombre'
    },
    {
        ...commonProperties,
        field: 'inveAddress',
        headerName: 'Dirección'
    },
    {
        ...commonProperties,
        field: 'nationalityName',
        headerName: 'Nacionalidad'
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

export default InventorsColumns;
