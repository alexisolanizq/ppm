
import { PPH_QUESTION_A, PPH_QUESTION_B, PPH_TITLE } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_REQUIRED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';
import { Stack, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const PPH = ({ AntSwitch, control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{PPH_TITLE}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PPH_QUESTION_A}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PPHCase1"
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
        name="PPHCase2"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PPHCase2' className="mb-2 primary-green">
              {PPH_QUESTION_B}
            </label>
            <TextField
              id="PPHCase2"
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

export default PPH;
