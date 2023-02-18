import React from 'react';

import FormatShapesIcon from '@mui/icons-material/FormatShapes';

import Form from '@Component/common/form/Form';
import Text from '@Component/common/text/Text';
import Modal from '@Component/common/modal/Modal';
import DivWidth from '@Component/common/div/DivWidth';
import ButtonsForm from '@Component/common/button/ButtonsForm';
import IconTextAction from '@Component/common/icon/IconTextAction';
import ReactQuillEditor from '@Component/common/editor/ReactQuillEditor';
import SelectController from '@Component/common/select/SelectController';
import TreeViewComponent from '@Component/common/treeView/TreeViewComponent';
import TextFieldController from '@Component/common/textField/TextFieldController';
import MultiSelectController from '@Component/common/select/MultiSelectController';
import RadioGroupController from '@Component/common/radioGroup/RadioGroupController';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';

import { fieldRequired } from '@Const/validations';
import {
  TYPE_AGENT_ROL,
  TYPE_LIST_RECIPIENT,
  TYPE_RECIPIENT_ANNUALITY_RENEWAL
} from '@Const/lists';

import useListRecipientsForm from '@Hooks/generals/useListRecipientsForm';

const ListRecipientsForm = ({
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
    isLoading,
    isLoadingMutation,
    isOpen,
    openModal,
    onCancelVars,
    addVariable,
    editorHtml,
    handleChangeEditor,
    setReactQuillRef,
    watchTypeRecipient,
    watchProcManAct,
    watchFromTypeRecipient
  } = useListRecipientsForm({ row, isUpdate, onEnd });

  const emails = [
    { email: 'demo@email.com', name: 'demo' },
    { email: 'test@email.com', name: 'test' }
  ];

  const persons = [
    { id: 1, name: 'Andres Estevan' },
    { id: 2, name: 'Jeny Vazquez' }
  ];

  const variables = [
    {
      id: 'root',
      name: 'Parent',
      children: [
        {
          id: '1',
          name: 'Child - 1'
        },
        {
          id: '2',
          name: 'Child - 2',
          children: [
            {
              id: '3',
              name: 'Child - 3'
            }
          ]
        }
      ]
    },
    {
      id: 'root2',
      name: 'Parent Two',
      children: [
        {
          id: '4',
          name: 'Child - 4'
        },
        {
          id: '5',
          name: 'Child - 5',
          children: [
            {
              id: '6',
              name: 'Child - 7'
            }
          ]
        }
      ]
    }
  ];

  const actions = [
    { id: 1, name: 'Anualidad' },
    { id: 2, name: 'Renovacion' }
  ];

  return (
    <>
      <Form
        isLoading={isLoading}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <DivWidth porcentage={50}>
          <MultiSelectController
            control={control}
            name="rol"
            label="Rol"
            options={TYPE_AGENT_ROL}
          />
        </DivWidth>

        <Text>Tipo de destinatario</Text>

        <RadioGroupController
          control={control}
          name="typeRecipient"
          options={TYPE_LIST_RECIPIENT}
          rules={fieldRequired}
          optionValue="value"
          isHorizontal
        />

        {!watchTypeRecipient && (
          <SelectController
            name="proManAct"
            label="* Accion en la gestion de tramite"
            control={control}
            rules={fieldRequired}
            options={actions}
            optionId="id"
            optionName="name"
          />
        )}
        {[1, 2].includes(watchProcManAct) && (
          <RadioGroupController
            control={control}
            name="fromTypeRecipient"
            options={TYPE_RECIPIENT_ANNUALITY_RENEWAL}
            rules={fieldRequired}
            optionValue="value"
            isHorizontal
          />
        )}
        {watchFromTypeRecipient === 0 && (
          <>
            <SelectController
              name="client"
              label="* Cliente"
              control={control}
              rules={fieldRequired}
              options={[]}
              optionId="id"
              optionName="name"
            />
            <SelectController
              name="office"
              label="Oficina"
              control={control}
              options={[]}
              optionId="id"
              optionName="name"
            />
          </>
        )}
        {watchFromTypeRecipient === 1 && (
          <SelectController
            name="titular"
            label="* Titular"
            control={control}
            rules={fieldRequired}
            options={[]}
            optionId="id"
            optionName="name"
          />
        )}
        <AutocompleteController
          control={control}
          name="contactEmail"
          label="Correo de contacto"
          optionId="email"
          options={emails}
          placeholder="Correo"
          rules={fieldRequired}
          multiple
          filterSelectedOptions
          freeSolo
        />

        <AutocompleteController
          control={control}
          name="withCopy"
          label="Con copia"
          optionId="email"
          options={emails}
          placeholder="Correo"
          rules={fieldRequired}
          multiple
          filterSelectedOptions
          freeSolo
        />

        <DivWidth porcentage={50}>
          <MultiSelectController
            control={control}
            name="hideCopy"
            label="Copia Oculta"
            options={persons}
          />
        </DivWidth>

        <Text className="mt-4 mb-4" isBig isCenter isPrimary>
          Encabezado de correo
        </Text>

        <IconTextAction
          justify="end"
          icon={FormatShapesIcon}
          text="Agregar variable"
        />

        <TextFieldController
          name="contName"
          label="Asunto"
          control={control}
          rules={fieldRequired}
        />

        <IconTextAction
          justify="end"
          icon={FormatShapesIcon}
          text="Agregar variable"
          onClick={openModal}
        />

        <ReactQuillEditor
          onChange={handleChangeEditor}
          value={editorHtml}
          setRef={setReactQuillRef}
        />

        <DivWidth porcentage={100} className="mt-100">
          <ButtonsForm onCancel={onCancel} isLoading={isLoadingMutation} />
        </DivWidth>
      </Form>
      <Modal isShow={isOpen} onClose={onCancelVars} title="Lista de variables">
        <TreeViewComponent data={variables} onAction={addVariable} />
      </Modal>
    </>
  );
};

export default ListRecipientsForm;
