import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useNotices from '../../../hooks/catalogs/useNoticeName';
import ModalNoticeName from './ModalNoticeName';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function NoticeName() {
  const {
    rowsDataGrid,
    notice,
    update,
    show,
    alertMessage,
    modalShow,
    areasList,
    errors,
    invoiceConcepts,
    userList,
    noticesListData,
    getHelperText,
    getErrorValue,
    clearFormulario,
    setmodalShow,
    setAlertMessage,
    handleShow,
    setRowsDataGrid,
    updateModalShow,
    getNoticesListData,
    handleNotice,
    createNotice,
    editNotice,
    loadingTable
  } = useNotices();
  useEffect(() => {
    getNoticesListData();
  }, []);
  const noticesColumnsData = [
    {
      field: 'area',
      headerName: 'Area',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) =>
        params.row.jobArea ? <p>{params.row.jobArea}</p> : <p>-</p>
    },
    {
      field: 'nonaName',
      headerName: 'Nombre del aviso',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'user',
      headerName: 'Ver usuario responsable',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) =>
        params.row.jobAreaUser ? <p>{params.row.jobAreaUser}</p> : <p>-</p>
    },
    {
      field: 'charge',
      headerName: '¿Detona cobro?',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) =>
        params.row.areaInco ? <p>Si</p> : <p>No</p>
    },
    {
      field: 'areaInco',
      headerName: 'Ver conceptos de facturación',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) =>
        params.row.areaInco ? <p>{params.row.areaInco}</p> : <p>-</p>
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
              Avisos
            </li>
          </ol>
        </nav>
      </div>

      <StripedDataGrid
        title="Avisos"
        columnsDataGrid={noticesColumnsData}
        setRowsDataGrid={setRowsDataGrid}
        rowsDataGrid={rowsDataGrid}
        allData={noticesListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        rowId='nonaId'
        isLoading={loadingTable}
      />
      <ModalNoticeName
        modalShow={modalShow}
        areasList={areasList}
        errors={errors}
        userList={userList}
        invoiceConcepts={invoiceConcepts}
        update={update}
        show={show}
        setmodalShow={setmodalShow}
        clearFormulario={clearFormulario}
        handleShow={handleShow}
        notice={notice}
        handleNotice={handleNotice}
        createNotice={createNotice}
        editNotice={editNotice}
        getHelperText={getHelperText}
        getErrorValue={getErrorValue}
      />
    </div>
  );
}

export default NoticeName;
