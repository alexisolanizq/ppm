import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const Procedure = ({ control, handleSubmit, procedureModal, handleCloseListTypeModals }) => {
  const { BootstrapDialog, BootstrapDialogTitle, CancelButton, SubmitButton } =
    CustomBootstrapDialog();
  const contacts = [
    { id: 1, label: 'Agustin Mendoza' },
    { id: 2, label: 'america@contacto.com' }
  ];
  return (
    <BootstrapDialog
      open={procedureModal}
      onClose={handleCloseListTypeModals}
      aria-labelledby="customized-dialog-title"
      xs={{ width: '95%' }}
    >
      <BootstrapDialogTitle className="text-center fs-5 fw-bold"
      onClose={handleCloseListTypeModals}>
        Trámite
      </BootstrapDialogTitle>
      <form onSubmit={handleSubmit()}>
        <div className="my-4">
          <Controller
            name="contact"
            control={control}
            render={() => (
              <Autocomplete
                size="small"
                disablePortal
                options={contacts}
                sx={{ width: '100%' }}
                id="combo-box-contacts"
                renderInput={(params) => (
                  <TextField {...params} color="success" label="* Contacto" />
                )}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="copy"
            control={control}
            render={() => (
              <Autocomplete
                size="small"
                disablePortal
                options={contacts}
                sx={{ width: '100%' }}
                id="combo-box-contacts-copy"
                renderInput={(params) => (
                  <TextField {...params} color="success" label="* Con copia" />
                )}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="copy-hide"
            control={control}
            render={() => (
              <Autocomplete
                size="small"
                disablePortal
                options={contacts}
                sx={{ width: '50%' }}
                id="combo-box-contacts-copy-hide"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="success"
                    label="* Copia oculta"
                  />
                )}
              />
            )}
          />
        </div>
        <div className="d-flex justify-content-between">
          <CancelButton onClick={handleCloseListTypeModals}>Cancenlar</CancelButton>
          <SubmitButton type="submit">Guardar</SubmitButton>
        </div>
      </form>
    </BootstrapDialog>
  );
};

export default Procedure;
