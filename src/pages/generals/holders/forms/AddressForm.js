import React from 'react';
import { MenuItem } from '@mui/material';
import { Home } from '@mui/icons-material';
import Flex from '@Component/common/flex/Flex';
import Text from '@Component/common/text/Text';
import Form from '@Component/common/form/Form';
import TextFieldController from '@Component/common/textField/TextFieldController';
import {
  CANCEL_LABEL,
  FIELDS_REQUIRED,
  FIELD_REQUIRED,
  SAVE_LABEL
} from '@Const/const';
import {
  ADD_ADDRESS,
} from '@Const/generals';
import {
  INPUT_ADDRESS_NAME,
  INPUT_CITY,
  INPUT_COUNTRY,
  INPUT_INT_NUMBER,
  INPUT_OUT_NUMBER,
  INPUT_POSTAL_CODE,
  INPUT_STATE,
  INPUT_STREET,
  INPUT_SUBURB,
  INPUT_TOWN
} from '@Const/formsFields'
import Button from '@Component/common/button/Button';

const AddressForm = ({
  handleSubmit,
  handleAddressSubmit,
  handleAddress,
  countries,
  control
}) => (
    <Form onSubmit={handleSubmit(handleAddressSubmit)}>
      <Text className="text-danger mb-3">{FIELDS_REQUIRED}</Text>
      <TextFieldController
        name="addressName"
        control={control}
        label={INPUT_ADDRESS_NAME}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="postalCode"
        control={control}
        label={INPUT_POSTAL_CODE}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="street"
        control={control}
        label={INPUT_STREET}
        rules={{ required: FIELD_REQUIRED }}
      />
      <Flex gap={10}>
        <TextFieldController
          name="outNumber"
          control={control}
          label={INPUT_OUT_NUMBER}
          rules={{ required: FIELD_REQUIRED }}
        />
        <TextFieldController
          name="intNumber"
          control={control}
          label={INPUT_INT_NUMBER}
          rules={{ required: FIELD_REQUIRED }}
        />
      </Flex>
      <TextFieldController
        name="suburb"
        control={control}
        label={INPUT_SUBURB}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="city"
        control={control}
        label={INPUT_CITY}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="town"
        control={control}
        label={INPUT_TOWN}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="state"
        control={control}
        label={INPUT_STATE}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        select
        name="country"
        control={control}
        label={INPUT_COUNTRY}
        rules={{ required: FIELD_REQUIRED }}
      >
        {countries.map((country) => (
          <MenuItem key={country.counId} value={country.counId}>
            {country.counNameSpa}
          </MenuItem>
        ))}
      </TextFieldController>

      <Flex className="mb-4">
        <Home sx={{ color: '#005953' }} />{' '}
        <Text isPrimary isBold className="fs-6 ms-2">
          {ADD_ADDRESS}
        </Text>
      </Flex>
      <Flex className="justify-content-evenly">
        <Button isCancel onClick={handleAddress}>{CANCEL_LABEL}</Button>
        <Button isSubmit>{SAVE_LABEL}</Button>
      </Flex>
    </Form>
  );
export default AddressForm;
