import React from 'react';
import {
  Box,
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TableHeadDocument = ({title, getRootProps}) => (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
      }}
    >
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="w-fit"
      >
        <Button className="green-title fs-5 fw-bold" variant="text">
          <AddIcon />
        </Button>
      </div>
      <p className="green-title fs-5 fw-bold m-2">{title}</p>
    </Box>
  );

export default TableHeadDocument;
