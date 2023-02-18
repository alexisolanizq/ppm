import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const Holder = ({ handleSubmit, onSubmit, control, holders }) => (
  <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-3">
        <Controller
          name="holder"
          control={control}
          render={() => (
            <Autocomplete
            size='small'
              id="combo-box-client"
              options={holders}
              disablePortal
              sx={{ width: 300, marginX: 'auto'}}
              renderInput={(params) => (
                <TextField color="success" {...params} label="* Cliente" />
              )}
            />
          )}
        />
      </div>
    </form>
  </div>
);

export default Holder;
