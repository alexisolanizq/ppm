import { PAGE_TITLE_EMPLOYEE } from '@Const/catalogs'
import { LINK_CATALOG_EMPLOYEES } from '@Const/links'
import { useEmployeesDetailService } from '@Services/employees/useEmployeesServices'
import { getFullNameEmployee } from '@Utils/employee'
import { useNavigate, useParams } from 'react-router'

const useEmployeesEdit = () => {
  const { empId } = useParams()
  const navigate = useNavigate()

  const {data: employee, isLoading} = useEmployeesDetailService(empId)

  const onCancel = () => navigate(LINK_CATALOG_EMPLOYEES)

  const prevLinks = [
    {link: LINK_CATALOG_EMPLOYEES, nombre: PAGE_TITLE_EMPLOYEE},
    {link: `${LINK_CATALOG_EMPLOYEES}/${empId}`, nombre: getFullNameEmployee(employee)}
  ]

  return {
    onCancel,
    prevLinks,
    isLoading,
    employee
  }
}

export default useEmployeesEdit