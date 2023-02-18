import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import Form from '@Component/common/form/Form';
import ImageUploadController from '@Component/common/imageUpload/ImageUploadController';
import SelectController from '@Component/common/select/SelectController';
import SwitchController from '@Component/common/switch/SwitchController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { fieldRequired } from '@Const/validations';
import useOfficeForm from '@Hooks/generals/useOfficeForm';
import React from 'react';
import InvoicingEntitesController from '@Component/common/invoicingEntities/InvoicingEntitesController';
import ContactsController from '@Component/common/contacts/ContactsController';
import TelephonesController from '@Component/common/telephones/TelephonesController';
import ButtonsFormClick from '@Component/common/button/ButtonsFormClick';

const OfficeForm = ({
  row = null,
  onCancel = () => {},
  onSubmit = () => {},
  isLoadingButton
}) => {
  const {
    control,
    errors,
    countries,
    isLoading,
    telephones,
    addTelephone,
    languages,
    currencies,
    banks,
    handleSubmit
  } = useOfficeForm({ row });

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      isLoading={isLoading}
    >
      <ImageUploadController control={control} name="imagen" />
      <TextFieldController
        name="offName"
        label="* Nombre de la oficina"
        control={control}
        rules={fieldRequired}
      />
      <DivWidth px="auto">
        <TextFieldController
          name="offCodePostal"
          label="* Código postal"
          control={control}
          rules={fieldRequired}
        />
      </DivWidth>
      <TextFieldController
        name="offStreet"
        label="* Calle"
        control={control}
        rules={fieldRequired}
      />
      <Flex gap={16}>
        <DivWidth px="auto">
          <TextFieldController
            name="offOutsideNumber"
            label="* Número exterior"
            control={control}
            rules={fieldRequired}
          />
        </DivWidth>
        <DivWidth px="auto">
          <TextFieldController
            name="offInnerNumber"
            label="Número interior"
            control={control}
          />
        </DivWidth>
      </Flex>
      <TextFieldController
        name="offColony"
        label="* Colonia"
        control={control}
        rules={fieldRequired}
      />
      <TextFieldController
        name="offCity"
        label="* Ciudad"
        control={control}
        rules={fieldRequired}
      />
      <TextFieldController
        name="offTownship"
        label="Municipio"
        control={control}
      />
      <TextFieldController
        name="offState"
        label="* Estado"
        control={control}
        rules={fieldRequired}
      />
      <SelectController
        control={control}
        label="* País"
        name="country.counId"
        rules={fieldRequired}
        options={countries}
        optionId="counId"
        optionName="counNameSpa"
      />
      <TelephonesController
        control={control}
        telephones={telephones}
        name="officeTelephone"
        nameCode="ofteCountryCode"
        nameNumber="ofteNumber"
        onAdd={() => addTelephone({ ofteNumber: '' })}
      />
      <DivWidth porcentage={50}>
        <TextFieldController
          name="offEmail"
          label="Correo electrónico"
          control={control}
        />
        <TextFieldController name="offFax" label="FAX" control={control} />
      </DivWidth>
      <ContactsController
        control={control}
        name="officeContact"
        nameMain="ofcoPredetermined"
      />
      <SwitchController
        label="¿Misma agente a facturar?"
        control={control}
        name="mismoagente"
        width="auto"
      />
      <InvoicingEntitesController
        nameMain="offbeMain"
        control={control}
        name="officeBillingEntity"
      />
      <Flex gap={16}>
        <SelectController
          control={control}
          label="Idioma de correspondencia"
          name="languageCorrespondence.lanId"
          rules={fieldRequired}
          options={languages}
          optionId="lanId"
          optionName="lanName"
        />
        <SelectController
          control={control}
          label="*Divisa para pago"
          name="currency.currId"
          rules={fieldRequired}
          options={currencies}
          optionId="currId"
          optionName="currName"
        />
      </Flex>
      <Flex gap={16}>
        <TextFieldController
          label="Tipo de cambio"
          control={control}
          name="offExchangeRate"
        />
        <TextFieldController
          label="*Descuento"
          control={control}
          name="officeCustomer.offDiscount"
          rules={fieldRequired}
        />
      </Flex>
      <DivWidth porcentage={50}>
        <TextFieldController
          label="Sitio web"
          control={control}
          name="offSiteWeb"
        />
        <SelectController
          control={control}
          label="Banco"
          name="bank.ppbaId"
          options={banks}
          optionId="ppbaId"
          optionName="ppbaName"
        />
        <TextFieldController
          label="Cuenta de banco"
          control={control}
          name="offAccountBank"
        />
        <TextFieldController
          label="Porcentaje - tributación"
          control={control}
          name="offTaxationPercentage"
        />
      </DivWidth>
      <ButtonsFormClick
        isLoading={isLoadingButton}
        onCancel={onCancel}
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(onSubmit)(event);
        }}
      />
    </Form>
  );
};

export default OfficeForm;
