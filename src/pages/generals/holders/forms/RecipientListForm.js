import React from 'react';
import Text from '@Component/common/text/Text';
import Flex from '@Component/common/flex/Flex';
import { CANCEL_LABEL, SAVE_LABEL } from '@Const/const';
import {
  CONTACT,
  EMAIL_CONTACT,
  WITH_COPY,
  WITH_HIDE_COPY
} from '@Const/generals';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import Form from '@Component/common/form/Form';
import Button from '@Component/common/button/Button';

const RecipientListForm = ({
  options,
  handleSubmit,
  handleRecipientList,
  control
}) => (
    <Form onSubmit={handleSubmit(handleRecipientList)}>
      <Text isBold isPrimary className="mb-2">
        {CONTACT}
      </Text>

      <AutocompleteController
        size="small"
        control={control}
        name="recipientList"
        options={options}
        label={EMAIL_CONTACT}
        placeholder="a | "
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        multiple
      />

      <Text isBold isPrimary className="mb-2">
        {WITH_COPY}
      </Text>

      <AutocompleteController
        size="small"
        control={control}
        name="copy"
        options={options}
        label={WITH_COPY}
        placeholder="a | "
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        multiple
      />

      <Text isBold isPrimary className="mb-2">
        {WITH_HIDE_COPY}
      </Text>

      <AutocompleteController
        size="small"
        control={control}
        name="hideCopy"
        options={options}
        label={WITH_HIDE_COPY}
        placeholder="a | "
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        multiple
      />

      <Flex className="justify-content-between">
        <Button isCancel onClick={handleRecipientList}>
          {CANCEL_LABEL}
        </Button>
        <Button isSubmit>{SAVE_LABEL}</Button>
      </Flex>
    </Form>
  );

export default RecipientListForm;
