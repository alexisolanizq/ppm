import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Box,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Grid,
  IconButton,
  TextField
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TableHolders = ({
  holdersList,
  holdersData,
  handleHolders,
  removeHolders,
  addHolder
}) => (
  <Grid container sx={{ marginTop: '3rem' }}>
    <TableContainer
      component={Paper}
      className="border-custom-2 position-relative"
    >
      <p className="green-title fs-5 fw-bold m-2 text-center">Datos del Titular</p>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'relative',
          alignItems: 'center'
        }}
      >
        <div>
          <Button variant="text">
            <PersonAddAlt1Icon sx={{ color: '#005953' }} />
            Titular nuevo
          </Button>
        </div>
      </Box>
      <Table className="border-custom-2" aria-label="simple table">
        <TableHead className="border-custom-2">
          <TableRow>
            <TableCell sx={{ width: '45%', textAlign: 'center' }}>
              Titular
            </TableCell>
            <TableCell sx={{ width: '45%', textAlign: 'center' }}>
              Referencia
            </TableCell>
            <TableCell sx={{ width: '60px' }}>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {holdersData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    * Titular
                  </InputLabel>
                  <Select
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={row.holder}
                    label="* Titular"
                    onChange={handleHolders(index, 'holder')}
                  >
                    {holdersList &&
                      holdersList.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                          {item.firstName}
                          {item.lastName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <TextField
                  id="impiDocument-name"
                  label="Referencia"
                  variant="outlined"
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap'
                  }}
                  value={row.reference}
                  onChange={handleHolders(index, 'reference')}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="Modificar"
                  onClick={() => {
                    removeHolders(index);
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={() => addHolder()}>
      <AddCircleOutlineIcon /> &nbsp; Agregar recordatorio
    </Button>
  </Grid>
);

export default TableHolders;
