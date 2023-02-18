import React from 'react';
import { DialogContent, MenuItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const RecipientList = ({
  recipientListModal,
  handleSubmit,
  control,
  handleRecipientListClose,
  areas,
  listType,
  handleProcedureModal,
  handleAnnuityRenewalModal,
  handleAssociatedModal
}) => {
  const { BootstrapDialog, BootstrapDialogTitle, CancelButton, SubmitButton } =
    CustomBootstrapDialog();

  const getModalValue = (e) => {
    switch (e.listTypes) {
      case 1:
        handleProcedureModal();
        break;
      case 2:
        handleAnnuityRenewalModal();
        break;
      case 3:
        handleAssociatedModal();
        break;
      default:
        break;
    }
  };
  return (
    <BootstrapDialog
      open={recipientListModal}
      onClose={handleRecipientListClose}
      aria-labelledby="customized-dialog-title"
      xs={{ width: '80%' }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleRecipientListClose}
      >
        Seleccione la lista de destinatarios
      </BootstrapDialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(getModalValue)}>
          <div className="mb-4 mt-3">
            <Controller
              name="area"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <TextField
                  color="success"
                  size="small"
                  sx={{ width: '100%' }}
                  select
                  label="Seleccione un área"
                  value={value ?? ''}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                >
                  {areas.map(({ name, id }) => (
                    <MenuItem key={id} value={id}>
                      {' '}
                      {name}{' '}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              rules={{ required: 'Campo obligatorio' }}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="listTypes"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <TextField
                  color="success"
                  size="small"
                  sx={{ width: '100%' }}
                  select
                  label="Seleccione un tipo de lista"
                  value={value ?? ''}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                >
                  {listType.map(({ idOptionCatGeneric, description }) => (
                    <MenuItem value={idOptionCatGeneric} key={idOptionCatGeneric} id={description}>
                      {' '}
                      {description}{' '}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              rules={{ required: 'Campo obligatorio' }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <CancelButton onClick={handleRecipientListClose}>
              Cancelar
            </CancelButton>
            <SubmitButton type="submit">Siguiente</SubmitButton>
          </div>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default RecipientList;
