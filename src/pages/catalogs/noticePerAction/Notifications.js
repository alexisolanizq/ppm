import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useNotifications from '../../../hooks/catalogs/useNoticePerAction';
import ModalNotifications from './ModalNotifications';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function Notifications() {
  const {
    notificationsListData,
    managmentActions,
    modalShow,
    notice,
    update,
    rowsDataGrid,
    procedurePhases,
    areasList,
    alertMessage,
    userList,
    coresponsible,
    handleShow,
    setRowsDataGrid,
    getPhasesListData,
    updateModalShow,
    setmodalShow,
    getNotificationsListData,
    handleNotice,
    createNotice,
    setAlertMessage,
    getCoresponsible
  } = useNotifications();
  useEffect(() => {
    getNotificationsListData();
  }, []);
  const notificationsColumnsData = [
    {
      field: 'area',
      headerName: 'Áreas',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.procedureManagementAction.jobAreaProcedurePhase.joaName}</p>
    },
    {
      field: 'fase',
      headerName: 'Fasé',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.procedureManagementAction.jobAreaProcedurePhase.prphName}</p>
    },
    {
      field: 'accion',
      headerName: 'Acción en la gestión de trámite',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.acnoName}</p>
    },
    {
      field: 'descripcion',
      headerName: 'Descripción  ',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.acnoDescription}</p>
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
      renderCell: ({row}) =>  <IconButton aria-label="Modificar" onClick={() => { updateModalShow(true, true, row) }}><EditIcon /></IconButton>
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
              Notificación por Acción
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Notificación por Acción"
        columnsDataGrid={notificationsColumnsData}
        rowsDataGrid={rowsDataGrid}
        allData={notificationsListData}
        alertMessage={alertMessage}
        handleShow={handleShow}
        setRowsDataGrid={setRowsDataGrid}
        setAlertMessage={setAlertMessage}
        rowId='acnoId'
      />

      <ModalNotifications
        update={update}
        modalShow={modalShow}
        procedurePhases={procedurePhases}
        areasList={areasList}
        notice={notice}
        userList={userList}
        managmentActions={managmentActions}
        coresponsibleList={coresponsible}
        setmodalShow={setmodalShow}
        handleNotice={handleNotice}
        createNotice={createNotice}
        getCoresponsible={getCoresponsible}
        getPhasesListData={getPhasesListData}
      />
    </div>
  );
}

export default Notifications;
