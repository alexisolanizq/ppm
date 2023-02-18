import React from 'react';
import { commonProperties } from '@Component/common/table/TableDataGrid';
import IconEdit from '@Component/common/icon/IconEdit';

const JobAreaProcedurePhasesColumns = ({ onEdit }) => [
  {
    ...commonProperties,
    field: 'joaName',
    align: 'center',
    headerName: 'Área'
  },
  {
    ...commonProperties,
    field: 'prphName',
    align: 'center',
    headerName: 'Nombre de la fase'
  },
  {
    field: 'jappStatus',
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

export default JobAreaProcedurePhasesColumns;
