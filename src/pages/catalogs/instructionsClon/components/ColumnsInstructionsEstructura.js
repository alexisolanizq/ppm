import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React from 'react'

const commonProperties = {
  editable: false,
  sortable: false,
  flex: 1,
  headerAlign: 'center'
};

const ColumnsInstructionsEstructura = ({ updateModalShow }) => [
  {
    ...commonProperties,
    field: 'abbreviation',
    headerName: 'Área',
    align: 'center',
    renderCell: ({ row }) => (
      <p>{row.jobAreaProcedurePhase.joaName}</p>
    )
  },
  {
    ...commonProperties,
    field: 'jobAreaProcedurePhase',
    headerName: 'Fase',
    align: 'center',
    renderCell: ({ row }) => (
      <p>{row.jobAreaProcedurePhase.prphName}</p>
    )
  },
  {
    ...commonProperties,
    field: 'nameSpanish',
    headerName: 'Nombre de a instrucción',
    align: 'center',
    renderCell: ({ row }) => <p>{row.intyName}</p>
  },
  {
    ...commonProperties,
    field: 'written',
    headerName: 'Escrito',
    align: 'center',
    renderCell: ({ row }) => <p>{row.ppmdocument.ppmdName}</p>
  },
  {
    ...commonProperties,
    field: 'articles',
    headerName: 'Ver articulos de pago',
    align: 'center',
    renderCell: ({ row }) => (
      <IconButton
        aria-label="Modificar"
        onClick={() => {
          updateModalShow(row);
          // setShowArticle(row.paymentRight);
        }}
      >
        <RemoveRedEyeIcon />
      </IconButton>
    )
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

export default ColumnsInstructionsEstructura