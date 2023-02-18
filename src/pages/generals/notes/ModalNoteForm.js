import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Checkbox,
  DialogContent,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import useNotes from '@Hooks/generals/useNotes';
import CustomDialogComponent from '@Component/common/bootstrapDialog/CustomBootstrapDialog';
import { FIELDS_REQUIRED } from '@Const/const';

const ModalNoteForm = ({
  note,
  modalShow,
  handleClose,
  areas,
  handleProcess
}) => {
  const {
    updateNote,
    handleSubmit,
    control,
    submitForm,
    areaName,
    setAreaName,
    // userName,
    setUserName
  } = useNotes();
  const { BootstrapDialog, BootstrapDialogTitle, SubmitButton, CancelButton } =
    CustomDialogComponent();

  const handleChangeNote = (event) => {
    event.preventDefault();
    const {
      target: { value }
    } = event;
    setAreaName(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleUsersNoteChange = (event) => {
    event.preventDefault();
    const {
      target: { value }
    } = event;
    setUserName(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <BootstrapDialog
        open={modalShow}
        onClose={handleClose}
        aria-labelledby=""
      >
        <BootstrapDialogTitle
          className="text-center green-color fw-bold fs-5"
          onClose={handleClose}
        >
          {updateNote ? 'Modificar nota' : 'Crear nota'}
        </BootstrapDialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-4">
              <p className="text-danger">{FIELDS_REQUIRED}</p>
            </div>

            <div className="mb-4 d-flex align-items-center">
              <Controller
                name="noteType"
                control={control}
                defaultValue={note ?? false}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Typography className="green-color me-4">
                      * Tipo de nota
                    </Typography>

                    <Typography className="text-muted text-small">
                      Personalizado
                    </Typography>
                    <Switch
                      checked={value}
                      onChange={onChange}
                      size="small"
                      className="mx-2"
                    />

                    <Typography className="text-muted text-small">
                      Predeterminado
                    </Typography>
                  </>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="name"
                control={control}
                defaultValue={note}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    size="small"
                    className="w-100"
                    select
                    label="* Nombre de la referencia"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={149215}> Divisional </MenuItem>
                    <MenuItem value={1}> Apoderado </MenuItem>
                    <MenuItem value={2}> Pago PPH </MenuItem>
                    <MenuItem value={3}> Pago </MenuItem>
                  </TextField>
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="defaultDescription"
                control={control}
                defaultValue={note}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    size="small"
                    sx={{ width: '65%' }}
                    select
                    label="* Descripción predeterminada"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={5465}> Cobrar cliente pago PPM </MenuItem>
                  </TextField>
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="targetAreas"
                control={control}
                defaultValue={note}
                render={({ field: { onChange } }) => (
                  <FormControl sx={{ width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      * Areas destinatarias
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={areaName}
                      onChange={(e) => {
                        onChange(e);
                        handleChangeNote(e);
                      }}
                      input={<OutlinedInput label="* Areas destinatarias" />}
                      renderValue={(selected) => selected.join(', ')}
                    >
                      {areas.map((area) => (
                        <MenuItem key={area.name} value={area.name}>
                          <Checkbox
                            checked={areaName.indexOf(area.name) > -1}
                          />
                          <ListItemText primary={area.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="users"
                control={control}
                defaultValue={note}
                render={({ field: { onChange } }) => (
                  <FormControl sx={{ width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      * Usuarios
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={areaName}
                      onChange={(e) => {
                        onChange(e);
                        handleUsersNoteChange(e);
                      }}
                      input={<OutlinedInput label="* Usuarios" />}
                      renderValue={(selected) => selected.join(', ')}
                    >
                      {areas.map((area) => (
                        <MenuItem key={area.name} value={area.name}>
                          <Checkbox
                            checked={areaName.indexOf(area.name) > -1}
                          />
                          <ListItemText primary={area.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </div>

            <div className="mb-4 d-flex justify-content-between gap-2">
              <Controller
                name="relationShipEntity"
                control={control}
                defaultValue={note}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    size="small"
                    sx={{ width: '50%' }}
                    select
                    label="* Entidad de relación"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={874}> Cliente / Agente </MenuItem>
                    <MenuItem value={841}> Proveedor </MenuItem>
                    <MenuItem value={568}> Asociado </MenuItem>
                    <MenuItem value={458}> Titular </MenuItem>
                  </TextField>
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
              <Controller
                name="client"
                control={control}
                defaultValue={note}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    size="small"
                    sx={{ width: '50%' }}
                    select
                    label="* Cliente"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={658}> Alejandra Sánchez </MenuItem>
                    <MenuItem value={623}> Alma Rosales </MenuItem>
                  </TextField>
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="relatedHolder"
                control={control}
                defaultValue={note}
                render={({
                  field: { onChange, value },
                  fieldState: { error }
                }) => (
                  <TextField
                    size="small"
                    sx={{ width: '65%' }}
                    select
                    label="* Titular relacionado"
                    value={value ?? ''}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  >
                    <MenuItem value={658}> Juan Pérez </MenuItem>
                    <MenuItem value={623}> Juana Gómez </MenuItem>
                  </TextField>
                )}
                rules={{
                  required: 'Campo obligatorio'
                }}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="PANREF"
                control={control}
                defaultValue={note}
                render={({ field: { onChange } }) => (
                  <FormControl sx={{ width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      * PANREF
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={areaName}
                      onChange={(e) => {
                        onChange(e);
                        handleUsersNoteChange(e);
                      }}
                      input={<OutlinedInput label="* PANREF" />}
                      renderValue={(selected) => selected.join(', ')}
                    >
                      {areas.map((area) => (
                        <MenuItem key={area.name} value={area.name}>
                          <Checkbox
                            checked={areaName.indexOf(area.name) > -1}
                          />
                          <ListItemText primary={area.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </div>

            <div className="mb-4">
              <TextField
                label="* Prioridad"
                sx={{ width: '65%' }}
                select
                size="small"
                value={note && 0 && 1 && 2}
                defaultValue={0}
                onChange={(e) => handleProcess('priority', e.target.value)}
              >
                <MenuItem value={0}>
                  <Brightness1Icon
                    sx={{
                      fontSize: '12px',
                      marginRight: 1,
                      color: 'red'
                    }}
                  />
                  Alta
                </MenuItem>
                <MenuItem value={2}>
                  <Brightness1Icon
                    sx={{
                      fontSize: '12px',
                      marginRight: 1,
                      color: 'orange'
                    }}
                  />
                  Media
                </MenuItem>
                <MenuItem value={1}>
                  <Brightness1Icon
                    sx={{
                      fontSize: '12px',
                      marginRight: 1,
                      color: 'green'
                    }}
                  />
                  Baja
                </MenuItem>
              </TextField>
            </div>

            <div className="d-flex justify-content-evenly">
              <CancelButton onClick={handleClose}>Cancelar</CancelButton>
              <SubmitButton type="submit">Guardar</SubmitButton>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default ModalNoteForm;
