
import { OPPOSITION, OPPOSITION_QUESTION_A, OPPOSITION_QUESTION_B, OPPOSITION_QUESTION_C } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_COMPLETED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';
import { Stack, TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

const Opposition = ({ AntSwitch, control }) => (
    <div className="my-3">
      <h3 className="fw-bold fs-6">{OPPOSITION}</h3>
      <p className="text-danger py-3 text-small">{FIELDS_COMPLETED}</p>
  
      <div className="mb-4">
        <p className="green-color mb-2">
          {OPPOSITION_QUESTION_A}
        </p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="OppositionCase1"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <>
                <p className="text-muted">{NEGATIVE}</p>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                />
                <p className="text-muted">{CONFIRMATION}</p>
              </>
            )}
          />
        </Stack>
      </div>
  
      <div className="mb-4">
        <Controller
          name="OppositionCase2"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label htmlFor='OppositionCase2' className="mb-2 primary-green">
                {OPPOSITION_QUESTION_B}
              </label>
              <TextField
                id="OppositionCase2"
                size="small"
                className="w-80"
                label=" "
                value={value ?? ''}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </>
          )}
          rules={{ required: FIELD_REQUIRED }}
        />
      </div>
  
      <div className="mb-4">
        <Controller
          name="OppositionCase3"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label htmlFor='OppositionCase3' className="mb-2 primary-green">
                {OPPOSITION_QUESTION_C}
              </label>
              <TextField
                id="OppositionCase3"
                size="small"
                className="w-80"
                label=" "
                value={value ?? ''}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </>
          )}
          rules={{ required: FIELD_REQUIRED }}
        />
      </div>
    </div>
  );

export default Opposition