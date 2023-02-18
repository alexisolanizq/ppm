import React, { useCallback } from 'react';
import { TableContainer, Paper } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import TableHeadDocument from './TableHeadDocument';
import TabDocument from './TabDocument';

const TableDocuments = ({
  filesDocuments,
  setFilesDocuments,
  handleDocumentsFormData,
  handleRemoveDocuments
}) => {
  const accept = {
    'image/jpeg': [],
    'image/png': [],
    'text/pdf': ['.pdf', '.pdf']
  };
  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setFilesDocuments((prev) => [...prev, ...acceptedFiles]);
  }, []);
  const onDropRejected = (e) => {
    setFilesDocuments(e)
  };
  const { getRootProps } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept,
    multiple: true
  });
  return (
    <TableContainer component={Paper} className="border-custom-2">
      <TableHeadDocument title="Poder" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument
        title="Cesion de inventores"
        getRootProps={getRootProps}
      />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="Prioridad" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="Dibujos" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="Arte Previo" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="Descripción" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument
        title="Enmendar Reinvindicaciones"
        getRootProps={getRootProps}
      />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument
        title="Listado de secuencias"
        getRootProps={getRootProps}
      />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="IB/304" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="IB/306" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument
        title="Depósito Biólogico"
        getRootProps={getRootProps}
      />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
      <TableHeadDocument title="Carta Orden" getRootProps={getRootProps} />
      <TabDocument
        filesDocuments={filesDocuments}
        handleDocumentsFormData={handleDocumentsFormData}
        handleRemoveDocuments={handleRemoveDocuments}
      />
    </TableContainer>
  );
};
export default TableDocuments;
