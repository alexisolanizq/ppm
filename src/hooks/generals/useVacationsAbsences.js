import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import { CalendarMonth, Edit } from '@mui/icons-material';
import { fetchVacationsAbsences } from '@Redux/generals/vacationsAbsencesSlice';

const useVacationsAbsences = () => {
  const dispatch = useDispatch();
  const [vacationAbsence, setVacationAbsence] = useState({});
  const [vacationAbsences, setVacationAbsences] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isUpdateVacationAbsence, setIsUpdateVacationAbsence] = useState(false);

  const updateModalShow = (modalBool, updateBool, row) => {
    setModalShow(modalBool);
    setIsUpdateVacationAbsence(updateBool);
    if (updateBool) {
      setVacationAbsence(row);
    }
  };

  const getVacationAbsences = async () => {
    try {
      const response = await dispatch(fetchVacationsAbsences());
      setVacationAbsences(response);
    } catch (error) {
      setVacationAbsences([]);
    }
  };

  const getEmployeeRow = (params) => 
  ( 
      params.row && params.row.employee ? `${params.row.employee.name} ${params.row.employee.firstName} ${params.row.employee.lastName}` : ''
  )

  const getVacationsDays = (params) => {
    const date1 = new Date(params.row.startDate)
    const date2 = new Date(params.row.endDate)
    const dateInstance = new Date()
    dateInstance.setDate(date2.getDate() - date1.getDate())
    return dateInstance.getDate()
  } 

  const getRemainingDate = (params) => params.row && params.row.remainingDay

  const getRequestDate = (params) => params.row && params.row.requestDate

  const getEntryDate = (params) => params.row && params.row.entryDate

  const getObservation = (params) => params.row.observation

  const columns = [
    {
      field: 'employee',
      headerName: 'Empleado',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getEmployeeRow
    },
    {
      field: 'area',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'admissionDate',
      headerName: 'Fecha de admisión',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getRequestDate
    },
    {
      field: 'seniority',
      headerName: 'Antiguedad',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'vacations',
      headerName: 'Días que corresponden de vacaciones',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getVacationsDays
    },
    {
      field: 'pendings',
      headerName: 'Días pendientes',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getRemainingDate
    },
    {
      field: 'readmissionDate',
      headerName: 'Fecha de readmisión',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getEntryDate
    },
    {
      field: 'observations',
      headerName: 'Observaciones',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      valueGetter: getObservation
    },
    {
      field: 'calendar',
      headerName: 'Ver calendario',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <IconButton
          aria-label="Modificar"
          onClick={() => updateModalShow(true, false, params.row)}
        >
          <CalendarMonth color="success" />
        </IconButton>
      )
    },
    {
      field: 'Modificar',
      headerName: 'Modificar',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <IconButton
          aria-label="Modificar"
          onClick={() => {
            updateModalShow(true, true, params.row);
          }}
        >
          <Edit color="success" />
        </IconButton>
      )
    }
  ];

  return {
    modalShow,
    vacationAbsence,
    updateModalShow,
    vacationAbsences,
    setVacationAbsences,
    getVacationAbsences,
    isUpdateVacationAbsence,
    columns
  };
};

export default useVacationsAbsences;
