import React from 'react';
import Form from '@Component/common/form/Form';
import useCorrespondencesForm from '@Hooks/catalogs/useCorrespondencesForm';
import TextFieldController from '@Component/common/textField/TextFieldController';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import SelectStatus from '@Component/common/select/SelectStatus';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import { fieldRequired } from '@Const/validations';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import LanguageModal from '../languages/LanguageModal';

const CorrespondenceForm = ({
  isUpdate = false,
  onEnd,
  onCancel,
  row = null
}) => {
  const {
    isLoading,
    errors,
    handleSubmit,
    onSubmit,
    control,
    languages,
    isLoadingMutation,
    isLanguageOpen,
    closeLanguageModal,
    openLanguageModal
  } = useCorrespondencesForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <AutocompleteController
          name="language.lanId"
          control={control}
          label="* Idioma"
          optionId="lanId"
          optionName="lanName"
          options={languages}
          rules={fieldRequired}
          disabled={isUpdate}
          componentAdd={
            <ButtonNewModal modulo="idioma" onClick={openLanguageModal} />
          }
        />
        <TextFieldController
          name="cotiName"
          control={control}
          label="* Nombre del título de correspondencia"
          rules={fieldRequired}
        />
        {isUpdate && <SelectStatus name="cotiStatus" control={control} />}
        <ButtonsForm isLoading={isLoadingMutation} onCancel={onCancel} />
      </Form>
      <LanguageModal
        isShow={isLanguageOpen}
        onCancel={closeLanguageModal}
        onEnd={closeLanguageModal}
      />
    </>
  );
};

export default CorrespondenceForm;
