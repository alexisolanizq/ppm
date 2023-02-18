import { PAGE_TITLE_OFFICES, TITLE_CLIENT } from '@Const/generals';
import { LINK_CLIENT, LINK_OFFICES_BY_AGENT } from '@Const/links';
import { useRowClientService } from '@Services/client/useClientService';
import { useAddOfficeService } from '@Services/office/useOfficeService';
import { getNameClient } from '@Utils/client';
import { useNavigate, useParams } from 'react-router';

const useOfficesAddByClient = () => {
  const { clientId } = useParams();
  const navigate = useNavigate()

  // apis
  const { data: agent, isLoading: isLoadingAgent } = useRowClientService(clientId);
  const mutation = useAddOfficeService()

  const onSubmit = async (data) => {
    const body = {
      ...data,
      ageId: agent.ageId
    }
    await mutation.mutateAsync(body)
    navigate(LINK_OFFICES_BY_AGENT(clientId))

  }

  const onCancel = () => navigate(LINK_OFFICES_BY_AGENT(clientId))

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) },
    {
      link: LINK_OFFICES_BY_AGENT(clientId),
      nombre: PAGE_TITLE_OFFICES
    }
  ];

  const isLoading = isLoadingAgent
  const isLoadingMutation = mutation.isLoading

  return {
    isLoading,
    agent,
    prevLinks,
    onCancel,
    onSubmit,
    isLoadingMutation
  }
}

export default useOfficesAddByClient