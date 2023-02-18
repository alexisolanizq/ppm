import React from 'react';

import FormatShapesIcon from '@mui/icons-material/FormatShapes';

import Form from '@Component/common/form/Form';
import Text from '@Component/common/text/Text';
import Modal from '@Component/common/modal/Modal';
import DivWidth from '@Component/common/div/DivWidth';
import GeneralLayout from '@Component/layout/GeneralLayout';
// import ButtonsForm from '@Component/common/button/ButtonsForm';
import IconTextAction from '@Component/common/icon/IconTextAction';
import ReactQuillEditor from '@Component/common/editor/ReactQuillEditor';
import TextFieldController from '@Component/common/textField/TextFieldController';
import MultiSelectController from '@Component/common/select/MultiSelectController';
import AutocompleteController from '@Component/common/autocomplete/AutocompleteController';

import { fieldRequired } from '@Const/validations';
import { PAGE_LIST_RECIPIENTS } from '@Const/generals';

import useListRecipientsShow from '@Hooks/generals/useListRecipientsShow';
import useListRecipientsForm from '@Hooks/generals/useListRecipientsForm';

import ConfirmationDialog from '@Component/common/dialogs/ConfirmationDialog';
import ButtonsFormClick from '@Component/common/button/ButtonsFormClick';
import TreeViewComponent from '../../../component/common/treeView/TreeViewComponent';

const ListRecipientsShow = ({
  isUpdate = false,
  onCancel = () => {},
  onEnd = () => {},
  row = null
}) => {
  const { prevLinks } = useListRecipientsShow({ row, isUpdate });

  const {
    // handleSubmit,
    // onSubmit,
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
    isOpenDialog,
    openDialog,
    closeDialog
  } = useListRecipientsForm({ row, isUpdate, onEnd });

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

  return (
    <>
      <GeneralLayout
        title={PAGE_LIST_RECIPIENTS}
        isLoading={isLoading}
        prevLinks={prevLinks}
        isTitleFlex
      >
        <Form
          isLoading={isLoading}
          errors={errors}
          // onSubmit={handleSubmit(onSubmit)}
          isHideTextRequired
        >
          <div className="contentShowRecipient">
            <AutocompleteController
              control={control}
              name="contactEmail"
              label="Correo de contacto"
              optionId="email"
              options={[]}
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
              options={[]}
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
                options={[]}
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
              <ButtonsFormClick
                onCancel={onCancel}
                onClick={(event) => {
                  event.preventDefault();
                  openDialog();
                  // handleSubmit(onSubmit)(event);
                }}
                isLoading={isLoadingMutation}
              />
            </DivWidth>
          </div>
        </Form>
      </GeneralLayout>
      <Modal isShow={isOpen} onClose={onCancelVars} title="Lista de variables">
        <TreeViewComponent data={variables} onAction={addVariable} />
      </Modal>
      <ConfirmationDialog
        open={isOpenDialog}
        onClose={closeDialog}
        // acctionOk={toggleDefault}
      >
        <Text className="text-center" isPrimary isRegular isSpan>
          ¿Estás seguro de realizar los cambios?
        </Text>
      </ConfirmationDialog>
    </>
  );
};

export default ListRecipientsShow;
