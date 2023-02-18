import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import useCustomerDocuments from '@Hooks/catalogs/useCustomerDocuments';

import StripedDataGrid from '@Component/common/stripedDataGrid';
import CustomerDocumentModal from './CustomerDocumentModal';

const CustomerDocuments = () => {
  const {
    initialState,
    //! List
    isLoadingTable,
    customerDocumentsDataGrid,
    rowsDataGrid,
    setRowsDataGrid,
    setCustomerDocument,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    jobAreas,
    procedurePhases,
    chargeTypes,
    expirationUnits,
    handdleAreaCombo,
    onSubmit,
    //! Update
    isUpdate,
    customerDocumentCurrent,
    //! useForm
    register,
    handleSubmit,
    errors,
    getInfoProperty,
    isLoadingForm
  } = useCustomerDocuments();

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
      filterable: false
    },
    {
      ...commonProperties,
      field: 'phase',
      headerName: 'Fase del trámite',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'name',
      headerName: 'Nombre del documento',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'chargeType',
      headerName: 'Tipo de carga',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'tag',
      headerName: 'Etiqueta',
      align: 'center',
      filterable: false
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
          onClick={() => setCustomerDocument(params.id)}
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
                Documentos cliente
              </li>
            </ol>
          </nav>
          <div className="container-fluid cst-bg-primary p-0 m-0">
            <div className="container">
              <StripedDataGrid
                title="Documentos-cliente por fase"
                columnsDataGrid={columnsDataGrid}
                setRowsDataGrid={setRowsDataGrid}
                rowsDataGrid={rowsDataGrid}
                allData={customerDocumentsDataGrid}
                isLoading={isLoadingTable}
                handleShow={handleShow}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
              />
            </div>
          </div>
        </div>
      </div>

      <CustomerDocumentModal
        isLoadingForm={isLoadingForm}
        isUpdate={isUpdate}
        show={show}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        customerDocumentCurrent={customerDocumentCurrent}
        jobAreas={jobAreas}
        procedurePhases={procedurePhases}
        chargeTypes={chargeTypes}
        expirationUnits={expirationUnits}
        handdleAreaCombo={handdleAreaCombo}
        onSubmit={onSubmit}
        getInfoProperty={getInfoProperty}
      />
    </>
  );
};

export default CustomerDocuments;
