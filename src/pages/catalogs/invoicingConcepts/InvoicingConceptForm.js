import React from 'react';

import { Link } from 'react-router-dom';

import { Form, Row, Col } from 'react-bootstrap';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import SelectMenuItems from '@Component/common/selectMenuItems';

const InvoicingConceptForm = ({
  isLoadingForm,
  isUpdate,
  handleClose,
  invoicingConceptCurrent,
  //! Create
  jobAreas,
  filteredPaymentsRights,
  articleTypes,
  articleTypesEnglish,
  clients,
  holders,
  conceptsTypes,
  stateModalSwitchs,
  handleChangeSwitch,
  selectedAreas,
  handleChangeArea,
  selectedPaymentsRights,
  handleChangePaymentsRights,
  isMultiple,
  selectedArticleType,
  handleChangeArticleType,
  //! useForm
  register,
  handleSubmit,
  errors,
  onSubmit,
  getInfoProperty
}) => {
  if (isLoadingForm) return null;

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Col xs={6}>
          <FormControl fullWidth className="mb-2" error={Boolean(errors.area)}>
            <InputLabel id="area-label" color="success">
              * Área
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Área" />}
              labelId="area-label"
              color="success"
              name="area"
              multiple
              value={selectedAreas}
              {...register('area', {
                required: 'Por favor, elige al menos un área.'
              })}
              onChange={handleChangeArea}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {jobAreas.map((item) => (
                <MenuItem key={item.joaId} value={item.joaName}>
                  <Checkbox
                    checked={selectedAreas.indexOf(item.joaName) > -1}
                  />
                  <ListItemText primary={item.joaName} />
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
            <FormHelperText>{errors.area?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Concepto de facturación"
            label="* Concepto de facturación"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="nameSpanish"
            defaultValue={getInfoProperty(invoicingConceptCurrent?.incoNameSpa)}
            {...register('nameSpanish', {
              required:
                'Por favor, ingresa el nombre del concepto de facturación.'
            })}
            error={Boolean(errors.nameSpanish)}
            helperText={errors.nameSpanish?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Concepto en inglés"
            label="* Concepto en inglés"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="nameEnglish"
            defaultValue={getInfoProperty(invoicingConceptCurrent.incoNameEng)}
            {...register('nameEnglish', {
              required: 'Por favor, ingresa el nombre del concepto en inglés.'
            })}
            error={Boolean(errors.nameEnglish)}
            helperText={errors.nameEnglish?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Descripción"
            label="* Descripción"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-4"
            name="description"
            defaultValue={getInfoProperty(
              invoicingConceptCurrent.incoDescription
            )}
            {...register('description', {
              required: 'Por favor, ingresa la descripción.'
            })}
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <FormControl
            fullWidth
            className="mb-2"
            error={Boolean(errors.paymentRight)}
          >
            <InputLabel id="paymentRight-label" color="success">
              Derecho de pago
            </InputLabel>
            <Select
              input={<OutlinedInput label="Derecho de pago" />}
              labelId="paymentRight-label"
              color="success"
              name="paymentRight"
              multiple
              value={selectedPaymentsRights}
              {...register('paymentRight')}
              onChange={handleChangePaymentsRights}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {filteredPaymentsRights.map((item) => (
                <MenuItem key={item.pariId} value={item.pariArticleName}>
                  <Checkbox
                    checked={
                      selectedPaymentsRights.indexOf(item.pariArticleName) > -1
                    }
                  />
                  <ListItemText primary={item.pariArticleName} />
                </MenuItem>
              ))}
              <Link to="/catalogos/derechos-de-pago" target="_blank">
                <button type="button" className="addFixed">
                  <div>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>Agregar derecho de pago</div>
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
            <FormHelperText>{errors.paymentRight?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Stack
            className="mb-2"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography>¿Múltiple?</Typography>
            <Stack direction="row" alignItems="center">
              <Typography className="px-2">No</Typography>
              <Switch
                checked={stateModalSwitchs.multiple}
                onChange={handleChangeSwitch}
                name="multiple"
              />
              <Typography>Sí</Typography>
            </Stack>
          </Stack>
        </Col>
      </Row>

      {isMultiple && (
        <Row className="mb-3">
          <Col xs={6}>
            <FormControl
              className="mb-2"
              fullWidth
              error={Boolean(errors.articleType)}
            >
              <InputLabel id="articleType-label" color="success">
                * Tipo de articulo
              </InputLabel>
              <SelectMenuItems
                label="* Tipo de articulo"
                name="articleType"
                defaultValue={getInfoProperty(
                  invoicingConceptCurrent.articleType?.opcgId
                )}
                properties={{
                  onChange: handleChangeArticleType
                }}
                register={register}
                items={articleTypes}
                idValue="idOptionCatGeneric"
                property="description"
              />
              <FormHelperText>{errors.articleType?.message}</FormHelperText>
            </FormControl>
          </Col>
          <Col xs={6}>
            <FormControl
              className="mb-2"
              fullWidth
              error={Boolean(errors.articleTypeEnglish)}
            >
              <InputLabel id="articleTypeEnglish-label" color="success">
                * Tipo de articulo
              </InputLabel>
              <Select
                input={<OutlinedInput label="* Tipo de articulo" />}
                labelId="articleTypeEnglish-label"
                disabled
                readOnly
                color="success"
                name="articleTypeEnglish"
                value={
                  isUpdate
                    ? invoicingConceptCurrent.articleType?.opcgId ?? ''
                    : selectedArticleType
                }
                {...register('articleTypeEnglish')}
              >
                {articleTypesEnglish.map((item) => (
                  <MenuItem
                    key={item.idOptionCatGeneric}
                    value={item.idOptionCatGeneric}
                  >
                    {item.description}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.articleTypeEnglish?.message}
              </FormHelperText>
            </FormControl>
          </Col>
        </Row>
      )}

      <Row className="mb-3">
        <Col xs={6}>
          <TextField
            placeholder="Honorarios (MXN)"
            label="* Honorarios (MXN)"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="feePeso"
            defaultValue={getInfoProperty(invoicingConceptCurrent?.incoFeePeso)}
            {...register('feePeso', {
              required: 'Por favor, ingresa los honorarios (MXN).'
            })}
            error={Boolean(errors.feePeso)}
            helperText={errors.feePeso?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <TextField
            placeholder="Honorarios (USD)"
            label="* Honorarios (USD)"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="feeDollar"
            defaultValue={getInfoProperty(
              invoicingConceptCurrent?.incoFeeDollar
            )}
            {...register('feeDollar', {
              required: 'Por favor, ingresa los honorarios (USD).'
            })}
            error={Boolean(errors.feeDollar)}
            helperText={errors.feeDollar?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <TextField
            placeholder="Clave única"
            label="* Clave única"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="uniqKey"
            defaultValue={getInfoProperty(invoicingConceptCurrent?.incoUniqKey)}
            {...register('uniqKey', {
              required: 'Por favor, ingresa la clave única.'
            })}
            error={Boolean(errors.uniqKey)}
            helperText={errors.uniqKey?.message}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <FormControl fullWidth className="mb-2" error={Boolean(errors.agent)}>
            <InputLabel id="agent-label" color="success">
              Cliente
            </InputLabel>
            <SelectMenuItems
              label="Cliente"
              name="agent"
              defaultValue={getInfoProperty(
                invoicingConceptCurrent.agent?.ageId
              )}
              register={register}
              items={clients}
              idValue="ageId"
              property="ageName"
            />
            <FormHelperText>{errors.agent?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.holder)}
          >
            <InputLabel id="holder-label" color="success">
              Titular
            </InputLabel>
            <SelectMenuItems
              label="Titular"
              name="holder"
              defaultValue={getInfoProperty(
                invoicingConceptCurrent.holder?.holId
              )}
              register={register}
              items={holders}
              idValue="id"
              property="name"
            />
            <FormHelperText>{errors.holder?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.conceptType)}
          >
            <InputLabel id="conceptType-label" color="success">
              * Tipo de concepto
            </InputLabel>
            <SelectMenuItems
              label="* Tipo de concepto"
              name="conceptType"
              defaultValue={getInfoProperty(
                invoicingConceptCurrent.conceptType?.opcgId
              )}
              properties={{
                required: 'Por favor, elige el tipo de concepto.'
              }}
              register={register}
              items={conceptsTypes}
              idValue="idOptionCatGeneric"
              property="description"
            />
            <FormHelperText>{errors.conceptType?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Stack
            className="mb-2"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography>¿Se puede adelantar?</Typography>
            <Stack direction="row" alignItems="center">
              <Typography className="px-2">No</Typography>
              <Switch
                checked={stateModalSwitchs.incoPrepayment}
                onChange={handleChangeSwitch}
                name="incoPrepayment"
              />
              <Typography>Sí</Typography>
            </Stack>
          </Stack>
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
                defaultValue={invoicingConceptCurrent.incoStatus.toString()}
                color="success"
                name="status"
                {...register('status', {
                  required:
                    'Por favor, elige el estado de la entidad de facturacion'
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

      <div className="d-flex justify-content-around pb-3">
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
export default InvoicingConceptForm;
