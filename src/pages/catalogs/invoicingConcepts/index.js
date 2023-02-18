import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import useInvoicingConcepts from '@Hooks/catalogs/useInvoicingConcepts';

import Spinner from '@Component/common/loader/Spinner';
import StripedDataGrid from '@Component/common/stripedDataGrid';
import InvoicingConceptModal from './InvoicingConceptModal';

const InvoicingConcepts = () => {
  const {
    initialState,
    isLoading,
    isLoadingForm,
    //! List
    isLoadingTable,
    invoicingConceptsDataGrid,
    rowsDataGrid,
    setRowsDataGrid,
    setInvoicingConcept,
    stateSwitchs,
    handleChangePrepayment,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    // //! Create
    onSubmit,
    jobAreas,
    filteredPaymentsRights,
    articleTypes,
    articleTypesEnglish,
    clients,
    holders,
    conceptsTypes,
    stateModalSwitchs,
    handleChangeSwitch,
    selectedAreas,
    handleChangeArea,
    selectedPaymentsRights,
    handleChangePaymentsRights,
    isMultiple,
    selectedArticleType,
    handleChangeArticleType,
    // //! Update
    isUpdate,
    invoicingConceptCurrent,
    getInfoProperty,
    // //! useForm
    register,
    handleSubmit,
    errors
  } = useInvoicingConcepts();

  useEffect(() => {
    initialState();
  }, []);

  //! Data Grid
  const commonProperties = {
    editable: false,
    sortable: false,
    flex: 1,
    minWidth: 100,
    headerAlign: 'center'
  };

  const columnsDataGrid = [
    {
      ...commonProperties,
      field: 'jobAreas',
      headerName: 'Ver Áreas',
      align: 'center',
      filterable: false,
      renderCell: (params) =>
        params.value.length > 1 ? (
          <Tooltip
            arrow
            title={
              <div>
                {params.value.map((jobArea) => (
                  <p key={jobArea.jobArea.joaId}>{jobArea.jobArea.joaName}</p>
                ))}
              </div>
            }
          >
            <div className="green-icon">
              {params.value[0] && params.value[0].jobArea.joaName}
            </div>
          </Tooltip>
        ) : (
          <div>{params.value[0] && params.value[0].jobArea.joaName}</div>
        )
    },
    {
      ...commonProperties,
      field: 'nameSpanish',
      headerName: 'Concepto de facturacion',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'nameEnglish',
      headerName: 'Concepto de facturacion en inglés',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'description',
      headerName: 'Descripción',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'paymentRights',
      headerName: 'Ver derechos de pago',
      align: 'center',
      filterable: false,
      renderCell: (params) =>
        params.value.length > 1 ? (
          <div>
            <Tooltip
              arrow
              title={
                <div>
                  {params.value.map((paymentRight) => (
                    <p key={paymentRight.pariId.pariId}>
                      {paymentRight.pariId.pariArticleName}
                    </p>
                  ))}
                </div>
              }
            >
              <div className="green-icon">
                {params.value[0] && params.value[0].pariId.pariArticleName}
              </div>
            </Tooltip>
          </div>
        ) : (
          <div>{params.value[0] && params.value[0].pariId.pariArticleName}</div>
        )
    },
    {
      ...commonProperties,
      field: 'multiple',
      headerName: '¿Múltiple?',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'article',
      headerName: 'Tipo de artículo',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'feePeso',
      headerName: 'Honorarios MXN',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'feeDollar',
      headerName: 'Honorarios USD',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'uniqKey',
      headerName: 'Clave única',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'agent',
      headerName: 'Cliente',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'holder',
      headerName: 'Titular',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'concept',
      headerName: 'Tipo de concepto',
      align: 'center',
      filterable: false
    },
    {
      ...commonProperties,
      field: 'incoPrepayment',
      headerName: '¿Se puede adelantar?',
      align: 'center',
      filterable: false,
      renderCell: (params) => (
        <Stack direction="row" alignItems="center">
          <Typography>No</Typography>
          <Switch
            checked={stateSwitchs[`prepayment-${params.id}`]}
            onChange={(event) => handleChangePrepayment(event, params.id)}
            name={`prepayment-${params.id}`}
          />
          <Typography>Sí</Typography>
        </Stack>
      )
    },
    {
      ...commonProperties,
      field: 'edit',
      headerName: 'Modificar',
      maxWidth: 100,
      align: 'center',
      filterable: false,
      renderCell: (params) => (
        <Button
          className="EditButton"
          onClick={() => setInvoicingConcept(params.id)}
        >
          <FontAwesomeIcon icon={faPen} className="iconGreenToolbar" />
        </Button>
      )
    }
  ];

  return (
    <>
      {isLoading && <Spinner />}
      <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/catalogos">Catálogos</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Conceptos de facturación
              </li>
            </ol>
          </nav>
          <div className="container-fluid cst-bg-primary p-0 m-0">
            <div className="container">
              <StripedDataGrid
                title="Conceptos de facturación"
                columnsDataGrid={columnsDataGrid}
                setRowsDataGrid={setRowsDataGrid}
                rowsDataGrid={rowsDataGrid}
                allData={invoicingConceptsDataGrid}
                isLoading={isLoadingTable}
                handleShow={handleShow}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
              />
            </div>
          </div>
        </div>
      </div>
      <InvoicingConceptModal
        show={show}
        handleClose={handleClose}
        isLoadingForm={isLoadingForm}
        isUpdate={isUpdate}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        jobAreas={jobAreas}
        filteredPaymentsRights={filteredPaymentsRights}
        articleTypes={articleTypes}
        articleTypesEnglish={articleTypesEnglish}
        clients={clients}
        holders={holders}
        conceptsTypes={conceptsTypes}
        stateModalSwitchs={stateModalSwitchs}
        handleChangeSwitch={handleChangeSwitch}
        selectedAreas={selectedAreas}
        handleChangeArea={handleChangeArea}
        selectedPaymentsRights={selectedPaymentsRights}
        handleChangePaymentsRights={handleChangePaymentsRights}
        isMultiple={isMultiple}
        selectedArticleType={selectedArticleType}
        handleChangeArticleType={handleChangeArticleType}
        invoicingConceptCurrent={invoicingConceptCurrent}
        getInfoProperty={getInfoProperty}
      />
    </>
  );
};

export default InvoicingConcepts;
