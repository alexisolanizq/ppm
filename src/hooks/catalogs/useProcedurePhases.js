/* eslint-disable no-console */
import React, { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchProcedurePhases } from '@Redux/slices/phaseSlice';

const useProcedurePhases = () => {
  const dispatch = useDispatch();
  const [action, setAction] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [procedurePhase, setProcedurePhase] = useState({});
  const [procedurePhases, setProcedurePhases] = useState([]);
  const [updateProcedurePhase, setUpdateProcedurePhase] = useState(false);

  const updateModalShow = (modalBool, updateBool, row) => {
    setModalShow(modalBool);
    setUpdateProcedurePhase(updateBool);
    if (updateBool) {
      setProcedurePhase(row);
    }
  }

  const getProcedurePhases = async () => {
    try {
        const response = await dispatch(fetchProcedurePhases());
        setProcedurePhases(response);
    } catch (error) {
        console.error(`Ocurrió un error.\n${error}`);
        setProcedurePhases([]);
    }
  }

  const columns = [
    {
      field: 'name',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Nombre de la fase',
      width: 300
    },
    {
      field: 'acronym',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Acrónimo de la fase',
      width: 300
    },
    {
      field: 'edit',
      headerAlign: 'center',
      align: 'center',
      headerName: 'Modificar',
      width: 300,
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
    action,
    setAction,
    columns,
    procedurePhase,
    setProcedurePhase,
    procedurePhases,
    setProcedurePhases,
    modalShow,
    setModalShow,
    updateModalShow,
    updateProcedurePhase,
    setUpdateProcedurePhase,
    getProcedurePhases,
  };
};

export default useProcedurePhases;
