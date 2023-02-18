import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StripedDataGrid from '@Component/common/stripedDataGrid';

const ProcedureFamily = ({ alertMessage, handleShow, setRowsDataGrid, setAlertMessage, rowsDataGrid, procedureFamilyListData, updateModalShow }) => {
  const ProcedureFamilyColumnsData = [
    {
      field: 'name',
      headerName: 'Nombre',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'direction',
      headerName: 'Direction',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'nationality',
      headerName: 'Nacionalidad',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center'
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
      renderCell: (params) =>  <IconButton aria-label="Modificar" onClick={() => { updateModalShow(true, true, params.row) }}><EditIcon  className="iconGreenToolbar" /></IconButton>
    }
  ];
  return (
    <div className="container-fluid bg-white p-0 my-3">
      <StripedDataGrid
        title="Familia de trámites"
        columnsDataGrid={ProcedureFamilyColumnsData}
        rowsDataGrid={rowsDataGrid}
        allData={procedureFamilyListData}
        alertMessage={alertMessage}
        handleShow={handleShow}
        setRowsDataGrid={setRowsDataGrid}
        setAlertMessage={setAlertMessage}
      />
    </div>
  );
};

export default ProcedureFamily;