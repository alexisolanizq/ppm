import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCog } from '@fortawesome/free-solid-svg-icons';

import { getGridSingleSelectOperators } from '@mui/x-data-grid';

import usePPMDocuments from '@Hooks/catalogs/usePPMDocuments';

import StripedDataGrid from '@Component/common/stripedDataGrid';
import PPMDocumentModal from './PPMDocumentModal';

const PPMDocuments = () => {
  const {
    initialState,
    //! List
    areasList,
    documentsTypeList,
    customersLettersList,
    phasesList,
    actionsDataList,
    isLoading,
    ppmDocumentsDataGrid,
    rowsDataGrid,
    setRowsDataGrid,
    setPPMDocument,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    areas,
    phases,
    actions,
    documentType,
    customerLetterType,
    handdleAreaCombo,
    handdlePhaseCombo,
    onSubmit,
    //! Update
    isUpdate,
    currentPPMDocument,
    onUpdate,
    //! Form
    register,
    handleSubmit,
    errors
  } = usePPMDocuments();

  useEffect(() => {
    initialState();
  }, []);

  //! Data Grid
  const commonProperties = {
    editable: false,
    sortable: false,
    flex: 1,
    headerAlign: 'center'
  };

  const columnsDataGrid = [
    {
      ...commonProperties,
      field: 'area',
      headerName: 'Área',
      align: 'center',
      valueOptions: areasList,
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'phase',
      headerName: 'Fase',
      align: 'center',
      valueOptions: phasesList,
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'action',
      headerName: 'Acción de la gestión de trámite',
      maxWidth: 200,
      align: 'center',
      valueOptions: actionsDataList,
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'documentType',
      headerName: 'Tipo de documento',
      maxWidth: 200,
      align: 'center',
      valueOptions: documentsTypeList,
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'name',
      headerName: 'Nombre del documento',
      maxWidth: 200,
      align: 'center',
      filterable: false,
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'letterType',
      headerName: 'Tipo de carta cliente',
      maxWidth: 200,
      align: 'center',
      valueOptions: customersLettersList,
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'invoice',
      headerName: '¿Con factura?',
      maxWidth: 200,
      align: 'center',
      valueOptions: ['Sí', 'No'],
      filterOperators: getGridSingleSelectOperators().filter(
        (operator) => operator.value === 'is'
      )
    },
    {
      ...commonProperties,
      field: 'machote',
      headerName: 'Configuración de machote',
      maxWidth: 200,
      align: 'center',
      filterable: false,
      renderCell: (params) => (
        <Link to={`/catalogos/machotes/${params.id}`}>
          <Button className="EditButton">
            <FontAwesomeIcon icon={faCog} className="iconGreenToolbar" />
          </Button>
        </Link>
      )
    },
    {
      ...commonProperties,
      field: 'edit',
      headerName: 'Modificar',
      maxWidth: 200,
      align: 'center',
      filterable: false,
      renderCell: (params) => (
        <Button
          className="EditButton"
          onClick={() => setPPMDocument(params.id)}
        >
          <FontAwesomeIcon icon={faPen} className="iconGreenToolbar" />
        </Button>
      )
    }
  ];

  return (
    <>
      <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/catalogos">Catálogos</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Lista de documentos PPM
              </li>
            </ol>
          </nav>
          <div className="container-fluid cst-bg-primary p-0 m-0">
            <div className="container">
              <StripedDataGrid
                title="Documentos PPM"
                columnsDataGrid={columnsDataGrid}
                setRowsDataGrid={setRowsDataGrid}
                rowsDataGrid={rowsDataGrid}
                allData={ppmDocumentsDataGrid}
                isLoading={isLoading}
                handleShow={handleShow}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
              />
            </div>
          </div>
        </div>
      </div>

      <PPMDocumentModal
        isUpdate={isUpdate}
        show={show}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        areas={areas}
        phases={phases}
        actions={actions}
        documentType={documentType}
        customerLetterType={customerLetterType}
        handdleAreaCombo={handdleAreaCombo}
        handdlePhaseCombo={handdlePhaseCombo}
        onSubmit={onSubmit}
        currentPPMDocument={currentPPMDocument}
        onUpdate={onUpdate}
      />
    </>
  );
};

export default PPMDocuments;
