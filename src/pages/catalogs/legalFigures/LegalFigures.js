import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { esES } from '@mui/x-data-grid';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import useLegalFigures from '@Hooks/catalogs/useLegalFigures';
import ModalLegalFigures from './ModalLegalFigures';
import {
  LegalFiguresToolbar,
  LegalFiguresDataGrid
} from './LegalFiguresToolbar';
import { AlertMessageLegalFigures } from './AlertMessageLegalFigures';

const LegalFigures = () => {
  const {
    init,
    legalFiguresListData,
    isModalOpen,
    setIsModalOpen,
    action,
    setAction,
    legalFigure,
    toggleLegalFigure,
    handleLegalFigure,
    addLegalFigure,
    modifyLegalFigure,
    areas,
    referenceTypes,
    legalFiguresListDataFilter,
    filter,
    activeSearch,
    alertMessage,
    setAlertMessage,
    register,
    handleSubmit,
    reset,
    errors,
    setFilter,
    toggleSearchButton,
    onSubmit,
    getErrorValue,
    getInfoProperty,
    handleClose
  } = useLegalFigures();

  useEffect(() => {
    init();
  }, []);

  const legalFiguresColumnsData = [
    {
      field: 'jobArea',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      minWidth: 300,
      renderCell: (params) => (
        <div className="MuiDataGrid-cellContent">
          {params.row.jobAreaReferenceType.jobAreaName}
        </div>
      )
    },
    {
      field: 'referenceTypeName',
      headerName: 'Tipo de referencia',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      minWidth: 150,
      renderCell: (params) => (
        <div className="MuiDataGrid-cellContent">
          {params.row.jobAreaReferenceType.referenceTypeName}
        </div>
      )
    },
    {
      field: 'lefiSpanishName',
      headerName: 'Nombre de la figura legal (español)',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      minWidth: 300
    },
    {
      field: 'lefiEnglishName',
      headerName: 'Nombre de la figura legal (inglés)',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      minWidth: 300
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
        <Button
          className="EditButton"
          onClick={() => {
            reset();
            toggleLegalFigure(params.row);
          }}
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
                Figuras legales
              </li>
            </ol>
          </nav>
          <div className="container-fluid cst-bg-primary p-0 m-0">
            <div className="container">
              {alertMessage ? (
                <AlertMessageLegalFigures
                  alertMessage={alertMessage}
                  setAlertMessage={setAlertMessage}
                />
              ) : null}
              <LegalFiguresDataGrid
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
                autoHeight
                disableColumnMenu
                hideFooter
                hideFooterPagination
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                rows={
                  filter === ''
                    ? legalFiguresListData
                    : legalFiguresListDataFilter
                }
                getRowId={(row) => row.lefiId}
                columns={legalFiguresColumnsData}
                components={{
                  Toolbar: LegalFiguresToolbar
                }}
                componentsProps={{
                  toolbar: {
                    activeSearch,
                    filter,
                    setFilter,
                    setIsModalOpen,
                    setAction,
                    toggleSearchButton,
                    reset
                  }
                }}
                sx={{
                  '.MuiDataGrid-columnSeparator': {
                    display: 'none'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalLegalFigures
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        action={action}
        legalFigure={legalFigure}
        handleLegalFigure={handleLegalFigure}
        addLegalFigure={addLegalFigure}
        modifyLegalFigure={modifyLegalFigure}
        areas={areas}
        referenceTypes={referenceTypes}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        getErrorValue={getErrorValue}
        getInfoProperty={getInfoProperty}
        handleClose={handleClose}
      />
    </>
  );
};

export default LegalFigures;
