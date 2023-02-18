import { PAGE_TITLE_EMPLOYEE } from '@Const/catalogs'
import { LINK_CATALOG_EMPLOYEES } from '@Const/links'
import { useNavigate } from 'react-router'

const useEmployeesAdd = () => {
  const navigate = useNavigate()
  const onCancel = () => navigate(LINK_CATALOG_EMPLOYEES)

  const prevLinks = [{link: LINK_CATALOG_EMPLOYEES, nombre: PAGE_TITLE_EMPLOYEE}]

  return {
    prevLinks,
    onCancel
  }
}

export default useEmployeesAdd