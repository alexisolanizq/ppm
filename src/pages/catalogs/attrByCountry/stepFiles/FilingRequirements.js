import {
  CESSION_RIGHTS,
  CESSION_RIGHTS_QUESTION_A,
  CESSION_RIGHTS_QUESTION_B,
  CESSION_RIGHTS_QUESTION_C,
  CESSION_RIGHTS_QUESTION_D,
  CESSION_RIGHTS_QUESTION_E,
  CESSION_RIGHTS_QUESTION_F,
  CESSION_RIGHTS_QUESTION_G,
  FILING_REQUIREMENTS,
  FILING_REQUIREMENTS_QUESTION_A,
  FILING_REQUIREMENTS_QUESTION_B,
  LEGALIZATION_DOCUMENTS,
  LEGALIZATION_DOCUMENTS_QUESTION_A,
  LEGALIZATION_DOCUMENTS_QUESTION_B,
  NONE,
  ONLY_CERTIFICATION,
  ONLY_LEGALIZATION,
  POWER_LETTER,
  POWER_LETTER_QUESTION_A,
  POWER_LETTER_QUESTION_B,
  POWER_LETTER_QUESTION_C,
  POWER_LETTER_QUESTION_D,
  POWER_LETTER_QUESTION_E,
  PRIORITY,
  PRIORITY_QUESTION_A,
  PRIORITY_QUESTION_B,
  PRIORITY_QUESTION_C,
  PRIORITY_QUESTION_D,
  PRIORITY_QUESTION_E,
  PRIORITY_QUESTION_F,
  PRIORITY_QUESTION_G,
  SEQUENCES_LIST,
  SEQUENCES_LIST_QUESTION_A,
  SEQUENCES_LIST_QUESTION_B,
  TRADUCTION,
  TRADUCTION_QUESTION_A,
  TRADUCTION_QUESTION_B,
  TRADUCTION_QUESTION_C,
  TRADUCTION_QUESTION_D,
  YES_BOTH
} from '@Const/catalogs';
import {
  CONFIRMATION,
  FIELDS_REQUIRED,
  FIELD_REQUIRED,
  NEGATIVE
} from '@Const/const';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const FilingRequirements = ({ control, AntSwitch }) => (
  <div>
    <div className="my-3">
      <h3 className="fw-bold fs-6">{FILING_REQUIREMENTS}</h3>
      <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>
      <div className="mb-4">
        <div>
          <div className="mb-4">
            <Controller
              name="requirements"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <>
                  <label htmlFor="requirementsA" className="mb-2 primary-green">
                    {FILING_REQUIREMENTS_QUESTION_A}
                  </label>
                  <TextField
                    id="requirementsA"
                    label=" "
                    size="small"
                    className="w-80"
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
              name="requirementsCase1"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <>
                  <label
                    htmlFor="requirementsCase1"
                    className="mb-2 primary-green"
                  >
                    {FILING_REQUIREMENTS_QUESTION_B}
                  </label>
                  <TextField
                    id="requirementsCase1"
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
      </div>
    </div>
    <div className="my-3">
      <h3 className="fw-bold fs-6">{POWER_LETTER}</h3>
      <div className="mb-4 d-flex flex-column">
        <Controller
          name="requirementsCase2"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <FormControl>
              <label htmlFor="requirementsCase2" className="mb-2">
                {POWER_LETTER_QUESTION_A}
              </label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={onChange}
                helperText={error ? error.message : null}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" />}
                  label={YES_BOTH}
                />
                <FormControlLabel
                  value={2}
                  control={<Radio size="small" />}
                  label={ONLY_CERTIFICATION}
                />
                <FormControlLabel
                  value={3}
                  control={<Radio size="small" />}
                  label={ONLY_LEGALIZATION}
                />
                <FormControlLabel
                  value={4}
                  control={<Radio size="small" />}
                  label={NONE}
                />
              </RadioGroup>
            </FormControl>
          )}
          rules={{ required: FIELD_REQUIRED }}
        />
      </div>
    </div>
    <div className="mb-4">
      <p className="green-color mb-2">{POWER_LETTER_QUESTION_B}</p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="requirementsCase3"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <Typography className="text-muted">{NEGATIVE}</Typography>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
                helperText={error ? error.message : null}
              />
              <Typography className="text-muted">{CONFIRMATION}</Typography>
            </>
          )}
        />
      </Stack>
    </div>

    <div className="mb-4">
      <Controller
        name="requirementsCase4"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor="requirementsCase4" className="mb-2 primary-green">
              {POWER_LETTER_QUESTION_C}
            </label>
            <TextField
              id="requirementsCase4"
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
      />
    </div>

    <div className="mb-4">
      <Controller
        name="requirementsCase5"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor="requirementsCase5" className="mb-2 primary-green">
              {POWER_LETTER_QUESTION_D}
            </label>
            <TextField
              id="requirementsCase5"
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
      />
    </div>

    <div className="mb-4">
      <Controller
        name="requirementsCase6"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor="requirementsCase6" className="mb-2 primary-green">
              {POWER_LETTER_QUESTION_E}
            </label>
            <TextField
              id="requirementsCase6"
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
      />
    </div>

    <div className="my-3">
      <h3 className="fw-bold fs-6">{PRIORITY}</h3>

      <div className="mb-4">
        <p className="green-color mb-2">{PRIORITY_QUESTION_A}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase7"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <p className="green-color mb-2">{PRIORITY_QUESTION_B}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase8"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase8"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <p className="green-color mb-2">{PRIORITY_QUESTION_C}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase9"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase9"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase10"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase10"
                className="mb-2 primary-green"
              >
                {PRIORITY_QUESTION_D}
              </label>
              <TextField
                id="requirementsCase10"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase11"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase11"
                className="mb-2 primary-green"
              >
                {PRIORITY_QUESTION_E}
              </label>
              <TextField
                id="requirementsCase11"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase12"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase12"
                className="mb-2 primary-green"
              >
                {PRIORITY_QUESTION_F}
              </label>
              <TextField
                id="requirementsCase12"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase13"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase13"
                className="mb-2 primary-green"
              >
                {PRIORITY_QUESTION_G}
              </label>
              <TextField
                id="requirementsCase13"
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
        />
      </div>
    </div>

    <div className="my-3">
      <h3 className="fw-bold fs-6">{TRADUCTION}</h3>

      <div className="mb-4">
        <p className="green-color mb-2">{TRADUCTION_QUESTION_A}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase14"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase14"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase15"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase15"
                className="mb-2 primary-green"
              >
                {TRADUCTION_QUESTION_B}
              </label>
              <TextField
                id="requirementsCase15"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase16"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase16"
                className="mb-2 primary-green"
              >
                {TRADUCTION_QUESTION_C}
              </label>
              <TextField
                id="requirementsCase16"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase17"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase17"
                className="mb-2 primary-green"
              >
                {TRADUCTION_QUESTION_D}
              </label>
              <TextField
                id="requirementsCase17"
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
        />
      </div>
    </div>

    <div className="my-3">
      <h3 className="fw-bold fs-6">{CESSION_RIGHTS}</h3>

      <div className="mb-4">
        <p className="green-color mb-2">{CESSION_RIGHTS_QUESTION_A}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase18"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase18"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4 d-flex flex-column">
        <Controller
          name="requirementsCase19"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <FormControl>
              <label htmlFor="requirementsCase19" className="mb-2">
                {CESSION_RIGHTS_QUESTION_B}
              </label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                helperText={error ? error.message : null}
                onChange={onChange}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" />}
                  label={YES_BOTH}
                />
                <FormControlLabel
                  value={2}
                  control={<Radio size="small" />}
                  label={ONLY_CERTIFICATION}
                />
                <FormControlLabel
                  value={3}
                  control={<Radio size="small" />}
                  label={ONLY_LEGALIZATION}
                />
                <FormControlLabel
                  value={4}
                  control={<Radio size="small" />}
                  label={NONE}
                />
              </RadioGroup>
            </FormControl>
          )}
          rules={{ required: FIELD_REQUIRED }}
        />
      </div>

      <div className="mb-4">
        <p className="green-color mb-2">{CESSION_RIGHTS_QUESTION_C}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase20"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase20"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase21"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase21"
                className="mb-2 primary-green"
              >
                {CESSION_RIGHTS_QUESTION_D}
              </label>
              <TextField
                id="requirementsCase21"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase22"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase22"
                className="mb-2 primary-green"
              >
                {CESSION_RIGHTS_QUESTION_E}
              </label>
              <TextField
                id="requirementsCase22"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase23"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase23"
                className="mb-2 primary-green"
              >
                {CESSION_RIGHTS_QUESTION_F}
              </label>
              <TextField
                id="requirementsCase23"
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
        />
      </div>

      <div className="mb-4">
        <p className="green-color mb-2">{CESSION_RIGHTS_QUESTION_G}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase24"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase24"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>
    </div>

    <div className="my-3">
      <h3 className="fw-bold fs-6">{LEGALIZATION_DOCUMENTS}</h3>

      <div className="mb-4">
        <Controller
          name="requirementsCase25"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase25"
                className="mb-2 primary-green"
              >
                {LEGALIZATION_DOCUMENTS_QUESTION_A}
              </label>
              <TextField
                id="requirementsCase25"
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
        />
      </div>

      <div className="mb-4">
        <Controller
          name="requirementsCase26"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase26"
                className="mb-2 primary-green"
              >
                {LEGALIZATION_DOCUMENTS_QUESTION_B}
              </label>
              <TextField
                id="requirementsCase26"
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
        />
      </div>
    </div>

    <div className="my-3">
      <h3 className="fw-bold fs-6">{SEQUENCES_LIST}</h3>

      <div className="mb-4">
        <Controller
          name="requirementsCase27"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label
                htmlFor="requirementsCase27"
                className="mb-2 primary-green"
              >
                {SEQUENCES_LIST_QUESTION_A}
              </label>
              <TextField
                id="requirementsCase27"
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
        />
      </div>

      <div className="mb-4">
        <p className="green-color mb-2">{SEQUENCES_LIST_QUESTION_B}</p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="requirementsCase28"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Typography className="text-muted">{NEGATIVE}</Typography>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                  id="requirementsCase28"
                />
                <Typography className="text-muted">{CONFIRMATION}</Typography>
              </>
            )}
          />
        </Stack>
      </div>
    </div>
  </div>
);

export default FilingRequirements;
