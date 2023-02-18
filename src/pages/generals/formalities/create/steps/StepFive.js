import React from 'react';
import { Grid } from '@mui/material';
import TableDocuments from './TableDocuments';

const StepFive = ({
  filesDocuments,
  setFilesDocuments,
  handleDocumentsFormData,
  handleRemoveDocuments
}) => (
  <Grid container className='mt-3'>
    <TableDocuments
      filesDocuments={filesDocuments}
      setFilesDocuments={setFilesDocuments}
      handleDocumentsFormData={handleDocumentsFormData}
      handleRemoveDocuments={handleRemoveDocuments}
    />
  </Grid>
);

export default StepFive;
