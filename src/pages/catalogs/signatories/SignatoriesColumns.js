import React from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';

import Icon from '@Component/common/icon/Icon';
import IconEdit from '@Component/common/icon/IconEdit';

import { commonProperties } from '@Component/common/table/TableDataGrid';

const SignatoriesColumns = ({ onShow, onEdit }) => [
  {
    ...commonProperties,
    field: 'area',
    headerName: 'Área',
    renderCell: ({ row }) => row.areaDTO.joaName
  },
  {
    ...commonProperties,
    field: 'signName',
    headerName: 'Nombre del firmante'
  },
  {
    field: 'signStatus',
    headerName: 'Estatus',
    type: 'boolean',
    hide: true
  },
  {
    ...commonProperties,
    field: 'show',
    headerName: 'Ver',
    maxWidth: 100,
    type: 'actions',
    getActions: ({ row }) => [
      <Icon onClick={() => onShow(row)} icon={VisibilityIcon} />
    ]
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

export default SignatoriesColumns;
