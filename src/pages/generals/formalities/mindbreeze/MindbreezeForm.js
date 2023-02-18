import { FIELDS_REQUIRED } from '@Const/const';
import {
  Autocomplete,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TextField
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const MindbreezeForm = ({
  clients,
  control,
  handleClose,
  handleSubmit,
  mindbreezeModalShow,
  StyledTableCell,
  StyledTableRow
}) => {
  const {
    BootstrapDialog,
    BootstrapDialogTitle,
    CancelButton,
    SubmitButton,
    AntSwitch
  } = CustomBootstrapDialog();

  return (
    <div>
      <BootstrapDialog
        maxWidth="xl"
        open={mindbreezeModalShow}
        onClose={handleClose}
      >
        <BootstrapDialogTitle
          onClose={handleClose}
          className="text-center green-color fw-bold fs-5"
        >
          Cargar al repositorio
        </BootstrapDialogTitle>
        <div className="container-fluid p-3">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <p className="text-danger mb-3">{FIELDS_REQUIRED}</p>
              <div className="mb-4">
                <Controller
                  name="panref"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      color="success"
                      size="small"
                      className="w-50"
                      label="* PANREF"
                      value={value ?? ''}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{
                    required: 'Campo obligatorio'
                  }}
                />
              </div>
            </div>

            <div className="container">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Archivo</StyledTableCell>
                      <StyledTableCell align="center">
                        Nombre del archivo
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Archivo compartido
                      </StyledTableCell>
                      <StyledTableCell align="center">Cliente</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        documento.pdf
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Controller
                          name="fileName"
                          control={control}
                          render={({
                            field: { onChange, value },
                            fieldState: { error }
                          }) => (
                            <TextField
                              color="success"
                              size="small"
                              className="w-100"
                              label="* Nombre del archivo"
                              value={value ?? ''}
                              onChange={onChange}
                              error={!!error}
                              helperText={error ? error.message : null}
                            />
                          )}
                          rules={{
                            required: 'Campo obligatorio'
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <AntSwitch />
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <div className="mb-4">
                          <Controller
                            name="client"
                            control={control}
                            render={() => (
                              <Autocomplete
                                size="small"
                                disablePortal
                                options={clients}
                                id="combo-box-notice-name"
                                className='w-100'
                                renderInput={(params) => (
                                  <TextField
                                    color="success"
                                    label="* Cliente"
                                    {...params}
                                  />
                                )}
                              />
                            )}
                          />
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="d-flex justify-content-evenly my-3">
              <CancelButton onClick={handleClose}>Cancelar</CancelButton>
              <SubmitButton type="submit">Cargar</SubmitButton>
            </div>
          </form>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default MindbreezeForm;
