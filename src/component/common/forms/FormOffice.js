import React from 'react';
import {
  FormGroup,
  FormControl,
  Typography,
  Stack,
  Switch,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
  Box,
  InputAdornment
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Dropzone from '../dropzones/Dropzone';

const FormOffice = ({
  banks,
  agentTelephonesOffice,
  update,
  officeData,
  errors,
  countries,
  file,
  onDropRejected,
  onDropAccepted,
  editOffice,
  handleInputPhonesAgentOffice,
  handleOffice,
  createOffice,
  addInputPhonesAgent,
  getHelperText,
  getErrorValue
}) => {
  const {
    name,
    codePostal,
    street,
    outsideNumber,
    innerNumber,
    colony,
    city,
    township,
    state,
    country,
    email,
    fax,
    lenIdCorrespondence,
    exchangeRate,
    siteWeb,
    discountClient,
    bank,
    accountBank,
    taxationPercentage,
    paymentCurrency,
    billingAgent
  } = officeData;
  return (
    <Box>
      <Dropzone
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        file={file}
      />
      <Box>
        <TextField
          id="notice-fase"
          label="*Nombre de la oficina"
          color="success"
          variant="outlined"
          helperText={getHelperText(name, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(name)}
          value={name}
          onChange={(e) => handleOffice('name', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Codigo postal"
          color="success"
          variant="outlined"
          helperText={getHelperText(codePostal, 'lklk', '')}
          className="mb-3"
          error={getErrorValue(codePostal)}
          value={codePostal}
          onChange={(e) => handleOffice('codePostal', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Calle"
          color="success"
          variant="outlined"
          helperText={getHelperText(street, 'lklk', '')}
          className="mb-3 mr-5 w-100"
          error={getErrorValue(street)}
          value={street}
          onChange={(e) => handleOffice('street', e.target.value)}
        />
        <Box className="d-flex flex-row">
          <TextField
            id="notice-fase"
            label="Numero interior"
            color="success"
            variant="outlined"
            helperText={getHelperText(innerNumber, 'lklk', '')}
            className="mb-3 mr-05"
            error={getErrorValue(innerNumber)}
            value={innerNumber}
            onChange={(e) => handleOffice('innerNumber', e.target.value)}
          />
          <TextField
            id="notice-fase"
            label="Numero exterior"
            color="success"
            variant="outlined"
            helperText={getHelperText(outsideNumber, 'lklk', '')}
            className="mb-3 ml-05"
            error={getErrorValue(outsideNumber)}
            value={outsideNumber}
            onChange={(e) => handleOffice('outsideNumber', e.target.value)}
          />
        </Box>
        <TextField
          id="notice-fase"
          label="Colonia"
          color="success"
          variant="outlined"
          helperText={getHelperText(colony, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(colony)}
          value={colony}
          onChange={(e) => handleOffice('colony', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Ciudad"
          color="success"
          variant="outlined"
          helperText={getHelperText(city, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(city)}
          value={city}
          onChange={(e) => handleOffice('city', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Municipio"
          color="success"
          variant="outlined"
          helperText={getHelperText(township, 'lklk', '')}
          className="mb-3 w-100"
          error={getErrorValue(township)}
          value={township}
          onChange={(e) => handleOffice('township', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Estado"
          color="success"
          variant="outlined"
          helperText={getHelperText(state, 'lklk', '')}
          className="mb-3"
          error={getErrorValue(state)}
          value={state}
          onChange={(e) => handleOffice('state', e.target.value)}
        />
        <FormControl fullWidth className="mb-3 " error={getErrorValue(country)}>
          <InputLabel id="area-label" color="success">
            País
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Acción en la gestion del trámite"
            onChange={(e) => handleOffice('country', e.target.value)}
          >
            {countries.map((item) => (
                <MenuItem key={`${item.counId}a`} value={item.counId}>
                  {item.counNameSpa}
                </MenuItem>
              ))}
          </Select>
          {errors && country === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <Box className="d-flex flex-row flex-align-items-center flex-wrap">
          {agentTelephonesOffice.map((item, index) => (
            <TextField
              key={`${item.id}Office`}
              id="notice-fase"
              label="*Telefono"
              color="success"
              variant="outlined"
              helperText={getHelperText(item.number, 'lklk', '')}
              className="d-flex flex-row flex-align-items-center mr-07 mb-3"
              error={getErrorValue(item.number === '')}
              value={item.number}
              onChange={(e) =>
                handleInputPhonesAgentOffice('number', e.target.value, index)
              }
            />
          ))}
          <AddCircleOutlineIcon
            className="mb-3"
            onClick={() => addInputPhonesAgent()}
          />
        </Box>
        <TextField
          id="notice-fase"
          label="*Correo Electronico"
          color="success"
          variant="outlined"
          helperText={getHelperText(email, 'lklk', '')}
          className="mb-3 w-50 mr-05"
          error={getErrorValue(email)}
          value={email}
          onChange={(e) => handleOffice('email', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="*Fax"
          color="success"
          variant="outlined"
          helperText={getHelperText(fax, 'lklk', '')}
          className="mb-3 w-50"
          error={getErrorValue(fax)}
          value={fax}
          onChange={(e) => handleOffice('fax', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Sitio web"
          color="success"
          variant="outlined"
          helperText={getHelperText(siteWeb, 'lklk', '')}
          className="mb-3 w-50 d-flex"
          error={getErrorValue(siteWeb)}
          value={siteWeb}
          onChange={(e) => handleOffice('siteWeb', e.target.value)}
        />
        <FormControl
          fullWidth
          className="w-50 mr-05 mb-3"
          error={getErrorValue(lenIdCorrespondence)}
        >
          <InputLabel id="area-label" color="success">
            Idioma de correspondencia
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lenIdCorrespondence}
            label="Acción en la gestion del trámite"
            onChange={(e) =>
              handleOffice('lenIdCorrespondence', e.target.value)
            }
          >
            {countries &&
              countries.map((item) => (
                <MenuItem key={`${item.item.id}a`} value={item.id}>
                  {item.nameSpanish}
                </MenuItem>
              ))}
          </Select>
          {errors && lenIdCorrespondence === '' ? (
            <FormHelperText>lklk</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
        <h3>Directorio</h3>
        <FormGroup className="mt-3 ml-05 w-50 d-flex flex-row mb-3 align-items-center lh-1 h-fit">
          <Typography className="form-label">
            ¿Mismo agente a facturar?
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>No</Typography>
            <Switch
              inputProps={{ 'aria-label': 'ant design' }}
              value={billingAgent}
              onChange={(e) => handleOffice('billingAgent', e.target.checked)}
            />
            <Typography>Sí</Typography>
          </Stack>
        </FormGroup>
        <h3>Entidad de facturación</h3>
        <Box className="d-flex flex-row">
          <FormControl
            fullWidth
            className="w-50 ml-05 mb-3"
            error={getErrorValue(paymentCurrency)}
          >
            <InputLabel id="area-label" color="success">
              Divisa de pago
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={paymentCurrency}
              label="Acción en la gestion del trámite"
              onChange={(e) => handleOffice('paymentCurrency', e.target.value)}
            >
              {countries &&
                countries.map((item) => (
                  <MenuItem key={`${item.id}a`} value={item.id}>
                    {item.nameSpanish}
                  </MenuItem>
                ))}
            </Select>
            {errors && paymentCurrency === '' ? (
              <FormHelperText>lklk</FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
        </Box>
        <Box className="d-flex flex-row">
          <TextField
            id="notice-fase"
            label="Tipo de cambio"
            color="success"
            variant="outlined"
            className="w-50 mr-05 mb-3"
            helperText={getHelperText(exchangeRate, 'lklk', '')}
            error={getErrorValue(exchangeRate)}
            value={exchangeRate}
            onChange={(e) => handleOffice('exchangeRate', e.target.value)}
          />
          <TextField
            id="notice-fase"
            label="*Descuento de cliente"
            color="success"
            variant="outlined"
            className="w-50 ml-05 mb-3"
            helperText={getHelperText(discountClient, 'lklk', '')}
            error={getErrorValue(discountClient)}
            value={discountClient}
            onChange={(e) => handleOffice('discountClient', e.target.value)}
          />
        </Box>

        <FormControl className="mb-3 w-50 d-flex " error={getErrorValue(bank)}>
          <InputLabel id="area-label" color="success">
            Banco
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bank}
            label="Acción en la gestion del trámite"
            onChange={(e) => handleOffice('bank', e.target.value)}
          >
            {banks &&
              banks.map((item) => (
                <MenuItem key={`${item.ppbaId}a`} value={item.ppbaId}>
                  {item.ppbaName}
                </MenuItem>
              ))}
          </Select>
          {errors && bank === '' ? <FormHelperText>lklk</FormHelperText> : ''}
        </FormControl>
        <TextField
          id="notice-fase"
          label="Cuenta de banco"
          color="success"
          variant="outlined"
          helperText={getHelperText(accountBank, 'lklk', '')}
          className="mb-3 w-50"
          error={getErrorValue(accountBank)}
          value={accountBank}
          onChange={(e) => handleOffice('accountBank', e.target.value)}
        />
        <TextField
          id="notice-fase"
          label="Porcentaje - tributación"
          color="success"
          variant="outlined"
          helperText={getHelperText(taxationPercentage, 'lklk', '')}
          className="mb-3 w-50 mr-05"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>
          }}
          error={getErrorValue(taxationPercentage)}
          value={taxationPercentage}
          onChange={(e) => handleOffice('taxationPercentage', e.target.value)}
        />
      </Box>
      <Box className="d-flex justify-content-center">
        <button
          variant="contained"
          type="button"
          className="btn btn-secondary px-5 mx-4 mr-05"
        >
          Cancelar
        </button>
        {!update ? (
          <button
            variant="contained"
            type="button"
            className="btn bg-primary-green btn-secondary px-5 mx-4 mr-05"
            onClick={() => createOffice()}
          >
            Guardar
          </button>
        ) : (
          <button
            variant="contained"
            type="button"
            className="btn bg-primary-green btn-secondary px-5 mx-4 ml-05"
            onClick={() => editOffice()}
          >
            Guardar
          </button>
        )}
      </Box>
    </Box>
  );
};

export default FormOffice;
