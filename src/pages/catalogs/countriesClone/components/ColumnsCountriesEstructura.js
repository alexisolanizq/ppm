import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'

const commonProperties = {
  editable: false,
  sortable: false,
  flex: 1,
  headerAlign: 'center'
};

const ColumnsCountriesEstructura = ({ updateModalShow }) => [
  {
    ...commonProperties,
    field: 'counShortAbbreviation',
    headerName: 'Abreviatura corta',
    align: 'center'
  },
  {
    ...commonProperties,
    field: 'counLargeAbbreviation',
    headerName: 'Abreviatura larga',
    align: 'center'
  },
  {
    ...commonProperties,
    field: 'counNameSpa',
    headerName: 'Nombre del país',
    align: 'center'
  },
  {
    ...commonProperties,
    field: 'counNameEng',
    headerName: 'Nombre del país en inglés',
    align: 'center'
  },
  {
    ...commonProperties,
    maxWidth: 200,
    field: 'edit',
    align: 'center',
    headerName: 'Modificar',
    renderCell: ({ row }) => (
      <IconButton
        aria-label="Modificar"
        onClick={() => {
          updateModalShow(row);
        }}
      >
        <Edit color="success" />
      </IconButton>
    )
  }
];

export default ColumnsCountriesEstructura