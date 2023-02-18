import { PAGE_TITLE_CLIENT_BREADCRUNMS } from "@Const/generals"
import { LINK_CLIENT } from "@Const/links"
import { useNavigate } from "react-router"

const useClientAdd = () => {
  const navigate = useNavigate()
  const prevLinks = [
    { nombre: PAGE_TITLE_CLIENT_BREADCRUNMS, link: LINK_CLIENT }
  ]

  const onEnd = () => {
    navigate(LINK_CLIENT)
  }

  return {
    prevLinks,
    onEnd
  }
}

export default useClientAdd