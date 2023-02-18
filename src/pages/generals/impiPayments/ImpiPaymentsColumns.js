import IconEdit from '@Component/common/icon/IconEdit';
import IconRemove from '@Component/common/icon/IconRemove';
import { Email, PictureAsPdf } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

const commonProperties = {
  editable: false,
  sortable: false,
  flex: 1,
  minWidth: 150,
  headerAlign: 'center',
  align: 'center',
  filterable: false
};

const iconsProperties = {
  ...commonProperties,
  minWidth: 100
};

const ImpiPaymentsColumns = ({ onSendEmail }) => [
  {
    ...commonProperties,
    field: 'reference',
    headerName: 'PANREF',
    renderCell: ({ row }) => row.procedure.procReference
  },
  {
    ...commonProperties,
    field: 'nosolicitud',
    headerName: 'Número de solicitud',
    renderCell: ({ row }) => row.requestNumber?.renuNumber
  },
  {
    ...commonProperties,
    field: 'agente',
    headerName: 'Agente / Titular',
    minWidth: 250,
    renderCell: ({ row }) =>
      row.invoice
        ? `${row.invoice?.agentDto?.ageName} / ${row.invoice?.holderDto?.holName}`
        : 'S/F'
  },
  {
    ...commonProperties,
    field: 'tipopago',
    headerName: 'Tipo de pago',
    minWidth: 200,
    renderCell: ({ row }) => row.paymentType.name
  },
  {
    ...commonProperties,
    field: 'articulos',
    headerName: 'Artículos a pagar',
    renderCell: ({ row }) => 'pendiente'
  },
  {
    ...commonProperties,
    field: 'montototal',
    headerName: 'Monto total',
    renderCell: ({ row }) => row.invoice ? `$${row.invoice.invoRightTotalAmountPay}` : 'S/M'
  },
  {
    ...commonProperties,
    field: 'tipocambio',
    headerName: 'Tipo de cambio',
    renderCell: ({ row }) => 'pendiente'
  },
  {
    ...commonProperties,
    field: 'fechapago',
    headerName: 'Fecha de pago',
    renderCell: ({ row }) => row.impaPaymentDate
  },
  {
    ...commonProperties,
    field: 'tipooficio',
    headerName: 'Tipo de oficio',
    renderCell: ({ row }) =>
      row.procedureInstruction?.recordedOfficeList ?? 'S/O'
  },
  {
    ...commonProperties,
    field: 'usuariocarrito',
    headerName: 'Usuario de carrito',
    renderCell: ({ row }) => 'pendiente'
  },
  {
    ...commonProperties,
    field: 'notas',
    headerName: 'Notas',
    renderCell: ({ row }) => <input className="form-control" type="text" />
  },
  {
    ...commonProperties,
    field: 'foliofactura',
    headerName: 'Folio de factura',
    renderCell: ({ row }) => row.invoice?.invoFolio ?? 'S/F'
  },
  {
    ...commonProperties,
    field: 'estadopago',
    headerName: 'Estado del pago',
    renderCell: ({ row }) => 'pendiente'
  },
  {
    ...commonProperties,
    field: 'reportecontestacion',
    headerName: 'Reporte de contestación',
    renderCell: ({ row }) => (
      <IconButton aria-label="Reporte de contestación">
        <PictureAsPdf color="primary" />
      </IconButton>
    )
  },
  {
    ...iconsProperties,
    field: 'enviar',
    headerName: 'Enviar',
    renderCell: () => (
      <IconButton aria-label="Modificar" onClick={onSendEmail}>
        <Email color="disabled" />
      </IconButton>
    )
  },
  {
    ...iconsProperties,
    field: 'modificar',
    headerName: 'Modificar',
    renderCell: () => <IconEdit />
  },
  {
    ...iconsProperties,
    field: 'eliminar',
    headerName: 'Eliminar',
    renderCell: () => <IconRemove />
  },
  {
    ...commonProperties,
    field: 'observaciones',
    headerName: 'Observaciones',
    renderCell: ({ row }) => <input type="text" className="form-control" />
  },
  {
    ...commonProperties,
    field: 'nameReponsable',
    headerName: 'Nombre del responsable',
    renderCell: ({ row }) => row.user.usrName
  }
];

export default ImpiPaymentsColumns;
