import React from 'react';

import { Link } from 'react-router-dom';

import { Form, Row, Col } from 'react-bootstrap';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

import SelectMenuItems from '../selectMenuItems';

const FormInvoicingEntity = ({
  isUpdate,
  currentInvoicingEntity,
  getInfoProperty,
  //! Create
  personType,
  regime,
  countries,
  payMethod,
  wayPay,
  CFDI,
  handdlePersonTypeCombo,
  isPhysicalPerson,
  //! useForm
  register,
  handleSubmit,
  errors,
  onSubmit
}) => {
  if (!currentInvoicingEntity) return null;

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded mb-3">
        <img
          src="https://via.placeholder.com/120"
          alt="profile"
          className="rounded-circle"
        />
      </div>
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
                defaultValue={currentInvoicingEntity?.status}
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
      <Row className="mb-3">
        <Col>
          <Stack
            className="mb-2"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography>¿Entdad de facturación principal?</Typography>
            <Stack direction="row" alignItems="center">
              <Typography className="px-2">No</Typography>
              <Switch {...register('default')} />
              <Typography>Sí</Typography>
            </Stack>
          </Stack>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.typePerson)}
          >
            <InputLabel id="typePerson-label" color="success">
              * Tipo de entidad de facturación
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Tipo de entidad de facturación" />}
              labelId="typePerson-label"
              color="success"
              name="typePerson"
              defaultValue={getInfoProperty(
                currentInvoicingEntity?.typePerson?.opcgId
              )}
              {...register('typePerson', {
                required: 'Por favor, elige el tipo de entidad de facturación.'
              })}
              onChange={handdlePersonTypeCombo}
            >
              <SelectMenuItems
                items={personType}
                value="idOptionCatGeneric"
                property="description"
              />
            </Select>
            <FormHelperText>{errors.typePerson?.message}</FormHelperText>
          </FormControl>
        </Col>
        <Col>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.regime)}
          >
            <InputLabel id="regime-label" color="success">
              * Régimen
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Régimen" />}
              labelId="regime-label"
              color="success"
              name="regime"
              defaultValue={getInfoProperty(
                currentInvoicingEntity?.regime?.opcgId
              )}
              {...register('regime', {
                required: 'Por favor, elige el régimen.'
              })}
            >
              <SelectMenuItems
                items={regime}
                value="idOptionCatGeneric"
                property="description"
              />
            </Select>
            <FormHelperText>{errors.regime?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>
      {isPhysicalPerson && (
        <Row className="mb-3">
          <Col xs={6}>
            <TextField
              placeholder="Nombre(s)"
              label="* Nombre(s)"
              variant="outlined"
              fullWidth
              color="success"
              className="mb-2"
              name="name"
              defaultValue={getInfoProperty(currentInvoicingEntity?.name)}
              {...register('name', {
                required: 'Por favor, ingresa el nombre.'
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          </Col>
          <Col>
            <TextField
              placeholder="Apellido paterno"
              label="* Apellido paterno"
              variant="outlined"
              fullWidth
              color="success"
              className="mb-2"
              name="firstName"
              defaultValue={getInfoProperty(currentInvoicingEntity?.firstName)}
              {...register('firstName', {
                required: 'Por favor, ingresa el apellido paterno.'
              })}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          </Col>
          <Col>
            <TextField
              placeholder="Apellido materno"
              label="Apellido materno"
              variant="outlined"
              fullWidth
              color="success"
              className="mb-2"
              name="lastName"
              defaultValue={getInfoProperty(currentInvoicingEntity?.lastName)}
              {...register('lastName')}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          </Col>
        </Row>
      )}

      {!isPhysicalPerson && (
        <Row className="mb-3">
          <Col>
            <TextField
              placeholder="Nombre(s)"
              label="* Nombre(s)"
              variant="outlined"
              fullWidth
              color="success"
              className="mb-2"
              name="name"
              defaultValue={getInfoProperty(currentInvoicingEntity?.name)}
              {...register('name', {
                required: 'Por favor, ingresa el nombre.'
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          </Col>
        </Row>
      )}
      <Row className="mb-3">
        <Col xs={3}>
          <TextField
            placeholder="Código postal"
            label="* Código postal"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="codePostal"
            defaultValue={getInfoProperty(currentInvoicingEntity?.codePostal)}
            {...register('codePostal', {
              required: 'Por favor, ingresa el código postal'
            })}
            error={Boolean(errors.codePostal)}
            helperText={errors.codePostal?.message}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <FormControl
            fullWidth
            className="mb-2"
            error={Boolean(errors.country)}
          >
            <InputLabel id="country-label" color="success">
              * País
            </InputLabel>
            <Select
              input={<OutlinedInput label="* País" />}
              labelId="country-label"
              color="success"
              name="country"
              defaultValue={getInfoProperty(
                currentInvoicingEntity?.country?.id
              )}
              {...register('country', {
                required: 'Por favor, elige el país.'
              })}
            >
              <MenuItem value="" disabled>
                Elige una opción
              </MenuItem>
              {countries.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.nameSpanish}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.country?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>
      <Row className="mb-3">
        <h5>Información de facturación</h5>
        <Col xs={6}>
          <TextField
            placeholder="RFC"
            label="* RFC"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="rfc"
            defaultValue={getInfoProperty(currentInvoicingEntity?.rfc)}
            {...register('rfc', {
              required: 'Por favor, ingresa el RFC',
              minLength: {
                value: 12,
                message: 'Ingresa minimo 12 caracteres'
              },
              maxLength: {
                value: 13,
                message: 'Ingresa maximo 13 caracteres'
              }
            })}
            error={Boolean(errors.rfc)}
            helperText={errors.rfc?.message}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <TextField
            placeholder="VAT o NIF"
            label="* VAT o NIF"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="vat"
            {...register('vat')}
            error={Boolean(errors.vat)}
            helperText={errors.vat?.message}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.paymentMethod)}
          >
            <InputLabel id="paymentMethod-label" color="success">
              * Método de pago
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Método de pago" />}
              labelId="paymentMethod-label"
              color="success"
              name="paymentMethod"
              defaultValue={getInfoProperty(
                currentInvoicingEntity?.paymentMethod?.opcgId
              )}
              {...register('paymentMethod', {
                required: 'Por favor, elige el método de pago.'
              })}
            >
              <SelectMenuItems
                items={payMethod}
                value="idOptionCatGeneric"
                property="description"
              />
            </Select>
            <FormHelperText>{errors.paymentMethod?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <FormControl
            className="mb-2"
            fullWidth
            error={Boolean(errors.wayPay)}
          >
            <InputLabel id="wayPay-label" color="success">
              * Forma de pago
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Forma de pago" />}
              labelId="wayPay-label"
              color="success"
              name="wayPay"
              defaultValue={getInfoProperty(
                currentInvoicingEntity?.wayPay?.opcgId
              )}
              {...register('wayPay', {
                required: 'Por favor, elige la forma de pago.'
              })}
            >
              <SelectMenuItems
                items={wayPay}
                value="idOptionCatGeneric"
                property="description"
              />
            </Select>
            <FormHelperText>{errors.wayPay?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <FormControl className="mb-2" fullWidth error={Boolean(errors.cfdi)}>
            <InputLabel id="cfdi-label" color="success">
              * Uso de CFDI
            </InputLabel>
            <Select
              input={<OutlinedInput label="* Uso de CFDI" />}
              labelId="cfdi-label"
              color="success"
              name="cfdi"
              defaultValue={getInfoProperty(
                currentInvoicingEntity?.cfdi?.opcgId
              )}
              {...register('cfdi', {
                required: 'Por favor, elige una opción.'
              })}
            >
              <SelectMenuItems
                items={CFDI}
                value="idOptionCatGeneric"
                property="description"
              />
            </Select>
            <FormHelperText>{errors.cfdi?.message}</FormHelperText>
          </FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <h5>Información de ubicación</h5>
        <Col>
          <TextField
            placeholder="Calle"
            label="* Calle"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="street"
            defaultValue={getInfoProperty(currentInvoicingEntity?.street)}
            {...register('street', {
              required: 'Por favor, ingresa la calle'
            })}
            error={Boolean(errors.street)}
            helperText={errors.street?.message}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={3}>
          <TextField
            placeholder="Número exterior"
            label="* Número exterior"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="outsideNumber"
            defaultValue={getInfoProperty(
              currentInvoicingEntity?.outsideNumber
            )}
            {...register('outsideNumber', {
              required: 'Por favor, ingresa el número exterior'
            })}
            error={Boolean(errors.outsideNumber)}
            helperText={errors.outsideNumber?.message}
          />
        </Col>
        <Col xs={3}>
          <TextField
            placeholder="Número interior"
            label="Número interior"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="innerNumber"
            defaultValue={getInfoProperty(currentInvoicingEntity?.innerNumber)}
            {...register('innerNumber')}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Colonia"
            label="Colonia"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="colony"
            defaultValue={getInfoProperty(currentInvoicingEntity?.colony)}
            {...register('colony')}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Ciudad"
            label="* Ciudad"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="city"
            defaultValue={getInfoProperty(currentInvoicingEntity?.city)}
            {...register('city', {
              required: 'Por favor, ingresa la ciudad'
            })}
            error={Boolean(errors.city)}
            helperText={errors.city?.message}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Municipio"
            label="Municipio"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="township"
            defaultValue={getInfoProperty(currentInvoicingEntity?.township)}
            {...register('township')}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <TextField
            placeholder="Estado"
            label="Estado"
            variant="outlined"
            fullWidth
            color="success"
            className="mb-2"
            name="state"
            defaultValue={getInfoProperty(currentInvoicingEntity?.state)}
            {...register('state')}
          />
        </Col>
      </Row>

      <div className="d-flex justify-content-around pb-3">
        <Link
          className="close btn-close-modal-app p-1 text-center text-decoration-none rounded"
          to="/generales/entidades-facturacion"
        >
          Cancelar
        </Link>

        <button type="submit" className="btn-primary-modal rounded">
          Guardar
        </button>
      </div>
    </Form>
  );
};
export default FormInvoicingEntity;
