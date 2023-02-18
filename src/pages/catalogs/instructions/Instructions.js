import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useInstructions from '../../../hooks/catalogs/useInstructions';
import ModalInstructions from './ModalInstructions';
import StripedDataGrid from '../../../component/common/stripedDataGrid';

function Instructions() {
  const {
    errors,
    modalShow,
    instruction,
    update,
    rowsDataGrid,
    areasList,
    procedurePhases,
    alertMessage,
    instructionListData,
    instructionsListData,
    paymentsRight,
    ppmDocumentList,
    showArticle,
    setShowArticle,
    getProcedurePhases,
    updateModalShow,
    setAlertMessage,
    handleShow,
    setmodalShow,
    getInstructionsListData,
    setRowsDataGrid,
    handleInstruction,
    createInstruction,
    editInstruction,
    getErrorValue,
    getHelperText
  } = useInstructions();
  useEffect(() => {
    getInstructionsListData();
  }, []);
  const instructionsColumnsData = [
    {
      field: 'abbreviation',
      headerName: 'Área',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaProcedurePhase.jobAreaName}</p>
      )
    },
    {
      field: 'jobAreaProcedurePhase',
      headerName: 'Fase',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <p>{params.row.jobAreaProcedurePhase.procedurePhaseName}</p>
      )
    },
    {
      field: 'nameSpanish',
      headerName: 'Nombre de a instrucción',
      editable: false,
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.intyName}</p>
    },
    {
      field: 'written',
      headerName: 'Escrito',
      editable: false,
      sortable: false,
      flex: 1,
      maxWidth: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => <p>{params.row.ppmdocument.ppmdName}</p>
    },
    {
      field: 'articles',
      headerName: 'Ver articulos de pago',
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
            setShowArticle(params.row.paymentRight);
          }}
        >
          <RemoveRedEyeIcon />
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
              Tipo de instrucciones
            </li>
          </ol>
        </nav>
      </div>
      <StripedDataGrid
        title="Tipo de instrucciones"
        columnsDataGrid={instructionsColumnsData}
        rowsDataGrid={rowsDataGrid}
        allData={instructionListData}
        alertMessage={alertMessage}
        handleShow={handleShow}
        setRowsDataGrid={setRowsDataGrid}
        setAlertMessage={setAlertMessage}
        rowId='intyId'
      />
      <ModalInstructions
        errors={errors}
        update={update}
        modalShow={modalShow}
        instruction={instruction}
        instructionsListData={instructionsListData}
        procedurePhases={procedurePhases}
        areasList={areasList}
        paymentsRight={paymentsRight}
        ppmDocumentList={ppmDocumentList}
        showArticle={showArticle}
        setShowArticle={setShowArticle}
        setmodalShow={setmodalShow}
        getProcedurePhases={getProcedurePhases}
        handleInstruction={handleInstruction}
        createInstruction={createInstruction}
        editInstruction={editInstruction}
        getErrorValue={getErrorValue}
        getHelperText={getHelperText}
      />
    </div>
  );
}

export default Instructions;
