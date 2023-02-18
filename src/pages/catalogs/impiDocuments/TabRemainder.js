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
  Stack,
  FormHelperText,
  FormGroup,
  Typography,
  Switch
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ClearIcon from '@mui/icons-material/Clear';
import moment from 'moment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TabRemainder = ({
  showItems,
  prioritiesData,
  handlePriorities,
  removePriorities,
  addPriorities,
  countries,
  error,
  getHelperText,
  getErrorValue
}) => (
  <Grid container>
    <TableContainer
      component={Paper}
      className="border-custom-2 position-relative"
    >
      <Box sx={{ margin: '0.5rem 1rem' }}>
        <h3>Datos de prioridad</h3>
      </Box>
      <Table className="border-custom-2" aria-label="simple table">
        <TableHead className="border-custom-2">
          <TableRow>
            <TableCell
              sx={{ width: showItems ? '23%' : '35%', textAlign: 'center' }}
            >
              Numero
            </TableCell>
            <TableCell
              sx={{ width: showItems ? '23%' : '35%', textAlign: 'center' }}
            >
              Pais
            </TableCell>
            <TableCell
              sx={{ width: showItems ? '23%' : '35%', textAlign: 'center' }}
            >
              Fecha
            </TableCell>
            {showItems && (
              <>
                <TableCell
                  sx={{
                    width: '18px',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    padding: 0
                  }}
                >
                  Control de prioridad
                </TableCell>
                <TableCell sx={{ width: '23%', textAlign: 'center' }}>
                  Codigo Das
                </TableCell>
              </>
            )}
            <TableCell sx={{ width: '18px', textAlign: 'center' }}>
              Eliminar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prioritiesData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <TextField
                  id="impiDocument-name"
                  label="Numero"
                  variant="outlined"
                  helperText={getHelperText(row.number, 'lklk', '')}
                  error={getErrorValue(row.number)}
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap'
                  }}
                  color="success"
                  value={row.number}
                  onChange={(e) =>
                    handlePriorities(index, 'number', e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <FormControl
                  fullWidth
                  error={getErrorValue(row.country)}
                >
                  <InputLabel id="area-label" color="success">
                    País
                  </InputLabel>
                  <Select
                    varian="filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={row.country}
                    label="País"
                    onChange={(e) =>
                      handlePriorities(index, 'country', e.target.value)
                    }
                  >
                    {countries &&
                      countries.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.nameSpanish}
                        </MenuItem>
                      ))}
                  </Select>
                  {error && row.country === '' ? (
                    <FormHelperText>lklk</FormHelperText>
                  ) : (
                    ''
                  )}
                </FormControl>
              </TableCell>
              <TableCell>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="* Fecha de RI"
                    format="MM/DD/YYYY"
                    value={row.date}
                    onChange={(e) =>
                      handlePriorities(
                        index,
                        'date',
                        moment(e).format('MM-DD-YYYY')
                      )
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={error && row.date === null ? 'lklk' : ''}
                        color="success"
                        error={Boolean(error && row.date === null)}
                      />
                    )}
                  />
                </Stack>
              </TableCell>
              {showItems && (
                <>
                  <TableCell>
                    <FormGroup
                      sx={{
                        margin: '0 0 1rem 5px',
                        display: 'flex',
                        flexDirection: 'row ',
                        width: 'calc(100% - 20px)',
                        alignItems: 'center',
                        lineHeight: 1,
                        height: 'fit-content'
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>No</Typography>
                        <Switch
                          inputProps={{ 'aria-label': 'ant design' }}
                          value={row.priorityCopy}
                          onChange={(e) =>
                            handlePriorities(
                              index,
                              'priorityCopy',
                              e.target.checked
                            )
                          }
                        />
                        <Typography>Sí</Typography>
                      </Stack>
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="impiDocument-name"
                      label="Codigo Das"
                      color="success"
                      variant="outlined"
                      helperText={error && row.codeDas === '' ? 'lklk' : ''}
                      sx={{
                        display: 'flex',
                        flexWrap: 'nowrap'
                      }}
                      error={Boolean(error && row.codeDas === '')}
                      value={row.codeDas}
                      onChange={(e) =>
                        handlePriorities(index, 'codeDas', e.target.value)
                      }
                    />
                  </TableCell>
                </>
              )}
              <TableCell align="center">
                <IconButton
                  aria-label="Modificar"
                  onClick={() => {
                    removePriorities(index);
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
    <Button onClick={() => addPriorities()}>
      <AddCircleOutlineIcon /> &nbsp; Agregar recordatorio
    </Button>
  </Grid>
);

export default TabRemainder;
