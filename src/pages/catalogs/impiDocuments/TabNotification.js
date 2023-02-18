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
  TextField,
  Typography
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TabNotification = ({
  notificationData,
  handleNotificationData,
  deleteNotification,
  addNotification
}) => (
  <Grid container>
    <TableContainer component={Paper} className="border-custom-2">
      <Box className="d-flex justify-content-center align-items-center position-relative">
        <Typography variant="h6" color="inherit" className="py-05">
          Notificación por vencimiento
        </Typography>
        <div className="position-absolute r-0 text-center">
          <p className="mb-0">vencimiento del oficio:</p>
          <p className="mb-0">2 meses</p>
        </div>
      </Box>
      <Table className="border-custom-2" aria-label="simple table">
        <TableHead className="border-custom-2">
          <TableRow>
            <TableCell>Numero de recordatorio</TableCell>
            <TableCell>*Plazo de notificación</TableCell>
            <TableCell />
            <TableCell>*Usuario de destino</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {notificationData.map((notification, index) => (
            <TableRow>
              <TableCell className="w-20">{index + 1}</TableCell>
              <TableCell className="w-25">
                <TextField
                  id="impiDocument-name"
                  label="Tiempo"
                  variant="outlined"
                  size="small"
                  className="w-100"
                  value={notification.nameSpanish}
                  onChange={(e) => handleNotificationData('nameSpanish', e)}
                />
              </TableCell>
              <TableCell className="w-25">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Plazo</InputLabel>
                  <Select
                    size="small"
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={notification.timeLimit}
                    label="Plazo"
                    onChange={handleNotificationData(index, 'timeLimit')}
                  >
                    <MenuItem value="dia">Día</MenuItem>
                    <MenuItem value="mes">Mes</MenuItem>
                    <MenuItem value="año">Año</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className="w-25">
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Usuario</InputLabel>
                  <Select
                    size="small"
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={notification.user}
                    label="Usuario"
                    onChange={handleNotificationData(index, 'user')}
                  >
                    <MenuItem value="day">Día</MenuItem>
                    <MenuItem value="month">Mes</MenuItem>
                    <MenuItem value="year">Año</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              {index > 0 && index + 1 === notificationData.length && (
                <TableCell align="right" className="w-50">
                  <IconButton
                    aria-label="Modificar"
                    onClick={() => {
                      deleteNotification(index);
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
    <Button onClick={() => addNotification()}>
      <AddCircleOutlineIcon /> &nbsp; Agregar recordatorio
    </Button>
  </Grid>
);

export default TabNotification;
