import React from 'react';
import Text from '@Component/common/text/Text';
import Flex from '@Component/common/flex/Flex';
import Form from '@Component/common/form/Form';
import { AddCircle } from '@mui/icons-material';
import { CANCEL_LABEL, FIELDS_REQUIRED, SAVE_LABEL } from '@Const/const';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';
import Button from '@Component/common/button/Button';
import { INPUT_CLIENT_NAME } from '@Const/formsFields';

const AssociatedAgentsForm = ({
  control,
  contacts,
  handleSubmit,
  handleAssociatedAgents,
  handleAssociatedAgentsSubmit
}) => (
    <Form onSubmit={handleSubmit(handleAssociatedAgentsSubmit)}>
      <Text className="text-danger mb-3">{FIELDS_REQUIRED}</Text>
      <Flex gap={10} className="mt-4 pb-4">
        <AutocompleteController
          name="associatedAgents"
          control={control}
          options={contacts}
          label={INPUT_CLIENT_NAME}
          size="small"
        />
        <Button isBorderPrimary>
          <AddCircle sx={{ color: '#005953' }} />
        </Button>
      </Flex>

      <Flex className="justify-content-evenly">
        <Button isCancel onClick={handleAssociatedAgents}>
          {CANCEL_LABEL}
        </Button>
        <Button isSubmit>{SAVE_LABEL}</Button>
      </Flex>
    </Form>
  );

export default AssociatedAgentsForm;
