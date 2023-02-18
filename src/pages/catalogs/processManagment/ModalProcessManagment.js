import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Dialog,
  Button,
  Box,
  FormControlLabel,
  Switch,
  FormGroup,
  FormLabel,
  FormHelperText
} from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';
import { FIELDS_REQUIRED } from '@Const/const';

function ModalProcessManagment({
  phases,
  modalShow,
  cleanFormulario,
  handdleAreaCombo,
  process,
  tempFolderListData,
  priorities,
  errors,
  levels,
  handleProcess,
  createProcess,
  editProcess,
  update,
  areasList,
  getHelperText,
  getErrorValue
}) {
  const {
    jobArea,
    expiration,
    procedurePhase,
    permission,
    processName,
    priority,
    folder,
    abbreviation,
    status
  } = process;

  return (
    <Dialog
      open={modalShow}
      onClose={cleanFormulario}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="md"
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={cleanFormulario}
      >
        {update ? 'Modificar ' : 'Agregar '} acción en la gestión del trámite
      </BootstrapDialogTitle>
      <Box sx={{ padding: '2.5rem' }}>
        <FormLabel className="text-danger mb-4">{FIELDS_REQUIRED}</FormLabel>
        <FormControl
          fullWidth
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          error={Boolean(errors && jobArea === '')}
        >
          <InputLabel id="area-label" color="success">
            *Área
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jobArea}
            label="Tipo de subetiqueta"
            onChange={(e) => {
              handdleAreaCombo(e);
            }}
          >
            {areasList &&
              areasList.map((area) => (
                <MenuItem key={area.id} value={area.id}>
                  {area.name}
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
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          error={Boolean(errors && procedurePhase === '')}
        >
          <InputLabel id="area-label" color="success">
            *Fase
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={procedurePhase}
            label="Tipo de subetiqueta"
            onChange={(e) => {
              handleProcess('procedurePhase', e.target.value);
            }}
          >
            {phases &&
              phases.map((phase) => (
                <MenuItem key={`phases${phase.prphId}`} value={phase.prphId}>
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
        <Box sx={{ padding: '.5rem 0', display: 'flex' }}>
          <TextField
            id="process-area"
            label="Nombre de la acción en la gestión del trámite"
            variant="outlined"
            helperText={getHelperText(processName, 'lklk', '')}
            error={getErrorValue(processName)}
            sx={{
              marginBottom: '1rem',
              width: 'calc(100% - 20px)',
              marginRight: '5px'
            }}
            value={processName}
            onChange={(e) => handleProcess('processName', e.target.value)}
          />
          <TextField
            id="process-area"
            label="Abreviatura"
            variant="outlined"
            helperText={getHelperText(abbreviation, 'lklk', '')}
            error={getErrorValue(abbreviation)}
            sx={{
              marginBottom: '1rem',
              width: 'calc(100% - 20px)',
              marginRight: '5px'
            }}
            value={abbreviation}
            onChange={(e) => handleProcess('abbreviation', e.target.value)}
          />
        </Box>
        <FormControl
          fullWidth
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          error={Boolean(errors && priority === '')}
        >
          <InputLabel id="area-label" color="success">
            Prioridad
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            label="Tipo de subetiqueta"
            onChange={(e) => handleProcess('priority', e.target.value)}
          >
            {priorities &&
              priorities.map((prioriti) => (
                <MenuItem
                  key={`prioridad${prioriti.idOptionCatGeneric}`}
                  value={prioriti.idOptionCatGeneric}
                >
                  <Brightness1Icon
                    sx={{
                      fontSize: '12px',
                      marginRight: 1,
                      color:
                        (prioriti.idOptionCatGeneric === 1 && 'red') ||
                        (prioriti.idOptionCatGeneric === 2 && 'orange') ||
                        (prioriti.idOptionCatGeneric === 3 && 'green')
                    }}
                  />
                  {prioriti.description}
                </MenuItem>
              ))}
          </Select>
          {errors && priority === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          error={Boolean(errors && folder === '')}
        >
          <InputLabel id="area-label" color="success">
            Carpeta
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={folder}
            label="Tipo de subetiqueta"
            onChange={(e) => handleProcess('folder', e.target.value)}
          >
            {tempFolderListData &&
              tempFolderListData.map((foldr) => (
                <MenuItem key={`folder${foldr.tmrfId}`} value={foldr.tmrfId}>
                  {foldr.tmrfName}
                </MenuItem>
              ))}
          </Select>
          {errors && folder === '' ? <FormHelperText>lklk</FormHelperText> : ''}
        </FormControl>
        <FormGroup sx={{ justifyContent: 'flex-start' }}>
          <FormControlLabel
            sx={{ justifyContent: 'flex-end', marginBottom: '1rem' }}
            labelPlacement="start"
            control={<Switch defaultChecked />}
            value={expiration}
            onChange={() => handleProcess('expiration', !expiration)}
            label="Countrol de vencimiento"
          />
        </FormGroup>
        <FormControl
          fullWidth
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          error={Boolean(errors && permission === '')}
        >
          <InputLabel id="area-label" color="success">
            Nivel de permiso
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={permission}
            label="Tipo de subetiqueta"
            onChange={(e) => handleProcess('permission', e.target.value)}
          >
            {levels &&
              levels.map((permision) => (
                <MenuItem
                  key={`permision${permision.levId}`}
                  value={permision.levId}
                >
                  {permision.levName}
                </MenuItem>
              ))}
          </Select>
          {errors && permission === '' ? (
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
              sx={{
                width: 'calc((100% / 2) - 10px)',
                display: 'flex',
                flexWrap: 'nowrap',
                marginBottom: '1rem'
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Estado"
              onChange={(e) => handleProcess('status', e.target.value)}
            >
              <MenuItem value={Boolean(true)}>Activo</MenuItem>
              <MenuItem value={Boolean(false)}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        )}
        <Box className="d-flex justify-content-center">
          <Button
            variant="contained"
            onClick={cleanFormulario}
            className="mr-05"
          >
            Cancelar
          </Button>
          {!update ? (
            <Button
              variant="contained"
              onClick={() => createProcess()}
              sx={{ marginLeft: '0.5rem' }}
            >
              Agregar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => editProcess(jobArea)}
              sx={{ marginLeft: '0.5rem' }}
            >
              Editar
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}

export default ModalProcessManagment;
