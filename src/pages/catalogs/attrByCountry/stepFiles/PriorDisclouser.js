import React from 'react';
import { Controller } from 'react-hook-form';
import { MenuItem, Stack, TextField, Typography } from '@mui/material';
import { CONFIRMATION, DAYS, FIELDS_REQUIRED, MONTHS, NEGATIVE, YEARS } from '@Const/const';
import { PRIOR_DISCLOUSER, PRIOR_DISCLOUSER_QUESTION_A, PRIOR_DISCLOUSER_QUESTION_B } from '@Const/catalogs';

const PriorDisclouser = ({ AntSwitch, control, watch }) => {
  const watcher = watch('priorDisc');

  return (
    <div className="my-3">
      <h3 className="fw-bold fs-6">{ PRIOR_DISCLOUSER }</h3>
      <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>
      <div className="mb-4">
        <div>
          <p className="green-color mb-2">
            {PRIOR_DISCLOUSER_QUESTION_A}
          </p>
          <Stack direction="row" spacing={1} alignItems="center">
            <Controller
              name="priorDisc"
              control={control}
              defaultValue={false}
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <>
                  <Typography>{NEGATIVE}</Typography>
                  <AntSwitch
                    inputProps={{ 'aria-label': 'ant design' }}
                    checked={value ?? false}
                    onChange={onChange}
                    helperText={error ? error.message : null}
                  />
                  <Typography>{CONFIRMATION}</Typography>
                </>
              )}
            />
          </Stack>
        </div>
        {watcher ? (
          <div className="mt-3">
            <p className="green-color mb-2">
              {PRIOR_DISCLOUSER_QUESTION_B}
            </p>
            <div className="d-flex flex-column flex-md-row">
              <Controller
                name="priorDiscCase1"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '20%' }}
                    size="small"
                    label="Tiempo"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
              <Controller
                name="priorDiscCase2"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '95px', marginLeft: '1.8rem' }}
                    select
                    size="small"
                    label="Lapso"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={1}> {DAYS} </MenuItem>
                    <MenuItem value={2}> {MONTHS} </MenuItem>
                    <MenuItem value={3}> {YEARS} </MenuItem>
                  </TextField>
                )}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PriorDisclouser;
