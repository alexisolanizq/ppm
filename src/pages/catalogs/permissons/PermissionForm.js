import {
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';
import { FIELDS_REQUIRED } from '@Const/const';

const PermissionForm = ({
  UPDATE,
  CREATE,
  control,
  modalShow,
  handleClose,
  handleSubmit,
  permissionLevel,
  handlePermissionLevelSubmit
}) => {
  const { BootstrapDialog, BootstrapDialogTitle, CancelButton, SubmitButton } =
    CustomBootstrapDialog();

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
          {permissionLevel.levId ? UPDATE : CREATE}
        </BootstrapDialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit(handlePermissionLevelSubmit)}>
            <div className="mb-4">
              <p className="text-danger">{FIELDS_REQUIRED}</p>
            </div>

            <div className="d-none">
              <Controller
                name="levId"
                control={control}
                defaultValue={permissionLevel?.levId}
                render={({ field: { onChange, value } }) => (
                  <TextField value={value ?? ''} onChange={onChange} />
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="levName"
                control={control}
                defaultValue={permissionLevel?.levName}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    color="success"
                    size="small"
                    sx={{ width: '100%' }}
                    label="* Nombre del permiso"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                  />
                )}
                rules={{ required: 'Campo obligatorio' }}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="levIdHierarchy"
                control={control}
                defaultValue={permissionLevel?.levIdHierarchy}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    color="success"
                    size="small"
                    sx={{ width: '60%' }}
                    select
                    label="* Tipo de referencia"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </TextField>
                )}
              />
            </div>

            {permissionLevel.levId ? (
              <div className="mb-4">
                <Controller
                  name="levStatus"
                  control={control}
                  defaultValue={() => !!permissionLevel?.status}
                  render={({ field: { onChange, value } }) => (
                    <FormControl sx={{ minWidth: 80 }}>
                      <InputLabel
                        color="success"
                        id="demo-simple-select-autowidth-label"
                      >
                        Estado
                      </InputLabel>
                      <Select
                        color="success"
                        size="small"
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={value}
                        onChange={onChange}
                        autoWidth
                        label="Estado"
                      >
                        <MenuItem value={false}>Inactivo</MenuItem>
                        <MenuItem value>Activo</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </div>
            ) : null}

            <div className="d-flex justify-content-between">
              <CancelButton onClick={handleClose}>Cancelar</CancelButton>
              <SubmitButton type="submit">Guardar</SubmitButton>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default PermissionForm;
