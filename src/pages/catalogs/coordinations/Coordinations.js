import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useCoordinations from '../../../hooks/catalogs/useCoordinations';
import ModalCoordinations from './ModalCoordinations';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function Coordinations() {
  const {
    rowsDataGrid,
    errors,
    CoordinationsListData,
    modalShow,
    coordination,
    update,
    managementsList,
    alertMessage,
    areasList,
    subManagementsList,
    setRowsDataGrid,
    updateModalShow,
    setmodalShow,
    getCoordinationsListData,
    handleCoordination,
    createCoordination,
    editCoordination,
    setAlertMessage,
    handleShow,
    getErrorValue,
    getHelperText,
    clearFormulario
  } = useCoordinations();
  useEffect(() => {
    getCoordinationsListData();
  }, []);
  const coordinationsColumnsData = [
    {
      field: 'name',
      headerName: 'Dirección',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.impiSubAddress.impiAddress.imadName}</p>
      )
    },
    {
      field: 'impiSubAddress',
      headerName: 'Subdirección',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.impiSubAddress.imsuName}</p>
    },
    {
      field: 'nameEnglish',
      headerName: 'Coordinación',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.imcoName}</p>
    },
    {
      field: 'area',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.impiSubAddress.impiAddress.jobArea.joaName}</p>
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
          <EditIcon />
        </IconButton>
      )
    }
  ];

  return (
    <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
      <div className="container pt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/catalogos">Catálogos</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Coordinaciones
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Coordinaciones"
        columnsDataGrid={coordinationsColumnsData}
        setRowsDataGrid={setRowsDataGrid}
        rowsDataGrid={rowsDataGrid}
        allData={CoordinationsListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        rowId="imcoId"
      />

      <ModalCoordinations
        errors={errors}
        update={update}
        modalShow={modalShow}
        coordination={coordination}
        managementsList={managementsList}
        subManagementsList={subManagementsList}
        areasList={areasList}
        setmodalShow={setmodalShow}
        handleCoordination={handleCoordination}
        createCoordination={createCoordination}
        editCoordination={editCoordination}
        getErrorValue={getErrorValue}
        getHelperText={getHelperText}
        clearFormulario={clearFormulario}
      />
    </div>
  );
}

export default Coordinations;
