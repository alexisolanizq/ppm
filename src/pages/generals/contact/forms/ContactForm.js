import React from 'react';
import Form from '@Component/common/form/Form';
import {
  STATUS
} from '@Const/const';
import ImageUploadController from '@Component/common/imageUpload/ImageUploadController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import {
  INPUT_EMAIL,
  INPUT_FAX,
  INPUT_FIRST_NAME,
  INPUT_LABEL,
  INPUT_LAST_NAME,
  INPUT_NAME,
  INPUT_PHONE,
  INPUT_TITLE
} from '@Const/formsFields';
import Flex from '@Component/common/flex/Flex';
import DivWidth from '@Component/common/div/DivWidth';
import Icon from '@Component/common/icon/Icon';
import { AddCircleOutline } from '@mui/icons-material';
import useContactForm from '@Hooks/generals/contacts/useContactForm';
import SelectController from '@Component/common/select/SelectController';
import { LABEL_LIST, STATUS_LIST, TITLES } from '@Const/lists';
import {
  fieldPhones,
  fieldRequired,
  InputPropsMaxLength
} from '@Const/validations';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import LabelModal from '@Component/common/label/LabelModal';
import ButtonsFormClick from '@Component/common/button/ButtonsFormClick';
import AutocompleteMultiple from '@Component/common/autocomplete/AutocompleteMultiple';

const ContactForm = ({
  onCancel = () => {},
  onSubmit = () => {},
  row = null,
  isUpdate = true,
  isLoading: isLoadingButton = false
}) => {
  const {
    handleSubmit,
    control,
    errors,
    phones,
    addPhone,
    label,
    onChange,
    renderOption,
    filterOptions,
    getOptionLabel,
    labels,
    filteredOptions,
    isOpen,
    closeModal,
    openModal,
    onSearchLabel
  } = useContactForm({
    row
  });

  return (
    <Form errors={errors}>
      <ImageUploadController name="imagen" control={control} />

      <TextFieldController
        label={INPUT_NAME}
        control={control}
        name="conName"
        rules={fieldRequired}
      />

      <Flex justify="between" gap={20}>
        <DivWidth porcentage={50}>
          <TextFieldController
            label={INPUT_LAST_NAME}
            control={control}
            name="conFirstName"
            rules={fieldRequired}
          />
        </DivWidth>
        <DivWidth porcentage={50}>
          <TextFieldController
            label={INPUT_FIRST_NAME}
            control={control}
            name="conLastName"
          />
        </DivWidth>
      </Flex>

      <Flex isWrap gap={15}>
        {phones.map((item, index) => (
          <DivWidth key={item.id} px="auto">
            <TextFieldController
              label={INPUT_PHONE}
              control={control}
              name={`contactPhones.${index}.conNumber`}
              type="phone"
              inputProps={InputPropsMaxLength(10)}
              rules={fieldPhones}
            />
          </DivWidth>
        ))}
        {phones.length < 3 ? (
          <Icon
            className="ml-2 mb-3"
            icon={AddCircleOutline}
            onClick={() => addPhone({ conNumber: '' })}
          />
        ) : null}
      </Flex>

      <DivWidth porcentage={50}>
        <TextFieldController
          label={INPUT_FAX}
          control={control}
          name="conFax"
        />
      </DivWidth>

      <DivWidth porcentage={50}>
        <TextFieldController
          label={INPUT_EMAIL}
          control={control}
          name="conEmail"
        />
      </DivWidth>

      <DivWidth porcentage={50}>
        <Flex gap={20} align="center">
          <AutocompleteMultiple
            name="conLabels"
            label={INPUT_LABEL}
            control={control}
            options={LABEL_LIST}
            rules={fieldRequired}
          />
          {labels && labels.length > 0 && (
            <LabelModal
              onSearch={onSearchLabel}
              isUpdate={isUpdate}
              labels={filteredOptions}
              isOpen={isOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}
        </Flex>
      </DivWidth>

      <DivWidth porcentage={50}>
        <SelectController
          label={INPUT_TITLE}
          control={control}
          name="title.opcgId"
          options={TITLES}
          optionId="id"
          optionName="name"
        />
      </DivWidth>

      {isUpdate ?? (
        <DivWidth porcentage={50}>
          <SelectController
            name="conStatus"
            label={STATUS}
            control={control}
            options={STATUS_LIST}
            optionId="id"
            optionName="label"
          />
        </DivWidth>
      )}

      <ButtonsFormClick
        onCancel={onCancel}
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(onSubmit)(event);
        }}
        isLoading={isLoadingButton}
      />
    </Form>
  );
};

export default ContactForm;
