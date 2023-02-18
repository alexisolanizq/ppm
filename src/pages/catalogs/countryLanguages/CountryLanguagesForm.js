import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import AutocompleteMultiple from '@Component/common/autocomplete/AutocompleteMultiple';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import Form from '@Component/common/form/Form';
import SelectStatus from '@Component/common/select/SelectStatus';
import { fieldRequired } from '@Const/validations';
import useCountryLanguagesForm from '@Hooks/catalogs/useCountryLanguagesForm';
import React from 'react';
import LanguageModal from '../languages/LanguageModal';

const CountryLanguagesForm = ({ onCancel, row, isUpdate, onEnd }) => {
  const {
    control,
    handleSubmit,
    onSubmit,
    languages,
    countries,
    isLoading,
    isLoadingMutation,
    modalLanguage
  } = useCountryLanguagesForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} isLoading={isLoading}>
        {isUpdate ? (
          <AutocompleteController
            name="country.counId"
            label="* País"
            control={control}
            rules={fieldRequired}
            options={countries}
            optionId="counId"
            optionName="counNameSpa"
          />
        ) : (
          <AutocompleteMultiple
            control={control}
            name="countries"
            label="* Países"
            options={countries}
            rules={fieldRequired}
            optionId="counId"
            optionName="counNameSpa"
          />
        )}
        <AutocompleteController
          name="language.lanId"
          label="* Idioma"
          control={control}
          rules={fieldRequired}
          options={languages}
          optionId="lanId"
          optionName="lanName"
          componentAdd={
            <ButtonNewModal modulo="idioma" onClick={modalLanguage.openModal} />
          }
        />
        {isUpdate && (
          <SelectStatus control={control} name="status" label='Estatus'/>
        )}
        <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
      </Form>
      <LanguageModal
        isShow={modalLanguage.isOpen}
        onCancel={modalLanguage.closeModal}
        onEnd={modalLanguage.closeModal}
      />
    </>
  );
};

export default CountryLanguagesForm;
