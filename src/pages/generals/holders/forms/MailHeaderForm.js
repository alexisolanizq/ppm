import React from 'react';
import { AFFAIR } from '@Const/generals';
import Form from '@Component/common/form/Form';
import Flex from '@Component/common/flex/Flex';
import { CANCEL_LABEL, MESSAGE, SAVE_LABEL } from '@Const/const';
import TextFieldController from '@Component/common/textField/TextFieldController';
import Button from '@Component/common/button/Button';

const MailHeaderForm = ({
  control,
  handleSubmit,
  handleMailHeader,
  handleMailHeaderSubmit
}) => (
    <Form onSubmit={handleSubmit(handleMailHeaderSubmit)}>
      <TextFieldController
        rows={2}
        multiline
        size="small"
        name="affair"
        label={AFFAIR}
        className="my-2"
        control={control}
        />

      <TextFieldController
        rows={5}
        multiline
        size="small"
        name="message"
        label={MESSAGE}
        className="my-2"
        control={control}
      />

      <Flex className="justify-content-evenly mt-3">
        <Button isCancel onClick={handleMailHeader}>{CANCEL_LABEL}</Button>
        <Button isSubmit >{SAVE_LABEL}</Button>
      </Flex>
    </Form>
  );

export default MailHeaderForm;
