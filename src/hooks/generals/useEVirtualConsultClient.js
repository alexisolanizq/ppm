import { useParams } from 'react-router';

import { LINK_CLIENT } from '@Const/links';
import { TITLE_CLIENT } from '@Const/generals';

import { getNameClient } from '@Utils/client';

import { useRowClientService } from '@Services/client/useClientService';

const useConsultEVirtualClient = () => {
  const { clientId } = useParams();

  const { data: agent, isLoading: isLoadingAgent } =
    useRowClientService(clientId);

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  const isLoading = isLoadingAgent;

  return {
    isLoading,
    prevLinks
  };
};

export default useConsultEVirtualClient;
