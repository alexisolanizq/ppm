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
  FormHelperText
} from '@mui/material';
import BootstrapDialogTitle from '../../../component/common/dialogs/BootstrapDialogTitle';

function ModalInstructions({
  errors,
  modalShow,
  setmodalShow,
  instruction,
  procedurePhases,
  areasList,
  showArticle,
  handleInstruction,
  createInstruction,
  editInstruction,
  update,
  paymentsRight,
  ppmDocumentList,
  getProcedurePhases,
  setShowArticle,
  getErrorValue,
  getHelperText
}) {
  return (
    <Dialog
      open={modalShow}
      onClose={() => {
        setShowArticle(false);
        setmodalShow(false);
      }}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
      maxWidth="md"
    >
      {showArticle ? (
        <>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={() => {
              setShowArticle(false);
              setmodalShow(false);
            }}
          >
            Ver artículos de pago
          </BootstrapDialogTitle>
          <Box className="p-4 text-center">
            <h5>
              {showArticle.articleNumber}-{showArticle.articleName}/
              {showArticle.jobArea.name}
            </h5>
          </Box>
        </>
      ) : (
        <>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={() => setmodalShow(false)}
          >
            {update ? 'Modificar ' : 'Alta '} tipo de instrucciones
          </BootstrapDialogTitle>
          <Box className="p-4">
            <FormControl
              fullWidth
              className="w-50 mb-3"
              error={getErrorValue(instruction.jobArea)}
            >
              <InputLabel id="demo-simple-select-label">*Área</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={instruction.jobArea}
                label="Tipo de subetiqueta"
                onChange={(e) => {
                  handleInstruction('jobArea', e.target.value);
                  getProcedurePhases(e.target.value);
                }}
              >
                {areasList &&
                  areasList.map((item) => (
                    <MenuItem key={`jobArea${item.joaId}`} value={item.joaId}>
                      {item.joaName}
                    </MenuItem>
                  ))}
              </Select>
              {errors && instruction.jobArea === '' ? (
                <FormHelperText>lklk</FormHelperText>
              ) : (
                ''
              )}
            </FormControl>
            <FormControl
              fullWidth
              className="w-50 mb-3"
              error={getErrorValue(instruction.jobAreaPhase === '')}
            >
              <InputLabel id="demo-simple-select-label">*Fase</InputLabel>
              <Select
                color="success"
                disabled={procedurePhases.lenght === 0}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={instruction.jobAreaPhase}
                label="Tipo de subetiqueta"
                onChange={(e) => {
                  handleInstruction('jobAreaPhase', e.target.value);
                }}
              >
                {procedurePhases &&
                  procedurePhases.map((area) => (
                    <MenuItem
                      key={`jobAreaPhase${area.procedurePhaseId}`}
                      value={area.procedurePhaseId}
                    >
                      {area.procedurePhaseName}
                    </MenuItem>
                  ))}
              </Select>
              {errors && instruction.jobAreaPhase === '' ? (
                <FormHelperText>lklk</FormHelperText>
              ) : (
                ''
              )}
            </FormControl>
            <TextField
              id="instruction-name"
              label="Nombre de la instrucción"
              color="success"
              variant="outlined"
              helperText={getHelperText(instruction.name, 'lklk', '')}
              className="w-100 mb-3"
              error={getErrorValue(instruction.name)}
              value={instruction.name}
              onChange={(e) => handleInstruction('name', e.target.value)}
            />
            <FormControl
              fullWidth
              className="w-100 mb-3"
              error={getErrorValue(instruction.ppmDocument)}
            >
              <InputLabel id="demo-simple-select-label">
                *Articulos de pago
              </InputLabel>
              <Select
                color="success"
                disabled={procedurePhases.lenght === 0}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={instruction.article}
                label="*Articulos de pago"
                onChange={(e) => {
                  handleInstruction('article', e.target.value);
                }}
              >
                {paymentsRight &&
                  paymentsRight.map((payment) => (
                    <MenuItem
                      key={`article${payment.pariId}`}
                      value={payment.pariId}
                    >
                      {payment.pariArticleName}
                    </MenuItem>
                  ))}
              </Select>
              {errors && instruction.article === '' ? (
                <FormHelperText>lklk</FormHelperText>
              ) : (
                ''
              )}
            </FormControl>
            <FormControl
              fullWidth
              className="w-50 mb-3"
              error={Boolean(errors && instruction.ppmDocument === '')}
            >
              <InputLabel id="demo-simple-select-label">*Escrito</InputLabel>
              <Select
                color="success"
                disabled={procedurePhases.lenght === 0}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={instruction.ppmDocument}
                label="*Escrito"
                onChange={(e) => {
                  handleInstruction('ppmDocument', e.target.value);
                }}
              >
                {ppmDocumentList &&
                  ppmDocumentList.map((document) => (
                    <MenuItem
                      key={`${document.ppmdId}`}
                      value={document.ppmdId}
                    >
                      {document.ppmdName}
                    </MenuItem>
                  ))}
              </Select>
              {errors && instruction.ppmDocument === '' ? (
                <FormHelperText>lklk</FormHelperText>
              ) : (
                ''
              )}
            </FormControl>
            {update && (
              <FormControl fullWidth className="w-50 mb-3">
                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={instruction.status}
                  label="Estado"
                  onChange={(e) => handleInstruction('status', e)}
                >
                  <MenuItem value={Boolean(true)}>Activo</MenuItem>
                  <MenuItem value={Boolean(false)}>Inactivo</MenuItem>
                </Select>
              </FormControl>
            )}
            <Box className="d-flex justify-content-center">
              <Button
                variant="contained"
                onClick={() => setmodalShow(false)}
                className="mr-05"
              >
                Cancelar
              </Button>
              {!update ? (
                <Button
                  variant="contained"
                  onClick={() => createInstruction()}
                  className="ml-05"
                >
                  Guardar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => editInstruction()}
                  className="ml-05"
                >
                  Guardar
                </Button>
              )}
            </Box>
          </Box>
        </>
      )}
    </Dialog>
  );
}

export default ModalInstructions;
