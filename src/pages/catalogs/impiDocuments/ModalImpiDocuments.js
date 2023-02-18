import React from 'react';
import {
  InputLabel,
  FormGroup,
  FormHelperText,
  Typography,
  Stack,
  MenuItem,
  Switch,
  FormControl,
  FormLabel,
  Select,
  TextField,
  Dialog,
  Button,
  Box
} from '@mui/material';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';
import { FIELDS_REQUIRED } from '@Const/const';

const ModalImpiDocuments = ({
  errors,
  modalShow,
  setmodalShow,
  impiDocument,
  handleImpiDocument,
  createImpiDocument,
  editImpiDocument,
  update,
  procedurePhases,
  tempFolders,
  getPhasesListData,
  managmentActions,
  cleanImpiDocument,
  areasList,
  getErrorValue,
  getHelperText
}) => {
  const {
    jobArea,
    procedurePhase,
    gestion,
    name,
    acronym,
    time,
    lapse,
    businessDay,
    tmpFolder,
    status
  } = impiDocument;
  return (
    <Dialog
      open={modalShow}
      onClose={() => {
        setmodalShow(false);
        cleanImpiDocument();
      }}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="md"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => {
          setmodalShow(false);
          cleanImpiDocument();
        }}
      >
        {update ? 'Modificar ' : 'Dar alta de '}oficios IMPI
      </BootstrapDialogTitle>
      <Box className="p-4">
        <FormLabel className="text-danger mb-4">{FIELDS_REQUIRED}</FormLabel>
        <FormControl
          fullWidth
          className="w-50 d-flex flex-nowrap mb-3"
          error={getErrorValue(jobArea)}
        >
          <InputLabel id="area-label" color="success">
            *Área
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jobArea}
            label="*Área"
            onChange={(e) => {
              handleImpiDocument('jobArea', e.target.value);
              getPhasesListData(e.target.value);
            }}
          >
            {areasList &&
              areasList.map((area) => (
                <MenuItem key={`jobArea${area.joaId}`} value={area.joaId}>
                  {area.joaName}
                </MenuItem>
              ))}
          </Select>
          {errors && jobArea === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl
          fullWidth
          className="w-50 mb-3"
          error={getErrorValue(procedurePhase)}
        >
          <InputLabel id="area-label" color="success">
            *Fase
          </InputLabel>
          <Select
            color="success"
            disabled={Boolean(jobArea === '' && !errors)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={procedurePhase}
            label="*Fase "
            onChange={(e) => {
              handleImpiDocument('procedurePhase', e.target.value);
            }}
          >
            {procedurePhases &&
              procedurePhases.map((phase) => (
                <MenuItem
                  key={`procedurePhase${phase.prphId}`}
                  value={phase.prphId}
                >
                  {phase.prphName}
                </MenuItem>
              ))}
          </Select>
          {errors && procedurePhase === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl fullWidth className="mb-3" error={getErrorValue(gestion)}>
          <InputLabel id="area-label" color="success">
            *Acción en la gestion del trámite
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gestion}
            label="Acción en la gestion del trámite"
            onChange={(e) => handleImpiDocument('gestion', e.target.value)}
          >
            {managmentActions &&
              managmentActions.map((management) => (
                <MenuItem
                  key={`gestion${management.prmaId}`}
                  value={management.prmaId}
                >
                  {management.prmaName}
                </MenuItem>
              ))}
            <Button className="d-flex ">
              <span>Registrar nueva accion</span>
            </Button>
          </Select>
          {errors && gestion === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <TextField
          id="notice-fase"
          label="*Nombre del oficio"
          color="success"
          variant="outlined"
          helperText={getHelperText(name, 'lklk', '')}
          className="mb-3 w-100 mr-05"
          error={getErrorValue(name)}
          value={name}
          onChange={(e) => handleImpiDocument('name', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="*Acronimo"
          color="success"
          variant="outlined"
          helperText={getHelperText(acronym, 'lklk', '')}
          className="mb-3 w-100 mr-05"
          error={getErrorValue(acronym)}
          value={acronym}
          onChange={(e) => handleImpiDocument('acronym', e.target.value)}
        />
        <h4>Vencimiento externo</h4>
        <Box className=" d-flex">
          <TextField
            id="notice-fase"
            label="*Tiempo"
            color="success"
            variant="outlined"
            helperText={getHelperText(time, 'lklk', '')}
            className="mb-3 w-100 mr-05"
            error={getErrorValue(time)}
            value={time}
            onChange={(e) => handleImpiDocument('time', e.target.value)}
          />
          <FormControl
            fullWidth
            className="mb-3 w-100 mr-05"
            error={getErrorValue(lapse)}
          >
            <InputLabel id="area-label" color="success">
              Lapso
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lapse}
              label="Acción en la gestion del trámite"
              onChange={(e) => handleImpiDocument('lapse', e.target.value)}
            >
              <MenuItem value="dia">dia</MenuItem>
              <MenuItem value="mes">mes</MenuItem>
              <MenuItem value="mes">año</MenuItem>
            </Select>
            {errors && lapse === '' ? (
              <FormHelperText>lklk</FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
          <FormGroup className="mb-3 ml-05 d-flex flex-row w-100 align-items-center lh-1 h-fit ">
            <Typography className="form-label mr-3">¿Días hábiles?</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>No</Typography>
              <Switch
                defaultChecked
                inputProps={{ 'aria-label': 'ant design' }}
                value={businessDay}
                onChange={(e) =>
                  handleImpiDocument('businessDay', e.target.checked)
                }
              />
              <Typography>Sí</Typography>
            </Stack>
          </FormGroup>
        </Box>
        <FormControl
          fullWidth
          className="mb-3"
          error={getErrorValue(tmpFolder)}
        >
          <InputLabel id="area-label" color="success">
            *Carpeta
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tmpFolder}
            label="*Carpeta"
            onChange={(e) => {
              handleImpiDocument('tmpFolder', e.target.value);
            }}
          >
            {tempFolders &&
              tempFolders.map((folder) => (
                <MenuItem
                  key={`tmpFolder${folder.tmrfId}`}
                  value={folder.tmrfId}
                >
                  {folder.tmrfName}
                </MenuItem>
              ))}
          </Select>
          {errors && tmpFolder === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        {update && (
          <FormControl fullWidth>
            <InputLabel id="area-label" color="success">
              Estado
            </InputLabel>
            <Select
              className=" w-50 mb-3"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Estado"
              onChange={(e) => handleImpiDocument('status', e.target.value)}
            >
              <MenuItem value={Boolean(true)}>Activo</MenuItem>
              <MenuItem value={Boolean(false)}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        )}
        <Box className="d-flex justify-content-center">
          <button
            variant="contained"
            type="button"
            className="btn btn-secondary px-5 mx-4 mr-05"
            onClick={() => setmodalShow(false)}
          >
            Cancelar
          </button>
          {!update ? (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => createImpiDocument()}
            >
              Guardar
            </button>
          ) : (
            <button
              variant="contained"
              type="button"
              className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
              onClick={() => editImpiDocument()}
            >
              Guardar
            </button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalImpiDocuments;
