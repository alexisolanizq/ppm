import React from 'react';
import { Dialog } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356)
];

const Modal = ({ modalShow, handleForm, editDivisional }) => (
  <Dialog
    open={modalShow}
    onClose={() => handleForm(false, '')}
    aria-labelledby="customized-dialog-title"
    fullWidth={Boolean(true)}
    maxWidth="md"
    className="paper-custom"
  >
    <BootstrapDialogTitle
      id="customized-dialog-title"
      onClose={() => {
        handleForm(false, '');
      }}
    >
      Lista de referencias divisionales
    </BootstrapDialogTitle>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">PANREF</TableCell>
            <TableCell align="center">Ver trámite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                Divisional 1
              </TableCell>
              <TableCell align="center">
                <EditIcon onClick={() => editDivisional()} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Dialog>
);

export default Modal;
