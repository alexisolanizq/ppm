import { getAdressText } from '@Utils/address';
import React from 'react'
import Flex from "../flex/Flex";
import IconEdit from "../icon/IconEdit";
import IconRemove from "../icon/IconRemove";
import { commonProperties } from '../table/TableDataGrid';

// eslint-disable-next-line import/prefer-default-export
export const AddressColumns = ({ onEdit, onRemove, nameMain = '' }) => [
  {
    ...commonProperties,
    field: 'direccion',
    headerName: 'Dirección',
    valueGetter: ({row}) => getAdressText(row.address)
  },
  {
    headerName: 'Principal',
    align: 'center',
    valueGetter: ({row}) => row[nameMain] ? 'Sí' : 'No'
  },
  {
    field: 'acciones',
    headerName: 'Acciones',
    renderCell: (props) => {
      const index = props.api.getRowIndex(props.id)
      return <Flex justify="center" gap={8}>
        <IconEdit onClick={() => onEdit(index)} />
        <IconRemove onClick={() => onRemove(index)} />
      </Flex>
    }
  }
];
