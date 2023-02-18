import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useSubLabels from '../../../hooks/catalogs/useSubLabels';
import ModalSubLabels from './ModalSubLabels';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function SubLabels() {
  const {
    errors,
    rowsDataGrid,
    subLabelsListData,
    modalShow,
    subLabel,
    update,
    subtagTypes,
    areasList,
    countriesList,
    referenceTypes,
    alertMessage,
    setRowsDataGrid,
    setAlertMessage,
    handleShow,
    updateModalShow,
    setmodalShow,
    getSubLabelsListData,
    handleSubLabel,
    createSubLabel,
    editSubLabel,
    getHelperText,
    getErrorValue
  } = useSubLabels();
  useEffect(() => {
    getSubLabelsListData();
  }, []);
  const subLabelsColumnsData = [
    {
      field: 'name',
      headerName: 'Nombre de la subetiqueta',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.sutaName}</p>
    },
    {
      field: 'subtagType',
      headerName: 'Tipo de subetiqueta',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.subtagType.name}</p>
    },
    {
      field: 'jobArea',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.jobArea.joaName}</p>
    },
    {
      field: 'jobAreaReferenceType',
      headerName: 'Referencia',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaReferenceType.referenceTypeName}</p>
      )
    },
    {
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
              Lista de subetiquetas del Evirtual
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Subetiquetas del Evirtual"
        columnsDataGrid={subLabelsColumnsData}
        setRowsDataGrid={setRowsDataGrid}
        rowsDataGrid={rowsDataGrid}
        allData={subLabelsListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        rowId="sutaId"
      />

      <ModalSubLabels
        errors={errors}
        update={update}
        modalShow={modalShow}
        subtagTypes={subtagTypes}
        subLabel={subLabel}
        areasList={areasList}
        countriesList={countriesList}
        referenceTypes={referenceTypes}
        setmodalShow={setmodalShow}
        handleSubLabel={handleSubLabel}
        createSubLabel={createSubLabel}
        editSubLabel={editSubLabel}
        getHelperText={getHelperText}
        getErrorValue={getErrorValue}
      />
    </div>
  );
}

export default SubLabels;
