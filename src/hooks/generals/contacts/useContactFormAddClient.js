import { FILES_SOURCE_CONTACT } from '@Const/files';
import { PAGE_TITLE_CONTACT, TITLE_CLIENT } from '@Const/generals';
import { LINK_CLIENT, LINK_CONTACT_BY_AGENT } from '@Const/links';
import { useRowClientService } from '@Services/client/useClientService';
import { useAddContact } from '@Services/contact/useContactService';
import { useAddFiles } from '@Services/files/useFilesService';
import { getNameClient } from '@Utils/client';
import { useNavigate, useParams } from 'react-router'

const useContactFormAddClient = () => {
  const { clientId } = useParams()
  const navigate = useNavigate()

  // api
  const { data: agent, isLoading: isLoadingAgent } = useRowClientService(clientId);
  const addMutation = useAddContact()
  const fileMutation = useAddFiles()

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) },
    {
      link: LINK_CONTACT_BY_AGENT(clientId),
      nombre: PAGE_TITLE_CONTACT
    }
  ];

  const isLoading = isLoadingAgent

  const onSubmit = async ({imagen, ...data}) => {
    const body = data;
    const response = await addMutation.mutateAsync(body);

    if (imagen) {
      await fileMutation.onSaveFile({
        name: imagen.name,
        file: imagen,
        source: FILES_SOURCE_CONTACT,
        sourceId: response.conId
      });
    }
  };

  const onCancel = () => navigate(LINK_CONTACT_BY_AGENT(clientId))

  return {
    prevLinks,
    isLoading,
    onSubmit,
    isLoadingAdd: addMutation.isLoading,
    onCancel
  }
}

export default useContactFormAddClient