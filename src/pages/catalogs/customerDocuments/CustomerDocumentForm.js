import React from 'react';

import { Link } from 'react-router-dom';

import { Form, Row, Col } from 'react-bootstrap';

import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

import SelectMenuItems from '@Component/common/selectMenuItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const CustomerDocumentForm = ({
  isLoadingForm,
  isUpdate,
  handleClose,
  customerDocumentCurrent,
  //! Create
  jobAreas,
  procedurePhases,
  chargeTypes,
  expirationUnits,
  handdleAreaCombo,
  //! useForm
  errors,
  register,
  onSubmit,
  handleSubmit,
  getInfoProperty
}) => {
  if (isLoadingForm) return null;

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Col xs={6}>
          <FormControl className="mb-2" fullWidth error={Boolean(errors.area)}>
            <InputLabel id="area-label" color="success">
              * Área
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Área" />}
              labelId="area-label"
              color="success"
              name="area"
              defaultValue={getInfoProperty(
                customerDocumentCurrent.jobArea?.joaId
              )}
              {...register('area', {
                required: 'Por favor, elige el area.'
              })}
              onChange={handdleAreaCombo}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {jobAreas.map((item) => (
                <MenuItem key={item.joaId} value={item.joaId}>
                  {item.joaName}
                </MenuItem>
              ))}

              <Link to="/catalogos/areas">
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
            <FormHelperText>{errors.area?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <FormControl className="mb-2" fullWidth error={Boolean(errors.phase)}>
            <InputLabel id="phase-label" color="success">
              * Fase
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Fase" />}
              labelId="phase-label"
              color="success"
              name="phase"
              defaultValue={getInfoProperty(
                customerDocumentCurrent.jobAreaProcedurePhase?.jappId
              )}
              {...register('phase', {
                required: 'Por favor, elige la fase.'
              })}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {procedurePhases.map((item) => (
                <MenuItem key={item.jappId} value={item.jappId}>
                  {item.prphName}
                </MenuItem>
              ))}

              <Link to="/catalogos/fases">
                <button type="button" className="addFixed">
                  <div>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>Registrar nueva fase</div>
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
            <FormHelperText>{errors.phase?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Nombre del documento"
            label="* Nombre del documento"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="name"
            defaultValue={getInfoProperty(customerDocumentCurrent?.cdppName)}
            {...register('name', {
              required: 'Por favor, ingresa el nombre del documento.'
            })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.chargeType)}
          >
            <InputLabel id="chargeType-label" color="success">
              * Tipo de carga
            </InputLabel>
            <SelectMenuItems
              label="* Tipo de carga"
              name="chargeType"
              defaultValue={getInfoProperty(
                customerDocumentCurrent.chargeType?.opcgId
              )}
              properties={{
                required: 'Por favor, elige el tipo de carga.'
              }}
              register={register}
              items={chargeTypes}
              idValue="idOptionCatGeneric"
              property="description"
            />
            <FormHelperText>{errors.chargeType?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <TextField
            placeholder="Etiqueta"
            label="* Etiqueta"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="tag"
            defaultValue={getInfoProperty(customerDocumentCurrent?.cdppTag)}
            {...register('tag', {
              required: 'Por favor, ingresa el nombre de la etiqueta.'
            })}
            error={Boolean(errors.tag)}
            helperText={errors.tag?.message}
          />
        </Col>
      </Row>

      <h4 className="fw-bold mb-4 fs-10">
        Plazo de presentación del documento
      </h4>

      <Row className="mb-3">
        <Col xs={3}>
          <TextField
            placeholder="* Tiempo"
            label="* Tiempo"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="presentationQuantity"
            defaultValue={getInfoProperty(
              customerDocumentCurrent?.cdppPresentationQuantity
            )}
            {...register('presentationQuantity', {
              required: 'Por favor, ingresa el tiempo.'
            })}
            error={Boolean(errors.presentationQuantity)}
            helperText={errors.presentationQuantity?.message}
          />
        </Col>
        <Col xs={3}>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.expirationUnit)}
          >
            <InputLabel id="expirationUnit-label" color="success">
              * Lapso
            </InputLabel>
            <SelectMenuItems
              label="* Lapso"
              name="expirationUnit"
              defaultValue={getInfoProperty(
                customerDocumentCurrent.expirationUnit?.opcgId
              )}
              properties={{
                required: 'Por favor, elige el lapso.'
              }}
              register={register}
              items={expirationUnits}
              idValue="idOptionCatGeneric"
              property="description"
            />
            <FormHelperText>{errors.expirationUnit?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      {isUpdate && (
        <Row className="mb-3">
          <Col xs={6}>
            <FormControl fullWidth error={Boolean(errors.status)}>
              <InputLabel id="status-label" color="success">
                * Estado
              </InputLabel>
              <Select
                input={<OutlinedInput label="* Estado" />}
                labelId="status-label"
                defaultValue={customerDocumentCurrent.cdppStatus.toString()}
                color="success"
                name="status"
                {...register('status', {
                  required: 'Por favor, elige el estado del banco'
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
          </Col>
        </Row>
      )}

      <div className="d-flex justify-content-around">
        <button
          type="button"
          className="close btn-close-modal-app rounded"
          onClick={handleClose}
        >
          Cancelar
        </button>
        <button type="submit" className="btn-primary-modal rounded">
          Guardar
        </button>
      </div>
    </Form>
  );
};

export default CustomerDocumentForm;
