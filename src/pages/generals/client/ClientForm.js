import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import Grid from '@Component/common/grid/Grid';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import SelectController from '@Component/common/select/SelectController';
import SwitchController from '@Component/common/switch/SwitchController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import HomeIcon from '@mui/icons-material/Home';
import React, { Fragment } from 'react';
import Button from '@Component/common/button/Button';
import Form from '@Component/common/form/Form';
import Label from '@Component/common/label/Label';
import ImageUploadController from '@Component/common/imageUpload/ImageUploadController';
import InvoicingEntitesController from '@Component/common/invoicingEntities/InvoicingEntitesController';
import FormSectionTitle from '@Component/common/form/FormSectionTitle';
import { DB_CURRENCY_ID_PESOS } from '@Const/db';
import {
  ID_OPTION_ASOCIATE_CATALOG_AGENT,
  ID_OPTION_CLIENT_CATALOG_AGENT,
  ID_OPTION_PROVIDER_CATALOG_AGENT
} from '@Const/const';
import ContactsController from '@Component/common/contacts/ContactsController';
import AddressController from '@Component/common/address/AddressController';
import TelephonesController from '@Component/common/telephones/TelephonesController';
import { SIZES } from '@Const/styles';
import useClientForm from '@Hooks/generals/useClientForm';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import { fieldRequired, fieldRequiredRegexAlphaAcents } from '@Const/validations';

const ClientForm = ({
  onCancel = () => {},
  onEnd = () => {},
  row = null,
  isUpdate = false
}) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    countries,
    nationalities,
    languages,
    currencies,
    expirationUnits,
    banks,
    personTypes,
    paymentMethods,
    isLoading,
    watch,
    telephones,
    addTelephone,
    errors,
    isLoadingMutation,
    banksField,
    wayPays
  } = useClientForm({ onEnd, row, isUpdate });

  return (
    <Form
      isLoading={isLoading}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ImageUploadController control={control} name="imagen" />
      <SwitchController
        label="¿Es cliente?"
        control={control}
        name="isClient"
      />
      <SwitchController
        label="¿Es asociado?"
        control={control}
        name="isPartner"
      />
      <SwitchController
        label="¿Es proveedor?"
        control={control}
        name="isProvider"
      />
      <RadioGroupController
        label="Tipo de cliente:"
        options={personTypes}
        control={control}
        name="typePerson.opcgId"
        rules={fieldRequired}
        isHorizontal
        optionId="idOptionCatGeneric"
        optionName="description"
      />
      {watch('typePerson.opcgId') === 2 ? (
        <TextFieldController
          label="*Nombre de la razón social"
          control={control}
          name="ageBussinesName"
          rules={fieldRequiredRegexAlphaAcents}
        />
      ) : (
        <>
          <TextFieldController
            label="*Nombre"
            control={control}
            name="ageName"
            rules={fieldRequired}
          />
          <Grid gap={SIZES.SIXTEEN} repeat={2}>
            <TextFieldController
              label="*Apellido paterno"
              control={control}
              name="ageFirstName"
              rules={fieldRequired}
            />
            <TextFieldController
              label="Apellido materno"
              control={control}
              name="ageLastName"
            />
          </Grid>
        </>
      )}
      <FormSectionTitle title="Información de ubicación" />
      <DivWidth porcentage="50">
        <SelectController
          control={control}
          label="Nacionalidad"
          name="nationality.opcgId"
          options={nationalities}
          optionId="idOptionCatGeneric"
          optionName="description"
        />
      </DivWidth>
      {!isUpdate && (
        <AddressController
          nameMain="agadMain"
          control={control}
          name="agentAddresses"
        />
      )}
      <FormSectionTitle title="Información de contacto" />
      <TelephonesController
        control={control}
        name="agentTelephones"
        nameCode="agteCountryCode"
        nameNumber="agteNumber"
        telephones={telephones}
        onAdd={addTelephone}
      />
      <DivWidth porcentage={50}>
        <TextFieldController
          label="Correo electrónico"
          control={control}
          name="ageEmail"
        />
        <TextFieldController label="Fax" control={control} name="ageFax" />
        <TextFieldController
          label="Sitio web"
          control={control}
          name="ageWebSite"
          rules={fieldRequired}
        />
        <SelectController
          control={control}
          label="Idioma de correspondencia"
          name="language.lanId"
          rules={fieldRequired}
          options={languages}
          optionId="lanId"
          optionName="lanName"
        />
        {!isUpdate && (
          <SwitchController
            label="¿Misma residencia fiscal?"
            control={control}
            name="escliente2"
            width="auto"
          />
        )}
      </DivWidth>
      <SelectController
        control={control}
        label="Residencia fiscal"
        name="countryFiscalResidence.counId"
        rules={fieldRequired}
        options={countries}
        optionId="counId"
        optionName="counNameSpa"
      />
      {!isUpdate && (
        <Flex align="center" className="mb-4" gap={SIZES.TWENTYFOUR}>
          <ContactsController
            control={control}
            name="contact"
            nameMain="agcoMain"
          />
          <Button isBorderPrimary icon={HomeIcon}>
            Agregar sucursal
          </Button>
        </Flex>
      )}
      <FormSectionTitle title="Información de facturación" />
      {!isUpdate && (
        <>
          <SwitchController
            label="¿Misma agente a facturar?"
            control={control}
            name="mismoagente"
            width="auto"
          />
          <InvoicingEntitesController
            name="agentBillingEntities"
            control={control}
            nameMain="agbeMain"
            addresses={watch('mismoagente') ? watch('agentAddresses') : []}
          />
        </>
      )}
      <DivWidth porcentage={50}>
        <SelectController
          control={control}
          label="*Divisa para pago"
          name="agentInvoicings.0.currency.currId"
          rules={fieldRequired}
          options={currencies}
          optionId="currId"
          optionName="currName"
        />
        {watch('agentInvoicings.0.currency.currId') !==
          DB_CURRENCY_ID_PESOS && (
          <TextFieldController
            label="Tipo de cambio"
            control={control}
            name="agentInvoicings.0.aginChangeType"
          />
        )}

        <TextFieldController
          label="*Descuento de cliente"
          control={control}
          name="agentInvoicings.0.aginDiscount"
          rules={fieldRequired}
        />

        <TextFieldController
          label="*Porcentaje - tributación"
          control={control}
          name="agentInvoicings.0.aginTaxationPercentage"
          rules={fieldRequired}
        />
      </DivWidth>
      <FormSectionTitle title="Administración" />
      <div>
        <Label isPrimary id="termino-factura-cobrable">
          * Término factura cobrable
        </Label>
        <Flex gap={16}>
          <DivWidth px="auto">
            <TextFieldController
              control={control}
              name="agentAdms.0.agadChargeableInvoiceTerm"
              placeholder="Tiempo"
              rules={fieldRequired}
            />
          </DivWidth>
          <DivWidth px="auto">
            <SelectController
              label={null}
              control={control}
              placeholder="Lapso"
              name="agentAdms.0.chargeableInvoiceTerm.opcgId"
              rules={fieldRequired}
              options={expirationUnits}
              optionId="idOptionCatGeneric"
              optionName="description"
            />
          </DivWidth>
        </Flex>
      </div>
      <div>
        <Label isPrimary id="termino-factura-cobrable">
          * Término factura incobrable
        </Label>
        <Flex gap={16}>
          <DivWidth px="auto">
            <TextFieldController
              control={control}
              name="agentAdms.0.agadUncollectibleInvoiceTerm"
              placeholder="Tiempo"
              rules={fieldRequired}
            />
          </DivWidth>
          <DivWidth px="auto">
            <SelectController
              label={null}
              control={control}
              placeholder="Lapso"
              name="agentAdms.0.uncollectibleInvoiceTerm.opcgId"
              rules={fieldRequired}
              options={expirationUnits}
              optionId="idOptionCatGeneric"
              optionName="description"
            />
          </DivWidth>
        </Flex>
      </div>
      {banksField.map((field, index) => (
        <Fragment key={`bank-account-${field.id}`}>
          {field.role.opcgId === ID_OPTION_CLIENT_CATALOG_AGENT && (
            <FormSectionTitle title="Información cliente" />
          )}
          {field.role.opcgId === ID_OPTION_PROVIDER_CATALOG_AGENT && (
            <FormSectionTitle title="Información proveedor" />
          )}
          {field.role.opcgId === ID_OPTION_ASOCIATE_CATALOG_AGENT && (
            <FormSectionTitle title="Información asociado" />
          )}
          <DivWidth porcentage={50}>
            <SelectController
              control={control}
              label="Banco"
              name={`agentBanks.${index}.ppmBank.ppbaId`}
              options={banks}
              optionId="ppbaId"
              optionName="ppbaName"
            />
            <TextFieldController
              label="Cuenta de banco"
              control={control}
              name={`agentBanks.${index}.agacBankAccount`}
            />
            <SelectController
              control={control}
              label="Método de pago"
              name={`agentBanks.${index}.paymentMethod.opcgId`}
              options={paymentMethods}
              optionId="idOptionCatGeneric"
              optionName="description"
            />
            <SelectController
              control={control}
              label="Forma de pago"
              name={`agentBanks.${index}.paymentForm.opcgId`}
              options={wayPays}
              optionId="idOptionCatGeneric"
              optionName="description"
            />
            {field.role.opcgId === ID_OPTION_CLIENT_CATALOG_AGENT && (
              <TextFieldController
                label="Banco extranjero"
                control={control}
                name={`agentBanks.${index}.agacForeignBankAccount`}
              />
            )}
          </DivWidth>
        </Fragment>
      ))}
      <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
    </Form>
  );
};

export default ClientForm;
