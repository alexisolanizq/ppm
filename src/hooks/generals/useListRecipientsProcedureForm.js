import { useForm } from 'react-hook-form';

import useModal from '@Hooks/common/useModal';
import useReactQuillEditor from '@Hooks/component/useReactQuillEditor';

const DEFAULT_VALUES = {
  autStatus: true,
  typeRecipient: true,
  fromTypeRecipient: 2,
  contactEmail: [],
  withCopy: [],
  hideCopy: []
};

const useListRecipientsProcedureForm = ({ row, isUpdate = false, onEnd }) => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const { isOpen, openModal, closeModal } = useModal();
  const { quillRef, setReactQuillRef, editorHtml, setEditorHtml } =
    useReactQuillEditor();

  const [watchTypeRecipient, watchFromTypeRecipient] = watch([
    'typeRecipient',
    'fromTypeRecipient'
  ]);

  // functions
  const onCancelVars = () => {
    closeModal();
  };

  const addVariable = (value) => {
    const fieldVar = `«\${${value}}»`;
    const range = quillRef.getSelection();
    const position = range ? range.index : 0;

    quillRef.insertText(position, fieldVar);
    onCancelVars();
  };

  const handleChangeEditor = (html) => {
    setEditorHtml(html);
  };

  const onSubmit = async (data) => {
    console.log('🚀 ~ onSubmit ~ data', data);
    closeModal();

    if (isUpdate) {
      onEnd();
    }
  };

  const isLoadingMutation = false;

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoadingMutation,
    isOpen,
    openModal,
    onCancelVars,
    addVariable,
    editorHtml,
    handleChangeEditor,
    setReactQuillRef,
    watchTypeRecipient,
    watchFromTypeRecipient
  };
};

export default useListRecipientsProcedureForm;
