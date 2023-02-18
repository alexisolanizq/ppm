import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StripedDataGrid from '@Component/common/stripedDataGrid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useImpiDocuments from '../../../hooks/catalogs/useImpiDocuments';
import ModalImpiDocuments from './ModalImpiDocuments';
import ModalNotificationsImpiDocuments from './ModalNotificationImpiDocuments';
import ModalRemainderImpiDocuments from './ModalRemainderImpiDocuments';

const ImpiDocuments = () => {
  const {
    impiDocumentsListData,
    modalShow,
    modalNotificationShow,
    update,
    alertMessage,
    areasList,
    rowsDataGrid,
    managmentActions,
    procedurePhases,
    errors,
    tempFolders,
    impiDocument,
    notificationData,
    modalRemainderShow,
    remainderData,
    createNotification,
    editImpiDocument,
    addNotification,
    deleteNotification,
    handleShow,
    setRowsDataGrid,
    setAlertMessage,
    updateModalShow,
    updateModalNotificationShow,
    updateModalRemainderShow,
    setmodalShow,
    getPhasesListData,
    getImpiDocumentsListData,
    handleImpiDocument,
    cleanImpiDocument,
    createImpiDocument,
    setmodalNotificationShow,
    handleNotificationData,
    setmodalRemainderShow,
    handleRemainderData,
    createRemainder,
    addRemainder,
    deleteRemainder,
    getErrorValue,
    getHelperText
  } = useImpiDocuments();
  useEffect(() => {
    getImpiDocumentsListData();
  }, []);
  const impiDocumentsColumnsData = [
    {
      field: 'area',
      headerName: 'Area',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.tmpRepoFolder.jobArea.joaName}</p>
    },
    {
      field: 'fase',
      headerName: 'Fase',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>
          {
            params.row.procedureManagementAction.jobAreaProcedurePhase
              .procedurePhaseName
          }
        </p>
      )
    },
    {
      field: 'processManagementArea',
      headerName: 'Acción en la gestión de trámite',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.procedureManagementAction.prmaName}</p>
    },
    {
      field: 'OfficeName',
      headerName: 'Nombre del oficio',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.imdoType}</p>
    },
    {
      field: 'expirationControl',
      headerName: 'Control de vencimiento',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.imdoExpiration ? 'Si' : 'No'}</p>
    },
    {
      field: 'externalExpiration',
      headerName: 'Vencimiento externo',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.imdoExpirationPeriodSecond ? 'Si' : 'No'}</p>
      )
    },
    {
      field: 'expirationExtension',
      headerName: 'Extensión de vencimiento',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.imdoExpirationPeriodSecond ? 'Si' : 'No'}</p>
      )
    },
    {
      field: 'folder',
      headerName: 'Carpeta',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.tmpRepoFolder.tmrfName}</p>
    },
    {
      field: 'notificationSettings',
      headerName: 'Configuración notificaciones',
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
            updateModalNotificationShow(true, true, params.row);
          }}
        >
          <NotificationsIcon />
        </IconButton>
      )
    },
    {
      field: 'reminderSettings',
      headerName: 'Configuración recordatorios',
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
            updateModalRemainderShow(true, true, params.row);
          }}
        >
          <AccessTimeIcon />
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
              Oficios IMPI
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Oficios IMPI"
        columnsDataGrid={impiDocumentsColumnsData}
        rowsDataGrid={rowsDataGrid}
        allData={impiDocumentsListData}
        alertMessage={alertMessage}
        handleShow={handleShow}
        setRowsDataGrid={setRowsDataGrid}
        setAlertMessage={setAlertMessage}
        rowId='imdoId'
      />

      <ModalImpiDocuments
        update={update}
        modalShow={modalShow}
        areasList={areasList}
        impiDocument={impiDocument}
        procedurePhases={procedurePhases}
        managmentActions={managmentActions}
        errors={errors}
        tempFolders={tempFolders}
        cleanImpiDocument={cleanImpiDocument}
        setmodalShow={setmodalShow}
        handleImpiDocument={handleImpiDocument}
        createImpiDocument={createImpiDocument}
        editImpiDocument={editImpiDocument}
        getPhasesListData={getPhasesListData}
        getErrorValue={getErrorValue}
        getHelperText={getHelperText}
      />
      <ModalNotificationsImpiDocuments
        modalNotificationShow={modalNotificationShow}
        impiDocument={impiDocument}
        createNotification={createNotification}
        notificationData={notificationData}
        addNotification={addNotification}
        deleteNotification={deleteNotification}
        setmodalNotificationShow={setmodalNotificationShow}
        handleNotificationData={handleNotificationData}
      />
      <ModalRemainderImpiDocuments
        modalRemainderShow={modalRemainderShow}
        setmodalRemainderShow={setmodalRemainderShow}
        handleRemainderData={handleRemainderData}
        createRemainder={createRemainder}
        remainderData={remainderData}
        addRemainder={addRemainder}
        deleteRemainder={deleteRemainder}
      />
    </div>
  );
};

export default ImpiDocuments;
