import React, { useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const Client = ({ handleSubmit, onSubmit, control, clients, offices, watch }) => {
  const { CancelButton, SubmitButton } = CustomBootstrapDialog();

  const watcher = watch('client')

  useEffect(()=> {
    // Rerender with watcher
  }, [watcher])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <Controller
            name="client"
            control={control}
            render={() => (
              <Autocomplete
                size="small"
                disablePortal
                options={clients}
                id="combo-box-client"
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField color="success" {...params} label="* Cliente" />
                )}
              />
            )}
          />
        </div>

        <div className="mb-3">
          <Controller
            name="client"
            control={control}
            render={() => (
              <Autocomplete
                size="small"
                id="combo-box-offices"
                options={offices}
                disablePortal
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField color="success" {...params} label="* Cliente" />
                )}
              />
            )}
          />
        </div>

        <div className="d-flex justify-content-between">
          <CancelButton>Cancelar</CancelButton>
          <SubmitButton type="submit">Guardar</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Client;
