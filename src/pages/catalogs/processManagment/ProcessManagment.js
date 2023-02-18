import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import useProcesses from '../../../hooks/catalogs/useProcessesManagment';
import ModalProcessManagment from './ModalProcessManagment';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function ProcessManagment() {
  const {
    modalShow,
    process,
    update,
    areasList,
    procedurePhases,
    phases,
    processesListData,
    tempFolderListData,
    priorities,
    permissions,
    rowsDataGrid,
    alertMessage,
    errors,
    levels,
    getHelperText,
    getErrorValue,
    handleShow,
    setAlertMessage,
    setRowsDataGrid,
    updateModalShow,
    setmodalShow,
    cleanFormulario,
    getProcessesListData,
    handleProcess,
    createProcess,
    editProcess,
    handdleAreaCombo
  } = useProcesses();
  useEffect(() => {
    getProcessesListData();
  }, []);
  const processesColumnsData = [
    {
      field: 'area',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaProcedurePhase.joaName}</p>
      )
    },
    {
      field: 'jobAreaProcedurePhase',
      headerName: 'Fase del trámite',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaProcedurePhase.prphName}</p>
      )
    },
    {
      field: 'prmaName',
      headerName: 'Nombre de la acción',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'priority',
      headerName: 'Prioridad',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>
          <Brightness1Icon
            sx={{
              fontSize: '12px',
              marginRight: 1,
              color:
                (params.row.priority.opcgId === 1 && 'red') ||
                (params.row.priority.opcgId === 2 && 'orange') ||
                (params.row.priority.opcgId === 3 && 'green')
            }}
          />
          {params.row.priority.name}
        </p>
      )
    },
    {
      field: 'tmpRepoFolder',
      headerName: 'Carpeta',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => params.row.tmpRepoFolder.tmrfName
    },
    {
      field: 'permissionLevel',
      headerName: 'Nivel de permiso',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.level.levName}</p>
    },
    {
      field: 'expiration',
      headerName: 'Control de vencimiento',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p> {params.row.prmaExpiration ? 'si' : 'no'}</p>
    },
    {
      field: 'Modificar',
      headerName: 'Modificar',
      editable: false,
      sortable: false,
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
              Acción en la gestión del trámite
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Acción en la gestión del trámite"
        columnsDataGrid={processesColumnsData}
        setRowsDataGrid={setRowsDataGrid}
        rowsDataGrid={rowsDataGrid}
        allData={processesListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        rowId="prmaId"
      />

      <ModalProcessManagment
        update={update}
        modalShow={modalShow}
        process={process}
        areasList={areasList}
        errors={errors}
        tempFolderListData={tempFolderListData}
        priorities={priorities}
        permissions={permissions}
        procedurePhases={procedurePhases}
        phases={phases}
        levels={levels}
        handdleAreaCombo={handdleAreaCombo}
        setmodalShow={setmodalShow}
        cleanFormulario={cleanFormulario}
        handleProcess={handleProcess}
        createProcess={createProcess}
        editProcess={editProcess}
        getHelperText={getHelperText}
        getErrorValue={getErrorValue}
      />
    </div>
  );
}

export default ProcessManagment;
