import React from 'react';

import Form from '@Component/common/form/Form';
import Flex from '@Component/common/flex/Flex';
import DivWidth from '@Component/common/div/DivWidth';
import TitleValue from '@Component/common/text/TitleValue';
import FormSectionTitle from '@Component/common/form/FormSectionTitle';
import SwitchController from '@Component/common/switch/SwitchController';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import ImageUploadController from '@Component/common/imageUpload/ImageUploadController';

import { STATUS_LIST } from '@Const/lists';
import { DEFAULT_WORD } from '@Const/const';
import { fieldNotRequired, InputPropsMaxLength } from '@Const/validations';
import { DB_COUNTRY_ID_MEXICO, DB_TYPE_PERSON_ID_PHYSICS } from '@Const/db';

import useInvoicingEntityForm from '@Hooks/generals/useInvoicingEntityForm';
import ButtonsFormClick from '@Component/common/button/ButtonsFormClick';
import Select from '@Component/common/select/Select';
import { getAdressText } from '@Utils/address';

const InvoicingEntityForm = ({
  isUpdate = false,
  row = null,
  onSubmit,
  isLoading: isLoadingButton = false,
  fromCurrentPage = false,
  onCancel = () => {},
  addresses
}) => {
  const {
    control,
    handleSubmitEntity,
    onChangeCountry,
    watchCountry,
    watchTypePerson,
    fieldRequired,
    rfcRequired,
    rfcForeignRequired,
    personTypeOptions,
    regimeOptions,
    countryOptions,
    cfdiOptions,
    isLoading,
    isMain,
    onChangeAddress
  } = useInvoicingEntityForm({ row });

  return (
    <Form isLoading={isLoading} id="form-entity">
      <FormSectionTitle title="Información de la entidad" />
      <ImageUploadController control={control} name="imagen" />
      {isMain && <TitleValue title={DEFAULT_WORD} />}
      {isUpdate && (
        <DivWidth porcentage={50}>
          <SelectController
            name="bienStatus"
            label="Estado"
            control={control}
            options={STATUS_LIST}
            optionId="id"
            optionValue="value"
            optionName="label"
            disabled={isMain}
          />
        </DivWidth>
      )}
      {!fromCurrentPage && (
        <SwitchController
          label="¿Entidad de facturación principal?"
          control={control}
          name="isDefault"
          width={300}
        />
      )}
      <Flex gap={24}>
        <DivWidth porcentage={50}>
          <SelectController
            name="typePerson.opcgId"
            label="* Tipo de entidad de facturación"
            control={control}
            rules={fieldRequired}
            options={personTypeOptions}
            optionId="idOptionCatGeneric"
            optionName="description"
          />
        </DivWidth>
        <DivWidth porcentage={50}>
          <SelectController
            name="regime.opcgId"
            label="* Regimen"
            control={control}
            rules={fieldRequired}
            options={regimeOptions}
            optionId="idOptionCatGeneric"
            optionName="description"
          />
        </DivWidth>
      </Flex>
      {watchTypePerson === DB_TYPE_PERSON_ID_PHYSICS ? (
        <Flex gap={24}>
          <TextFieldController
            name="bienName"
            label="* Nombre(s)"
            control={control}
            rules={fieldRequired}
          />
          <TextFieldController
            name="bienFirstName"
            label="* apellido paterno"
            control={control}
            rules={fieldRequired}
          />
          <TextFieldController
            name="bienLastName"
            label="Apellido materno"
            control={control}
          />
        </Flex>
      ) : (
        <TextFieldController
          name="bienName"
          label="* Nombre(s)"
          control={control}
          rules={fieldRequired}
        />
      )}
      <FormSectionTitle title="Información de ubicación" />
      {(addresses && addresses.length > 0) && (
        <Select
          isValueObject
          options={addresses}
          isDefaultValue
          render={(item) => getAdressText(item.address)}
          onChange={onChangeAddress}
          placeholder="Selecciona una dirección"
        />
      )}
      <SelectController
        name="country.counId"
        label="* País"
        control={control}
        rules={fieldRequired}
        options={countryOptions}
        optionId="counId"
        optionName="counNameSpa"
        onChange={onChangeCountry}
      />
      <DivWidth porcentage="25">
        {watchCountry === DB_COUNTRY_ID_MEXICO ? (
          <TextFieldController
            name="bienCodePostal"
            label="* Código postal"
            control={control}
            rules={fieldRequired}
          />
        ) : (
          <TextFieldController
            name="bienCodePostal"
            label="Código postal"
            control={control}
            rules={fieldNotRequired}
          />
        )}
      </DivWidth>
      <TextFieldController
        name="bienStreet"
        label="* Calle"
        control={control}
        rules={fieldRequired}
      />
      <Flex gap={24}>
        <DivWidth porcentage={25}>
          <TextFieldController
            name="bienOutsideNumber"
            label="* Número exterior"
            control={control}
            rules={fieldRequired}
          />
        </DivWidth>
        <DivWidth porcentage={25}>
          <TextFieldController
            name="bienInnerNumber"
            label="Número interior"
            control={control}
          />
        </DivWidth>
      </Flex>
      <TextFieldController
        name="bienColony"
        label="Colonia"
        control={control}
      />
      <TextFieldController
        name="bienCity"
        label="* Ciudad"
        control={control}
        rules={fieldRequired}
      />
      <TextFieldController
        name="bienTownship"
        label="Municipio"
        control={control}
      />
      <TextFieldController name="bienState" label="Estado" control={control} />
      <FormSectionTitle title="Información de facturación" />
      <DivWidth porcentage={50}>
        {watchTypePerson === DB_TYPE_PERSON_ID_PHYSICS ? (
          <TextFieldController
            name="bienRfc"
            label="* RFC"
            control={control}
            inputProps={InputPropsMaxLength(13)}
            rules={rfcRequired}
          />
        ) : (
          <TextFieldController
            name="bienRfc"
            label="* RFC"
            control={control}
            inputProps={InputPropsMaxLength(12)}
            rules={rfcForeignRequired}
          />
        )}
      </DivWidth>
      <DivWidth porcentage={50}>
        {watchCountry === DB_COUNTRY_ID_MEXICO ? (
          <TextFieldController
            disabled
            name="vatNif"
            label="VAT o NIF"
            control={control}
            rules={fieldNotRequired}
          />
        ) : (
          <TextFieldController
            name="vatNif"
            label="* VAT o NIF"
            control={control}
            rules={fieldRequired}
          />
        )}
      </DivWidth>
      <FormSectionTitle title="Administración" />
      <DivWidth porcentage={50}>
        <SelectController
          name="cfdi.opcgId"
          label="* Uso CFDI"
          control={control}
          rules={fieldRequired}
          options={cfdiOptions}
          optionId="idOptionCatGeneric"
          optionName="description"
        />
      </DivWidth>
      <DivWidth porcentage={50}>
        <TextFieldController
          name="bienPurchaseOrder"
          label="* Orden de compra"
          control={control}
          rules={fieldRequired}
        />
      </DivWidth>

      <ButtonsFormClick
        onCancel={onCancel}
        onClick={(event) => {
          event.preventDefault();
          handleSubmitEntity(onSubmit)(event);
        }}
        isLoading={isLoadingButton}
      />
    </Form>
  );
};

export default InvoicingEntityForm;
