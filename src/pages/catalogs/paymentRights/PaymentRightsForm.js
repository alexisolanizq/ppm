import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import DivWidth from '@Component/common/div/DivWidth';
import Form from '@Component/common/form/Form';
import SelectStatus from '@Component/common/select/SelectStatus';
import SwitchController from '@Component/common/switch/SwitchController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import { fieldRequired } from '@Const/validations';
import usePaymentRightsForm from '@Hooks/catalogs/usePaymentRightsForm';
import React from 'react';
import AreasModal from '../areas/AreasModal';
import CurrencyModal from '../currency/CurrencyModal';

const PaymentRightsForm = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const {
    control,
    handleSubmit,
    onSubmit,
    areas,
    areasModal,
    currencies,
    isLoading,
    currencyModal,
    isLoadingMutation,
    errors
  } = usePaymentRightsForm({ onEnd, row, isUpdate });
  return (
    <>
      <Form
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
        <DivWidth porcentage={50}>
          <AutocompleteController
            name="jobArea.joaId"
            label="* Área"
            rules={fieldRequired}
            control={control}
            options={areas}
            optionId="joaId"
            optionName="joaName"
            disabled={isUpdate}
            componentAdd={
              <ButtonNewModal modulo="área" onClick={areasModal.openModal} />
            }
          />
          <TextFieldController
            name="pariArticleNumber"
            label="* Número de artículo"
            control={control}
            rules={fieldRequired}
          />
        </DivWidth>
        <TextFieldController
          name="pariArticleName"
          label="* Nombre del artículo"
          control={control}
          rules={fieldRequired}
        />
        <DivWidth porcentage={30}>
          <TextFieldController
            name="pariPrice"
            label="* Costo"
            control={control}
            rules={fieldRequired}
            type="number"
          />
        </DivWidth>
        <DivWidth porcentage={50}>
          <AutocompleteController
            name="currency.currId"
            label="* Moneda"
            rules={fieldRequired}
            control={control}
            options={currencies}
            optionId="currId"
            optionName="currName"
            componentAdd={
              <ButtonNewModal
                modulo="moneda"
                onClick={currencyModal.openModal}
              />
            }
          />
        </DivWidth>
        <SwitchController
          control={control}
          label="* Multiples registros:"
          name="pariMultipleRecord"
        />
        <SwitchController
          control={control}
          label="* ¿Descuento?"
          name="pariDiscount"
        />
        {isUpdate && (
          <DivWidth porcentage={50}>
            <SelectStatus control={control} name="pariStatus" />
          </DivWidth>
        )}
        <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
      </Form>
      <AreasModal
        isShow={areasModal.isOpen}
        onCancel={areasModal.closeModal}
        onEnd={areasModal.closeModal}
      />
      <CurrencyModal
        isShow={currencyModal.isOpen}
        onCancel={currencyModal.closeModal}
        onEnd={currencyModal.closeModal}
      />
    </>
  );
};

export default PaymentRightsForm;
