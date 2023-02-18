import React, { useState, useEffect } from 'react';

import {
  Box,
  Paper,
  TableRow,
  TableHead,
  TablePagination,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  CircularProgress
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const columns = [
  { id: 'from', label: 'Remitente', minWidth: 170 },
  { id: 'subject', label: 'Asunto', minWidth: 100 },
  {
    id: 'Adjunto',
    label: 'Adjunto',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'date',
    label: 'Fecha',
    minWidth: 170,
    align: 'right'
  }
];

const MailListsFilter = ({ mailFindList, handleMailCompose, isLoading }) => {
  const rows = mailFindList.emails;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    if (rows) setCount(rows.length);
  }, [rows]);
  return (
    <Paper
      className="w-100 h-100"
      sx={{
        width: '100%',
        overflow: 'hidden',
        height: '100%',
        boxShadow: 'none'
      }}
    >
      {isLoading ? (
        <Box className="w-flex justify-content-center align-items-center h-100 w-100">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TableContainer sx={{ maxHeight: 440, boxShadow: 'none' }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{ borderWidth: '0px' }}
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {rows && (
                <TableBody sx={{ height: '100%' }}>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.messageId}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              onClick={() => handleMailCompose(true, row)}
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                              {column.id === 'Adjunto' && <AttachFileIcon />}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          {rows && rows.length > 0 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
          {rows && rows.length === 0 && (
            <Box className="w-flex justify-content-center align-items-center h-100 w-100">
              <p>No se encontró ninguna coincidencia</p>
            </Box>
          )}
        </>
      )}
    </Paper>
  );
};
export default MailListsFilter;
