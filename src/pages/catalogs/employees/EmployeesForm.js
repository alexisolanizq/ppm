import AddressController from '@Component/common/address/AddressController';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import DatePickerController from '@Component/common/datePicker/DatePickerController';
import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import Form from '@Component/common/form/Form';
import FormSectionTitle from '@Component/common/form/FormSectionTitle';
import Grid from '@Component/common/grid/Grid';
import ImageUploadController from '@Component/common/imageUpload/ImageUploadController';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import SelectStatus from '@Component/common/select/SelectStatus';
import SwitchController from '@Component/common/switch/SwitchController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { FILES_SOURCE_EMPLOYEE } from '@Const/files';
import { GENDER } from '@Const/lists';
import { SIZES } from '@Const/styles';
import {
  fieldRegexAlphaAcents,
  fieldRequired,
  fieldRequiredRegexAlphaAcents,
  InputPropsMaxLength
} from '@Const/validations';
import useEmployeesForm from '@Hooks/catalogs/useEmployeesForm';
import React from 'react';

const EmployeesForm = ({
  onCancel,
  row = null,
  isUpdate = false,
  onEnd = () => {}
}) => {
  const {
    control,
    handleSubmit,
    onSubmit,
    isLoadingForm,
    rulesRFC,
    rulesCURP
  } = useEmployeesForm({ row, isUpdate, onEnd });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormSectionTitle title="Información personal" />
      <ImageUploadController
        source={FILES_SOURCE_EMPLOYEE}
        idSource={row?.empId}
        control={control}
        name="imagen"
      />
      <TextFieldController
        label="* Nombre"
        control={control}
        name="empName"
        disabled={isUpdate}
        rules={fieldRequiredRegexAlphaAcents}
      />
      <Grid repeat={2} gap={SIZES.SIXTEEN}>
        <TextFieldController
          label="* Apellido paterno"
          control={control}
          name="empFirstName"
          disabled={isUpdate}
          rules={fieldRequiredRegexAlphaAcents}
        />
        <TextFieldController
          label="Apellido materno"
          control={control}
          name="empLastName"
          disabled={isUpdate}
          rules={fieldRegexAlphaAcents}
        />
      </Grid>
      <DivWidth porcentage={50}>
        <DatePickerController
          label="* Fecha de nacimiento"
          control={control}
          name="empBirthDate"
          disabled={isUpdate}
          rules={fieldRequired}
        />
      </DivWidth>
      <RadioGroupController
        label="* Sexo:"
        options={GENDER}
        control={control}
        name="empGender"
        rules={fieldRequired}
        isHorizontal
        isString
        disabled={isUpdate}
      />
      <Grid repeat={2} gap={SIZES.SIXTEEN}>
        <TextFieldController
          label="* CURP"
          control={control}
          name="empCurp"
          rules={rulesCURP}
          disabled={isUpdate}
          inputProps={InputPropsMaxLength(18)}
        />
        <TextFieldController
          label="* RFC"
          control={control}
          name="empRfc"
          rules={rulesRFC}
          disabled={isUpdate}
          inputProps={InputPropsMaxLength(13)}
        />
      </Grid>
      <SwitchController
        label="* ¿Acceso al sistema?"
        control={control}
        name="empSystemAccess"
      />
      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectStatus control={control} label="* Estado" name="empStatus" />
        </DivWidth>
      )}
      <FormSectionTitle title="Información de contacto" />
      <Flex gap={SIZES.SIXTEEN}>
        <TextFieldController
          label="* Teléfono 1"
          control={control}
          name="contactTelephonesEmployees.0.coteTelephone"
          rules={fieldRequired}
          inputProps={InputPropsMaxLength(10)}
        />
        <TextFieldController
          label="Teléfono 2"
          control={control}
          name="contactTelephonesEmployees.1.coteTelephone"
          inputProps={InputPropsMaxLength(10)}
        />
        <TextFieldController
          label="Teléfono 3"
          control={control}
          name="contactTelephonesEmployees.2.coteTelephone"
          inputProps={InputPropsMaxLength(10)}
        />
      </Flex>
      <DivWidth porcentage={50}>
        <TextFieldController
          label="* Correo electrónico"
          control={control}
          name="empEmail"
          rules={fieldRequired}
        />
      </DivWidth>
      <FormSectionTitle title="Información de ubicación" />
      <AddressController
        name="addresses"
        nameMain="emadMain"
        control={control}
        isPrincipal
      />
      <ButtonsForm onCancel={onCancel} isLoading={isLoadingForm} />
    </Form>
  );
};

export default EmployeesForm;
