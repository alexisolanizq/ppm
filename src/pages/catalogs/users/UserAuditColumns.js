import { commonProperties } from "@Component/common/table/TableDataGrid"
import { formatDate, formatHour } from "@Utils/date"

const UserAuditColumns = [
  {
    ...commonProperties,
    field: 'alogActionDescription',
    headerName: 'Acción',
  },
  {
    ...commonProperties,
    field: 'alogCreationDate',
    headerName: 'Fecha',
    type: 'date',
    maxWidth: 100,
    valueFormatter: ({ value }) => formatDate(value)
  },
  {
    ...commonProperties,
    field: 'hour',
    headerName: 'Hora',
    sortable: false,
    filterable: false,
    maxWidth: 100,
    valueGetter: ({ row }) => formatHour(row.alogCreationDate)
  },
]

export default UserAuditColumns