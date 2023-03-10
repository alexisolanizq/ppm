import React from 'react';

import Form from '@Component/common/form/Form';
import Flex from '@Component/common/flex/Flex';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import SelectStatus from '@Component/common/select/SelectStatus';
import ButtonNewModal from '@Component/common/button/ButtonNewModal';
import SwitchController from '@Component/common/switch/SwitchController';
import SelectController from '@Component/common/select/SelectController';
import TextFieldController from '@Component/common/textField/TextFieldController';
import AutocompleteMultiple from '@Component/common/autocomplete/AutocompleteMultiple';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';

import {
  fieldRequired,
  fieldRequiredRegexAlphaAcents
} from '@Const/validations';

import useInvoicingConceptsForm from '@Hooks/catalogs/useInvoicingConceptsForm';

import AreasModal from '../areas/AreasModal';

const InvoicingConceptsForm = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const {
    handleSubmit,
    onSubmit,
    control,
    errors,
    watchMultiple,
    isLoading,
    isLoadingMutation,
    areas,
    typesInvoicingConcepts,
    typesInvoicingConceptsEnglish,
    conceptTypes,
    isOpenAreas,
    openModalAreas,
    closeModalAreas,
    onChangeArticleType
  } = useInvoicingConceptsForm({ row, isUpdate, onEnd });
  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DivWidth porcentage={50}>
          {isUpdate ? (
            <SelectController
              name="jobArea.id"
              label="* Area"
              control={control}
              rules={fieldRequired}
              options={areas}
              optionId="joaId"
              optionName="joaName"
              disabled
            />
          ) : (
            <AutocompleteMultiple
              name="jobAreas"
              label="* ??rea"
              control={control}
              rules={fieldRequired}
              options={areas}
              optionId="joaId"
              optionName="joaName"
              componentAdd={
                <ButtonNewModal modulo="??rea" onClick={openModalAreas} />
              }
            />
          )}
        </DivWidth>
        <TextFieldController
          name="nameSpanish"
          label="* Concepto de facturaci??n"
          control={control}
          rules={fieldRequiredRegexAlphaAcents}
        />
        <TextFieldController
          name="nameEnglish"
          label="* Concepto de facturaci??n en ingl??s"
          control={control}
          rules={fieldRequiredRegexAlphaAcents}
        />
        <TextFieldController
          name="description"
          label="* Descripci??n"
          control={control}
          rules={fieldRequiredRegexAlphaAcents}
        />
        <DivWidth porcentage={50}>
          {isUpdate ? (
            <SelectController
              name="paymentRight.id"
              label="* Derecho de pago"
              control={control}
              rules={fieldRequired}
              options={areas}
              optionId="joaId"
              optionName="joaName"
              disabled
            />
          ) : (
            <AutocompleteMultiple
              name="paymentRight"
              label="Derecho de pago"
              control={control}
              options={[]}
              optionId="joaId"
              optionName="joaName"
              componentAdd={
                <ButtonNewModal modulo="??rea" onClick={openModalAreas} />
              }
            />
          )}
          <SwitchController
            label="??M??ltiple?"
            control={control}
            name="multiple"
            width={300}
          />
        </DivWidth>
        {watchMultiple && (
          <Flex gap={24}>
            <DivWidth porcentage={50}>
              <SelectController
                name="articleTypeEsp"
                label="* Tipo de concepto de facturaci??n"
                control={control}
                rules={fieldRequired}
                options={typesInvoicingConcepts}
                optionId="idOptionCatGeneric"
                optionName="description"
                onChange={onChangeArticleType}
              />
            </DivWidth>
            <DivWidth porcentage={50}>
              <SelectController
                name="articleTypeEng"
                label="* Tipo de concepto de facturaci??n en ingl??s"
                control={control}
                rules={fieldRequired}
                options={typesInvoicingConceptsEnglish}
                optionId="idOptionCatGeneric"
                optionName="description"
                disabled
              />
            </DivWidth>
          </Flex>
        )}
        <DivWidth porcentage={50}>
          <TextFieldController
            name="nameSpanish"
            label="* Honorarios (MXN)"
            control={control}
            rules={fieldRequired}
          />
          <TextFieldController
            name="feeDollar"
            label="* Honorarios (USD)"
            control={control}
            rules={fieldRequired}
          />
          <AutocompleteController
            name="uniqKey"
            label="* Clave ??nica"
            control={control}
            options={[]}
            optionId="id"
            optionName="name"
            rules={fieldRequired}
          />
          <AutocompleteController
            name="agent"
            label="Cliente"
            control={control}
            options={[]}
            optionId="ageId"
            optionName="ageName"
          />
          <AutocompleteController
            name="holder"
            label="Titular"
            control={control}
            options={[]}
            optionId="id"
            optionName="name"
          />
          <SelectController
            name="conceptType"
            label="* Tipo de concepto"
            control={control}
            rules={fieldRequired}
            options={conceptTypes}
            optionId="idOptionCatGeneric"
            optionName="description"
          />
          <SwitchController
            label="??Se puede adelantar?"
            control={control}
            name="incoPrepayment"
            width={300}
          />
        </DivWidth>

        {isUpdate && (
          <DivWidth porcentage={50}>
            <SelectStatus control={control} name="incoStatus" />
          </DivWidth>
        )}
        <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
      </Form>
      <AreasModal
        isShow={isOpenAreas}
        onCancel={closeModalAreas}
        onEnd={closeModalAreas}
      />
    </>
  );
};

export default InvoicingConceptsForm;
