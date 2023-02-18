import React from 'react';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import {
  DIRECTORY,
  FIELDS_REQUIRED,
  FIELD_REQUIRED,
  VALUE_ONE
} from '@Const/const';
import {
  ATTACH_RGP_POWER_LETTER,
  BILLING_ENTITY,
  HAS_POWER_LETTER,
  HOLDER_BUSSINES_NAME,
  HOLDER_DISCOUNT,
  HOLDER_FIRST_NAME,
  HOLDER_LAST_NAME,
  HOLDER_NAME,
  HOLDER_TYPE,
  NATIONALITY,
  RGP_NUMBER,
  SAME_AGENT
} from '@Const/generals';
import { TYPE_PERSON } from '@Const/lists';
import Form from '@Component/common/form/Form';
import Text from '@Component/common/text/Text';
import Flex from '@Component/common/flex/Flex';
import { PERSONAL_DATA } from '@Const/catalogs';
import { AccountCircle } from '@mui/icons-material';
import DropzoneBox from '@Component/common/dropzones/DropzoneBox';
import TextFieldController from '@Component/common/textField/TextFieldController';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import SwitchController from '@Component/common/switch/SwitchController';
import ImageUploadController from '@Component/common/imageUpload/ImageUploadController';
import useHolderForm from '@Hooks/generals/useHolderForm';
import { Link } from 'react-router-dom';

const HolderForm = ({ onEnd = () => {}, isSubmit = true, row = null }) => {

  const { watch, handleSubmit, control, onSubmit, isLoadingMutation } =
    useHolderForm({ onEnd, isSubmit, row });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text className="text-danger mb-3">{FIELDS_REQUIRED}</Text>
      <Text className="mb-3 fs-6" isBold>
        {PERSONAL_DATA}
      </Text>

      <ImageUploadController control={control} name="imagen" />

      <RadioGroupController
        label={`${HOLDER_TYPE}:`}
        options={TYPE_PERSON}
        control={control}
        name="holType.opcgId"
        isHorizontal
      />

      {watch('holType.opcgId') === VALUE_ONE ? (
        <>
          <TextFieldController
            name="holName"
            control={control}
            label={HOLDER_NAME}
            rules={{ required: FIELD_REQUIRED }}
          />
          <Flex gap={10}>
            <TextFieldController
              name="holFirstName"
              control={control}
              label={HOLDER_FIRST_NAME}
              rules={{ required: FIELD_REQUIRED }}
            />
            <TextFieldController
              name="holLastName"
              control={control}
              label={HOLDER_LAST_NAME}
              rules={{ required: FIELD_REQUIRED }}
            />
          </Flex>
        </>
      ) : (
        <TextFieldController
          name="holBussinesName"
          control={control}
          label={HOLDER_BUSSINES_NAME}
          rules={{ required: FIELD_REQUIRED }}
        />
      )}
      <TextFieldController
        name="holNationality"
        control={control}
        label={NATIONALITY}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="holRgpNumber"
        control={control}
        label={RGP_NUMBER}
        rules={{ required: FIELD_REQUIRED }}
      />
      <TextFieldController
        name="holDiscount"
        control={control}
        label={HOLDER_DISCOUNT}
        rules={{ required: FIELD_REQUIRED }}
      />
      <Flex className="mb-4">
        <AccountCircle sx={{ color: '#005953' }} />
        <Text isPrimary isBold className="fs-6 ms-2">
          {DIRECTORY}
        </Text>
      </Flex>

      <SwitchController label={SAME_AGENT} name="sameAgent" control={control} />

      <SwitchController
        label={HAS_POWER_LETTER}
        name="powerLetter"
        control={control}
      />

      <Flex className="mb-4">
        <AccountCircle sx={{ color: '#005953' }} />{' '}
        <Text isPrimary isBold className="fs-6 ms-2">
          {BILLING_ENTITY}
        </Text>
      </Flex>

      <Flex className="mb-4">
        <Text isPrimary isBold className="fs-6 mb-3">
          {ATTACH_RGP_POWER_LETTER}
        </Text>
      </Flex>

      <DropzoneBox />

      <ButtonsForm isLoading={isLoadingMutation} onCancel={() => {}} />
    </Form>
  );
};

export default HolderForm;
