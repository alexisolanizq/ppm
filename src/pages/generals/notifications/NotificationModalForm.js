import { FIELDS_REQUIRED } from '@Const/const';
import { Autocomplete, DialogContent, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const NotificationModalForm = ({ control, showModalForm, handleFormShow }) => {
  const { BootstrapDialog, BootstrapDialogTitle, SubmitButton, CancelButton } =
    CustomBootstrapDialog();

  const responsables = [
    { id: 1, label: 'Erick Ficachi' },
    { id: 2, label: 'Agustin Mnedoza' },
    { id: 3, label: 'Agustin López' }
  ];

  return (
    <BootstrapDialog
      open={showModalForm}
      onClose={() => handleFormShow(false)}
      sx={{ padding: 0 }}
    >
      <BootstrapDialogTitle
        onClose={() => handleFormShow(false)}
        className="text-center green-color fw-bold fs-5"
      >
        Crear notificación manual
      </BootstrapDialogTitle>
      <DialogContent>
        <form>
          <p className="text-danger my-3">{FIELDS_REQUIRED}</p>

          <div className="mb-3">
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
              rules={{ required: 'Campo obligatorio' }}
            />
          </div>
          <div className="mb-3">
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
                  className="w-100"
                  label="* Descripción de la notificación"
                  multiline
                  rows={2}
                  value={value ?? ''}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Campo obligatorio' }}
            />
          </div>
          <div className="mb-3">
            <Controller
              name="responsable"
              control={control}
              render={() => (
                <Autocomplete
                  size="small"
                  disablePortal
                  options={responsables}
                  sx={{ width: '100%' }}
                  id="combo-box-contacts"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="success"
                      label="* Responsable"
                    />
                  )}
                />
              )}
            />
          </div>
          <div className="mb-3">
            <Controller
              name="corresponsable"
              control={control}
              render={() => (
                <Autocomplete
                  size="small"
                  disablePortal
                  options={responsables}
                  sx={{ width: '100%' }}
                  id="combo-box-coresponsables"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="success"
                      label="* Coresponsable"
                    />
                  )}
                />
              )}
            />
          </div>
          <div className="d-flex justify-content-between">
            <CancelButton onClick={() => handleFormShow(false)}>
              Cancelar
            </CancelButton>
            <SubmitButton type="submit">Crear</SubmitButton>
          </div>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default NotificationModalForm;
