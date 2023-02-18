import React from 'react';
import IconRemove from '../icon/IconRemove';
import { commonProperties } from '../table/TableDataGrid';
import TextError from '../text/TextError';

const renderOrError = ({ value }) =>
  value ?? <TextError message="Campo Requerido" />;
const renderEmpty = ({ value }) =>
  value ?? <span className="text-sm text-primary">Campo vacio</span>;

export const InventorComponentColumns = ({ onRemove }) => [
  {
    ...commonProperties,
    field: 'inveName',
    headerName: 'Inventor',
    renderCell: renderOrError
  },
  {
    ...commonProperties,
    field: 'inveAddress',
    headerName: 'Dirección',
    renderCell: renderEmpty
  },
  {
    ...commonProperties,
    field: 'nationalityName',
    headerName: 'Nacionalidad',
    renderCell: renderEmpty
  },
  {
    ...commonProperties,
    field: 'actions',
    headerName: 'Opciones',
    maxWidth: 100,
    type: 'actions',
    getActions: ({ row }) => [<IconRemove onClick={() => onRemove(row)} />]
  }
];

export default InventorComponentColumns;
