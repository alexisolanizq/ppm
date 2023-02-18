import React from 'react';
import Dialog from '@mui/material/Dialog';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';

function ModalRemainderImpiDocuments({
  modalRemainderShow,
  setmodalRemainderShow,
  handleRemainderData,
  createRemainder,
  remainderData,
  addRemainder,
  deleteRemainder
}) {
  return (
    <Dialog
      open={modalRemainderShow}
      onClose={() => setmodalRemainderShow(false)}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="lg"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => setmodalRemainderShow(false)}
      >
        Configuración de recordatorio de oficio
      </BootstrapDialogTitle>
      <Box className="p-4">
        <TableContainer component={Paper} className="border-custom-1">
          <Box className="d-flex justify-content-center position-relative align-items-center">
            <Typography variant="h6" color="inherit" className="py-05">
              Notificación por vencimiento
            </Typography>
            <div className="position-absolute r-0 text-center pr-07">
              <p className="mb-0">vencimiento del oficio:</p>
              <p className="mb-0">2 meses</p>
            </div>
          </Box>
          <Table className="border-custom-2" aria-label="simple table">
            <TableHead className="border-custom-2">
              <TableRow>
                <TableCell>Numero de recordatorio</TableCell>
                <TableCell>*Plazo de recordatorio</TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {remainderData.map((remainder, index) => (
                <TableRow>
                  <TableCell className="w-30">{index + 1}</TableCell>
                  <TableCell className="w-33">
                    <TextField
                      id="impiDocument-name"
                      label="Tiempo"
                      variant="outlined"
                      size="small"
                      className="100%"
                      value={remainder.nameSpanish}
                      onChange={(e) => handleRemainderData('nameSpanish', e)}
                    />
                  </TableCell>
                  <TableCell className="w-33">
                    <FormControl
                      fullWidth
                      size="small"
                      className="d-flex flex-nowrap"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Plazo
                      </InputLabel>
                      <Select
                        size="small"
                        varian="filled"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Plazo"
                        onChange={handleRemainderData(index, 'timeLimit')}
                      >
                        <MenuItem value="dia">Día</MenuItem>
                        <MenuItem value="mes">Mes</MenuItem>
                        <MenuItem value="mes">Año</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  {index > 0 && index + 1 === remainderData.length && (
                    <TableCell align="right" className="w-50">
                      <IconButton
                        aria-label="Modificar"
                        onClick={() => {
                          deleteRemainder(index);
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={() => addRemainder()}>
          <AddCircleOutlineIcon /> &nbsp; Agregar recordatorio
        </Button>
        <Box className="d-flex justify-content-center mt-1">
          <Button
            variant="contained"
            onClick={() => setmodalRemainderShow(false)}
            className="mr-05"
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => createRemainder()}
            className="ml-05"
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default ModalRemainderImpiDocuments;
