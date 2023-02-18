import React from 'react';
import Form from '@Component/common/form/Form';
import { fieldRequired } from '@Const/validations';
import { CURRENCY, COUNTRY } from '@Const/catalogs';
import SelectStatus from '@Component/common/select/SelectStatus';
import useCurrencyForm from '@Hooks/catalogs/useCountryCurrencyForm';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectController from '@Component/common/select/SelectController';
import AutocompleteMultiple from '@Component/common/autocomplete/AutocompleteMultiple';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import CurrencyModal from '../currency/CurrencyModal';
import CountriesModal from '../countries/CountriesModal';

const CurrencyCountryForm = ({
  isUpdate = false,
  onEnd,
  onCancel,
  row = null
}) => {
  const {
    errors,
    control,
    onSubmit,
    isLoading,
    countries,
    currencies,
    handleSubmit,
    isLoadingMutation,
    isCurrencyOpen,
    openCurrencyModal,
    closeCurrencyModal,
    isCountryOpen,
    openCountryModal,
    closeCountryModal
  } = useCurrencyForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        error={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        {isUpdate ? (
          <SelectController
            control={control}
            label={COUNTRY}
            name="country.counId"
            options={countries}
            optionId="counId"
            optionName="counNameSpa"
            rules={fieldRequired}
            disabled={isUpdate}
          />
        ) : (
          <AutocompleteMultiple
            control={control}
            label={COUNTRY}
            rules={fieldRequired}
            name="country.counId"
            options={countries}
            optionId="counId"
            optionName="counNameSpa"
            componentAdd={
              <ButtonNewModal modulo="país" onClick={openCountryModal} />
            }
          />
        )}
        <AutocompleteController
          name="currency.currId"
          control={control}
          options={currencies}
          label={CURRENCY}
          optionId="currId"
          optionName="currName"
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="monedas" onClick={openCurrencyModal} />
          }
        />
        {isUpdate && <SelectStatus name="cocuStatus" control={control} />}

        <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
      </Form>
      <CurrencyModal
        isShow={isCurrencyOpen}
        onCancel={closeCurrencyModal}
        onEnd={closeCurrencyModal}
      />
      <CountriesModal
        isShow={isCountryOpen}
        onCancel={closeCountryModal}
        onEnd={closeCountryModal}
      />
    </>
  );
};

export default CurrencyCountryForm;
