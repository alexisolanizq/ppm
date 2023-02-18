import React, { useState, useEffect } from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const BlockItem = ({
  sortedPhase,
  areaID,
  impiDocuments,
  notificationPeriod,
  notificationFequency,
  users,
  handleChange
}) => {
  const [startPhase, setStartPhase] = useState([]);

  const {
    autorityNotificationPhase,
    jobAreaProcedurePhase: {
      jappId,
      procedurePhase: { prphId: phaseID, prphName: phaseName }
    }
  } = sortedPhase;

  const filterImpiDocuments = () => {
    const filtered = impiDocuments.filter(
      (item) =>
        item.procedureManagementAction.jobAreaProcedurePhase.joaId === areaID &&
        item.procedureManagementAction.jobAreaProcedurePhase.prphId === phaseID
    );

    setStartPhase(filtered);
  };

  useEffect(() => {
    filterImpiDocuments();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center py-2">
      <p className="fw-bold px-2 m-0">{phaseName}</p>

      <div className="authorityNotification">
        <div>Inicio de la fase</div>
        <div>Fin de la fase</div>
        <div>Plazo de notificación</div>
        <div>Frecuencia de notificación</div>
        <div>Usuario destino</div>

        <div className="min-w-150">
          <FormControl fullWidth size="small">
            <InputLabel id="start-phase-label">* Inicio de fase</InputLabel>
            <Select
              size="small"
              varian="filled"
              labelId="start-phase-label"
              id="start-phase"
              defaultValue={autorityNotificationPhase?.startPhase?.prmaId ?? ''}
              label="* Inicio de fase"
              onChange={(e) => handleChange(e, jappId, 'startPhase')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {startPhase.map((item) => (
                <MenuItem
                  key={item.imdoId}
                  value={item.procedureManagementAction.prmaId}
                >
                  {item.imdoName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="min-w-150">
          <FormControl fullWidth size="small">
            <InputLabel id="end-phase-label">* Fin de fase</InputLabel>
            <Select
              size="small"
              varian="filled"
              labelId="end-phase-label"
              id="end-phase"
              defaultValue={autorityNotificationPhase?.endPhase?.prmaId ?? ''}
              label="* Fin de fase"
              onChange={(e) => handleChange(e, jappId, 'endPhase')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {startPhase.map((item) => (
                <MenuItem
                  key={item.imdoId}
                  value={item.procedureManagementAction.prmaId}
                >
                  {item.imdoName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="authorityNotification__period">
          <TextField
            required
            id="period"
            label="Tiempo"
            variant="outlined"
            size="small"
            defaultValue={
              autorityNotificationPhase?.aunpNotificationPeriod ?? ''
            }
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={(e) => handleChange(e, jappId, 'period')}
          />
          <FormControl fullWidth size="small">
            <InputLabel id="period-select-label">Lapso</InputLabel>
            <Select
              size="small"
              varian="filled"
              labelId="period-select-label"
              id="period-select"
              defaultValue={
                autorityNotificationPhase?.notificationPeriod?.opcgId ?? ''
              }
              label="Lapso"
              onChange={(e) => handleChange(e, jappId, 'notificationPeriod')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {notificationPeriod.map((item) => (
                <MenuItem
                  key={item.idOptionCatGeneric}
                  value={item.idOptionCatGeneric}
                >
                  {item.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="authorityNotification__period">
          <TextField
            id="frequency"
            label="Tiempo"
            variant="outlined"
            size="small"
            defaultValue={
              autorityNotificationPhase?.aunpNotificationFrequency ?? ''
            }
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={(e) => handleChange(e, jappId, 'frequency')}
          />
          <FormControl fullWidth size="small">
            <InputLabel id="frequency-select-label">Lapso</InputLabel>
            <Select
              size="small"
              varian="filled"
              labelId="frequency-select-label"
              id="frequency-select"
              defaultValue={
                autorityNotificationPhase?.notificationFrequency?.opcgId ?? ''
              }
              label="Lapso"
              onChange={(e) => handleChange(e, jappId, 'notificationFequency')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {notificationFequency.map((item) => (
                <MenuItem
                  key={item.idOptionCatGeneric}
                  value={item.idOptionCatGeneric}
                >
                  {item.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="min-w-150">
          <FormControl fullWidth size="small">
            <InputLabel id="user-select-label">* Usuario destino</InputLabel>
            <Select
              size="small"
              varian="filled"
              labelId="user-select-label"
              id="user-select"
              defaultValue={autorityNotificationPhase?.user?.usrId ?? ''}
              label="* Usuario destino"
              onChange={(e) => handleChange(e, jappId, 'user')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {users.map((item) => (
                <MenuItem key={item.usrId} value={item.usrId}>
                  {item.usrName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default BlockItem;
