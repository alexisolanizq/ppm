import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Autocomplete,
  DialogContent,
  MenuItem,
  TextField
} from '@mui/material';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';
import { FIELDS_REQUIRED } from '@Const/const';

const NoticeFormModal = ({
  modalNoticeShow,
  handleClose,
  control,
  handleSubmit,
  holderList,
  holderName
  // isLoadingForm,
}) => {
  const { BootstrapDialog, BootstrapDialogTitle, CancelButton, SubmitButton } =
    CustomBootstrapDialog();

  return (
    <div>
      <BootstrapDialog
        open={modalNoticeShow}
        onClose={handleClose}
        sx={{ padding: 0 }}
      >
        <BootstrapDialogTitle
          onClose={handleClose}
          className="text-center green-color fw-bold fs-5"
        >
          Nuevo aviso
        </BootstrapDialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
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
                    label="* Nombre de la referencia"
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
            <div className="mb-4">
              <Controller
                name="holder"
                control={control}
                render={() => (
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={holderList}
                    id="combo-box-holders"
                    sx={{ width: '50%' }}
                    renderInput={(params) => (
                      <TextField
                        color="success"
                        label="* Títular"
                        {...params}
                      />
                    )}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="clients"
                control={control}
                render={() => (
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={holderList}
                    id="combo-box-clients"
                    sx={{ width: '50%' }}
                    renderInput={(params) => (
                      <TextField
                        color="success"
                        label="* Cliente"
                        {...params}
                      />
                    )}
                  />
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="noticeName"
                control={control}
                render={() => (
                  <Autocomplete
                    size="small"
                    disablePortal
                    options={holderName}
                    id="combo-box-notice-name"
                    sx={{ width: '50%' }}
                    renderInput={(params) => (
                      <TextField
                        color="success"
                        label="* Nombre del aviso"
                        {...params}
                      />
                    )}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="responsible"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    color="success"
                    size="small"
                    className="w-50"
                    select
                    label="* Usuario responsable"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={149215}> Divisional </MenuItem>
                    <MenuItem value={1}> Apoderado </MenuItem>
                    <MenuItem value={2}> Pago PPH </MenuItem>
                    <MenuItem value={3}> Pago </MenuItem>
                  </TextField>
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="panref"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    multiline
                    rows={4}
                    color="success"
                    size="small"
                    className="w-100"
                    label="* Descripción del aviso"
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
            <div className="d-flex justify-content-evenly">
              <CancelButton onClick={handleClose}>Cancelar</CancelButton>
              <SubmitButton type="submit">Guardar</SubmitButton>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default NoticeFormModal;
