import { TITLE_CLIENT } from '@Const/generals'
import { LINK_CLIENT } from '@Const/links'
import { useRowClientService } from '@Services/client/useClientService'
import { getNameClient } from '@Utils/client'
import { useNavigate, useParams } from 'react-router'

const useClientEdit = () => {
  const navigate = useNavigate()
  const { clientId } = useParams()

  const { data: agent, isLoading } = useRowClientService(clientId)

  const onEnd = () => {
    navigate(`${LINK_CLIENT}/${clientId}`)
  }

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) }
  ];

  return {
    agent,
    isLoading,
    prevLinks,
    onEnd
  }
}

export default useClientEdit