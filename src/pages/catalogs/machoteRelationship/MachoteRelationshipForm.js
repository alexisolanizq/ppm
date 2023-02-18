import React, { useEffect } from 'react';
import {
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';
import { ACTIVE, CANCEL_LABEL, FIELDS_REQUIRED, INACTIVE, SAVE_LABEL, STATUS } from '@Const/const';
import { AREA_FIELD, CREATE_MACHOTE_RELATIONSHIP, PHASE_FIELD, PROCESS_MANAGEMENT_FIELD, UPDATE_MACHOTE_RELATIONSHIP } from '@Const/catalogs';

const MachoteRelationshipForm = ({
  machoteRelationship,
  updateMachoteRelationship,
  modalShow,
  handleMachoteRelationshipSubmit,

  control,
  handleSubmit,
  handleClose,
  
  jobAreas,
  procedurePhases,
  procedureManagementAction,
  documentsType,
}) => {
  const { BootstrapDialog, BootstrapDialogTitle, CancelButton, SubmitButton } =
    CustomBootstrapDialog();

  useEffect(() => {}, [machoteRelationship]);

  return (
    <div>
      <BootstrapDialog
        open={modalShow}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        xs={{ width: '80%' }}
      >
        <BootstrapDialogTitle
          className="text-center green-color fw-bold fs-5"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {updateMachoteRelationship
            ? UPDATE_MACHOTE_RELATIONSHIP
            : CREATE_MACHOTE_RELATIONSHIP}
        </BootstrapDialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit(handleMachoteRelationshipSubmit)}>
            <div className="mb-4">
              <p className="text-danger">{FIELDS_REQUIRED}</p>
            </div>

            <div className="d-none">
              <Controller
                name="mrpdId"
                control={control}
                defaultValue={machoteRelationship?.mrpdId}
                render={({ field: { onChange, value } }) => (
                  <TextField value={value ?? ''} onChange={onChange} />
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="joaId"
                control={control}
                defaultValue={
                  machoteRelationship.machoteRelationship
                    ?.procedureManagementAction?.jobAreaProcedurePhase?.joaId
                }
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '50%' }}
                    size="small"
                    color="success"
                    select
                    label={AREA_FIELD}
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    {jobAreas.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {' '}
                        {option.name}{' '}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="prphId"
                control={control}
                defaultValue={
                  machoteRelationship.machoteRelationship
                    ?.procedureManagementAction?.jobAreaProcedurePhase?.prphId
                }
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '50%' }}
                    size="small"
                    color="success"
                    select
                    label={PHASE_FIELD}
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    {procedurePhases.map((option) => (
                      <MenuItem
                        key={option.prphId}
                        value={option.prphId}
                        id={option.prphId}
                      >
                        {' '}
                        {option.prphName}{' '}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="prmaId"
                control={control}
                defaultValue={
                  machoteRelationship.machoteRelationship
                    ?.procedureManagementAction?.prmaId
                }
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    size="small"
                    color="success"
                    select
                    label={PROCESS_MANAGEMENT_FIELD}
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    {procedureManagementAction.map((option) => (
                      <MenuItem
                        id={option.prmaId}
                        key={option.prmaId}
                        value={option.prmaId}
                      >
                        {' '}
                        {option.prmaName}{' '}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="tydoId"
                control={control}
                defaultValue={
                  machoteRelationship.ppmDocument
                    ?.typeDocument?.tydoId
                }
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '70%' }}
                    size="small"
                    color="success"
                    select
                    label="* Tipo de documento"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    {documentsType.map((docType) => (
                      <MenuItem key={docType.tydoId} value={docType.tydoId}>
                        {docType.tydoName}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>

            {machoteRelationship.documentType ? (
              <div className="mb-4">
                <Controller
                  name="documentType"
                  control={control}
                  defaultValue={() =>
                    machoteRelationship && machoteRelationship.documentType
                      ? machoteRelationship.documentType
                      : ''
                  }
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      sx={{ width: '70%' }}
                      select
                      label="* Tipo de carta cliente"
                      value={value ?? ''}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    >
                      <MenuItem value={1}>Carta cliente</MenuItem>
                      <MenuItem value={2}>Carta asociado</MenuItem>
                      <MenuItem value={3}>Escrito</MenuItem>
                      <MenuItem value={4}>Reporte</MenuItem>
                    </TextField>
                  )}
                />
              </div>
            ) : (
              ''
            )}

            <div className="mb-4">
              <Controller
                name="RAO"
                control={control}
                defaultValue={machoteRelationship?.documentType}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    sx={{ width: '70%' }}
                    size="small"
                    color="success"
                    select
                    label="* Nombre del RAO"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={1}>Cliente RAO de forma</MenuItem>
                  </TextField>
                )}
              />
            </div>

            {machoteRelationship.mrpdId ? (
              <div className="mb-4">
                <Controller
                  name="mareStatus"
                  control={control}
                  defaultValue={() =>
                    machoteRelationship.machoteRelationship?.mareStatus
                  }
                  render={({ field: { onChange, value } }) => (
                    <FormControl sx={{ minWidth: 80 }}>
                      <InputLabel
                        size="small"
                        color="success"
                        id="demo-simple-select-autowidth-label"
                      >
                        {STATUS}
                      </InputLabel>
                      <Select
                        size="small"
                        color="success"
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={value ? 1 : 0}
                        onChange={onChange}
                        autoWidth
                        label={STATUS}
                      >
                        <MenuItem value={0}>{INACTIVE}</MenuItem>
                        <MenuItem value={1}>{ACTIVE}</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </div>
            ) : null}

            <div className="d-flex justify-content-between">
              <CancelButton onClick={handleClose}>{CANCEL_LABEL}</CancelButton>
              <SubmitButton type="submit">{SAVE_LABEL}</SubmitButton>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default MachoteRelationshipForm;
