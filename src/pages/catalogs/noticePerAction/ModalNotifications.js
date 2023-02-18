import React from 'react';
import {
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  ListItemText,
  Dialog
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BootstrapDialogTitle from '../../../component/common/dialogs/BootstrapDialogTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
const ModalNotifications = ({
  modalShow,
  setmodalShow,
  managmentActions,
  userList,
  coresponsibleList,
  notice,
  handleNotice,
  createNotice,
  editNotice,
  update,
  procedurePhases,
  areasList,
  getPhasesListData,
  getCoresponsible
}) => (
  <BootstrapDialog
    open={modalShow}
    onClose={() => setmodalShow(false)}
    aria-labelledby="customized-dialog-title"
    fullWidth={Boolean(true)}
    maxWidth="md"
  >
    <BootstrapDialogTitle
      id="customized-dialog-title"
      onClose={() => setmodalShow(false)}
    >
      {update ? 'Modificar ' : 'Dar de alta '}notificacion por acción
    </BootstrapDialogTitle>
    <Box sx={{ padding: '2.5rem' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">*Área</InputLabel>
        <Select
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notice.jobArea}
          label="Área"
          onChange={(e) => {
            handleNotice('jobArea', e.target.value);
            getPhasesListData(e.target.value);
          }}
        >
          {areasList &&
            areasList.map((item) => (
              <MenuItem key={`jobArea${item.joaId}`} value={item.joaId}>
                {item.joaName}
              </MenuItem>
            ))}
          <Button
            sx={{
              display: 'flex',
              borderTop: '1px solid #28a745',
              justifyContent: 'space-between',
              width: 'calc(100% - 32px)',
              color: '#28a745',
              margin: '6px 16px 0',
              borderRadius: '0px'
            }}
          >
            <span>Registrar nueva área</span>
            <AddCircleOutlineIcon className="green-color" />
          </Button>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">*Fase</InputLabel>
        <Select
          sx={{
            width: 'calc((100% / 2) - 10px)',
            display: 'flex',
            flexWrap: 'nowrap',
            marginBottom: '1rem'
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notice.procedurePhase}
          label="Fase"
          onChange={(e) => {
            handleNotice('procedurePhase', e.target.value);
          }}
        >
          {procedurePhases &&
            procedurePhases.map((area) => (
              <MenuItem
                key={`procedurePhase${area.prphId}`}
                value={area.prphId}
              >
                {area.prphName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          *Acción en la gestion del trámite
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
          value={notice.gestion}
          label="Acción en la gestion del trámite"
          onChange={(e) => handleNotice('gestion', e.target.value)}
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
          <Button
            sx={{
              display: 'flex',
              borderTop: '1px solid #28a745',
              justifyContent: 'space-between',
              width: 'calc(100% - 32px)',
              color: '#28a745',
              margin: '6px 16px 0',
              borderRadius: '0px'
            }}
          >
            <span>Registrar nueva accion</span>{' '}
            <AddCircleOutlineIcon className="green-color" />
          </Button>
        </Select>
      </FormControl>
      <TextField
        id="notice-fase"
        label="*Descripción  de la notificación"
        variant="outlined"
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          marginBottom: '1rem'
        }}
        value={notice.descripcion}
        onChange={(e) => handleNotice('descripcion', e.target.value)}
      />
      <TextField
        id="notice-fase"
        label="*Nombre  de la notificación"
        variant="outlined"
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          marginBottom: '1rem'
        }}
        value={notice.name}
        onChange={(e) => handleNotice('name', e.target.value)}
      />
      <Box className="d-flex justify-content-center">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">*Responsable</InputLabel>
          <Select
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              width: 'calc(100% - 10px)',
              marginRight: '10px',
              marginBottom: '1rem'
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={notice.responsable}
            label="Responsable"
            onChange={(e) => {
              handleNotice('responsable', e.target.value);
              getCoresponsible(e.target.value);
            }}
          >
            {userList &&
              userList.map((user) => (
                <MenuItem key={`responsable${user.id}`} value={user.id}>
                  <ListItemText primary={user.name} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">*Corresponsable</InputLabel>
          <Select
            sx={{
              width: 'calc(100% - 10px)',
              marginLeft: '10px',
              display: 'flex',
              flexWrap: 'nowrap',
              marginBottom: '1rem'
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={notice.coresponsible}
            label="Corresponsable"
            onChange={(e) => handleNotice('coresponsible', e.target.value)}
          >
            {coresponsibleList.map((coresponsible) => (
              <MenuItem
                key={`coresponsible${coresponsible.coreId}`}
                value={coresponsible.coreId}
              >
                <ListItemText primary={coresponsible.coresponsible.usrName} />
              </MenuItem>
            ))}
            <Button
              sx={{
                display: 'flex',
                borderTop: '1px solid #28a745',
                justifyContent: 'space-between',
                width: 'calc(100% - 32px)',
                color: '#28a745',
                margin: '6px 16px 0',
                borderRadius: '0px'
              }}
            >
              <span>Registrar nueva área</span>{' '}
              <AddCircleOutlineIcon className="green-color" />
            </Button>
          </Select>
        </FormControl>
      </Box>
      {update && (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
            sx={{
              width: 'calc(100% / 2)',
              display: 'flex',
              flexWrap: 'nowrap',
              marginBottom: '1rem'
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={notice.status}
            label="Estado"
            onChange={(e) => handleNotice('status', e.target.value)}
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
            onClick={() => createNotice()}
            sx={{ marginLeft: '0.5rem' }}
          >
            Guardar
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => editNotice()}
            sx={{ marginLeft: '0.5rem' }}
          >
            Guardar
          </Button>
        )}
      </Box>
    </Box>
  </BootstrapDialog>
);

export default ModalNotifications;
