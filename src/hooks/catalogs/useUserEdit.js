import { LINK_CATALOG_USER } from '@Const/links'
import { useUserRowGetService } from '@Services/user/useUserService'
import { useNavigate, useParams } from 'react-router'

const useUserEdit = () => {
  const navigate = useNavigate()
  const { userId } = useParams()

  const { data: user, isFetching: isLoading } = useUserRowGetService(userId)

  const onEnd = () => {
    navigate(-1)
  }

  const prevLinks = [
    { link: `${LINK_CATALOG_USER}/${userId}`, nombre: user?.usrName }
  ];

  return {
    user,
    isLoading,
    prevLinks,
    onEnd
  }
}

export default useUserEdit