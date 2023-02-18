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

const  MailListSent = ({ mailListSend, handleMail, isLoading }) => {
  const rows = mailListSend.emails;
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
      sx={{
        width: '100%',
        overflow: 'hidden',
        height: '100%',
        boxShadow: 'none'
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center'
          }}
        >
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
              <TableBody sx={{ height: '100%' }}>
                {rows &&
                  rows
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
                              onClick={() => handleMail(true, row)}
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
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}
export default MailListSent;