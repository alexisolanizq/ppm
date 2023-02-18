import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useClasses from '../../../hooks/catalogs/useClasses';
import ModalClasses from './ModalClasses';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function Classes() {
  const {
    errors,
    modalShow,
    classe,
    update,
    rowsDataGrid,
    alertMessage,
    classesListData,
    areasList,
    references,
    typeClasses,
    getReferenceTypes,
    setAlertMessage,
    handleShow,
    setRowsDataGrid,
    updateModalShow,
    setmodalShow,
    getClassesListData,
    handleClasse,
    clearFormulario,
    createClasse,
    editClasse,
    getErrorValue,
    getHelperText
  } = useClasses();
  useEffect(() => {
    getClassesListData();
  }, []);
  const classesColumnsData = [
    {
      field: 'area',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaReferenceType.joaName}</p>
      )
    },
    {
      field: 'reference',
      headerName: 'Tipo de referencia',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaReferenceType.retyName}</p>
      )
    },
    {
      field: 'typeClass',
      headerName: 'Tipo de clase',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.ppmClass.classType.cltyName}</p>
    },
    {
      field: 'numClass',
      headerName: 'Número de clase',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.ppmClass.ppclNumber}</p>
    },
    {
      field: 'decription',
      headerName: 'Descripción',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({row}) => <p>{row.ppmClass.ppclDescription}</p>
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
      renderCell: ({row}) => (
        <IconButton
          aria-label="Modificar"
          onClick={() => {
            updateModalShow(true, true, row);
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
              Lista de clases
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Clases"
        columnsDataGrid={classesColumnsData}
        setRowsDataGrid={setRowsDataGrid}
        rowsDataGrid={rowsDataGrid}
        allData={classesListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        rowId='retcId'
      />
      <ModalClasses
        errors={errors}
        update={update}
        modalShow={modalShow}
        classe={classe}
        areasList={areasList}
        references={references}
        typeClasses={typeClasses}
        setmodalShow={setmodalShow}
        getReferenceTypes={getReferenceTypes}
        handleClasse={handleClasse}
        createClasse={createClasse}
        editClasse={editClasse}
        getErrorValue={getErrorValue}
        getHelperText={getHelperText}
        clearFormulario={clearFormulario}
      />
    </div>
  );
}

export default Classes;
