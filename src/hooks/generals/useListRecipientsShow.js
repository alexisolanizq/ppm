import { useParams } from 'react-router';

import { useForm } from 'react-hook-form';

import { LINK_CLIENT } from '@Const/links';

import { useRowClientService } from '@Services/client/useClientService';

import useReactQuillEditor from '@Hooks/component/useReactQuillEditor';

import { TITLE_CLIENT } from '@Const/generals';
import { getNameClient } from '@Utils/client';

const DEFAULT_VALUES = {
  typeRecipient: true
};

const useListRecipientsShow = ({ row, isUpdate = false }) => {
  const { clientId } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const { quillRef, setReactQuillRef, editorHtml, setEditorHtml } =
    useReactQuillEditor();

  // api
  const { data: agent, isLoadingAgent } = useRowClientService(clientId);

  // functons
  const handleChangeEditor = (html) => {
    setEditorHtml(html);
  };

  const onSubmit = async (data) => {
    console.log('🚀 ~ onSubmit ~ data', data);

    if (isUpdate) {
      quillRef.getSelection();
    }
  };

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const isLoading = isLoadingAgent;

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    agent,
    isLoading,
    prevLinks,
    editorHtml,
    handleChangeEditor,
    setReactQuillRef
  };
};

export default useListRecipientsShow;
