import React from 'react';

import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button } from 'reactstrap';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FIELDS_REQUIRED } from '@Const/const';

const ModalLegalFigures = ({
  isModalOpen,
  setIsModalOpen,
  action,
  legalFigure,
  handleLegalFigure,
  areas,
  referenceTypes,
  register,
  handleSubmit,
  errors,
  onSubmit,
  getErrorValue,
  getInfoProperty,
  handleClose
}) => (
  <Modal size="xl" show={isModalOpen} onHide={() => setIsModalOpen(false)}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Header closeButton onClick={handleClose} />
      <Modal.Body>
        <Container className="col-md-10 mx-auto">
          <h4 className="text-center green-title fw-bold fs-8 mb-4">
            {action} figura legal
          </h4>
          <FormLabel className="text-danger mb-4">
            {FIELDS_REQUIRED}
          </FormLabel>
          <FormControl
            fullWidth
            className="mb-4"
            error={getErrorValue(errors.joaId)}
          >
            <InputLabel id="area-label" color="success">
              * Área
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Área" />}
              labelId="area-label"
              value={
                legalFigure.jobAreaReferenceType === undefined
                  ? ''
                  : legalFigure.jobAreaReferenceType.joaId
              }
              color="success"
              name="joaId"
              {...register('joaId', {
                required:
                  action === 'Modificar' ? false : 'Por favor, elige el área.',
                onChange: (e) =>
                  handleLegalFigure('joaId', e, 'areas', 'select')
              })}
              readOnly={action === 'Modificar'}
              disabled={action === 'Modificar'}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {areas.map((area) => (
                <MenuItem key={area.id} value={area.id}>
                  {area.name}
                </MenuItem>
              ))}
              <Link to="/catalogos/areas" target="_blank">
                <button type="button" className="addFixed">
                  <div>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>Registrar nueva área</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          className="iconGreenToolbar"
                        />
                      </div>
                    </Box>
                  </div>
                </button>
              </Link>
            </Select>
            {action === 'Modificar' ? (
              ''
            ) : (
              <FormHelperText>{errors.jobAreaId?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            className="mb-4"
            error={getErrorValue(errors.referenceTypeId)}
          >
            <InputLabel id="area-label" color="success">
              * Tipo de referencia
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Tipo de referencia" />}
              labelId="area-label"
              value={getInfoProperty(
                legalFigure?.jobAreaReferenceType?.referenceTypeId
              )}
              color="success"
              name="referenceTypeId"
              {...register('referenceTypeId', {
                required:
                  action === 'Modificar' ? false : 'Por favor, elige una fase.',
                onChange: (e) =>
                  handleLegalFigure(
                    'referenceTypeId',
                    e,
                    'referenceTypes',
                    'select'
                  )
              })}
              readOnly={action === 'Modificar'}
              disabled={action === 'Modificar'}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>

              {action === 'Modificar' ? (
                <MenuItem
                  key={legalFigure.jobAreaReferenceType.retyId}
                  value={legalFigure.jobAreaReferenceType.retyId}
                >
                  {legalFigure.jobAreaReferenceType.retyName}
                </MenuItem>
              ) : (
                referenceTypes.map((referenceType) => (
                  <MenuItem
                    key={referenceType.retyId}
                    value={referenceType.retyId}
                  >
                    {referenceType.retyName}
                  </MenuItem>
                ))
              )}
            </Select>
            {action === 'Modificar' ? (
              ''
            ) : (
              <FormHelperText>{errors.referenceTypeId?.message}</FormHelperText>
            )}
          </FormControl>

          <TextField
            placeholder="Nombre de la figura legal (español)"
            label="* Nombre de la figura legal (español)"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="spanishName"
            defaultValue={
              action === 'Modificar' ? legalFigure.lefiSpanishName : ''
            }
            {...register('spanishName', {
              required:
                'Por favor, ingresa el nombre de la figura legal (español).',
              onChange: (e) => handleLegalFigure('lefiSpanishName', e)
            })}
            error={Boolean(errors.spanishName)}
            helperText={errors.spanishName?.message}
          />

          <TextField
            placeholder="Nombre de la figura legal (inglés)"
            label="* Nombre de la figura legal (inglés)"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="englishName"
            defaultValue={
              action === 'Modificar' ? legalFigure.lefiEnglishName : ''
            }
            {...register('englishName', {
              required:
                'Por favor, ingresa el nombre de la figura legal (inglés).',
              onChange: (e) => handleLegalFigure('lefiEnglishName', e)
            })}
            error={Boolean(errors.englishName)}
            helperText={errors.englishName?.message}
          />

          {action === 'Modificar' ? (
            <FormControl fullWidth error={Boolean(errors.status)}>
              <InputLabel id="status-label" color="success">
                * Estado de la figura legal
              </InputLabel>
              <Select
                input={<OutlinedInput label="* Estado de la figura legal" />}
                labelId="status-label"
                value={legalFigure.lefiStatus ?? ''}
                color="success"
                name="status"
                {...register('status', {
                  required: 'Por favor, elige el estatus de la figura legal.',
                  onChange: (e) => handleLegalFigure('lefiStatus', e)
                })}
              >
                <MenuItem value="" disabled>
                  Elige una opción
                </MenuItem>
                <MenuItem value="true">Activo</MenuItem>
                <MenuItem value="false">Inactivo</MenuItem>
              </Select>
              <FormHelperText>{errors.status?.message}</FormHelperText>
            </FormControl>
          ) : (
            ''
          )}
        </Container>
      </Modal.Body>

      <Modal.Footer className="justify-content-center m-3 mb-5">
        <Button
          type="button"
          className="btn btn-secondary px-5 mx-4"
          onClick={handleClose}
        >
          Cancelar
        </Button>
        <Button type="submit" className="btn bg-primary-green px-5 mx-4">
          Guardar
        </Button>
      </Modal.Footer>
    </form>
  </Modal>
);
export default ModalLegalFigures;
