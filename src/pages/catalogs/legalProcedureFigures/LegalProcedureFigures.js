import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import useLegalFigures from '../../../hooks/catalogs/useLegalProcedureFigures';
import ModalLegalFigures from './ModalLegalFigures';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function LegalProcedureFigures() {
  const {
    rowsDataGrid,
    legalFiguresListData,
    referenceTypesList,
    errors,
    modalShow,
    legalFigure,
    update,
    areasList,
    alertMessage,
    legalFiguresList,
    handleShow,
    updateModalShow,
    setRowsDataGrid,
    setmodalShow,
    getLegalFiguresListData,
    handleLegalFigure,
    createLegalFigure,
    updateLegalFigure,
    onChangeFigureLegal,
    setAlertMessage,
    getErrorValue,
    clearFormulario,
    procedureTypesFilter
  } = useLegalFigures();
  useEffect(() => {
    getLegalFiguresListData();
  }, []);
  const legalFiguresColumnsData = [
    {
      field: 'procedureTypeNam',
      headerName: 'Nombre',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',

      renderCell: (params) => <p>{params.row.lefiSpanishName}</p>
    },
    {
      field: 'lefiSpanishName',
      headerName: 'Nombre figura (español)',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'lefiEnglishName',
      headerName: 'Nombre figura (ingles)',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'prtyName',
      headerName: 'Tipo de trámite',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center'
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
              Figuras Legal - tipo de trámite
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Figuras Legal - tipo de trámite"
        columnsDataGrid={legalFiguresColumnsData}
        setRowsDataGrid={setRowsDataGrid}
        rowsDataGrid={rowsDataGrid}
        allData={legalFiguresListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        rowId='lfptId'
      />

      <ModalLegalFigures
        errors={errors}
        update={update}
        modalShow={modalShow}
        legalFigure={legalFigure}
        legalFiguresList={legalFiguresList}
        areasList={areasList}
        procedureTypesFilter={procedureTypesFilter}
        referenceTypesList={referenceTypesList}
        setmodalShow={setmodalShow}
        handleLegalFigure={handleLegalFigure}
        createLegalFigure={createLegalFigure}
        updateLegalFigure={updateLegalFigure}
        onChangeFigureLegal={onChangeFigureLegal}
        getErrorValue={getErrorValue}
        clearFormulario={clearFormulario}
      />
    </div>
  );
}

export default LegalProcedureFigures;
