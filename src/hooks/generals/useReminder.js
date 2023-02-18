import React, { useState } from 'react';
import { Cancel, Delete, Send, Visibility } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { fetchReminders } from '@Redux/generals/reminders/reminderSlice';

const useReminder = () => {
  const dispatch = useDispatch();
  const [reminders, setReminders] = useState([]);
  const [dateValue, setDateValue] = useState('');

  const getReminders = async () => {
    try {
      const response = await dispatch(fetchReminders());
      setReminders(response);
      return response;
    } catch (error) {
      return [];
    }
  };

  const commonProperties = {
    editable: false,
    sortable: false,
    flex: 1,
    headerAlign: 'center'
  };

  const columns = [
    {
      ...commonProperties,
      field: 'panref',
      headerName: 'PANREF',
      align: 'center'
    },
    {
      ...commonProperties,
      field: 'clientName',
      headerName: 'Nombre del cliente',
      align: 'center'
    },
    {
      ...commonProperties,
      field: 'holderName',
      headerName: 'Nombre del títular',
      align: 'center'
    },
    {
      ...commonProperties,
      field: 'spanishName',
      headerName: 'Nombre del oficio',
      align: 'center',
      valueGetter: (params) => params.row.impiDocument?.imdoType
    },
    {
      ...commonProperties,
      field: 'nameSpanish',
      headerName: 'Título del recordatorio',
      align: 'center',
      valueGetter: (params) => params.row.remNameSpanish
    },
    {
      ...commonProperties,
      field: 'reminderDate',
      headerName: 'Fecha de recordatorio',
      align: 'center',
      renderCell: () => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Custom input"
            value={dateValue}
            onChange={(newValue) => {
              setDateValue(newValue);
            }}
            renderInput={({ InputProps }) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </LocalizationProvider>
      )
    },
    {
      ...commonProperties,
      field: 'email',
      headerName: 'Ver correo',
      align: 'center',
      renderCell: () => (
        <Button size="small">
          <Visibility color="success" />
        </Button>
      )
    },
    {
      ...commonProperties,
      field: 'send',
      headerName: 'Enviar',
      align: 'center',
      renderCell: () => (
        <Button size="small">
          <Send color="success" />
        </Button>
      )
    },
    {
      ...commonProperties,
      field: 'cancel',
      headerName: 'Cancelar',
      align: 'center',
      renderCell: () => (
        <Button size="small">
          <Cancel color="success" />
        </Button>
      )
    },
    {
      ...commonProperties,
      field: 'delete',
      headerName: 'Eliminar',
      align: 'center',
      renderCell: () => (
        <Button size="small">
          <Delete color="success" />
        </Button>
      )
    }
  ];

  return {
    getReminders,
    reminders,
    columns
  };
};

export default useReminder;
