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
import Brightness1Icon from '@mui/icons-material/Brightness1';

const TableClients = ({
  clients,
  clientsData,
  invoicingEntitiesList,
  handleClients,
  removeClients,
  offices,
  addClient
}) => (
  <Grid container sx={{ marginTop: '3rem' }}>
    <TableContainer
      component={Paper}
      className="border-custom-2 position-relative"
    >
      <p className="green-title fs-5 fw-bold m-2 text-center">
        Datos del Cliente
      </p>
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
            Cliente nuevo
          </Button>
        </div>
      </Box>
      <Table className="border-custom-2" aria-label="simple table">
        <TableHead className="border-custom-2">
          <TableRow>
            <TableCell sx={{ width: '20%', textAlign: 'center' }}>
              Cliente
            </TableCell>
            <TableCell sx={{ width: '20%', textAlign: 'center' }}>
              Oficina
            </TableCell>
            <TableCell sx={{ width: '20%', textAlign: 'center' }}>
              Referencia
            </TableCell>
            <TableCell sx={{ width: '20%', textAlign: 'center' }}>
              Estado
            </TableCell>
            <TableCell sx={{ width: '20%', textAlign: 'center' }}>
              Entidad de facturación
            </TableCell>
            <TableCell sx={{ width: '60px' }}>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    * Cliente
                  </InputLabel>
                  <Select
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={row.client}
                    label="* Cliente"
                    onChange={handleClients(index, 'client')}
                  >
                    {clients &&
                      clients.map((item) => (
                        <MenuItem key={item.ageId} value={item.ageId}>
                          {item.ageName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    * Oficina
                  </InputLabel>
                  <Select
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={row.office}
                    label="* Oficina"
                    onChange={handleClients(index, 'office')}
                  >
                    {offices &&
                      offices.map((item) => (
                        <MenuItem key={item.offId} value={item.offId}>
                          {item.offName}
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
                  onChange={handleClients(index, 'reference')}
                />
              </TableCell>
              <TableCell>
                <FormControl variant="standard" className="w-100">
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={row.state}
                    onChange={handleClients(index, 'state')}
                  >
                    <MenuItem value="1">
                      <Brightness1Icon
                        sx={{
                          fontSize: '12px',
                          marginRight: 1,
                          color: 'red'
                        }}
                      />
                      Moroso
                    </MenuItem>
                    <MenuItem value="2">
                      <Brightness1Icon
                        sx={{
                          fontSize: '12px',
                          marginRight: 1,
                          color: 'green'
                        }}
                      />
                      Cumplido
                    </MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    * Entidad de facturación
                  </InputLabel>
                  <Select
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={row.invoicingEntity}
                    label="* Entidad de facturación"
                    onChange={handleClients(index, 'sublabel')}
                  >
                    {invoicingEntitiesList &&
                      invoicingEntitiesList.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="Modificar"
                  onClick={() => {
                    removeClients(index);
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
    <Button onClick={() => addClient()}>
      <AddCircleOutlineIcon /> &nbsp; Agregar recordatorio
    </Button>
  </Grid>
);

export default TableClients;
