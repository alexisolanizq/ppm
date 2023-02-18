import { ANNUITIES, ANNUITIE_QUESTION_B, ANNUITIE_QUESTION_A, ANNUITIE_QUESTION_C, ANNUITIE_QUESTION_D } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_REQUIRED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';
import { Stack, TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

const Annuities = ({ AntSwitch, control }) => (
    <div className="my-3">
      <h3 className="fw-bold fs-6">{ANNUITIES}</h3>
      <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

      <div className="mb-4">
        <p className="green-color mb-2">
          {ANNUITIE_QUESTION_A}
        </p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="AnnuatiesCase1"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <>
                <p className="text-muted">{NEGATIVE}</p>
                <AntSwitch
                  color="success"
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  id="AnnuatiesCase1"
                />
                <p className="text-muted">{CONFIRMATION}</p>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <Controller
          name="AnnuatiesCase2"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label htmlFor="annuitiecase2" className="mb-2 primary-green">
                {ANNUITIE_QUESTION_B}
              </label>
              <TextField
                id="annuitiecase2"
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
        <p className="green-color mb-2">
          {ANNUITIE_QUESTION_C}
        </p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="AnnuatiesCase3"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <>
                <p className="text-muted">{NEGATIVE}</p>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  id="AnnuatiesCase3"
                />
                <p className="text-muted">{CONFIRMATION}</p>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <Controller
          name="AnnuatiesCase4"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label htmlFor='AnnuatiesCase4' className="mb-2 primary-green">
                {ANNUITIE_QUESTION_D}
              </label>
              <TextField
                id="AnnuatiesCase4"
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

export default Annuities