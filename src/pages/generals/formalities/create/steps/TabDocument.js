import React from 'react';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  TextField,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const TabDocument = ({ filesDocuments, handleDocumentsFormData, handleRemoveDocuments, subLabel }) => (
  <Table className="border-custom-2" aria-label="simple table">
    <TableHead className="border-custom-2">
      <TableRow>
        <TableCell className="w-100 text-center">
          Nombre del archivo
        </TableCell>
        <TableCell sx={{ width: '18px', textAlign: 'center' }}>
          Eliminar
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {filesDocuments.map((row, index) => (
        <TableRow key={row.path}>
          <TableCell>
            <TextField
              id="impiDocument-name"
              label="Nombre del archivo"
              variant="outlined"
              sx={{
                display: 'flex',
                flexWrap: 'nowrap'
              }}
              onChange={handleDocumentsFormData(index, 'nameFile', 'search', subLabel)}
            />
          </TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="Modificar"
              onClick={() => {
                handleRemoveDocuments(index);
              }}
            >
              <ClearIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default TabDocument;
